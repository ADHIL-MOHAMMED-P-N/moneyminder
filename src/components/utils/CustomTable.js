import { Space, Table } from "antd";
import { TransactionOutlined } from "@ant-design/icons";
const TableHeader = ({ title, icon }) => {
  return (
    <Space>
      <h3 style={{ fontWeight: "500", color: "gray", fontSize: 14 }}>
        {title}
      </h3>
      {icon ? icon : null}
    </Space>
  );
};
const CustomTable = () => {
  const columns = [
    {
      title: (
        <TableHeader title="Transaction Date" icon={<TransactionOutlined />} />
      ),
      dataIndex: "date",
      key: "date",
      render: (text) => <a>{text}</a>,
    },
    {
      title: (
        <TableHeader title="Transaction Name" icon={<TransactionOutlined />} />
      ),
      dataIndex: "name",
      key: "name",
    },
    {
      title: <TableHeader title="Amount" icon={<TransactionOutlined />} />,
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: <TableHeader title="Status" icon={<TransactionOutlined />} />,
      key: "status",
      dataIndex: "status",
    },
    {
      title: <TableHeader title="Note" icon={<TransactionOutlined />} />,
      key: "note",
      dataIndex: "note",
    },
  ];
  const data = [
    {
      date: "01-02-2023",
      name: "Food",
      amount: 200,
      status: "income",
      note: "Lunch Canteen",
    },
    {
      date: "01-02-2023",
      name: "Food",
      amount: 200,
      status: "income",
      note: "Lunch Canteen",
    },
    {
      date: "01-02-2023",
      name: "Food",
      amount: 200,
      status: "income",
      note: "Lunch Canteen",
    },
    {
      date: "01-02-2023",
      name: "Food",
      amount: 200,
      status: "income",
      note: "Lunch Canteen",
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default CustomTable;
