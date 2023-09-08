import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Button, Navbar } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My App</Navbar.Brand>
      </Navbar>
      <div className="container mt-3">
        <h1>Welcome to My App</h1>
        <Button variant="primary">Click Me</Button>
      </div>
    </div>
  );
}

export default App;
// import React, { useState } from 'react';
// import axios from 'axios';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// // Initialize Firebase (replace with your config)
// const firebaseConfig = {
//   // your config here
// };
// firebase.initializeApp(firebaseConfig);

// function App() {
//   const [file, setFile] = useState(null);
//   const [translatedText, setTranslatedText] = useState('');

//   const uploadImage = async () => {
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post("http://localhost:8000/upload/", formData);
//       setTranslatedText(response.data.translated);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={uploadImage}>Translate</button>
//       {translatedText && <div>Translated Text: {translatedText}</div>}
//     </div>
//   );
// }

// export default App;
