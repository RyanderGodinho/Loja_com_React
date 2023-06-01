import "./style.css";
import logoCubos from "../../assets/logo.svg";

export default function Header() {
  return (
    <div className="container-header">
      <h1>MODA MASCULINA</h1>
      <h2>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h2>
      <img src={logoCubos} alt="logo" />
    </div>
  );
}
