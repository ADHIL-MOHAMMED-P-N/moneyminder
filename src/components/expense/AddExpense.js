import { useState, useContext } from "react";
import { Button, Form, Input, DatePicker, Space, Card } from "antd";
import ExpenseContext from "../../context/ExpenseContext";
import { useUserAuth } from "../../context/UserAuthContext";

const AddExpense = () => {
  const { addToExpense } = useContext(ExpenseContext);
  const { user } = useUserAuth();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(null);
  const [note, setNote] = useState("");
  const [date, setDate] = useState(null);

  //datepicker
  const datePickerHandler = (date) => {
    setDate(date);
  };

  //submisssion
  const submitHandler = (e) => {
    /*   const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear(); */
    const newExpense = {
      /*   date: `${year}-${month}-${day}`, */
      userId: user.uid,
      date: `${date.year()}-${
        date.month() + 1
      }-${date.date()}` /* dayjs with antd */,
      name,
      amount: +amount, //parsing to number
      description: note,
    };

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
          className="border-radius-0 shadow"
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
                className="rounded-none p-2 "
                type="text"
                placeholder="Eg: Food"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Item>
            <div className="flex space-x-4 items-center">
              <Form.Item label="Amount" className="flex-1">
                <Input
                  className="rounded-none p-2 "
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
                  className="rounded-none p-2 "
                  value={date}
                  onChange={datePickerHandler}
                />
              </Form.Item>
            </div>
            <Form.Item label="Note">
              <Input
                className="rounded-none p-2 "
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
                block
                className="border-radius-0 bg-blue-500 border-none text-white  hover:bg-blue-400 btn-primary"
                onClick={
                  submitHandler
                } /* best practice is no give a onsubmit in form tag */
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
