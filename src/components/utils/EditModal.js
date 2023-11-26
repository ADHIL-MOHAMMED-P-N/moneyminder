import { Button, DatePicker, Form, Input, Modal, Space } from "antd";
import { useState, useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";

const EditModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  selectedTransaction,
}) => {
  const [name, setName] = useState(selectedTransaction.name);
  const [amount, setAmount] = useState(selectedTransaction.amount);
  const [note, setNote] = useState(selectedTransaction.description);
  const [date, setDate] = useState(null); //later change to seletedtransactiondate(since selectedtransaction.date is string is throwing err )
  const { editExpense } = useContext(ExpenseContext);

  const datePickerHandler = (date) => {
    setDate(date);
  };

  const handleOk = () => {
    const newExpense = {
      /*   date: `${year}-${month}-${day}`, */
      date: `${date.year()}-${
        date.month() + 1
      }-${date.date()}` /* dayjs with antd */,
      name,
      amount: +amount, //parsing to number
      description: note,
    };
    console.log(newExpense);
    editExpense(selectedTransaction.id, newExpense);
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Edit Transaction"
        open={isEditModalOpen}
        onOk={handleOk}
        onCancel={() => setIsEditModalOpen(false)}
      >
        <Form layout="vertical" size="large">
          <Form.Item
            label="Transaction Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              type="text"
              placeholder="Eg: Food"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Item>
          <Space size="large">
            <Form.Item label="Amount">
              <Input
                type="number"
                placeholder="Eg: 50"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker value={date} onChange={datePickerHandler} />
            </Form.Item>
          </Space>
          <Form.Item label="Note">
            <Input
              type="text"
              placeholder="Write note about this transaction"
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
            />
          </Form.Item>
          {/*  <Form.Item style={{ marginTop: 25 }}>
            <Button
              type="primary"
              onClick={submitHandler} // best practice is no give a onsubmit in form tag
              disabled={
                name === "" || note === "" || amount == 0 || amount === null
              }
            >
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;
