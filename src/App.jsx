// import './App.css'
import NavBar from './components/NavBar/NavBar'
import Content from './components/Header/headers'  // Updated this line
import Logo from './components/Worldwides/logo'    // Updated this line
import Main from './components/mainn/main'         // Updated this line
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
      <NavBar />
      <Content />  {/* Changed to PascalCase */}
      <Logo />     {/* Changed to PascalCase */}
      <Main />     {/* Changed to PascalCase */}
      <Footer/>
    </div>
  )
}

export default App
