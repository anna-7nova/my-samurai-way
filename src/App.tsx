import React, { useState } from 'react';
import './App.css';
import { UniversalButton } from './microtasks/UniversalButton';

type MoneyType = {
  banknotes: 'Dollars' | 'RUBLS' 
  value: number
  number: string 
}

//data
const allList: Array<MoneyType> = [
  { banknotes: 'Dollars', value: 100, number: ' a1234567890' },
  { banknotes: 'Dollars', value: 50, number: ' z1234567890' },
  { banknotes: 'RUBLS', value: 100, number: ' w1234567890' },
  { banknotes: 'Dollars', value: 100, number: ' e1234567890' },
  { banknotes: 'Dollars', value: 50, number: ' c1234567890' },
  { banknotes: 'RUBLS', value: 100, number: ' r1234567890' },
  { banknotes: 'Dollars', value: 50, number: ' x1234567890' },
  { banknotes: 'RUBLS', value: 50, number: ' v1234567890' },
]

function App() {
  const [money, setMoney] = useState(allList)

  // const [nameOfButton, setNameOfButton] = useState("all")
  

  function filteredButton (title: string) {
    if (title === 'All') {
      return (
        setMoney(allList)
      )
    }
    if (title === 'Dollars') {
      return (
        setMoney(allList.filter(filteredMoney => filteredMoney.banknotes === 'Dollars' ))
      )
    }
    if (title === 'RUBLS') {
      return(
        setMoney(allList.filter(filteredMoney => filteredMoney.banknotes === 'RUBLS' ))
      )
    }
  }

  return (
    <div className="App">
      <ul>
        {money.map((objectFromArray) => {
          return (
            <div>
              <li key={objectFromArray.number}>
                <span>{objectFromArray.banknotes}</span>
                <span>{objectFromArray.value}</span>
                <span>{objectFromArray.number}</span>
              </li>
            </div>
          )
        })}
      </ul>
      <UniversalButton callBack={() => filteredButton('All')} title='All' />
      <UniversalButton callBack={() => filteredButton('Dollars')} title='Dollars' />
      <UniversalButton callBack={() => filteredButton('RUBLS')} title='Rubles' />
    </div>
  );
}

export default App;


