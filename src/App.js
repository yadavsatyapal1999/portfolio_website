import './App.css';
import Navbar from './component/Navbar/Navbar';
import Projects from './component/Resume/Projects/Projects';
import Home from './component/Home/Home';
import Intro from './component/About/Intro';
import Education from './component/Resume/Education/Education';
import Skills from './component/Resume/Skills/Skills';
import Contact from './component/Contact/Contact';

function App() {
  return <div className = "App" >

<Navbar/>
<Home/>
<Intro/>
<Education/>
<Skills/>
<Projects/>
<Contact/>
    </div>

}

export default App;