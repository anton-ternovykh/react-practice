import {useEffect, useState} from "react";
import CommentModel from "./models/CommentModel.ts";
import api from "./api.ts";

export const Comment = ({id}: { id: number }) => {
    const [comment, setComment] = useState<CommentModel | null>(null);
    const [showMoreComments, setShowMoreComments] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await api.getComment(id);
            setComment(data);
        }

        fetchData();
    }, [])

    if (!comment) {
        return <p>Loading ...</p>
    }

    const commentDate = (new Date(comment.time)).toLocaleDateString();

    const handleClickMoreComment = () => {
        setShowMoreComments(!showMoreComments);
    }

    return (
        <div className="comment">
            <div className="comment__body">
                <div className="comment__text">
                    <div dangerouslySetInnerHTML={{__html: comment.text}}></div>
                </div>
                <div className="comment__footer">
                    <div className="row">
                        <div className="col">
                            <i>(at {commentDate} by {comment.by})</i> &nbsp;

                        </div>
                        <div className="col">
                            {comment.kids
                                ? <div className='show-more-comments'
                                       onClick={handleClickMoreComment}>More comments ({comment.kids.length})</div>
                                : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {showMoreComments ? comment.kids?.map(id => <Comment key={id} id={id}/>) : null}
        </div>
    )
}