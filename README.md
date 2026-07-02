# 🏡 StayNest Clone

A full-stack StayNest (Airbnb-inspired) web application built with **Node.js**, **Express.js**, **MongoDB**, **EJS**, **Bootstrap**, **Cloudinary**, and **Passport.js**.

StayNest allows users to explore unique stays, create property listings, upload property images, write reviews, and securely manage their listings.

---

## 📸 Features

- 🔐 User Authentication (Signup, Login & Logout)
- 🏠 Create New Listings
- ✏️ Edit Listings
- 🗑️ Delete Listings
- ☁️ Upload Images using Cloudinary
- 🔍 Search Listings by Title, Location & Country
- ⭐ Add Ratings & Reviews
- 👤 Authorization (Only Owner can Edit/Delete)
- 💬 Flash Messages
- 📍 Google Maps Location Preview
- 📱 Responsive Bootstrap Design

---

## 🛠 Tech Stack

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- EJS
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- Passport.js
- Passport Local
- Express Session

### Image Storage

- Cloudinary
- Multer
- Multer Storage Cloudinary

---

## 📂 Folder Structure

```
StayNest/
│
├── controllers/
├── models/
├── routes/
├── views/
│   ├── layouts/
│   ├── includes/
│   ├── listings/
│   └── users/
│
├── public/
│   ├── CSS/
│   ├── JS/
│   └── images/
│
├── utils/
├── middleware.js
├── schema.js
├── cloudConfig.js
├── app.js
├── package.json
└── README.md
```

---

## ⚙ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/StayNest.git
```

### Navigate to Project

```bash
cd StayNest
```

### Install Dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a **.env** file inside the project root.

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_API_SECRET=your_cloudinary_api_secret
```

---

## ▶️ Run the Project

### Development Mode

```bash
nodemon app.js
```

### Production Mode

```bash
node app.js
```

Visit

```
http://localhost:8080
```

---

## 📦 NPM Packages

- express
- mongoose
- ejs
- ejs-mate
- dotenv
- joi
- multer
- cloudinary
- multer-storage-cloudinary
- passport
- passport-local
- passport-local-mongoose
- express-session
- connect-flash
- connect-mongo
- method-override

---

## 🌐 Routes

### Listings

| Method | Route |
|---------|-------|
| GET | /listings |
| GET | /listings/new |
| POST | /listings |
| GET | /listings/:id |
| GET | /listings/:id/edit |
| PUT | /listings/:id |
| DELETE | /listings/:id |

---

### Reviews

| Method | Route |
|---------|-------|
| POST | /listings/:id/reviews |
| DELETE | /listings/:id/reviews/:reviewId |

---

### Users

| Method | Route |
|---------|-------|
| GET | /signup |
| POST | /signup |
| GET | /login |
| POST | /login |
| GET | /logout |

---

## 🔍 Search Functionality

Users can search listings using:

- Title
- Location
- Country

Example Searches

- Goa
- Delhi
- Jaipur
- Mumbai
- Kerala
- Manali

---

## ☁️ Image Upload

Property images are uploaded using **Cloudinary** and stored securely in the cloud using **Multer Storage Cloudinary**.

---

## 🔐 Authentication & Authorization

### Authentication

- User Signup
- User Login
- User Logout

### Authorization

- Only the listing owner can edit or delete a listing.
- Only the review author can delete their review.

---



## 👨‍💻 Author

**Ayush Kumar**

GitHub: 

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub.

Happy Coding! 🚀
