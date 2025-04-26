# Node_JS_Task

## 📌 Project Overview
Node_JS_Task is a **Node.js backend application** that provides a set of **CRUD APIs** connected to a **MongoDB** database.  
It is designed to create, read, update, and delete user data easily.

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Language**: JavaScript

---

## 🚀 Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/coders2345/Node_JS_Task.git
   cd Node_JS_Task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root folder:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   Server will run at: `http://localhost:5000/`

---

## 🔗 API Endpoints

| Method | Route              | Description                  |
|:------:|:------------------:|:-----------------------------:|
| POST   | `/api/create`       | Create a new user record      |
| GET    | `/api/getAll`       | Fetch all user records        |
| GET    | `/api/get/:id`      | Fetch a user by ID            |
| PUT    | `/api/update/:id`   | Update a user by ID           |
| DELETE | `/api/delete/:id`   | Delete a user by ID           |

---

## 📂 Project Structure

```bash
Node_JS_Task/
├── config/
│   └── db.js               # MongoDB connection setup
├── controllers/
│   └── crudController.js   # Controller logic for CRUD operations
├── models/
│   └── dataModel.js         # Mongoose schema
├── routes/
│   └── crudRoutes.js        # API Routes
├── server.js                # Main server file
├── package.json             # Node dependencies
└── README.md                # Project documentation
```

---

## 📚 Database Schema Example

```javascript
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
}, { timestamps: true });

module.exports = mongoose.model('Data', DataSchema);
```

- **Collection Name**: `Data`
- **Fields**:
  - `name` (String)
  - `email` (String)
  - `age` (Number)
  - `createdAt`, `updatedAt` (timestamps)

---

## 📬 Sample API Usage (Postman / cURL)

### Create a User
```bash
POST http://localhost:5000/api/create
Body (JSON):
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

### Get All Users
```bash
GET http://localhost:5000/api/getAll
```

### Get a User by ID
```bash
GET http://localhost:5000/api/get/<id>
```

### Update a User by ID
```bash
PUT http://localhost:5000/api/update/<id>
Body (JSON):
{
  "name": "Jane Doe",
  "age": 26
}
```

### Delete a User by ID
```bash
DELETE http://localhost:5000/api/delete/<id>
```

---

## 🧹 Future Improvements

- Input validation using `express-validator`
- API documentation with Swagger
- Authentication (JWT-based)
- Error handling improvements
- Pagination for data fetching

---

## 👨‍💻 Author

**Mabasha R**  
- GitHub: [@coders2345](https://github.com/coders2345)
- LinkedIn: [Mabasha R](https://linkedin.com/in/mabasha-r)

---

# 📌 License
This project is licensed under the [MIT License](LICENSE).
