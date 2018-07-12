import React, { Component } from 'react';
import { Text, View } from 'react-native';

class TicketDetails extends Component {
  render(){
    const { ticket } = this.props;
    return (
      <View key={ticket.summons_number}>
        <Text>{ticket.fine_amount}</Text>
      </View>
    )
  }
}

export default TicketDetails;
