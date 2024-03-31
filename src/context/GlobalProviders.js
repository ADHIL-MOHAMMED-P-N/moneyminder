import { ExpenseProvider } from "./ExpenseContext.js";
import { IncomeProvider } from "./IncomeContext";
import { UserAuthProvider } from "./UserAuthContext.js";
const GlobalProviders = ({ children }) => {
  return (
    <>
      <UserAuthProvider>
        <ExpenseProvider>
          <IncomeProvider>{children}</IncomeProvider>
        </ExpenseProvider>
      </UserAuthProvider>
    </>
  );
};

export default GlobalProviders;
