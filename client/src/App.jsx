import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="container" style={{textAlign: 'center'}}>
        <h1 className="main-title">CryptoCurrent</h1>
        <h3 style={{fontFamily:"monospace", paddingBottom: '1em'}}><em>(a work in progress)</em></h3>
        <img src="src/assets/cryptocurrent_logo.png" style={{width:'7em'}}></img>
      </div>
      <About></About>
      <Footer></Footer>
    </>
  )
}

export default App
