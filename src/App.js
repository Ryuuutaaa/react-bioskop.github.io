import logo from "./logo.svg";
import "./App.css";
import NavigasionBar from "./components/NavigasionBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/Superhero";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* Intro section */}
      <div className="myBg ">
        <NavigasionBar />
        <Intro />
      </div>
      {/* end of intros */}

      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End  trending */}

      {/* Superhero Section */}
      <div className="superhero">
        <SuperHero />
      </div>
      {/* End superhero */}
    </div>
  );
}

export default App;
