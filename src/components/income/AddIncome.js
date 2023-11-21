import { useState, useContext } from "react";
import { Button, Form, Input, DatePicker, Space, Card } from "antd";
import IncomeContext from "../../context/IncomeContext";

const AddIncome = () => {
  const { addToIncome } = useContext(IncomeContext);

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
    const newIncome = {
      date: `${date.year()}-${date.month() + 1}-${date.date()}`,
      name,
      amount: +amount,
      description: note,
    };

    addToIncome(newIncome);
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
              label="Income Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                type="text"
                placeholder="Eg: Salary"
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
                  placeholder="Eg: 10,000"
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
                placeholder="Write note about this income"
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

export default AddIncome;
