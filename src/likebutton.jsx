import { useState } from "react"
export default function LikeButton(){
    let [liked,isliked]=useState(false);
    let heart=()=>{
        isliked(!liked);

    };
    return (
        <div>
        <p onClick={heart}>
            {
            isliked ? (
            <i className="fa-solid fa-heart"></i>
            ) : (
            <i className="fa-regular fa-heart"></i>
            )}
            </p>
        </div>
    );
}