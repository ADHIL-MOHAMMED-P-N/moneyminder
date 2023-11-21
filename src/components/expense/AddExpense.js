import { useState, useContext } from "react";
import { Button, Form, Input, DatePicker, Space, Card } from "antd";
import ExpenseContext from "../../context/ExpenseContext";

const AddExpense = () => {
  const { addToExpense } = useContext(ExpenseContext);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(null);
  const [note, setNote] = useState("");
  const [date, setDate] = useState(null);

  //datepicker
  const datePickerHandler = (date) => {
    setDate(date);
  };

  //submisssion
  const submitHandler = () => {
    /*   const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear(); */
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
    addToExpense(newExpense);
    setName("");
    setAmount(0);
    setNote("");
    setDate(null);
  };
  return (
    <>
      <div>
        <Card
          size="small"
          loading={false}
          style={{ paddingLeft: 10, paddingRight: 10 }}
        >
          <Form layout="vertical" size="large">
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
                placeholder="Write note about this expense"
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item style={{ marginTop: 25 }}>
              <Button
                type="primary"
                onClick={submitHandler}
                disabled={
                  name === "" || note === "" || amount == 0 || amount === null
                }
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default AddExpense;
