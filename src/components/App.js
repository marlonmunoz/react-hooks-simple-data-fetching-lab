// create your App component here
import React, {useState, useEffect} from "react";

function App() {

    const [loaded, setLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then((data) => {
            setImageUrl(data.message)
            setLoaded(true)
        }) 
    }, []);

    if (!loaded) return <p>Loading...</p>
    return (
        <div>
            {<img src={imageUrl} alt="A Random Dog"/>}
        </div>
    )
}

export default App;