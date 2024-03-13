import { FilePdfOutlined } from "@ant-design/icons";
import { PDFDownloadLink, PDFRenderer, PDFViewer } from "@react-pdf/renderer";
import { Button, Card } from "antd";
import React from "react";
import PdfFile from "../components/utils/PdfFile";

const Report = () => {
  return (
    <>
      <Card
        className="border-radius-0 shadow"
        size="small"
        loading={false}
        style={{ paddingLeft: 10, paddingRight: 10 }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-lg">Monthly Report</h2>
            <p className="text-base">
              Download monthly income expense report of March
            </p>
          </div>
          <PDFDownloadLink document={<PdfFile />} fileName="Monthly Report">
            {({ loading }) =>
              loading ? (
                <Button>Loading</Button>
              ) : (
                <Button icon={<FilePdfOutlined />}>Download</Button>
              )
            }
          </PDFDownloadLink>
          {/* <Button icon={<FilePdfOutlined />}>Download</Button> */}
        </div>
      </Card>
      <div className="border border-black">
        <PDFViewer className="w-full h-[700px]">
          <PdfFile />
        </PDFViewer>
      </div>
    </>
  );
};

export default Report;
