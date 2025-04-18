import './App.css'
import AvailPlayers from './components/AvailPlayers/AvailPlayers'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Newsletter from './components/Newsletter/Newsletter'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AvailPlayers></AvailPlayers>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  )
}

export default App
