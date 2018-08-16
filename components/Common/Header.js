import React from 'react';
import { Header } from 'react-native-elements';
import { HomeButton } from './HomeButton'
import { MenuIcon } from './MenuIcon'

const MainHeader = ({centerComponent}) => {

  return (
    <Header
      backgroundColor='#3B28CC'
      leftComponent={<MenuIcon />}
      centerComponent={centerComponent}
      rightComponent={<HomeButton />}
    />
  )
}

styles = {
  container: {
    justifyContent:'center'
  }
}

export { MainHeader };
