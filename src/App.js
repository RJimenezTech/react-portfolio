import React, { useState } from "react";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");
  const renderPage = () => {
    if (currentPage === "About Me") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact Me") {
      return <Contact />;
    }
  };
  return (
    <div className="App">
      <Header></Header>
      <Nav setCurrentPage={setCurrentPage}></Nav>
      <main>{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
