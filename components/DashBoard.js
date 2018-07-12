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

            {
              _.map(tickets.data, (ticket, key) => {
                return (
                  <Card>
                  <ListItem
                    subtitleStyle={styles.subtitleStyle}
                    titleStyle={{fontSize:18, justifyContent:'flex-start'}}
                    key={key}
                    title={'NO PARKING STREET CLEANING'}
                    leftIcon={{name: 'alarm'}}
                    subtitle={"45"}
                    onPress={() => Actions.ticketdetails({ticket})}
                  />
                </Card>
                )
              })
            }

          </ScrollView>
        <Button title="get ticket" />
      </View>
    );
  }
}
const styles = {
  subtitleStyle: {
    fontSize: 12,
    color: 'red'
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
