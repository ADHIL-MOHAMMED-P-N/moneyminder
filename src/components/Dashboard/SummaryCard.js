/* summary card about income spending balance: used in dahsboard */
import { Card, Typography } from "antd";
const { Title } = Typography;
const { Meta } = Card;

const paraStyle = { margin: 0, fontWeight: 400, color: "rgba(0, 0, 0, 0.45)" };

const CardTitle = () => {
  return (
    <>
      <p style={paraStyle}>Income</p>
      <Title style={{ margin: 0, fontWeight: "bold" }} level={4}>
        $59,839.80
      </Title>
    </>
  );
};
const MetaDescription = () => {
  return (
    <>
      <p style={paraStyle}>
        Your balance bigger <span style={{ color: "#1677ff" }}>$8,219.00 </span>
        last month
      </p>
    </>
  );
};
const Graph = () => {
  return <>Graph</>;
};
const SummaryCard = () => {
  return (
    <>
      <Card
        size="small"
        loading={false}
        title={<CardTitle />}
        /*  extra={<Graph />} */
        style={{
          width: 300,
        }}
      >
        <Meta description={<MetaDescription />} />
      </Card>
      <Graph />
    </>
  );
};

export default SummaryCard;
