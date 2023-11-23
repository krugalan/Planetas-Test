import './App.css'
import { HeaderPlanets } from './components/HeaderPlanet'
import { Planets } from './components/Planets'
import { usePlanets } from './hooks/usePlanets'

function App() {
  const { dataPlanets, isLoading, changePage } = usePlanets()
  return (
    <>
      <HeaderPlanets {... { dataPlanets, changePage }} />
      <Planets {...{ dataPlanets, isLoading }} />
    </>
  )
}

export default App
