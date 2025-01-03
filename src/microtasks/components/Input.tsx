import React, { ChangeEvent, useState } from 'react';

export const Input = () => {
    //local state
    const [title, setTitle] = useState("")

const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
}

    return (
        <input onChange={onChangeHandler}/>
    );
};
