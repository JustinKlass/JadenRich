// import background from './assests/images/DSCF3709.jpg'
import background from './assests/videos/jadensReel.mp4'
import './App.css';


function App() {
  return (
    <div className='app'>
      <video autoPlay loop muted className='video'><source src={background} type='video/mp4'/></video>
    </div>
    // <div style={{ backgroundImage: `url(/videos/jadensReel.mp4)`,
    // backgroundPosition: '0 20%',
    // // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // // backgroundSize: 'auto 100%',
    // backgroundRepeat: 'no-repeat',
    // width: '100vw',
    // height: '100vh' }}>
    //   Hello World
    // </div>
  );
}

export default App;
