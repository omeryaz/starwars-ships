import "./App.css";
import List from "./components/List";
import { Route, Routes } from "react-router-dom";
import ShipDetail from "./components/ShipDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id" element={<ShipDetail />} />
      </Routes>
    </>
  );
}

export default App;
