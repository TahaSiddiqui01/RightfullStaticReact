import React from "react";
import { Navbar } from "react-bootstrap";
import ContactForm from "./components/ContactForm/ContactForm";
import NavbarCompo from "./components/Navbar/NavbarCompo";

function App() {
  return (
    <>
      <NavbarCompo />
      <ContactForm/>
    </>
  );
}

export default App;
