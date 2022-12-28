import './App.css';
import Grid from './components/Grid';
import Header from './components/Header';
import Middle from './components/Middle';

const mainStyle : string = 'relative top-10 align-middle text-center text-cyan-50 w-1/2 left-1/4 text-xl'

//const nameStyle : string = `${mainStyle} font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-300`


function App() {
  return (
    /*
    const bubbles : string = 'relative flex'
    <div className='w-full h-screen bg-cover bg-gradient-to-t to-gray-900 from-green-600 overflow-hidden'>
      <div className={bubbles}>
        <span className='relative w-8 h-8 bg-cyan-300 m-1 rounded-full'>

        </span>
      </div>
    </div>
    */
    <div className=' w-auto h-full bg-cover bg-gradient-to-t to-gray-900 from-green-600 relative'>
      <Header className='bg-transparent w-auto h-fit sticky top-0 text-white' title='Damian Uduevbo' />

      <br></br>

      <Middle title='Damian Uduevbo'>
        <div className={mainStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </Middle>

      <br></br>

      <Middle title='About Me'>
        <div className={mainStyle}>
          <p className='mb-3'>
            I am a second year computer science major at Northeastern University and aspiring full-stack developer, based out of New York City, NY and Boston, MA.
          </p>
          <p className='mb-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Middle>

      <br></br>

      <Middle title='Projects'>
        <div className={mainStyle}>
          <div>
            <button className='relative -left-2'>Published</button>|
            <button className='relative left-2'>Upcoming</button>
          </div>

          <br></br>

          <Grid className='relative text-center' rows='3' columns='3' spacing='4'>
            <div>a</div>
            <div>b</div>
            <div>c</div>

            <div>d</div>
            <div>e</div>
            <div>f</div>

            <div>d</div>
            <div>e</div>
            <div>f</div>
          </Grid>
          <br></br>
          <Grid className='relative text-center' rows='3' columns='3' spacing='4'>
            <div>a</div>
            <div>b</div>
            <div>c</div>

            <div>d</div>
            <div>e</div>
            <div>f</div>

            <div>d</div>
            <div>e</div>
            <div>f</div>
          </Grid>
        </div>
      </Middle>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <footer className='relative bottom-0 w-auto text-center'>
        <div>
          footer here
        </div>
      </footer>
    </div>
  );
}

export default App;
