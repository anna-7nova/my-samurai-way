import React, { ChangeEvent, useState } from 'react';

type InputPropsType = {
    addNewTitle: (currentTitle: string)=> void
    value: string
}

export const Input = (props: InputPropsType) => {
    //local state

const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.addNewTitle(event.currentTarget.value)
}

    return (
        <input value={props.value} onChange={onChangeHandler}/>
    );
};
