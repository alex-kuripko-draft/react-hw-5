import './App.css';
import Header from "./components/layouts/header";
import LinkIcons from "./components/link-icons";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <h1 className="title">LIFE IS WASTED ON THE LIVING</h1>
                <h4 className="subtitle">Sign in with</h4>
                <LinkIcons/>
            </div>
        </div>
    );
}

export default App;
