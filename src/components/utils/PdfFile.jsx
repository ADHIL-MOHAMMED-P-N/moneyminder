import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

const PdfFile = () => {
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      fontFamily: "Times-Roman",
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 10,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
    footer: {
      bottom: 50,
      left: 0,
      right: 0,
      position: "absolute",
      textAlign: "center",
      fontSize: 8,
      color: "grey",
    },
  });
  return (
    <>
      <Document>
        <Page size="A4" style={styles.body}>
          <View>
            <Text style={styles.title}>Monthly Income Expense Report</Text>
          </View>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
          <Text style={styles.footer} fixed>
            Created with MoneyMinder
          </Text>
        </Page>
      </Document>
    </>
  );
};

export default PdfFile;
