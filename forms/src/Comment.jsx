import { useState } from "react";
import './Comment.css';
import CommentsForm from "./CommentsForm";

export default function Comment() {
    let [comments, setComments] = useState([{
        username: "@mahseeba",
        remarks: "got placed!!",
        rating: 5,
    }]);

    let addNewComment = (comment) => {
        setComments((currComments)=> [...currComments, comment]);
        console.log("added new comments");
    }
    
    return (
        <>
            <h3>All Comments</h3>
            {comments.map((comment, idx)=> (
                <div className="comment" key={idx}>
                    <span>{comment.remarks}</span>
                    &nbsp;&nbsp;
                    <span>(rating = {comment.rating})</span>
                    <p>- {comment.username}</p>
                </div>
            ))}
            
        <hr></hr>
        <CommentsForm addNewComment={addNewComment}/>
        </>
        

    )
}