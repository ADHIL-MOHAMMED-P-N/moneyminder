/* summary card about income spending balance: used in dahsboard */
import { Card, Typography } from "antd";
import GraphUpImage from "../../assets/img/graphup.png";
import GraphDownImage from "../../assets/img/graphdown.png";

const { Title } = Typography;
const { Meta } = Card;
const paraStyle = { margin: 0, fontWeight: 400, color: "rgba(0, 0, 0, 0.45)" };
const CardTitle = ({ title, subtitle }) => {
  return (
    <>
      <p style={paraStyle}>{subtitle}</p>
      <Title
        style={{ margin: 0, marginBottom: 10, fontWeight: "bold" }}
        level={3}
      >
        {title}
      </Title>
    </>
  );
};
const MetaDescription = ({ paraValue, percentage }) => {
  return (
    <>
      <p style={paraStyle}>
        Last Month : <span style={{ color: "#1677ff" }}>{paraValue} </span>
      </p>
      {!isNaN(percentage) && percentage && (
        <p className="text-xs">
          Percentage Change with respect to last month : {percentage} %
        </p>
      )}
    </>
  );
};
const Percentage = ({ percentage }) => {
  return (
    <>
      {!isNaN(percentage) && percentage && (
        <p
          className="text-center"
          style={{
            ...paraStyle,
            color: percentage >= 0 ? "green" : "red",
            fontWeight: 500,
          }}
        >
          {`${percentage} %`}
        </p>
      )}
      <img
        src={percentage >= 0 ? GraphUpImage : GraphDownImage}
        alt="graph"
        className="w-28"
      />
    </>
  );
};
/* const Graph = () => {
  const chartData = {
    labels: incomeMonthly.map((eachincome) => eachincome.month),
    datasets: [
      {
        label: "Income",
        data: incomeMonthly.map((eachincome) => eachincome.monthlyexpense),
      },
    ],
  };
  return (
    <div style={{ width: 200 }}>
      <Line data={chartData} />
    </div>
  );
}; */
const SummaryCard = ({ subtitle, transaction }) => {
  //finding current month
  const today = new Date();
  const month = today.getMonth();
  // finding monthlyexpense from all
  /*  const monthTransaction = transaction.filter((trans) => {
    const transDate = new Date(trans.date);
    const transMonth = transDate.getMonth() + 1;
    return transMonth === month;
  });

  const totalMonthTransaction = monthTransaction
    .map((item) => item.amount)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2); */
  const calculatePercentageChange = (oldValue, newValue) => {
    if (oldValue == 0) return null;
    const change = newValue - oldValue;
    const percentageChange = (change / oldValue) * 100;
    return percentageChange.toFixed(2);
  };

  const calculateCurrentMonthAmount = (transaction, month) => {
    return transaction
      .filter((item) => new Date(item.date).getMonth() === month)
      .reduce((acc, item) => acc + item.amount, 0)
      .toFixed(2);
  };

  const totalMonthTransaction = calculateCurrentMonthAmount(transaction, month); //current
  const previousMonthTransaction = calculateCurrentMonthAmount(
    transaction,
    month - 1
  ); /* fix:make it work on jan (since its month is 0) */
  const paraValue = previousMonthTransaction;
  const percentage = calculatePercentageChange(
    previousMonthTransaction,
    totalMonthTransaction
  );

  return (
    <>
      <Card
        className="border-radius-0 summary__card shadow"
        size="small"
        loading={false}
        title={
          <CardTitle title={`$${totalMonthTransaction}`} subtitle={subtitle} />
        }
        extra={<Percentage percentage={percentage} />}
        style={{
          /*  width: 300, */
          padding: 10,
        }}
      >
        <Meta
          description={
            <MetaDescription paraValue={paraValue} percentage={percentage} />
          }
        />
      </Card>
    </>
  );
};

export default SummaryCard;
