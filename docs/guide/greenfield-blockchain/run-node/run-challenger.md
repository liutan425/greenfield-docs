---
title: Run Challenger
order: 6
---

## Prerequisites

### Recommended Hardware

The following lists the recommended hardware requirements:
- Hardware Requirements: Desktop or laptop hardware running recent versions of Mac OS X, or Linux.
- CPU: 4 cores
- RAM: 4 GB
- Relational database: Mysql

### Key Preparation
- Challenger private key: Used to sign and approve transactions.
- Bls private key: Used to aggregate votes.

These two keys refer to `validator_challenger` and `validator_bls` created in [become-validator](../run-node/become-validator.md) step 2.

You can retrieve them with the following commands.
```bash
gnfd keys export validator_challenger --unarmored-hex --unsafe --keyring-backend test

gnfd keys export validator_bls --unarmored-hex --unsafe --keyring-backend test
```

## Prepare Binary

Get the greenfield-challenger app by running the following command in your terminal:

```bash
git clone --branch "$(curl -s https://api.github.com/repos/bnb-chain/greenfield-challenger/releases/latest  | jq -r '.tag_name')" https://github.com/bnb-chain/greenfield-challenger.git
cd greenfield-challenger
```

## Config

Modify `config/config.json`. Or, you can create a new one and specify the config path by `--config-path` flag when start the challenger.

:::info
See [testnet values](https://github.com/bnb-chain/bnb-chain-charts/blob/master/gnfd-challenger-testnet-values/values.yaml#L4). Reference for a complete testnet config file
:::

1. Set your private key and bls key (via file or aws secret).

   ```
     "greenfield_config": {
       "key_type": "local_private_key" or "aws_private_key" depending on whether you are storing the keys on aws or locally in this json file
       "aws_region": set this if you chose "aws_private_key"
       "aws_secret_name": set this if you chose "aws_private_key"
       "aws_bls_secret_name": set this if you chose "aws_private_key"
       "private_key": set this if you chose "local_private_key"
       "bls_private_key": set this if you chose "local_private_key" 
        ...
     }
   ```
   
Note:
The `private_key` and `bls_private_key` refer to the keys `validator_challenger` and `validator_bls` created in [become-validator](../run-node/become-validator.md) step 2.
Follow the below instruction to export keys. Make sure `private_key` has balance on Greenfield blockchain before running the challenger, the `bls_private_key` does not need to have balance.

```bash
validator_challenger=$(gnfd keys export validator_challenger --unarmored-hex --unsafe --keyring-backend test)
validator_bls=$(gnfd keys export validator_bls --unarmored-hex --unsafe --keyring-backend test)
```

2. Config your database settings.

   ```
   "db_config": {
     "dialect": "mysql",
     "db_path": "your_db_path"
     "key_type": "local_private_key" or "aws_private_key" depending on whether you are storing the keys on aws or locally in this json file
     "aws_region": set this if you chose "aws_private_key"
     "aws_secret_name": set this if you chose "aws_private_key"
     "username": set this if you chose "local_private_key"
     "password": set this if you chose "local_private_key"
     ...
   }
   ```


### Build

Build binary:

```shell script
make build
```

Build docker image:

```shell script
make build_docker
```

### Run

#### Run MySQL in Docker(this can be skipped if you are using sqlite)

```shell
docker run --name gnfd-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
```

#### Create Schema

Create schema in MySQL client:

```shell
CREATE SCHEMA IF NOT EXISTS `challenger` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```

#### Update Config

Update keys and db config in `config.json` file.

#### Start Challenger

```shell script
./build/greenfield-challenger --config-type [local or aws] --config-path config_file_path  --aws-region [aws region or omit] --aws-secret-key [aws secret key for config or omit]
```

Example:
```shell script
./build/greenfield-challenger --config-type local --config-path config/config.json
```

Run docker:
```shell script
docker run -it -v /your/data/path:/greenfield-challenger -e CONFIG_TYPE="local" -e CONFIG_FILE_PATH=/your/config/file/path/in/container -d greenfield-challenger
```


## Deployment in Kubernetes

These are the steps to deploy the greenfield challenger using Helm Chart V3.

We run these commands first to get the chart and test the installation.

```console
helm repo add bnb-chain https://chart.bnbchain.world/
helm repo update
helm show values bnb-chain/gnfd-challenger-testnet-values > testnet-challenger-values.yaml
helm install greenfield-challenger bnb-chain/gnfd-challenger -f testnet-challenger-values.yaml -n NAMESPACE --debug --dry-run
```

If dry-run runs successfully, we install the chart:

```
helm install greenfield-challenger bnb-chain/gnfd-challenger -f testnet-challenger-values.yaml -n NAMESPACE
```

### Common Operations

Get the pods lists by running this commands:

```console
kubectl get pods -n NAMESPACE
```
See the version history of challenger with command.

```console
helm history greenfield-challenger -n NAMESPACE
```

## How to uninstall

Remove application with command.

```console
helm uninstall greenfield-challenger -n NAMESPACE
```

## Parameters

The following tables lists the configurable parameters of the chart and their default values.

You **must** change the values according to the your aws environment parameters in 
`greenfield-challenger/testnet-values.yaml` file.

1. In `greenfield-config`, change: `private_key` and `bls_private_key`.

2. In `db_config`, change: `password`, `username`, `url`.
