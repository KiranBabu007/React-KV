import Counter from "./components/Counter/Counter";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import Employee from "./pages/Employee/Employee";
import Layout from "./pages/Layout";
import Login from "./pages/login/Login";
import NotFound from "./pages/NotFound/NotFound";
import UncontrolledLogin from "./pages/uncontrolledLogin/UncontrolledLogin";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element:  <Login />,
  },
  {
    path: "/employee",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Employee />,
      },
      {
        path: "create",
        element: <CreateEmployee />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
