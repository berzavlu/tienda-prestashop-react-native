import React from 'react'
import { Image } from 'react-native'
import RoutePerfil from './perfil'
import RouteCuentas from './cuentas'
import RouteOperaciones from './operaciones'
import RouteInicio from './inicio'

const router = {
  Inicio: {
    screen: RouteInicio,
    navigationOptions: {
      title: 'Inicio',
      tabBarIcon: ({focused, tintColor }) => (
        !focused ? <Image
            source={require('../assets/images/home.png')}
            style={{width: 26, height: 26}}
          />
          :
          <Image
            source={require('../assets/images/home.png')}
            style={{tintColor: tintColor, width: 26, height: 26}}
          />
      ),
    },
  },
  Operaciones: {
    screen: RouteOperaciones,
    navigationOptions: {
      title: 'Operaciones',
      tabBarIcon: ({focused, tintColor }) => (
        !focused ? <Image
            source={require('../assets/images/operaciones.png')}
            style={{width: 26, height: 26}}
          />
          :
          <Image
            source={require('../assets/images/operaciones.png')}
            style={{tintColor: tintColor, width: 26, height: 26}}
          />
      ),
    },
  },
  Cuentas: {
    screen: RouteCuentas,
    navigationOptions: {
      title: 'Cuentas',
      tabBarIcon: ({focused, tintColor }) => (
        !focused ? <Image
            source={require('../assets/images/cuentas.png')}
            style={{width: 26, height: 26}}
          />
          :
          <Image
            source={require('../assets/images/cuentas.png')}
            style={{tintColor: tintColor, width: 26, height: 26}}
          />
      ),
    },
  },
  Perfil: {
    screen: RoutePerfil,
    navigationOptions: {
      title: 'Perfil',
      tabBarIcon: ({focused, tintColor }) => (
        !focused ? <Image
            source={require('../assets/images/perfil.png')}
            style={{width: 26, height: 26}}
          />
          :
          <Image
            source={require('../assets/images/perfil.png')}
            style={{tintColor: tintColor, width: 26, height: 26}}
          />
      ),
    },
  },
}

module.exports = router