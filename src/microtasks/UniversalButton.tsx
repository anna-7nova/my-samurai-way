import React, { MouseEvent } from 'react';

type UniversalButtonPropsType = {
    title: string
    callBack: () => void
}

export const UniversalButton = (props: UniversalButtonPropsType) => {
    const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => props.callBack()

    return (
        <div>
            <button onClick={onClickHandler}>{props.title}</button>
        </div>
    );
}


