import React from 'react'
import { View, Text } from 'react-native'
import LogoTitle from '../../components/header/logo'

class HomeOperaciones extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: <LogoTitle />
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hola soy operaciones</Text>
      </View>
    );
  }
}

export default HomeOperaciones