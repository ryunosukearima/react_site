import Header from './components/header/Header'
import Music from './components/music/Music'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import Ornament_ber from './components/ornament/Ornament_ber'
import Button from '@mui/material/Button';



function App() {
  return (
    <div>
      <Header />
      <div className='mt-5'><Ornament_ber /></div>
      <Music />
      <Navigation />
      <Footer />
      <Ornament_ber />
      <Button variant="contained">Hello world</Button>;

    </div>
    
    
    
  )
}

export default App
