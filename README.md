# Web SQL Editor

This is a demo project for a web-based sql editor for MongoDB. The APP can perform basic SQL parsing into MongoDB instructure. The follow sql keywords are supported: 
1. SELECT
2. FROM
3. JOIN
4. WHERE
5. INSERT
6. DROP

Developed using Node.js v18.20.2 with Next.js MongoDB Example on Ubuntu 22.04.4 LTS

```bash
npx create-next-app --example with-mongodb web-sql-editor
```

## prerequisite

1. Node.js v14+: developed with node v18.20.2
2. Mongo DB: developed with v7.0.8

### install Node.js

Recommend to install using Node Version Manager, [Instruction](https://github.com/nvm-sh/nvm) on their github page! 

### install MongoBD

1. local deployment: [Offical documentation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/) for deploying MongoDB locally using docker
2. cloud deployment: [Offical getting started](https://www.mongodb.com/docs/atlas/getting-started/) page for MongoDB Atlas

## Configuration

### Connect to a MongoDB database

Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string. 
  - local connection: `mongodb://127.0.0.1:27017`
  - cloud connection: If you are using [MongoDB Atlas](https://mongodb.com/atlas) you can find this by clicking the "Connect" button for your cluster.

## Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

You will either see a message stating "You are connected to MongoDB" or "You are NOT connected to MongoDB". Ensure that you have provided the correct `MONGODB_URI` environment variable.

When you are successfully connected, you can refer to the [MongoDB Node.js Driver docs](https://mongodb.github.io/node-mongodb-native/3.4/tutorials/collections/) for further instructions on how to query your database.