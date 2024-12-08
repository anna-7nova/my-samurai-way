import React, { MouseEvent } from 'react';

// type SubscribersType = {
//     name: string
// }

// const subscribers = [
//     {
//         name: "Ivan"
//     },
//     {
//         name: "Anna"
//     },
//     {
//         name: "Igor"
//     },
// ]


export const Button = () => {
    //     const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log("My name is Anna")
    // }
    //     const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log("My name is Victor")
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    const foot1 = () => {
        console.log(100200)//ничего не передавать, но в консоли должно показаться 100200
    }
    const foot2 = (number: number) => {
        console.log(number)//передать цифру 100200
    }

    return (
        <div>
            {/* <button onClick={(event) => { console.log("Hello") }}>"My youtube chanel 1"</button> */}
            {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Anna")}>"My youtube chanel 2"</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Anton")}>"My youtube chanel 3"</button> */}
            <button onClick={foot1}>1</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => foot2(100200)}>2</button>
        </div>
    );
}


