import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Main from "./components/Main/Main";
function App() {
  return (
    <Routes>
      <Route element={<Main></Main>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
