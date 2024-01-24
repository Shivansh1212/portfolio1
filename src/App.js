import Background from "./components/background";
import Connect from "./components/connect";
import Contact from "./components/contact";
import Expertise from "./components/expertise";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import Socials from "./components/socials";
import Tech from "./components/tech";

function App() {
  return (
    <div className="App">
    <Background/>
    <Header/>
    <Home/>
    <Expertise/>
    <div className=" h-40"></div>
    <Projects/>
    <Tech/>
    <Contact/>
    <Connect/>
    <Socials/>
    </div>
  );
}

export default App;
