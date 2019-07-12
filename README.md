[![Build Status](https://dev.azure.com/reddyhorcrux/Rapidobuild.com/_apis/build/status/virtuelabs-io.rapido-build-cart-service?branchName=master)](https://dev.azure.com/reddyhorcrux/Rapidobuild.com/_build/latest?definitionId=16&branchName=master)
# Cart Service

Service responsible for all cart data

## API's Available

- **Cart Item(s)**
  - GET
  - POST
  - PUT
  - DELETE

# Build and deploy 

Create the domain if it dosent exist. This is a one-off command which need to run

```sh
# To create
serverless create_domain --profile <profile name>
# To remove
serverless delete_domain --profile <profile name>
```

Deploy it on `AWS`

```sh
# To deploy
serverless deploy --stage staging --profile <profile name>
# To delete
serverless remove --stage staging --profile <profile name>
```

> **Note**: Authenticated with Cognito
