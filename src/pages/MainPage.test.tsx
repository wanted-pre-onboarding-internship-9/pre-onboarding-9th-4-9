import useGetOrders from "../hooks/useGetOrders";
import { TMockData, TO_DAY } from '../types/mockDataTypes';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MainPage from "./MainPage";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});

test("메인 페이지 그리기", () => {

    render(
        <QueryClientProvider client={queryClient}>
            <MainPage />
        </QueryClientProvider>
    )

})
