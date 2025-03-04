import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './Pages/Home';
import BookmarkPage from './Pages/Bookmark';
import DetailAnime from './Pages/DetailAnime';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/anime',
    element: <HomePage />,
  },
  {
    path: '/detail',
    element: <DetailAnime />,
  },
  {
    path: '/bookmark',
    element: <BookmarkPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
