import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import FormularioN from "./components/FormularioN"
function App() {
  

  return (
    <div className="container mx-auto mt-20">
      <Header/>
    <div className="mt-12 md:flex">

  
    <FormularioN/>
    <ListadoPacientes/>
    </div>
    </div>
  )
}

export default App


