import VendingMachine from "./pages/VendingMachine";
import Ships from "./pages/Ships";
import Soda from "./pages/Soda";
import Sardines from "./pages/Sardines";
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <main className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<VendingMachine />} />
      <Route exact path="/ships" element={<Ships />} />
      <Route exact path="/soda" element={<Soda />} />
      <Route exact path="/sardines" element={<Sardines />} />
    </Routes>
  </BrowserRouter>
    </main>
    
  );
}

export default App;
