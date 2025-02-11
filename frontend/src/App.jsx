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
import portLogo from "./assets/portLogo.png";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <header className={`p-6 bg-header sticky z-50`}>
      {/* sm breakpoint */}
      <nav className="hidden sm:flex flex-row justify-between">
        <div className="flex flex-row w-full justify-center">
          <NavLink to="/" className="mr-6 rounded-lg p-2">
            Home
          </NavLink>
          <NavLink to="/projects" className="mr-6 rounded-lg p-2">
            Projects
          </NavLink>
          <NavLink to="/experience" className="mr-6 rounded-lg p-2">
            Experience
          </NavLink>
          <NavLink to="/skillshobbies" className="rounded-lg p-2">
            Skills+Hobbies
          </NavLink>
        </div>
        <NavLink to="/contact" className="rounded-lg p-2">
          Contact
        </NavLink>
      </nav>
      {/* Mobile view */}
      <div className="sm:hidden relative z-50">
        <div className="flex flex-row justify-between">
          <button
            className="border-white border-solid border-2 active:border-lighterSlateGrey active:text-lighterSlateGrey rounded-lg z-50 py-2 px-4"
            onClick={() => {
              setMenuIsOpen(!menuIsOpen);
            }}
          >
            <FontAwesomeIcon
              icon={faBars}
              className={` ${menuIsOpen ? "hidden" : ""}`}
            />
            <FontAwesomeIcon
              icon={faX}
              className={` ${menuIsOpen ? "" : "hidden"}`}
            />
          </button>
          <NavLink
            to="/"
            className="!bg-transparent"
            onClick={() => setMenuIsOpen(false)}
          >
            <img src={portLogo} className="sm:hidden w-12 rounded-lg" />
          </NavLink>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: menuIsOpen ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`fixed top-[90px] left-0 w-full h-full bg-header ${
            menuIsOpen ? "z-50" : "hidden"
          }`}
        >
          <div className="p-2">
            <NavLink
              to="/"
              className="p-4 block rounded-md"
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
      <div className="flex flex-col h-screen w-screen max-w-screen max-h-screen scroll-none overflow-hidden">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
