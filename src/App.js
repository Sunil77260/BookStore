import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditBook from "./components/books/EditBook";
import BookListScreen from "./pages/BookListScreen";

import HomeScreen from "./pages/HomeScreen";
import Layout from "./pages/Layout";
import LoginScreen from "./pages/LoginScreen";
import NewBookScreen from "./pages/NewBookScreen";
import PageNotFound from "./pages/PageNotFound";
import SingUpScreen from "./pages/SingUpScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "singup",
        element: <SingUpScreen />,
      },
      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        path: "books",
        element: <BookListScreen />,
        children: [{ path: "edit", element: <EditBook /> }],
      },
      {
        path: "new-book",
        element: <NewBookScreen />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
