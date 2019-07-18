import { createStackNavigator } from 'react-navigation'
import HomeInicio from './home'
import DetailsScreen from './details'

const RouteInicio = createStackNavigator(
  {
    Home: HomeInicio,
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

export default RouteInicio

