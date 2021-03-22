import React, { useState } from 'react'
import './PostLike.css';

const PostLike = () => {
    const [state, setState] = useState(false); 

    const toggle = () => {
        setState(!state) 
    }

    return (
        <div>
            
            <div className="icon" onClick={toggle}>{state ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i> }
            </div>
            
        </div>
    )
}

export default PostLike
