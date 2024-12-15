import React from 'react';
import { UniversalButton } from './UniversalButton';
import { MoneyType } from '../App';
import { FilterNameType } from '../App';

type FilteredListComponentPropsType = {
    currentMoney: Array<MoneyType>
    filteredList: (value: FilterNameType) => void
}

export const FilteredListComponent = (props: FilteredListComponentPropsType) => {
        return (
            <div className="App">
                <ul>
                    {props.currentMoney.map((objectFromArray) => {
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
                <UniversalButton callBack={() => props.filteredList('All')} title='All' />
                <UniversalButton callBack={() => props.filteredList('Dollars')} title='Dollars' />
                <UniversalButton callBack={() => props.filteredList('RUBLS')} title='Rubles' />
            </div>
        );
}
