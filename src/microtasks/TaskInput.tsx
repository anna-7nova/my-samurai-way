import React, { useState } from 'react';
import { FullInput } from './components/FullInput';

export const TaskInput = () => {
    // data
    let [message, setMessage] = useState(
        [
            { message: "message1" },
            { message: "message2" },
            { message: "message3" }
        ]
    )
    return (
        <div>
            <FullInput />
            {message.map((m, index: number) => {
                return <div key={index}>{m.message}</div>
            })}
        </div>
    );
}


