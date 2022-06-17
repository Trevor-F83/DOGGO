import { useState, useEffect } from "react";
import './App.css';
import Doggo from "./components/Doggo";
// import Form from "./components/Form";

function App() {
  const API_URL= "https://dog.ceo/api/breeds/image/random";

  const [dog, setDog] = useState(null);
  
  const getDog = async () => {
    const response = await fetch(API_URL);

    const data = await response.json();
    setDog(data.message);
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <div className="app">
      <div className="tag">Random Doggos!</div>
      <div className="submit">
        <input type="button" value="Get a Dog" onClick={getDog} />
      </div>
      <div className="dogImg">
        <Doggo dog={dog} />
      </div>
    </div>
  );
  }
//   return (
//     <div className="App">
//       <h1>Random Dog For To Make A Day Happy</h1>
//       <Form dogsearch={getDoggo} />
//       <Doggo doggo={doggo} />
//     </div>
//   );
// }

export default App;
