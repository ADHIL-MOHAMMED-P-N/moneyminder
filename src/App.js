import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";
import SingleExpense from "./pages/SingleExpense";
import Income from "./pages/Income";
import SingleIncome from "./pages/SingleIncome";
import Report from "./pages/Report";
import Borrowings from "./pages/Borrowings";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import Error404 from "./pages/Error404";
import Account from "./pages/Account.js";
import { ExpenseProvider } from "./context/ExpenseContext";
import { IncomeProvider } from "./context/IncomeContext";
import { UserAuthProvider } from "./context/UserAuthContext.js";
import ProtectedRoute from "./components/utils/ProtectedRoute.js";
import GlobalProviders from "./context/GlobalProviders.js";
function App() {
  return (
    <GlobalProviders>
      <BrowserRouter>
        <Routes>
          {/* auth routes */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          {/* Inside routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomeLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard" />} />
            {/* to navigate from / for /dashboard */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="expense" element={<Expense />} />
            <Route path="expense/:expenseId" element={<SingleExpense />} />
            {/* no shared ui so no need to nest expense/id inside expense */}
            <Route path="income" element={<Income />} />
            <Route path="income/:incomeId" element={<SingleIncome />} />
            <Route path="borrowings" element={<Borrowings />} />
            <Route path="report" element={<Report />} />
            <Route path="account" element={<Account />} />
          </Route>
          {/* error routes */}
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </GlobalProviders>
  );
}

export default App;
