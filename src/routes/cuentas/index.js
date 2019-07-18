import { createStackNavigator } from 'react-navigation'
import HomeCuentas from './home'
import DetailsScreen from './details'

const RouteCuentas = createStackNavigator(
  {
    Home: HomeCuentas,
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

export default RouteCuentas

