import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

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
  /* table styles */
  table: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    fontSize: 10,
    gap: 5,
    marginBottom: 5,
  },
  header: {
    borderTop: "none",
  },
  headerCellRed: {
    backgroundColor: "#fcebeb",
    fontWeight: "700",
    fontSize: 14,
  },
  headerCellGreen: {
    backgroundColor: "#e9f9f1",
    fontWeight: "700",
    fontSize: 14,
  },
  bold: {
    fontWeight: "700",
  },
  // So Declarative and unDRY
  col: {
    width: "33.33%",
    padding: 5,
    backgroundColor: "#e6f4ff",
  },
  col2: {
    width: "66.66%",
    padding: 5,
  },
  total: {
    backgroundColor: "#D3D3D3",
  },
  para: {
    fontSize: 12,
    marginTop: 20,
  },
  sideheading: { fontSize: 16, marginTop: 15 },
});

const PdfFile = ({ value }) => {
  const { expense, income } = value;
  //use ?. operator since initially value is coming as undefined
  const today = new Date();
  const month = today.getMonth() + 1;
  const monthExpense = expense?.filter((trans) => {
    const transDate = new Date(trans.date);
    const transMonth = transDate.getMonth() + 1;
    return transMonth === month;
  });
  const monthIncome = income?.filter((trans) => {
    const transDate = new Date(trans.date);
    const transMonth = transDate.getMonth() + 1;
    return transMonth === month;
  });
  const monthName = today.toLocaleString("default", { month: "long" });
  return (
    <>
      <Document>
        <Page size="A4" style={styles.body}>
          <View>
            <Text style={styles.title}>Monthly Income Expense Report</Text>
          </View>
          <Text style={styles.para}>
            This report outlines all income expenses for the month {monthName},
            detailing necessary operational and incidental costs. It includes
            dates, amounts, and brief descriptions for each item, ensuring
            transparency and aiding in budget management.
          </Text>
          <Text style={styles.sideheading}>Expenses - {monthName}</Text>
          {/* Table Expenses*/}
          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={[styles.col, styles.headerCellRed]}>Name</Text>
              <Text style={[styles.col, styles.headerCellRed]}>Date</Text>
              <Text style={[styles.col, styles.headerCellRed]}>Amount</Text>
            </View>

            {!monthExpense && monthExpense?.length === 0 && (
              <Text>No expenses this month</Text>
            )}
            {monthExpense &&
              monthExpense.map((exp) => (
                <View style={[styles.row]} wrap={false} key={exp.id}>
                  <Text style={styles.col}>{exp.name}</Text>
                  <Text style={styles.col}>{exp.date}</Text>
                  <Text style={styles.col}>{exp.amount}</Text>
                </View>
              ))}
            <View style={[styles.row]} wrap={false}>
              <Text style={[styles.col2, styles.total]}>Total Amount</Text>
              <Text style={[styles.col, styles.total]}>
                {monthExpense.reduce((acc, item) => acc + item.amount, 0)}
              </Text>
            </View>
          </View>
          {/* Table Income*/}
          <Text style={styles.sideheading}>Incomes - {monthName}</Text>
          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={[styles.col, styles.headerCellGreen]}>Name</Text>
              <Text style={[styles.col, styles.headerCellGreen]}>Date</Text>
              <Text style={[styles.col, styles.headerCellGreen]}>Amount</Text>
            </View>

            {!monthIncome && monthIncome?.length === 0 && (
              <Text>No incomes this month</Text>
            )}
            {monthIncome &&
              monthIncome.map((inc) => (
                <View style={[styles.row]} wrap={false} key={inc.id}>
                  <Text style={styles.col}>{inc.name}</Text>
                  <Text style={styles.col}>{inc.date}</Text>
                  <Text style={styles.col}>{inc.amount}</Text>
                </View>
              ))}
            <View style={[styles.row]} wrap={false}>
              <Text style={[styles.col2, styles.total]}>Total Amount</Text>
              <Text style={[styles.col, styles.total]}>
                {monthIncome.reduce((acc, item) => acc + item.amount, 0)}
              </Text>
            </View>
          </View>

          {/* bottom */}
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
