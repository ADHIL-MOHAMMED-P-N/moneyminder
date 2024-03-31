import { FilePdfOutlined } from "@ant-design/icons";
import { PDFDownloadLink, PDFRenderer, PDFViewer } from "@react-pdf/renderer";
import { Button, Card } from "antd";
import PdfFile from "../components/utils/PdfFile";
import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import IncomeContext from "../context/IncomeContext";

const Report = () => {
  const { expense } = useContext(ExpenseContext);
  const { income } = useContext(IncomeContext);

  return (
    <>
      <Card
        className="border-radius-0 shadow"
        size="small"
        loading={false}
        style={{ paddingLeft: 10, paddingRight: 10 }}
      >
        <div className="flex justify-between items-center ">
          <div>
            <h2 className="font-bold text-lg">Monthly Report</h2>
            <p className="text-base">
              Download monthly income expense report of March
            </p>
          </div>
          <PDFDownloadLink
            document={<PdfFile value={{ expense, income }} />}
            fileName="Monthly Report"
          >
            {({ loading }) =>
              loading ? (
                <Button className="border-radius-0">Loading</Button>
              ) : (
                <Button className="border-radius-0" icon={<FilePdfOutlined />}>
                  Download
                </Button>
              )
            }
          </PDFDownloadLink>
          {/* <Button icon={<FilePdfOutlined />}>Download</Button> */}
        </div>
      </Card>
      <div className=" mt-4 p-10 flex justify-center items-center">
        <PDFViewer className="w-full max-w-[800px] h-[700px]">
          <PdfFile value={{ expense, income }} />
        </PDFViewer>
      </div>
    </>
  );
};

export default Report;
