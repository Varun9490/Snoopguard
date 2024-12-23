

```markdown
# MERN Stack Chat Application

This is a real-time chat application built using the MERN stack (MongoDB, Express, React, and Node.js). The application supports user authentication, secure messaging, and image sharing. It is designed to be scalable and efficient with features like JWT-based authentication, Cloudinary integration for image uploads, and WebSocket-based real-time updates.

---

## Features

- **User Authentication**: Signup, Login, Logout, and Profile Update.
- **Real-time Messaging**: Send and receive messages instantly.
- **Image Sharing**: Upload and share images via Cloudinary.
- **Secure Communication**: JWT-based authentication and protected routes.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

---

## Project Structure

```
backend/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── lib/
├── .env
├── server.js
frontend/
├── public/
├── src/
├── .env
├── package.json
```

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Cloudinary for image uploads
- Socket.io for real-time communication


## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (Local or Atlas)
- Cloudinary Account

### Backend Configuration
1. Clone the repository and navigate to the backend directory:
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend folder and add the following environment variables:
   ```
   MONGODB_URL=mongodb+srv://varunnadipena:edIcOJTSWMWQr5eN@cluster0.aukal.mongodb.net/chat_DB?retryWrites=true&w=majority&appName=Cluster0
   PORT=5001
   JWT_SECRET=your-secret-key
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   NODE_ENV=development
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Configuration
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend folder and add the following:
   ```
   REACT_APP_API_URL=http://localhost:5001/api
   ```

4. Start the React development server:
   ```bash
   npm start
   ```

---

## API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /signup` - Create a new user.
- `POST /login` - Login a user.
- `POST /logout` - Logout the user.
- `PUT /update-profile` - Update user profile.
- `GET /check` - Verify the authentication status.

### Messaging Routes (`/api/messages`)
- `GET /users` - Get a list of all users except the logged-in user.
- `GET /:id` - Get messages between two users.
- `POST /send/:id` - Send a message to another user.

---

## Folder Structure Overview

### Backend
- **Controllers**: Business logic for API routes.
- **Middlewares**: Authentication and other middlewares.
- **Models**: Mongoose models for MongoDB.
- **Routes**: API routes.
- **Lib**: Utility functions and configurations (e.g., database, Cloudinary).

### Frontend
- **Components**: Reusable React components.
- **Pages**: Main application pages.
- **Styles**: Tailwind CSS styling.
- **Utils**: Helper functions.

---

## Deployment

### Backend
- Deploy using services like [Render](https://render.com/) or [Heroku](https://www.heroku.com/).

### Frontend
- Deploy on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).

---

## Future Enhancements
- Group chat functionality.
- Voice and video call support.
- Message encryption.
- Push notifications for new messages.

---

## License

This project is licensed under the MIT License.

---

## Contribution

Contributions are welcome! Please create a pull request with a detailed explanation of the changes.

---

## Contact

For any questions or feedback, please reach out:
- Email: varunnadipena@gmail.com
- GitHub: [Varun9490](https://github.com/Varun9490)
```
