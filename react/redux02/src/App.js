import { Route, Routes } from "react-router-dom";
import Home from  "./components/Home";
import Join from "./components/Join";
import Header from "./components/Header";
import List from "./components/List";
import Login from "./components/Login";
function App() {
  return (
    <div class='p-5'>
      <Header/>
      <div class="mt-5">
      <Routes>
        <Route path="/" element=<Home/>/>
        <Route path="/join" element=<Join/>/>
        <Route path="/list" element=<List/>/>
        <Route path="/login" element=<Login/>/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
