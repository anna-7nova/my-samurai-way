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
    //function for universal component - input+button
    const [currentMessage, setCurrentMessage] = useState(message)

    const addMessage = (title: string) => {
        console.log(title)
        // newMessage.push({message: title})
        let newMessage = { message: title };
        setCurrentMessage([newMessage, ...currentMessage])
    }

    //separate option - separate input and separate button
    const [currentTitle, setCurrentTitle] = useState("")
    const [currentMessage2, setCurrentMessage2] = useState(message)

    console.log(currentTitle)

    const addNewMessage = (currentTitle: string) => {
        let newMessage2 = {message: currentTitle}
        setCurrentMessage2([newMessage2, ...currentMessage2])
        setCurrentTitle("")
    }

    return (
        <div>
            <FullInput addMessage={addMessage} />
            {currentMessage.map((m, index: number) => {
                return <div key={index}>{m.message}</div>
            })}
            <hr />
            <Input value={currentTitle} addNewTitle={setCurrentTitle}/>
            <InputButton name={"+"} callback={()=>{addNewMessage(currentTitle)}}/>
            {currentMessage2.map((m, index: number) => {
                return <div key={index}>{m.message}</div>
            })}
        </div>
    );
}


