import './App.css'
import {useState} from "react";
import {Typewriter} from "./Typewriter.tsx";

const App = () => {

    const [inputText, setInputText] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setText(inputText);
        setInputText('');
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <label className="form-label">Text</label>
                        <input className="form-control"
                               placeholder="Enter text here and push Enter"
                               value={inputText}
                               onChange={(e) => setInputText(e.target.value)}/>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Typewriter text={text} delay={100}/>
                </div>
            </div>
        </>
    )
}

export default App
