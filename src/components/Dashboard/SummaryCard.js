/* summary card about income spending balance: used in dahsboard */
import { Card, Typography } from "antd";
import { Line } from "react-chartjs-2";
import { incomeMonthly } from "../../Data/IncomeMonthly";
import { Chart as ChartJS } from "chart.js/auto"; /* mandatory import for showing chart */

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
        style={{
          ...paraStyle,
          color: percentage >= 0 ? "green" : "red",
          fontWeight: 500,
        }}
      >
        {`${percentage} %`}
      </p>
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
const SummaryCard = ({ subtitle, title, paraValue, percentage }) => {
  return (
    <>
      <Card
        size="small"
        loading={false}
        title={<CardTitle title={title} subtitle={subtitle} />}
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
