# Greeting Generator - Frontend

## Overview
The Greeting Generator frontend is a React app that allows users to enter their name and receive a personalized greeting.
The frontend is responsible for:
- Displaying the user interface
- Capturing user input
- Managing application state
- Sending requests to the Flask backend API
- Displaying the greeting response returned from the backend

## How It Works
The user enters their name into the input field.
When the user clicks the generate button:
1. React stores the name using state.
2. React sends a POST request to the Flask backend.
3. The backend creates a personalized greeting.
4. React receives the response.
5. The greeting is displayed on the page.

# Running the Frontend
1. Clone the repository
2. Navigate into the project:
3. Install Dependencies:
npm install
4. Start the development server
npm run dev
5. The application will start.
http://localhost:5173
