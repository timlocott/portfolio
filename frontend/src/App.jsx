import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import WorkExp from './components/WorkExp';
import SkillHob from './components/SkillHob';
import Contact from './components/Contact';

function Header(){
  return (
    <header>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/projects">
        Projects
      </NavLink>
      <NavLink to="/workexperience">
        Work Experience
      </NavLink>
      <NavLink to="/skillshobbies">
        Skills+Hobbies
      </NavLink>
      <NavLink to="/contact">
        Contact
      </NavLink>
    </header>
  )
}

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="workexperience" element={<WorkExp />}/>
      <Route path="/skillshobbies" element={<SkillHob />}/>
       <Route path="/contact" element={<Contact />}/>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  )
}

export default App
