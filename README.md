# My API – Express.js REST API

A lightweight REST API built with Node.js and Express.js, developed as a foundation for extracting, organising, and analysing SAPS (South African Police Service) crime statistics data.

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js

---

## Project Structure

my-api/
├── index.js        # Main server file
└── package.json    # Node.js project config

---

## Getting Started

### 1. Clone the repository

git clone https://github.com/Khanyatheone/my-api.git
cd my-api

### 2. Install dependencies

npm install

### 3. Run the server

node index.js

Server runs on http://localhost:3000

---

## API Endpoints

| Method | Endpoint     | Description                        |
|--------|--------------|------------------------------------|
| GET    | /            | Check if the API is running        |
| GET    | /api/hello   | Returns a hello message            |
| POST   | /api/data    | Receives JSON data and returns it  |

---

## Testing the API

### GET Request

curl http://localhost:3000/api/hello

Response:
{ "message": "Hello from your API 👋" }

### POST Request (PowerShell)

Invoke-RestMethod -Method POST -Uri http://localhost:3000/api/data -Body '{ "name": "Khanya", "goal": "Build APIs" }' -ContentType "application/json"

Response:
{
  "status": "success",
  "receivedData": {
    "name": "Khanya",
    "goal": "Build APIs"
  }
}

---

## Key Notes

- The server must be running in one terminal before sending requests.
- Open a separate terminal to send GET or POST requests.
- Invoke-RestMethod is the PowerShell equivalent of curl for POST requests.

---

## Author

Khanya Michael-Angelo Sathekge
📍 Gauteng, South Africa
🔗 GitHub: https://github.com/Khanyatheone
