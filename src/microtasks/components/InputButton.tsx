import React from 'react';

type InputButtonPropsType = {
    name: string
    callback: () => void
}

export const InputButton = (props: InputButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()

    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
}


