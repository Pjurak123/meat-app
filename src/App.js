import "./App.css";
import Cow from "./components/Cow_part/Cow";
import Landing from "./components/Landing_page/Landing";
import Meat from "./components/Meat_part/Meat";

function App() {
  return (
    <div className="App">
      <Landing />
      <Cow />
      <Meat />
    </div>
  );
}

export default App;
