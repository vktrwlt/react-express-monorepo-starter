# A Simple Full-stack React Express Monorepo

# Development

1. ##### Install packages
   `yarn install`
2. ##### Run React client and Express server in parallel
   `yarn start`
   #####
3. View client on `http://localhost:3000`

# Installing domain specific packages

`yarn workspace <server|client> <package name>`

`node_modules` are hoisted to the root directory for cross-sharing of depedencies between domain.