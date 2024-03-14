import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './helpers/chartjs'
import Root from './routes/root.tsx';
import App from './App.tsx';
import ErrorPage from "./routes/error-page";
import ArithmeticDraggable from "./routes/arithmetic-draggable";
import KanbanRoute from "./routes/kanban.tsx";
import FormFunRoute from "./routes/form-fun-route.tsx";
import HomeRoute from "./routes/home-route.tsx";
import ShoppingListsRoute from "./routes/shopping-lists-route.tsx";
import LayoutsRoute from "./routes/layouts-route.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomeRoute />,
      },
      {
        path: "app",
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: "arithmetic-draggable",
        element: <ArithmeticDraggable />,
      },
      {
        path: "form-fun",
        element: <FormFunRoute />,
      },
      {
        path: "kanban",
        element: <KanbanRoute />,
      },
      {
        path: "shopping-lists/:id",
        element: <ShoppingListsRoute />,
      },
      {
        path: "layouts/:layoutId?",
        element: <LayoutsRoute />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
