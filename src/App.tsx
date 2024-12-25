import React, { useState } from 'react';
import './App.css';
import { FilteredListComponent } from './microtasks/FilteredListComponent';
import { TaskInput } from './microtasks/TaskInput';

export type MoneyType = {
  banknotes: 'Dollars' | 'RUBLS'
  value: number
  number: string
}

export type FilterNameType = 'All' | 'Dollars' | 'RUBLS'

//data
function App() {
  const [money, setMoney] = useState<Array<MoneyType>>(
    [
      { banknotes: 'Dollars', value: 100, number: ' a1234567890' },
      { banknotes: 'Dollars', value: 50, number: ' z1234567890' },
      { banknotes: 'RUBLS', value: 100, number: ' w1234567890' },
      { banknotes: 'Dollars', value: 100, number: ' e1234567890' },
      { banknotes: 'Dollars', value: 50, number: ' c1234567890' },
      { banknotes: 'RUBLS', value: 100, number: ' r1234567890' },
      { banknotes: 'Dollars', value: 50, number: ' x1234567890' },
      { banknotes: 'RUBLS', value: 50, number: ' v1234567890' },
    ]
  )

  //busines logic
  const [nameButton, setNameButton] = useState<FilterNameType>("All")

  let currentMoney = money
  if (nameButton === 'RUBLS') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknotes === 'RUBLS')
  }
  if (nameButton === 'Dollars') {
    currentMoney = money.filter(filteredMoney => filteredMoney.banknotes === 'Dollars')
  }

  const filteredList = (value: FilterNameType) => {
    setNameButton(value)
  }

  return (
    <div>
      <FilteredListComponent currentMoney={currentMoney} filteredList={filteredList} />
      <hr />
      <TaskInput />
    </div>
  );
}

export default App;


