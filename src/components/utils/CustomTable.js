import { Space, Table, Dropdown, Button, Badge } from "antd";
import {
  CalendarOutlined,
  DeleteOutlined,
  DollarOutlined,
  EditOutlined,
  MonitorOutlined,
  SmallDashOutlined,
  SnippetsOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
const textStyle = { fontSize: 16, fontWeight: "bold" };
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
const ActionDropdown = () => {
  const items = [
    {
      key: "1",
      label: <p>Edit</p>,
      icon: <EditOutlined />,
    },
    {
      key: "2",
      label: <p>Delete</p>,
      icon: <DeleteOutlined />,
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <Button shape="default" icon={<SmallDashOutlined />} />
    </Dropdown>
  );
};

const CustomTable = () => {
  const columns = [
    {
      title: (
        <TableHeader title="Transaction Date" icon={<CalendarOutlined />} />
      ),
      dataIndex: "date",
      key: "date",
      render: (text) => <p style={textStyle}>{text}</p>,
    },
    {
      title: (
        <TableHeader title="Transaction Name" icon={<TransactionOutlined />} />
      ),
      dataIndex: "name",
      key: "name",
      render: (text) => <p style={textStyle}>{text}</p>,
    },
    {
      title: <TableHeader title="Amount" icon={<DollarOutlined />} />,
      dataIndex: "amount",
      key: "amount",
      render: (_, record) => <p style={textStyle}>{`$${record.amount}`}</p>,
    },
    {
      title: <TableHeader title="Status" icon={<MonitorOutlined />} />,
      key: "status",
      dataIndex: "status",
      render: (_, record) => (
        <Badge
          style={{
            backgroundColor: record.status === "income" ? "#52c41a" : "#ff4d4f",
          }}
          count={record.status}
        />
      ),
    },
    {
      title: <TableHeader title="Note" icon={<SnippetsOutlined />} />,
      key: "note",
      dataIndex: "note",
      render: (text) => <p style={textStyle}>{text}</p>,
    },
    {
      title: <TableHeader title="Action" />,
      key: "action",
      render: () => <ActionDropdown />,
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
      date: "02-02-2023",
      name: "Transportation",
      amount: 50,
      status: "expense",
      note: "Bus fare",
    },
    {
      date: "03-02-2023",
      name: "Salary",
      amount: 1500,
      status: "income",
      note: "Monthly salary",
    },
    {
      date: "04-02-2023",
      name: "Shopping",
      amount: 300,
      status: "expense",
      note: "Clothing",
    },
    {
      date: "05-02-2023",
      name: "Utilities",
      amount: 100,
      status: "expense",
      note: "Electricity bill",
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default CustomTable;
