import { createStackNavigator } from 'react-navigation'
import HomeOperaciones from './home'
import DetailsScreen from './details'

const RouteOperaciones = createStackNavigator(
  {
    Home: HomeOperaciones,
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

export default RouteOperaciones

