import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contato from "./Contato";
import Error from "./Error";
import Faq from "./Faq";
import Home from "./Home";
import Integrantes from "./Integrantes";
import Sobre from "./Sobre";
import Solucao from "./Solucao";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/solucao",
        element: <Solucao />,
      },
      {
        path: "/integrantes",
        element: <Integrantes />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);

export default router;
