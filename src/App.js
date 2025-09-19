import "./App.css";
import Portfolio from "./Portfolio";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <Analytics />
    </div>
  );
}

export default App;
