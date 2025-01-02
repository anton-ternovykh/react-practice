import './App.css'
import {useEffect, useState} from "react";
import api from "./api.ts";
import {Article} from "./Article.tsx";

function App() {

    const [articles, setArticles] = useState<number[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await api.getArticles();
            setArticles(data.slice(0, 10));
        }

        fetchData();
    }, [])

    return (
        <div className="row">
            {articles.map((article) => <Article key={article} id={article}/>)}
        </div>
    )
}

export default App
