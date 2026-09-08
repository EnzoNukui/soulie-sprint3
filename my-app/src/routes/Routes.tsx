import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Contato from '../pages/Contato'
import ErrorPage from '../pages/Error'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import Integrantes from '../pages/Integrantes'
import Sobre from '../pages/Sobre'
import Solucao from '../pages/Solucao'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sobre',
        element: <Sobre />,
      },
      {
        path: '/solucao',
        element: <Solucao />,
      },
      {
        path: '/integrantes',
        element: <Integrantes />,
      },
      {
        path: '/contato',
        element: <Contato />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
    ],
  },
])

export default router
