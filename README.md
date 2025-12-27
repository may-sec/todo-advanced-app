
# 📝 Todo Advanced App

A simple **full-stack Todo application** built with **React, Express, MongoDB, Zod, and Mongoose**.
(Pics uploaded below)

---

## 🚀 Features

- Create a new todo
- View existing todos
- Mark a todo as completed

---

## 🧱 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Zod (for validation)
- CORS
- JSON Web Token (planned)
- GitHub for version control

### Frontend
- React
- Vite

---

## 📁 Project Structure

```bash

root/
├── backend/
│   ├── db.js
│   ├── types.js
│   ├── index.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   └── package.json
│
└── README.md

````

---

## ⚙️ Backend Setup

### Initialize Node project
```bash
cd backend
npm init -y
````

### Install dependencies

```bash
npm install express cors mongoose zod jsonwebtoken dotenv
```

### Backend files

* `index.js` → Express server
* `db.js` → MongoDB & Mongoose setup
* `types.js` → Zod validation schemas

### Environment variables

Create a `.env` file inside `backend/`:

```env
MONGODB_URI=your_mongodb_connection_string
```

### Run backend

```bash
node index.js
```

---

## 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Components

1. Create Todo
2. Render Todos

---

## 🐞 Known Issues / TODOs

* Infinite requests while fetching todos
* Update todo not implemented yet

---

## 🔮 Future Improvements

* Authentication using JWT
* Update and delete todo
* Better error handling
* UI improvements

---

## 📦 Deployment

* Backend: Render / Railway
* Frontend: Vercel

---

## ⭐ Notes

This project is built for learning and understanding **full-stack development** using **React and MongoDB**.


## Pics

### 01_frontend_run
<img alt="image" src="https://github.com/may-sec/todo-advanced-app/blob/main/pics/01_frontend_run.png" />

### 02_backend_run
<img alt="image" src="https://github.com/may-sec/todo-advanced-app/blob/main/pics/02_backend_run.png" />

### 03_mongo_before
<img alt="image" src="https://github.com/may-sec/todo-advanced-app/blob/main/pics/03_mongo_before.png" />

### 04_postman_before
<img alt="image" src="https://github.com/may-sec/todo-advanced-app/blob/main/pics/04_postman_before.png" />

### 05_site_before
<img alt="image" src="https://github.com/may-sec/todo-advanced-app/blob/main/pics/05_site_before.png" />

### 06_site_updating
<img alt="image" src="https://github.com/may-sec/todo-advanced-app/blob/main/pics/06_site_updating.png" />

### 07_alert_generated
<img alt="image" src="https://github.com/may-sec/todo-advanced-app/blob/main/pics/07_alert_generated.png" />

### 08_site_updated
<img alt="image" src="https://github.com/may-sec/todo-advanced-app/blob/main/pics/08_site_updated.png" />

### 09_mongo_after
<img alt="image" src="https://github.com/may-sec/todo-advanced-app/blob/main/pics/09_mongo_after.png" />

### 10_postman_after
<img alt="image" src="https://github.com/may-sec/todo-advanced-app/blob/main/pics/10_postman_after.png" />

