import {useEffect, useState} from "react";
import ArticleModel from "./models/ArticleModel.ts";
import api from "./api.ts";
import classNames from "classnames";
import {Comment} from "./Comment.tsx";

export const Article = ({id}: { id: number }) => {

    const [article, setArticle] = useState<ArticleModel | null>(null);
    const [showComments, setShowComments] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await api.getArticle(id);
            setArticle(data);
        }

        fetchData();
    }, [])

    const cardBodyClasses = classNames(
        {
            'card-body': true,
            'full-height': showComments
        }
    )

    if (!article) {
        return <p>Loading ...</p>;
    }
    return (
        <div className="col-6">
            <div className="card mb-3">
                <div className="card-header">
                    {article.title}
                    <a style={{float: 'right'}} href={article.url} target={'_blank'}>Open</a>
                </div>
                <div className={cardBodyClasses}>
                    {showComments && article.kids
                        ? <>
                            <h4>Comments</h4>
                            <div className="row">
                                <div className="col">
                                    {article.kids.map(id => <Comment key={id} id={id}/>)}
                                </div>
                            </div>
                        </>
                        : <div className='show-more-comments'
                               onClick={() => setShowComments(!showComments)}
                        >Show comments</div>}
                </div>
            </div>
        </div>
    )
}