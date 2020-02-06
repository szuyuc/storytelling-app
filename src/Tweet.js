import React, { useState } from 'react';
import './App.css';

function Tweet(props) {
    // replace props to {name, messages}

    const [isRed, setRed] = useState(false)
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
        if (count > 4) {
            setRed(true)
        }

    }


    return (
        // in js you have to use classname
        <div className="tweet">
            <h3 className={isRed ? "numlikes" : ""}>{props.name}</h3>
            <p>{props.messages}</p>
            <button className="myButton" onClick={increment}>like</button>
            <h3># of likes: {count} </h3>

        </div>

    )

}
export default Tweet;