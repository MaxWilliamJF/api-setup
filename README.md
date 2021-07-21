# API - Blogposts API
### Node JS API CRUD with simple tokem authentication

In order to run this project locally, all you need to do is run:
 
```docker-compose up```

This should be all, but it's not. Yet.
For now, it is also needed:

```js
yarn isntall
yarn sequelize db:migrate
yarn sequelize db:seed:all
yarn start.dev
```

(These commands up here could be together...)

To run tests, type the or paste the following:

```
yarn test
npm test
```
