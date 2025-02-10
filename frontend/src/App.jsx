import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Exp from "./components/Exp";
import SkillHob from "./components/SkillHob";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <header className="p-6 bg-header sticky">
      <nav className="hidden sm:flex flex-row justify-between">
        <div className="flex flex-row w-full justify-center">
          <NavLink to="/" className="mr-6">
            Home
          </NavLink>
          <NavLink to="/projects" className="mr-6">
            Projects
          </NavLink>
          <NavLink to="/experience" className="mr-6">
            Experience
          </NavLink>
          <NavLink to="/skillshobbies">Skills+Hobbies</NavLink>
        </div>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div className="sm:hidden relative">
        <button
          className="border-white border-solid border-2 rounded-lg z-50 py-2 px-4"
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            className={menuIsOpen ? "hidden" : ""}
          />
          <FontAwesomeIcon icon={faX} className={menuIsOpen ? "" : "hidden"} />
        </button>
        {/* <menu className="absolute bg-header top-16 left-0">
          <div className={menuIsOpen ? "" : "hidden"}>
            <NavLink
              to="/"
              className="block"
              onClick={() => setMenuIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="block"
              onClick={() => setMenuIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/experience"
              className="block"
              onClick={() => setMenuIsOpen(false)}
            >
              Experience
            </NavLink>
            <NavLink
              to="/skillshobbies"
              className="block"
              onClick={() => setMenuIsOpen(false)}
            >
              Skills+Hobbies
            </NavLink>
            <NavLink
              to="/contact"
              className="block"
              onClick={() => setMenuIsOpen(false)}
            >
              Contact
            </NavLink> */}
        <motion.div
          initial={{ y: "-150%", opacity: 0 }}
          animate={{
            y: menuIsOpen ? "0%" : "-150%",
            opacity: menuIsOpen ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-[80px] left-0 w-full h-full bg-header z-40"
        >
          <div className="p-2">
            <NavLink
              to="/"
              className="p-4 block rounded-md"
              activeClassName="active"
              onClick={() => setMenuIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="p-4 block rounded-md"
              onClick={() => setMenuIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/experience"
              className="p-4 block rounded-md"
              onClick={() => setMenuIsOpen(false)}
            >
              Experience
            </NavLink>
            <NavLink
              to="/skillshobbies"
              className="p-4 block rounded-md"
              onClick={() => setMenuIsOpen(false)}
            >
              Skills+Hobbies
            </NavLink>
            <NavLink
              to="/contact"
              className="p-4 block rounded-md"
              onClick={() => setMenuIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </motion.div>
        {/* </div> */}
        {/* </menu> */}
      </div>
    </header>
  );
}

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Exp />} />
      <Route path="/skillshobbies" element={<SkillHob />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen w-screen max-w-screen scroll-none overflow-hidden">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
