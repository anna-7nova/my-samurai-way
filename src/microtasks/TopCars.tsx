import React from 'react';

type TopCarsType = {
    manufacturer: string,
    model: string
  }

export const TopCars = () => {
    const topCars: Array<TopCarsType> = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ]

    const Table = topCars.map((item: TopCarsType, index: number) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{item.manufacturer}</td>
                <td>{item.model}</td>
            </tr>
        )
    })
    return (
        <table>
            <tr>
                <th>Number</th>
                <th>Manufacture</th>
                <th>Model</th>
            </tr>
            {Table}
        </table>
    );
}

