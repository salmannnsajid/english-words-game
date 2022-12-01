import { GameApp } from "./components/GameApp";
import "./index.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <GameApp />
    </div>
  );
}

export default App;
