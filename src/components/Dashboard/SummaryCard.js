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
const MetaDescription = ({ paraValue }) => {
  return (
    <>
      <p style={paraStyle}>
        Your balance bigger{" "}
        <span style={{ color: "#1677ff" }}>{paraValue} </span>
        last month
      </p>
    </>
  );
};
const Percentage = ({ percentage }) => {
  return (
    <>
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
const SummaryCard = ({ subtitle, transaction, paraValue, percentage }) => {
  //finding current month
  const today = new Date();
  const month = today.getMonth() + 1;
  // finding monthlyexpense from all
  const monthTransaction = transaction.filter((trans) => {
    const transDate = new Date(trans.date);
    const transMonth = transDate.getMonth() + 1;
    return transMonth === month;
  });

  const totalMonthTransaction = monthTransaction
    .map((item) => item.amount)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

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
        <Meta description={<MetaDescription paraValue={paraValue} />} />
      </Card>
    </>
  );
};

export default SummaryCard;
