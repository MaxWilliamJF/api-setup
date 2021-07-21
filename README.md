# API - Blogposts API
### Node JS API CRUD with simple tokem authentication

In order to run this project locally, all you need to do is run:
 
´´´docker-compose up´´´

This should be all, but it's not. Yet.
For now, it is also needed:

1 -  ´´´yarn install´´´
2 - ´´´yarn sequelize db:migrate´´´
3 - ´´´yarn sequelize db:seed:all´´´
4 - ´´´yarn start.dev´´´

(These commands up here could be together...)

To run tests, type the or paste the following:

´´´yarn test´´´
or 
´´´npm test´´´