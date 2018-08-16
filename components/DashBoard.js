import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, ListItem, List } from 'react-native-elements';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { MainHeader } from './Common/Header';
import { Btn } from './Common/Button'
import { storePlateNumber, fetchTickets, loadPlateNumberFromDb } from '../actions/plateNumberAction';
import  PlateNumber from './PlateNumber';

class DashBoard extends Component {


  displayTicket(){
    console.log('display Tivket')
  }
  animateComponent(){
    return (
      <AnimatedCircularProgress
        size={200}
        width={15}
        fill={100}
        tintColor="#FE5E41"
        onAnimationComplete={() => this.displayTicket()}
        backgroundColor="#3d5875">
{
    () =>{
    return (
      <View >
        <Text style={{fontSize: 18}}>You have </Text>
        <Text style={{fontSize: 40, color: 'red', alignSelf: 'center'}}>10</Text>
        <Text style={{fontSize: 18, color: 'black', alignSelf: 'center'}}>Tickets</Text>
      </View>
    )
  }
}
</AnimatedCircularProgress>

    )
  }

  componentDidMount(){
    const { plateNumber } = this.props;
     this.props.loadPlateNumberFromDb()

  }

  render() {
    const { textStyle } = styles;
    return (
      <View>
        {
          this.props.plateNumber === null
          ?  <PlateNumber />
          :  <View style={ {borderBottomWidth: 0}}>
           <MainHeader
             centerComponent={{text:`PLATE: ${this.props.plateNumber}`,
                               style: {color: 'white', fontSize: 18}}}
            />
            <View style={styles.animate}>
              {
                this.animateComponent()
              }
            </View>
             <Text style={textStyle}>
               Check your tickets
             </Text>
            <Btn
              backgroundColor="#169E47"
              onPress={ () => this.props.fetchTickets() }
              title=' Show My Traffic Tickets'
            />

            {/* <Btn
              backgroundColor="#727272"
              onPress={() => this.props.loadPlateNumberFromDb()}
              title='LoadPLateNUmber'
            /> */}
        </View>
        }
      </View>
    );
  }
}

const styles = {
  container : {
    justifyContent: 'center',
    alignItems:'center'
  },
  textStyle: {
    fontSize: 18,
    color: 'green',
    alignSelf: 'center',
    margin: 40,
    fontWeight: '500'
  },
  animate: {
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 40
  }
};
mapStatetoProps = ({ plate }) => {
  const { plateNumber, error, tickets } = plate;
  return { plateNumber, error, tickets };
};

export default connect(
  mapStatetoProps,
  { storePlateNumber, fetchTickets, loadPlateNumberFromDb }
)(DashBoard);
