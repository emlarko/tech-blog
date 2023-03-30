# Model-View-Controller (MVC): Tech Blog

## Description

The aim of this project was to create a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.

## Installation

Clone the project onto your machine, then run the following commands to create the schema from the MySQL shell.

```
mysql -u root -p
<enter your MySql password>

source db/schema.sql

exit
```

Run the following line of code in your terminal to install the needed packages:

```
npm i
```

Enter your details into a .env file:

```
DB_NAME='blog_db'
DB_USER='<your MySql username'
DB_PASSWORD='<your MySql password>'
```

Seed the database by running the following command:

```
node seeds/index.js
```

## Usage 

Once the above instructions have been followed, run the following line of code in your terminal:

```
npm start
```

When visiting the site, the user will be able to view blog posts and comments, including the date they were posted and by which user.

When the user tried to access the dashboard to make a new post, they will be prompted to create an account or sign up. 

If the user has an account, when they sign in, they will be able to visit the dashboard and create/delete blog posts. 

When signed in, the user will also be able to leave comments on other user's posts. 

![screenshot](public/images/tech_blog.png?raw=true "screenshot")