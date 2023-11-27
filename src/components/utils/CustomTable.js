/* implement pagination and filter */
import { useNavigate } from "react-router-dom";
import { Space, Table, Dropdown, Button, Badge, Modal } from "antd";
import { useState, useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";
import IncomeContext from "../../context/IncomeContext";
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
import EditModal from "./EditModal";

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

const ActionDropdown = ({ record }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { deleteExpense } = useContext(ExpenseContext);
  const { deleteIncome } = useContext(IncomeContext);

  const handleOkDeleteModal = (record) => {
    //since there is one table for both income nd expense, based on staus changing crud operation
    if (record.status === "expense") {
      deleteExpense(record.id);
    }
    if (record.status === "income") {
      deleteIncome(record.id);
    }
    setIsDeleteModalOpen(false);
  };

  const items = [
    {
      key: "1",
      label: <Button onClick={() => setIsEditModalOpen(true)}>Edit</Button>,
      icon: <EditOutlined />,
    },
    {
      key: "2",
      label: <Button onClick={() => setIsDeleteModalOpen(true)}>Delete</Button>,
      icon: <DeleteOutlined />,
    },
  ];
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Button icon={<SmallDashOutlined />} />
      </Dropdown>
      {/* modal only render based on isDeleteModalOpen state*/}
      <Modal
        title="Delete Transaction"
        open={isDeleteModalOpen}
        onOk={() => handleOkDeleteModal(record)}
        onCancel={() => setIsDeleteModalOpen(false)}
      >
        Do you want to delete this transaction <b>{record.name}</b> ?
      </Modal>

      {/* modal based on isEditModalOpen state */}
      <EditModal
        selectedTransaction={record}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
    </>
  );
};

const CustomTable = ({ data }) => {
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
      key: "description",
      dataIndex: "description",
      render: (text) => <p style={textStyle}>{text}</p>,
    },
    {
      title: <TableHeader title="Action" />,
      key: "action",
      render: (_, record) => <ActionDropdown record={record} />,
    },
  ];

  return (
    <>
      <Table
        /*         onRow={(record) => {
          return {
            onClick: (event) => {
              navigate(
                `/${record.status}/${record.name}`
              ); //later change record.name to record id 
            },
          };
        }} */
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default CustomTable;
