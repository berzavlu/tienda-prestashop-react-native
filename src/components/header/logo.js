import React from 'react'
import { Image } from 'react-native'

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../assets/images/logo.png')}
        style={{width:100, height: 40, flex: 1}} resizeMode="contain" 
      />
    )
  }
}

export default LogoTitle
