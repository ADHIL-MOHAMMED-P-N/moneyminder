/* implement pagination and filter */
import { useNavigate } from "react-router-dom";
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
const textStyle = { fontSize: 14, fontWeight: 500, margin: 0 };
/* const linkStyle = { color: "black" }; */
const TableHeader = ({ title, icon }) => {
  return (
    <Space>
      <h3 style={{ fontWeight: 400, color: "gray", fontSize: 12 }}>{title}</h3>
      {icon ? icon : null}
    </Space>
  );
};
const ActionDropdown = () => {
  const items = [
    {
      key: "1",
      label: <p style={{ margin: 0 }}>Edit</p>,
      icon: <EditOutlined />,
    },
    {
      key: "2",
      label: <p style={{ margin: 0 }}>Delete</p>,
      icon: <DeleteOutlined />,
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <Button icon={<SmallDashOutlined />} />
    </Dropdown>
  );
};

const CustomTable = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: (
        <TableHeader
          title="Transaction Date"
          icon={<CalendarOutlined style={{ color: "gray" }} />}
        />
      ),
      dataIndex: "date",
      key: "date",
      render: (text) => <p style={textStyle}>{text}</p>,
    },
    {
      title: (
        <TableHeader
          title="Transaction Name"
          icon={<TransactionOutlined style={{ color: "gray" }} />}
        />
      ),
      dataIndex: "name",
      key: "name",
      render: (text) => <p style={textStyle}>{text}</p>,
    },
    {
      title: (
        <TableHeader
          title="Amount"
          icon={<DollarOutlined style={{ color: "gray" }} />}
        />
      ),
      dataIndex: "amount",
      key: "amount",
      render: (_, record) => <p style={textStyle}>{`$${record.amount}`}</p>,
    },
    {
      title: (
        <TableHeader
          title="Status"
          icon={<MonitorOutlined style={{ color: "gray" }} />}
        />
      ),
      key: "status",
      dataIndex: "status",
      render: (_, record) => (
        <Badge
          style={{
            backgroundColor: record.status === "income" ? "#E9F9F1" : "#FCEBEB",
            color: record.status === "income" ? "#1CA748" : "#F10509",
            fontWeight: 500,
          }}
          count={record.status}
        />
      ),
    },
    {
      title: (
        <TableHeader
          title="Note"
          icon={<SnippetsOutlined style={{ color: "gray" }} />}
        />
      ),
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
      <Table
        onRow={(record) => {
          return {
            onClick: (event) => {
              navigate(
                `/${record.status}/${record.name}`
              ); /* later change record.name to record id */
            },
          };
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default CustomTable;
