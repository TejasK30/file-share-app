# FileShare App
inShare is a simple file-sharing web application built with Node.js, Express, Multer, and Mongoose. Users can easily upload files and share the generated link with others to allow them to download the files.

## Features
- **File Upload**: Users can upload files of various types and sizes.
- **Shareable Links**: Each uploaded file is associated with a unique link that can be shared with others for easy download.
- **MongoDB Integration**: Files and their associated metadata are stored in a MongoDB database using Mongoose.

## Prerequisites
Make sure you have the following installed before running the application:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started
1. Clone the repository:

   ```bash
   git clone https://github.com/TejasK30/file-share-app.git
   ```

2. Change into the project directory:

   ```bash
   cd file-share-app
   ```

3. Install dependencies:

   ```bash
   yarn
   ```

4. Create a `.env` file in the root directory and configure it with your MongoDB connection string:

   ```env
   MONGO_URL = 'mongodb://localhost:27017/file-share-app'
   APP_BASE_URL = 'http://localhost:3000'
   ```

5. Start the application:

   ```bash
   yarn dev
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open your web browser and go to [http://localhost:3000](http://localhost:3000).
2. Click on the "Upload File" button and select the file you want to upload.
3. After the upload is complete, a unique link will be generated for the file.
4. Share the link with others to allow them to download the file.

## Dependencies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Mongoose](https://mongoosejs.com/)
