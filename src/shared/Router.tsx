import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import App from '../App';
import MainPage from '../pages/MainPage';

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<App />}>
//             <Route path='/main' element={<MainPage />} />
//         </Route>
//     )
// );

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div />,
        children: [
            {
                index: true,
                path: '/',
                element: <MainPage />,
            },
            {
                path: '*',
                element: <Navigate replace to='/' />,
            },
        ],
    },
]);


export default router;
