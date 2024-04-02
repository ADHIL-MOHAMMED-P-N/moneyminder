import { DatePicker, Form, Input, Modal, Space } from "antd";
import { useState, useContext } from "react";
import ExpenseContext from "../../context/ExpenseContext";
import IncomeContext from "../../context/IncomeContext";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import locale from "antd/locale/zh_CN";

const EditModal = ({
  isEditModalOpen,
  setIsEditModalOpen,
  selectedTransaction,
}) => {
  const [name, setName] = useState(selectedTransaction.name);
  const [amount, setAmount] = useState(selectedTransaction.amount);
  const [note, setNote] = useState(selectedTransaction.description);
  const [date, setDate] = useState(dayjs(selectedTransaction.date)); //later change to seletedtransactiondate(since selectedtransaction.date is string is throwing err )
  const { editExpense } = useContext(ExpenseContext);
  const { editIncome } = useContext(IncomeContext);

  const datePickerHandler = (date) => {
    setDate(date);
  };
  //write condition for the income also based on the record.status values
  const handleOk = () => {
    const editedTransaction = {
      /*   date: `${year}-${month}-${day}`, */
      date: `${date.year()}-${
        date.month() + 1
      }-${date.date()}` /* dayjs with antd */,
      name,
      amount: +amount, //parsing to number
      description: note,
    };
    if (selectedTransaction.status === "expense") {
      editExpense(selectedTransaction.id, editedTransaction);
    }
    if (selectedTransaction.status === "income") {
      editIncome(selectedTransaction.id, editedTransaction);
    }

    setIsEditModalOpen(false);
    //bug: after deleting one item , edit next item, states of deleted item comes in forms
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
              <DatePicker
                value={date}
                onChange={datePickerHandler}
                /* defaultValue={dayjs(selectedTransaction.date, "YYYY-MM-DD")} */
              />
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
