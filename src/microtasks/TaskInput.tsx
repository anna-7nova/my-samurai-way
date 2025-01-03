import React, { useState } from 'react';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { InputButton } from './components/InputButton';

export const TaskInput = () => {
    // data
    let [message, setMessage] = useState(
        [
            { message: "message1" },
            { message: "message2" },
            { message: "message3" }
        ]
    )

    const [currentMessage, setCurrentMessage] = useState(message)

    const addMessage = (title: string) => {
        console.log(title)
        // newMessage.push({message: title})
        let newMessage = { message: title };
        setCurrentMessage([newMessage, ...currentMessage])
    }

    const [currentMessage2, setCurrentMessage2] = useState(message)

    return (
        <div>
            <FullInput addMessage={addMessage} />
            {currentMessage.map((m, index: number) => {
                return <div key={index}>{m.message}</div>
            })}
            <hr />
            <Input/>
            <InputButton name={"+"} callback={()=>{}}/>
            {currentMessage2.map((m, index: number) => {
                return <div key={index}>{m.message}</div>
            })}
        </div>
    );
}


