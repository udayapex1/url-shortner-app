# 🔗 URL Shortener App

A simple and efficient URL Shortener application that converts long URLs into short, shareable links.  
Built for speed, ease of use, and scalability.

---

## 🚀 Live Demo
https://url-shortner-app-self.vercel.app/

---

## 📌 Features
- Shorten any valid URL instantly
- Redirect to original link on visit
- Copy shortened link with one click
- Minimal and responsive UI
- Backend API for programmatic shortening
- Error handling for invalid URLs

---

## 🛠 Tech Stack

**Frontend**  
- React.js
- Tailwind CSS (Styling)  

**Backend**  
- Node.js  
- Express.js  
- MongoDB (Database)  

**Other Tools & Libraries**  
- Mongoose (MongoDB ORM)  
- Nanoid (Generate unique short codes)  
- CORS  
- Dotenv (Environment variables)  

---

## 📂 Project Structure
```
url-shortener/
│
├── backend/           # Express API for shortening and redirecting
│   ├── models/        # Mongoose schema for URL
│   ├── routes/        # API endpoints
│   ├── server.js
│
├── frontend/          # Next.js client
│   ├── pages/         # UI pages
│   ├── components/    # Reusable components
│   ├── styles/        # Tailwind styles
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/udaypareta/url-shortener.git
cd url-shortener
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the backend folder and add:
```env
MONGO_URI=your-mongodb-connection-string
BASE_URL=http://localhost:5000
PORT=5000
```
Run the backend:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```
Run the frontend:
```bash
npm run dev
```
Access it in your browser:  
http://localhost:3000

---

## 🌐 API Endpoints

### **POST** `/api/shorten`
**Request body:**
```json
{
  "longUrl": "https://example.com"
}
```
**Response:**
```json
{
  "shortUrl": "https://urlshortner-9ybb.onrender.com/abc123"
}
```

### **GET** `/:code`
Redirects to the original URL.

---

## 📽 Demo Video
https://drive.google.com/file/d/your-video-id/view

---

## 📤 Deployment

**Frontend Hosting Options**  
- [Vercel](https://vercel.com/)  
- [Netlify](https://www.netlify.com/)  

**Backend Hosting Options**  
- [Render](https://render.com/)  
- [Railway](https://railway.app/)  
- [Heroku](https://www.heroku.com/)  

---

## 👨‍💻 Author
**Uday Pareta**  
📧 Email: udaypareta@example.com  
🌐 Portfolio: https://udaysite.vercel.app/
