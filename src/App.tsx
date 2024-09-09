import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const LazyHome = lazy(() => import('./Pages/Home/Home'))
const LazyPerfil = lazy(() => import('./Pages/Perfil/Perfil'))
const LazyLista = lazy(() => import('./Pages/Lista/Lista'))


function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<>Carregando</>}/>
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="/Perfil" element={<LazyPerfil />} />
        <Route path="/Lista" element={<LazyLista />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
