import React, { useState } from 'react';

export const FullInput = () => {
    //local state
    let [title, setTitle] = useState("")
    return (
        <div>
            <input />
            <button>+</button>
        </div>
    );
}


