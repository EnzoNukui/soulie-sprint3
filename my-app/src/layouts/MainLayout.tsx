import { Outlet } from 'react-router-dom'
import Cabecalho from '../components/Cabecalho/Cabecalho'
import Rodape from '../components/Rodape/Rodape'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-violet-50/30 text-zinc-900">
      <Cabecalho />
      <main className="flex flex-1 items-center">
        <Outlet />
      </main>
      <Rodape />
    </div>
  )
}

