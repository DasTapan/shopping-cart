import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Nav from "./components/Nav";
import RouteSwitch from "./components/RouteSwitch";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ErrorBoundary>
          <Nav />
        </ErrorBoundary>
        <RouteSwitch />
      </div>
    </BrowserRouter>
  );
}

export default App;
