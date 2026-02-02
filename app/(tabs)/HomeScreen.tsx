import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.area}>
      {/* header */}
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>QuickServe Seller</Text>
          <Text style={styles.secondTitle}> Brew & Bites Cafe</Text>
        </View>
        {/* online */}
        {/* <Switch value={true} /> */}
      </View >
      {/*  CARDS */}
      <View style={styles.div}>
        {/*  for Today orders */}
        <View style={styles.card}>
          <Text style={styles.label}>Today's Orders</Text>
          <Text style={styles.count}>24</Text>
          <Text style={styles.change}>+12%</Text>
        </View>
        {/* for todays revenue */}
        <View style={styles.card}>
          <Text style={styles.label}>Today's Revenue</Text>
          <Text style={styles.count}>₦45,230</Text>
        </View>
        {/* Pending Orders */}
        <View style={styles.card}>
          <Text style={styles.label}>Pending Orders</Text>
          <Text style={styles.counts}>5</Text>
        </View>
        {/* active products */}
        <View style={styles.card}>
          <Text style={styles.label}>Active Products</Text>
          <Text style={styles.count}>87</Text>
        </View>
      </View>
      {/* Quick Actions */}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  area: {
    // backgroundColor: "#F3F4F6",
  },

  container: {
    backgroundColor: "#F3F4F6",
    paddingLeft: 16,
    // paddingRight: 16,
    paddingTop: 24,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  div: {
    backgroundColor: "#F3F4F6",
    paddingTop: 20,
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    // marginBottom: 16,
  },
  secondTitle: {
    color: "#6B7280",
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    width: "49%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 10,
    borderRadius: 20,
    marginBottom: 16,

  },
  label: {
    fontSize: 14, // text-sm
    color: "#6B7280", // text-gray-500
    marginBottom: 8, // mb-2
  },
  count: {
    fontSize: 24, // text-2xl
    fontWeight: "700", // font-bold
    color: "#111827", // text-gray-900
  },
  counts:{
    fontSize: 24, // text-2xl
    fontWeight: "700", // font-bold
    color: "#F59E0B", // text-amber-500
  },
  change: {
    fontSize: 12, // text-xs
    color: "#22C55E", // text-green-500
    marginTop: 4, // mt-1
  },
});
