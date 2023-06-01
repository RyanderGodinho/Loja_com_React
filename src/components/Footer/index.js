import "./style.css";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

export default function Footer() {
  return (
    <div className="container-app-footer">
      <div className="container-left">
        <div className="container-address">
          <strong>Endereços:</strong>

          <span>Rua Cubos, 10</span>
          <span>Jardim Academy</span>
          <span>Salvador - Bahia - CEP 41820-021</span>
        </div>
        <div className="container-social-midia">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
      <span className="decorative-line"></span>
      <div className="container-rigth">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
