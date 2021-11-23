import Header from './components/Header'
import NavBar from './components/NavBar'
import Container from './components/Container'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Main from './components/Main'

const onClick = () =>{
  console.log("Click");
}
function App() {
  return(
    <>
    
    <div className='header'>
      <Header />
    </div>
    <div className = 'navbar'>
      <NavBar onClick={onClick}/>
    </div>
    <div className = 'container'>
      <Container />
    </div>
    <div className = 'main'>
      <Main />
    </div>
    <div className = 'sidebar'>
      <SideBar />
    </div>
    <div className = 'footer'>
      <Footer />
    </div>
    
    </>
  )
}
export default App


