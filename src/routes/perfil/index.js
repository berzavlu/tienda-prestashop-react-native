import { createStackNavigator } from 'react-navigation'
import HomePerfil from './home'
import DetailsScreen from './details'

const RoutePerfil = createStackNavigator(
  {
    Home: HomePerfil,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#242f42',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

export default RoutePerfil

