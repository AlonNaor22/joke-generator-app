# 🤖 Joke Generator Web App

## 📝 Description
A fun web application that generates jokes about any subject using OpenAI's GPT-3.5 Turbo API. Users can input a subject and specify the number of jokes they want to generate.

## ✨ Features
- Generate jokes about any subject
- Customizable number of jokes (1-10)
- Simple and intuitive web interface
- Powered by OpenAI's language model

## 🛠 Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- OpenAI API Key

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/joke-generator-app.git
cd joke-generator-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory with your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## 🌐 Accessing the App
Open your web browser and navigate to:
```
http://localhost:3000
```

## 📋 How to Use
1. Enter a subject (e.g., "cats", "programming", "vacation")
2. Choose the number of jokes (1-10)
3. Click "Generate Jokes"
4. Enjoy the generated jokes!

## 🔧 Troubleshooting
- Ensure your OpenAI API key is valid and active
- Check that all dependencies are installed
- Verify Node.js and npm are up to date

## 🛡 Error Handling
- Invalid inputs will trigger error messages
- API request failures will display an error notification

## 📦 Dependencies
- Express.js
- Axios
- body-parser
- dotenv

## 🔒 Security
- API key stored in environment variables
- Input validation on both client and server sides
