import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Exp from './components/Exp';
import SkillHob from './components/SkillHob';
import Contact from './components/Contact';

function Header(){
  return (
    <header className='p-6 border-b border-darkSlateGrey bg-header'>
      <nav className="flex flex-row justify-between">
        <div>
          <NavLink to="/" className='mr-4'>
            Home
          </NavLink>
          <NavLink to="/projects" className='mr-4'>
            Projects
          </NavLink>
          <NavLink to="/experience" className='mr-4'>
            Experience
          </NavLink>
          <NavLink to="/skillshobbies">
            Skills+Hobbies
          </NavLink>
        </div>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/experience" element={<Exp />}/>
      <Route path="/skillshobbies" element={<SkillHob />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col h-screen w-screen max-h-screen max-w-screen overflow-hidden'>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App
