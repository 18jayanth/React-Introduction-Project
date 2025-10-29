import abc from "../../assets/config.png"
import './header.css'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];


function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const a=reactDescriptions[genRandomInt(2)]
export default function Header() {
  
  return (
    <header>
      <img src={abc} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {a} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}