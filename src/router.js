import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    
    
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>}
]);

export default router;