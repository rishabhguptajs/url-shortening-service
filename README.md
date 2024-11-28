# URL Shortening Service

This project is a URL shortening service that allows users to convert long URLs into shorter, more manageable links. It is built using Node.js, Express, and MongoDB.

## Features

- Shorten long URLs
- Redirect to the original URL when the short URL is accessed
- Check if a URL already exists in the database
- Rate limiting to prevent abuse

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- A `.env` file with the following variables:
  - `MONGO_URI`: Your MongoDB connection string
  - `PORT`: The port on which the server will run (default is 8080)
  - `BASE_SERVER_URL`: The base URL for the API (default is `http://localhost:8080/api/url`)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Usage

1. Create a `.env` file in the root directory and add your MongoDB connection string and other environment variables.
2. Start the server:
   ```bash
   npm start
   ```
3. Use the following endpoints:
   - **POST** `/api/url/shorten`: To shorten a long URL. Send a JSON body with the key `longURL`.
   - **GET** `/api/url/:shortUrl`: To redirect to the original URL using the short URL.

### Example

To shorten a URL, send a POST request to `/api/url/shorten` with the following body:

```json
{
  "longURL": "https://www.example.com"
}
```

The response will contain the shortened URL:

```json
{
    "longURL": "https://www.example.com",
  "shortURL": "http://localhost:8080/api/url/abc123",
  "message": "URL shortened successfully"
}
```

To access the original URL, navigate to `http://localhost:8080/api/url/abc123`.

# Thanks for reading!