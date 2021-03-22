import React, { useState } from 'react'
import './ReactPost.css';
import PostLike from './PostLike'

const ReactPost = ({question, answer}) => {
    const [state, setState] = useState(false); 

    const toggle = () => {
        console.log('clicked')
        setState(!state); 
    }

    return (
        <div className="card">
            <p className="question">Question: {question} </p>
            {state ? <p className="answer">Answer: {answer} </p>: null}
            <div className="box">
            <button className="btn" onClick={toggle}>{state ? 'Hide Answer' : 'Show Answer'}</button>
            <PostLike /> 
            </div>
            
            
        </div>
    )
}

export default ReactPost
