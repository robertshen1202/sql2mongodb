import Head from "next/head";
import clientPromise from "../lib/mongodb";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type ConnectionStatus = {
  isConnected: boolean;
};

export async function getServerSideProps() {
  // MongoDB connection URI
  const uri = 'mongodb://localhost:27017';

  // Create a new MongoClient
  const { MongoClient } = require('mongodb');
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Get the list of databases
    const adminDb = client.db('admin');
    const databases = await adminDb.admin().listDatabases();

    // Loop through each database
    const databaseNames = databases.databases.map(dbInfo => dbInfo.name);

    // Get the list of collections for each database
    const collectionsByDatabase = [];
    for (const dbName of databaseNames) {
      const db = client.db(dbName);
      const collections = await db.listCollections().toArray();
      const collectionNames = collections.map(collection => collection.name);
      collectionsByDatabase.push({ name: dbName, collections: collectionNames });
    }

    return {
      props: {
        databases: collectionsByDatabase, 
        isConnected: true 
      }
    };
  } catch (err) {
    console.error('Error:', err);
    return {
      props: {
        databases: []
      }
    };
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log('Disconnected from MongoDB server');
  }
}

export default function Home({
  isConnected,
  databases,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // force connected or disconnected page
  // isConnected = true;

  // main page content
  if (isConnected) {
    return (
      <div className="container">
        <Head>
          <title>Web SQL Editor</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <h1>
            MongoDB Connected
          </h1>
            <ul>
              {databases.map(db => (
                <li key={db.name}>
                  {db.name}
                  <ul>
                    {db.collections.map(collection => (
                      <li key={collection}>{collection}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
        </main>
  
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
  
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    ); 
  } else {
    return (
      <h2 className="subtitle">
        You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
        for instructions.
      </h2>
    );
  }
}