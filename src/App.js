import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Myheader from "./Components/Myheader";
import About from "./Components/About";
import Crypto from "./Components/Crypto";
import Company from "./Components/Company";
import JoinTeam from "./Components/JoinTeam";
import ContactUs from "./Components/ContactUs";
import Myfooter from "./Components/Myfooter";
function App() {
  return (
    <div className=" Bg_all overflow-hidden">
      <Myheader />
      <About />
      <Crypto />
      <Company />
      <JoinTeam />
      <ContactUs/>
      <Myfooter/>
    </div>
  );
}

export default App;
