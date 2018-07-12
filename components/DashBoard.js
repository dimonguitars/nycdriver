import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, Card, ListItem, Button, List } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux'
import { storePlateNumber, fetchTickets } from '../actions/plateNumberAction';

class DashBoard extends Component {
  // static onEnter = () => {
  //   Actions.refresh({
  //     title: 'DashBoard',
  //     rightTitle: 'sign out',
  //     onRight: () => {}
  //   });
  // };

  componentWillMount() {
    this.props.fetchTickets(this.props.plateNumber);
  }
  render() {
    const { tickets } = this.props;
    console.log(typeof tickets);
    return (
      <View style={{}}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{
            text: this.props.plateNumber,
            style: { color: '#fff' }
          }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
          <ScrollView>
            <Card>
            {
              _.map(tickets.data, (ticket, key) => {
                return (
                  <ListItem
                    key={key}
                    title={ticket.violation}
                    onPress={() => Actions.ticketdetails({ticket})}
                  />
                )
              })
            }
          </Card>
          </ScrollView>
        <Button title="get ticket" />
      </View>
    );
  }
}
mapStatetoProps = ({ plate }) => {
  const { plateNumber, error, tickets } = plate;
  return { plateNumber, error, tickets };
};

export default connect(
  mapStatetoProps,
  { storePlateNumber, fetchTickets }
)(DashBoard);
