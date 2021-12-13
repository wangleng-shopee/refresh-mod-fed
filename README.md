# Module Federation with Webpack 5 in React

This repo uses Webpack5 Module Federation plugin to build a React microfrontend

## Get started

```shell
# run at root directory
yarn
yarn start
```

Host runs at http://localhost:3000
Remote1 runs at http://localhost:3001

Visiting http://localhost:3000 causes the following error:
> Shared module is not available for eager consumption: webpack/sharing/consume/default/react-refresh/runtime/react-refresh/runtime

## How it works

Host is the shell app which imports Remote1. Host is hosted on port 3000.

Remote1 is hosted port 3001 and exposes 2 components Heading and Button.

The exposed components are used in Host.
