# YouTube Clone

A full-stack YouTube-like web application where users can watch videos, create channels, upload videos, and engage with content through comments. This project showcases a modern web development stack and features a responsive, interactive UI.

---

## Video Preview Link

https://drive.google.com/file/d/1pN8AagVjU1vWpW1QGEmp9Sx0mxrTzhI0/view?usp=sharing


## 🚀 Features

### 🌐 Backend
- **Built with**: Node.js, Express.js, MongoDB.
- **Authentication**: JSON Web Tokens (JWT) for secure user login and registration.
- **Video Management**: 
  - Videos are uploaded and managed using Cloudinary for storage and optimization.
  - Multer middleware for file verification.
- **RESTful APIs**: Backend APIs for user, channel, video, and comment management.

### 🖥️ Frontend
- **Built with**: React.js, TypeScript, Tailwind CSS.
- **Responsive Design**: Fully responsive UI for seamless experience across devices.
- **State Management**: Redux for global state management.
- **Dynamic Functionality**:
  - Users can browse and watch videos on the homepage.
  - Signed-in users can:
    - Create a channel.
    - Upload, edit, and delete videos on their channel.
    - Edit and delete their channel.
    - Add comments to any video.

---

## 🛠️ Technology Stack

### Backend
- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database for data storage.
- **Cloudinary**: Media storage and optimization.
- **Multer**: Middleware for handling file uploads.
- **JWT**: Authentication and authorization.

### Frontend
- **React.js**: JavaScript library for building the UI.
- **TypeScript**: Ensuring type safety in the frontend.
- **Tailwind CSS**: Modern utility-first CSS framework.
- **Redux**: Managing application state effectively.

---

## ⚙️ Installation

### Prerequisites
- Node.js and npm installed.
- MongoDB installed and running.
- Cloudinary account for managing media uploads.

### Clone the Repository
```bash
git clone https://github.com/aadarshraj02/youtube-clone
cd youtube-clone

Backend Setup
cd server
npm install
Create a .env file for environment variables:
PORT=5000
MONGO_URI=your-mongodb-uri
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
JWT_SECRET=your-jwt-secret
npm start

Frontend Setup
cd client
npm install
npm run dev
```

🖥️ How It Works
Home Page:

Users can browse and watch videos.
Sign Up / Sign In:

Users must create an account and sign in to access additional features.
Create a Channel:

Signed-in users can create a personalized channel.
Upload Videos:

Users can upload videos to their channel. Videos are stored on Cloudinary.
Manage Content:

Users can edit or delete their channel and uploaded videos.
Comments:

Signed-in users can add comments to any video.
