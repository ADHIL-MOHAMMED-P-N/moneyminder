import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";
import Income from "./pages/Income";
import Report from "./pages/Report";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Account from "./pages/Account.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        {/* Inside routes */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          {/* to navigate from / for /dashboard */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="expense" element={<Expense />} />
          <Route path="income" element={<Income />} />
          <Route path="report" element={<Report />} />
          <Route path="account" element={<Account />} />
        </Route>
        {/* error routes */}
        <Route path="/404" element={<Error404 />} />
        <Route path="/500" element={<Error500 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
