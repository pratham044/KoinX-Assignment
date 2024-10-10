# KoinX Assignment

This project is developed as part of an assignment to create a server-side application using Node.js and MongoDB. The application fetches cryptocurrency data from the CoinGecko API and stores it in a MongoDB database. 

## Project Structure

The directory structure of the project is as follows:


- **controllers**: Contains the controller files that handle API requests for each task.
- **index.js**: The entry point of the application where the server is configured and started.
- **db.js**: Establishes the connection to the MongoDB database.
- **cryptoPrice.model.js**: Defines the Mongoose schema for the `CryptoPrice` collection.
- **fetchData.js**: Contains the logic to fetch cryptocurrency data from the CoinGecko API.
- **scheduleJob.js**: Implements the background job that fetches cryptocurrency data at regular intervals.
- **routes.js**: Defines the API routes for the application.

