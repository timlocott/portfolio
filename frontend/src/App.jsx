import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Exp from './components/Exp';
import SkillHob from './components/SkillHob';
import Contact from './components/Contact';

function Header(){
  return (
    <header className='p-6 bg-header sticky'>
      <nav className="flex flex-row justify-between">
        <div className='flex flex-row w-full justify-center'>
          <NavLink to="/" className='mr-6'>
            Home
          </NavLink>
          <NavLink to="/projects" className='mr-6'>
            Projects
          </NavLink>
          <NavLink to="/experience" className='mr-6'>
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
      <div className='flex flex-col h-screen w-screen max-w-screen min-w-64 overscroll-none'>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App
