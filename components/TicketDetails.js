import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  WebView,
  Linking,
  TouchableHighlight
} from "react-native";
import { Card, ListItem, Divider, List, Icon } from "react-native-elements";
import { MainHeader } from "./Common/Header";
import { Btn } from "./Common/Button";

// const data = {
//   amount_due: "20",
//   county: "K",
//   fine_amount: "45",
//   interest_amount: "0",
//   issue_date: "06/01/2018",
//   issuing_agency: "TRAFFIC",
//   license_type: "PAS",
//   payment_amount: "45",
//   penalty_amount: "30",
//   plate: "GRF2115",
//   precinct: "061",
//   reduction_amount: "0",
//   state: "NY",
//   summons_image:
//     "http://nycserv.nyc.gov/NYCServWeb/ShowImage?searchID=VDBSWk1rOVVTVEpOVkdzd1RuYzlQUT09&locationName=_____________________",
//   summons_image_description: "View Summons",
//   summons_number: "8669261947",
//   violation: "NO PARKING-STREET CLEANING",
//   violation_status: "HEARING HELD-GUILTY",
//   violation_time: "11:08A"
// };

class TicketDetails extends Component {


  openImage() {
    Linking.openURL(this.props.TicketsDetails.summons_image);
  }
  render() {
    const data  = this.props.TicketsDetails;
    total = () => {
      return Number(data.amount_due) + Number(data.fine_amount) +
          Number(data.penalty_amount)
    }
    const { rowLineStyle, container, rowLineStyle1 } = styles;
    const image = "http://www.lib.niu.edu/1956/im5606110-1.jpg";
    return (
      <View style={container}>
        <MainHeader
          centerComponent={{
            text: `Ticket Number: ${data.summons_number}`,
            style: { color: "#fff" }
          }}
        />
        <Card title={data.summons_number} >
          <View style={rowLineStyle} >
            <Text style={{fontSize: 17}}>Fine Amount</Text>
            <Text style={{fontSize: 17}}>{data.fine_amount}$</Text>
          </View>

          <View style={rowLineStyle1} >
            <Text style={{fontSize: 17}}>Issue Date</Text>
            <Text style={{fontSize: 17}}>{data.issue_date}</Text>
          </View>

          <View style={rowLineStyle}>
            <Text style={{fontSize: 17}}>Penalty</Text>
            {
              data.penalty_amount != 0 ?
              <Text style={{ color: "red" }}>{data.penalty_amount}$</Text> :
              <Text style={{fontSize: 17}}>No late payment fees</Text>
            }
          </View>
          <View style={rowLineStyle1} >
            <Text style={{fontSize: 17}}>Plate</Text>
            <Text>{data.plate + " " + data.state}</Text>
          </View>
        </Card>
        <Card>
        <Text style={styles.feesAmount}>{total()}$</Text>
          <Btn
            onPress={() => console.log("payment")}
            backgroundColor='#169E47'
            title="Make payment"
            style={{margin: 25, color: 'white', fontSize: 20}}
           />
        </Card>
      </View>
    );
  }
}
styles = {
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1
  },
  rowLineStyle: {
    padding: 7,
    margin: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#ceecf0'
  },
  rowLineStyle1: {
    padding: 7,
    margin: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#f0f3f3'
  },
  feesAmount: {
    color: 'red',
    fontSize: 25,
    alignSelf: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#3B28CC',
    marginBottom: 5
  }
};
export default TicketDetails;
