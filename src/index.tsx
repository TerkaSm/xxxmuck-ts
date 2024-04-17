import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Link} from 'react-router-dom';
import {App} from './components/App/App';
import {HomePage} from './pages/HomePage/HomePage';
import {ProductPage} from './pages/ProductPage/ProductPage';
import {ErrorPage} from './pages/ErrorPage/ErrorPage'
import './global.css';


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/product/:productId',
				element: <ProductPage />,
			},		
		],
	},
],{
	basename: "/xxxmuck"
},	
)

createRoot(document.querySelector('#app')).render(<RouterProvider router={router} />)
