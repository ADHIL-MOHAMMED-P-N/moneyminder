import { useParams } from "react-router-dom";
const SingleIncome = () => {
  const { incomeId } = useParams();
  return <div>SingleIncome; incomeid : {incomeId}</div>;
};

export default SingleIncome;
