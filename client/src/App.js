import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Menu from "./views/Menu";
import EventForm from "./views/EventForm";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} default />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/eventform" element={<EventForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
