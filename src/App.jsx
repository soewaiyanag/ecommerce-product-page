import "./App.scss";
import Nav from "./components/Nav";
import LightBox from "./components/LightBox";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App--container">
        <LightBox />
        <Main />
      </div>
    </div>
  );
}

export default App;
