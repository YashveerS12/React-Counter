import { useState } from "react"
export default function Counter(){
    let [count,setcount]=useState(0);//init
    // let intcount=()=>{
    //     setcount(count+1);
    // };
    let intcount=()=>{
        setcount((currcount)=>{
            return currcount+1;
        });
    };

    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={intcount}>Increment Count</button>
        </div>

    );
}