import './App.css';
import Grid, { GridTile } from './components/Grid';
import Header from './components/Header';
import Middle from './components/Middle';

const mainStyle : string = 'relative top-10 align-middle text-center text-cyan-50 w-1/2 left-1/4 text-xl'

function App() {
  return (

    /*
    <svg className='w-full h-full'  viewBox="0 0 100 100">
      <Header className='bg-transparent w-auto h-fit sticky top-0 text-white' title='Damian Uduevbo' />
      <g id="Frame 2" clip-path="url(#clip0_1_4)">
        <rect width="100" height="100" fill="#191D24"/>
        <rect id="Rectangle 1" x="1" y="48" width="3" height="3" fill="#D9D9D9"/>
        <rect id="Rectangle 2" x="45" y="42" width="3" height="3" fill="#D9D9D9"/>
        <rect id="Rectangle 3" x="90" y="51" width="3" height="3" fill="#D9D9D9"/>

        <g id="Frame 1" filter="url(#filter0_f_1_4)">
          <rect width="107" height="55" transform="translate(-3 50)" fill="#49A547"/>
        </g>

        <g id="Frame 3" filter="url(#filter1_f_1_4)">
          <rect width="111" height="26" transform="translate(-7 -7)" fill="#191D24"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_1_4" x="-7" y="46" width="115" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1_4"/>
        </filter>
        <filter id="filter1_f_1_4" x="-11" y="-11" width="119" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1_4"/>
        </filter>
        <clipPath id="clip0_1_4">
          <rect width="100" height="100" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    */

    <div className='w-auto h-full bg-gradient-to-tl to-slate-900 via-slate-900 from-green-600 bg-no-repeat '>
      <Header className='bg-transparent w-auto h-fit sticky top-0 text-white' title='Damian Uduevbo' />

      <br></br>

      <Middle title='Damian Uduevbo'>
        <div className={mainStyle + ` text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-tl to-slate-300 via-slate-300 from-white`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </Middle>

      <br></br>

      <Middle title='About Me'>
        <div className={mainStyle}>
          <p className='mb-3'>
            I am a second year computer science major at Northeastern University and an aspiring full-stack developer, based out of New York City, NY and Boston, MA.
          </p>
          <p className='mb-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Middle>

      <br></br>

      <Middle title='Projects'>
        <div className={`relative top-10 align-middle text-center text-cyan-50 w-3/4 ml-auto mr-auto text-xl`}>
          <div>
            <button className='relative -left-2'>Published</button>|
            <button className='relative left-2'>Upcoming</button>
          </div>

          <br></br>

          <Grid rows='2' columns='2' spacing='4' className='relative grid grid-cols-3 grid-flow-row gap-4 group text-left scale-y-100 ease-in-out duration-300'>
            <GridTile title='Image Processor' year='2022' bubbleTags={['Java', 'Model View Controller', 'Design Patterns', 'Java Swing']}>
              An image processing application that can open, modify, and save images. Supports .ppm, .png, and .jpeg files.
            </GridTile>
            
            <GridTile title='Project Big City' year='2022' bubbleTags={['JavaScript', 'Python', 'Web Scraping', 'Web3']}>
              A private webscraping unility.
            </GridTile>
            
            <GridTile title='Menu Manager' year='2022' bubbleTags={['JavaScript', 'REST API', 'React', 'Node.js', 'MongoDB']}>
              A full-stack web application that allows restaurant owners to manage their menu items.
            </GridTile>

            <GridTile title='Bellman Ford GPS' year='2022' bubbleTags={['Lua', 'Roblox', 'Algorithms', 'Pathfinding', 'Game Development']}>
              After taking an algorithms course at Northeastern University, I wanted to apply what
              I have learned to a practical scenario. I chose this project because a GPS system was the first thing that came to mind
              when I first learned about Bellman-Ford, and chose to do this in Roblox since it is fast and
              easy to build and run a 3D enviroment.
            </GridTile>
          </Grid>

        </div>
      </Middle>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <footer className='relative w-auto text-center mt-auto'>
        <div>
          footer here
        </div>
      </footer>
    </div>
  );
}

export default App;
