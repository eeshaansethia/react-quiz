import Home from "./components/Home";
import Play from "./components/Play"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz" element={<Play/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
