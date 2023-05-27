import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
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
import Billing from "./pages/Billing";
import SupportDashboard from "./pages/SupportDashboard";
import Cases from "./pages/Cases";
import CreateCases from "./pages/CreateCases";
import Databases from "./pages/Databases";
import CaseUpdate from "./pages/CaseUpdate";

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
          />
          <Route
            path="home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="billing"
            element={
              <RequireAuth>
                <Billing />
              </RequireAuth>
            }
          />

          <Route
            path="support"
            element={
              <RequireAuth>
                <>
                  <Outlet />
                </>
              </RequireAuth>
            }
          >
            <Route path="dashboard" element={<SupportDashboard />} />
            <Route path="cases" element={<Cases />} />
            <Route path="cases/:slug" element={<CaseUpdate />} />
            <Route path="create-cases" element={<CreateCases />} />
            <Route path="databases" element={<Databases />} />
          </Route>

          <Route
            path="select-account"
            element={
              <RequireAuth>
                <SelectAccount />
              </RequireAuth>
            }
          />
          <Route
            path="users"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          />

          <Route
            path="about"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <RequireAuth>
                <PrivacyPolicy />
              </RequireAuth>
            }
          />
          <Route
            path="manage-profile"
            element={
              <RequireAuth>
                <ManageProfile />
              </RequireAuth>
            }
          />
          <Route
            path="my-profile"
            element={
              <RequireAuth>
                <MyProfile />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
