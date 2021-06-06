import React, { useState } from 'react';
import like from '../photos/RkiMyoycj.png'

const Like = () => {

    let [count, setCount] = useState(0);

    return (
        <div className='like' onClick={() => setCount(count += 1)}>
            <img className='like-btn' width="100px"src={like} alt='like button' /><span>{count}</span>
        </div>
    )
}
export default Like;

