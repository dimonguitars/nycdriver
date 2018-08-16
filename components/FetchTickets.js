import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, ListItem, Button, List } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { MainHeader } from './Common/Header';
import { fetchTickets } from '../actions/plateNumberAction';
import { PlateNumber } from './PlateNumber'

class FetchTickets extends Component {

  componentDidMount(){
    this.props.fetchTickets(this.props.plateNumber)
  }

  render() {
    const { tickets } = this.props;
    console.log(tickets)
    return (
      <View >
        <MainHeader
          centerComponent={{text:this.props.plateNumber, style: {color:'#fff'}}}
         />


        <ScrollView style={styles.container}>
          {_.map(tickets.data, (ticket) => {
            return (
              <Card
                key={ticket.summons_number}
                containerStyle={{
                  padding: 0,
                  flex: 1,
                  flexDirection: 'column'
                }}
              >
                <ListItem
                  title={ticket.violation}
                  titleStyle={{ fontSize: 14 }}
                  rightTitleStyle={{ color: 'red', padding: 0, fontSize: 20 }}
                  subtitleStyle={styles.subtitleStyle}
                  titleNumberOfLines={2}
                  onPress={() => Actions.ticketdetails({TicketsDetails: ticket})}
                  rightTitle={'$' + ticket.fine_amount}
                  subtitle={ticket.issue_date}
                />
              </Card>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
const styles = {
  subtitleStyle: {
    fontSize: 12,
    color: 'red'
  },
  container: {
    backgroundColor: '#F5FCFF'

  }
};
mapStatetoProps = ({ plate }) => {
  const { plateNumber, error, tickets } = plate;
  return { plateNumber, error, tickets };
};

export default connect(
  mapStatetoProps,
  { fetchTickets }
)(FetchTickets);
