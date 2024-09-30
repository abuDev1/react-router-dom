import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

//Pages
import { HomePage } from "./pages/HomePage";
import { Features } from "./pages/Features";
import { Contacts } from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
