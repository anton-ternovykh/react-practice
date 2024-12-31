import './App.css'
import Accordion from "./Accordion.tsx";
import db from './db.ts'

function App() {
    return (
        <>
            <Accordion items={db}/>
        </>
    )
}

export default App
