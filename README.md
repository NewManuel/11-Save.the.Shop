# S.O.S (Object-Relational Mapping (ORM): E-Commerce Back End)

## PURPOSE

Internet retail, also known as **e-commerce**, is the life blood of the internet in the sense that our lives as human beings rely on trade (the buying and selling of things). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes, and this application is ceated to support this via the back-end of a website. Configureing a working Express.js API to use Sequelize to interact with a MySQL database.

## User Story

```md
AS A manager at an internet retail company
YOU WANT a back end for your e-commerce website that uses the latest technologies
SO THAT your company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN YOU add your database name, MyrSQL username, and MySQL password to an environment variable file
THEN YOU am able to connect to a database using Sequelize
WHEN YOU enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN YOU enter the command to invoke the application
THEN your server is started and the Sequelize models are synced to the MySQL database
WHEN YOU open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN YOU test API POST, PUT, and DELETE routes in Insomnia
THEN YOU am able to successfully create, update, and delete data in your database
```

## Gif

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia.

## Contributors 

```
Google, ChatGpt, and Morzilla.
```
### License

>Text

### Video

* Link:

## Url

* A walkthrough video demonstrating the functionality of the application:

* The URL of the GitHub repository: https://github.com/NewManuel/11-S.O.S
