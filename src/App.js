import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Main from "./components/Main/Main";
import SignUpPage from "./pages/SignUpPage";
import SighInPage from "./pages/SighInPage";
import Admin from "./pages/Admin/Admin";
function App() {
  return (
    <Routes>
      <Route element={<Main></Main>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/signun" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/signin" element={<SighInPage></SighInPage>}></Route>
      </Route>
      <Route path="/admin" element={<Admin></Admin>}></Route>
    </Routes>
  );
}

export default App;
