import './App.css';
import NavigationBar from './components/Navbar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import AllMovie from './components/AllMovie';

import './style/landingPage.css';

function App() {
  return (
    <div>
      {/* intro */}
      <div className='myBG'>
        <NavigationBar/>
        <Intro/>
      </div>
      {/* intro-end */}
      {/* trending */}
      <div className="trending">
        <Trending/>
      </div>
      <div className='allMovie'>
        <AllMovie/>
      </div>

    </div>  
    
  );
}

export default App;
