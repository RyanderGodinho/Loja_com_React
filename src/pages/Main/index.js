import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Modal from "../../components/Modal";
import { useState } from "react";

function Main() {
  const [shoes, setShoes] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenDescription(shoe) {
    setShoes(shoe);
    setIsOpen(true);
  }

  return (
    <div className="container">
      <Header />
      <Content handleOpenDescription={handleOpenDescription} />
      {isOpen && <Modal shoe={shoes} setIsOpen={setIsOpen} />}
      <Footer />
    </div>
  );
}

export default Main;
