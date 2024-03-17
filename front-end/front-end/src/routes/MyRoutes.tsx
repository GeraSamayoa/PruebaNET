import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../views/Home/home";
import Registro from "../views/Registro/registroAlumnos";
import Consulta from "../views/Consulta/consulta";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/registro",
        element: <Registro />,
    },
    {
        path: "/consulta",
        element: <Consulta />,
}
]);

const MyRoutes = () =>  <RouterProvider router={router} />

export default MyRoutes;