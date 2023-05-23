import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import RequireAdmin from "./auth/RequireAdmin";
import RequireAuth from "./auth/RequireAuth";
import Drawer from "./layout/Drawer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ManageProfile from "./pages/ManageProfile";
import MyProfile from "./pages/MyProfile";
import SelectAccount from "./pages/SelectAccount";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/" element={<Drawer></Drawer>}>
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="about"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="privacy-policy"
            element={
              <RequireAuth>
                <PrivacyPolicy />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="manage-profile"
            element={
              <RequireAuth>
                <ManageProfile />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="my-profile"
            element={
              <RequireAuth>
                <MyProfile />
              </RequireAuth>
            }
          ></Route>

          <Route
            path="select-account"
            element={
              <RequireAuth>
                <SelectAccount />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="users"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
