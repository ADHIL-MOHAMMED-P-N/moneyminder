import { useState } from "react";
import { Button, Form, Input } from "antd";
const AddExpense = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  return (
    <>
      <div style={{ maxWidth: 400 }}>
        <Form layout="vertical">
          <Form.Item label="Expense Name">
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
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddExpense;
