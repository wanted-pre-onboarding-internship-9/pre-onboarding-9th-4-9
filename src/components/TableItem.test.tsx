
import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import instance from '../apis/instance';
import { TMockData, TO_DAY } from '../types/mockDataTypes';
import TableItem from './TableItem';

test("오늘 데이터 검증", () => {

    instance.get('').then(response => {
        response.data
            .filter((item: TMockData) => item.transaction_time.includes(TO_DAY))
            .map((item: TMockData) => {
                expect(item.transaction_time).toBe(/2023-03-08/)
            })
    })

});

test("TableItem component", () => {

    const mock_data = {
        id: 492,
        transaction_time: "2023-03-08 17:06:31",
        status: false,
        customer_id: 506,
        customer_name: "Uriel Morgan",
        currency: "$97.01",
        index: 1
    }

    render(
        <TableItem item={mock_data} itemNumber={1} />
    )

    const transaction_time = screen.getByTestId('transaction_time');
    expect(transaction_time.textContent).toMatch(/2023-03-08/)
})