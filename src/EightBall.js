import React, { useState } from "react"
import "./EightBall.css"
import defaultAnswers from "./answers.json"

function choice(A) {//return a random item from array
    return A[Math.floor(Math.random() * A.length)]
}
function EightBall({answers=defaultAnswers}){//Props:answers=array of {msg,color} objects
    const [answer,setAnswer]=useState({msg:"Think of a Question",color:"black"})//State:answer:{msg,color} of current answer

    const handleClick=evt=>setAnswer(choice(answers))
    return (
        <div className="EightBall" onClick={handleClick} style={{backgroundColor:answer.color}}>
            <b>{answer.msg}</b>
        </div>
    )
}
export default EightBall
