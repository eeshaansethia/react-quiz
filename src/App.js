import Home from "./components/Home";
import Play from "./components/Play"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz" element={<Play/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
