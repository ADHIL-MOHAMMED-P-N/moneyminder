import { useState, useContext } from "react";
import { Button, Form, Input } from "antd";
import ExpenseContext from "../../context/ExpenseContext";

const AddExpense = () => {
  const { addToExpense, expense } = useContext(ExpenseContext);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");

  const submitHandler = () => {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    const newExpense = {
      date: `${year}-${month}-${day}`,
      name,
      amount,
      description: note,
    };
    console.log(expense);
    addToExpense(newExpense);
    setName("");
    setAmount(0);
    setNote("");
  };
  return (
    <>
      <div style={{ maxWidth: 400 }}>
        <Form layout="vertical">
          <Form.Item
            label="Expense Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              type="text"
              placeholder="eg: Food"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="Amount">
            <Input
              type="number"
              placeholder="Enter the expense amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="Note">
            <Input
              type="text"
              placeholder="Write note about this expense"
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={submitHandler}
              disabled={name === "" || note === "" || amount == 0}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddExpense;
