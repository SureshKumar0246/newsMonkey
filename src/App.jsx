import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import NavBAr from "./components/NavBAr";
import News from "./components/News";

function App() {

  return (
    <>
      <NavBAr></NavBAr>
      <News newsLength={5}></News>
    </>
  )
}

export default App
