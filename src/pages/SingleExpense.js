import { useParams } from "react-router-dom";
const SingleExpense = () => {
  const { expenseId } = useParams();
  return <div>SingleExpense ;expense id : {expenseId}</div>;
};

export default SingleExpense;
