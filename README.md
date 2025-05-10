# Sales-Data-Processing-and-Analytics-API

This project loads sales data from a CSV file into a normalized MySQL database, supports scheduled and manual data refresh, and provides RESTful APIs for performing revenue analysis.

---

## 🚀 Prerequisites

| Tool           | Version        | Notes                        |
|----------------|----------------|------------------------------|
| **Node.js**    | >= 16.x        | Required for server & script |
| **npm**        | >= 8.x         | Comes with Node.js           |
| **MySQL**      | >= 8.x         | Make sure it's running       |

---

## 📦 Setup Instructions

1. **Clone the repository**

git clone https://github.com/sanjevkumar961/Sales-Data-Processing-and-Analytics-API.git
cd Sales-Data-Processing-and-Analytics-API


2. **Install dependencies**

npm run start-local


3. **Configure environment**

Create a .env file in the root directory and add:

DB_USER=your_username
DB_PASSWORD=your_password
DB_PORT=3306
DB_USER=root
DB_NAME=sales_db
DB_DIALECT=mysql
DB_TIMEZONE=+00:00


4. **Prepare MySQL database**

Ensure your MySQL instance is running and the database is created:

CREATE DATABASE your_db_name;


5. **Load initial data from CSV**

node load-csv.js


6. **Start the API Server**

npm run start-local


## API Documentation

|Endpoint	            |Method |Body  |Sample Response	                      |Description                        |
|-----------------------|-------|------|--------------------------------------|-----------------------------------|
|/api/refresh           |POST   |none  |{ "message": "CSV import complete." } |Manually trigger CSV data refresh  |
|-----------------------|-------|------|--------------------------------------|-----------------------------------|
|/api/revenue/          |GET    |none  |{ "totalRevenue": 12345.67 }          |Get total revenue for a date range |
|total?start=YYYY-MM-DD |       |      |                                      |                                   |
|&end=YYYY-MM-DD        |       |      |                                      |                                   |
|-----------------------|-------|------|--------------------------------------|-----------------------------------|


## Testing

To test your APIs, use a REST client like Postman or cURL. Example:

curl http://localhost:3000/api/revenue/total?start=2023-01-01&end=2023-12-31


## Project Structure

.
├── models/           # Sequelize models
├── routes/           # API route handlers
├── controllers/      # Business logic
├── utils/            # Logger function
├── load-csv.js       # CSV loader script
├── refresh-job.js    # Daily cron job
├── app.js            # Express app
├── .env              # Environment config
└── README.md         # This file


## Notes

The system avoids duplicate order entries by checking Order ID before inserting.
Scheduled jobs run daily at 1 AM server time using node-cron.
Logs are saved using a custom logger in the logs/ folder (you can configure this).