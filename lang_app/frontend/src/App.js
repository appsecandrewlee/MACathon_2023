import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
