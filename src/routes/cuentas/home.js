import React from 'react'
import { View, Text } from 'react-native'
import LogoTitle from '../../components/header/logo'

class HomeCuentas extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: <LogoTitle />
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hola soy una cuenta</Text>
      </View>
    );
  }
}

export default HomeCuentas