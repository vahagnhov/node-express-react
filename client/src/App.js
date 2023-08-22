import './App.css';
import {useEffect} from "react";

function App() {

    useEffect(() => {
        fetch('/data').then((resp) => resp.json()).then((resp) => {
            console.log(JSON.stringify(resp))
        })
    }, [])

    return (
        <div className="App">
            Hello Armenia
        </div>
    );
}

export default App;
