import { Groups, NewGroup, Players } from '@screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="groups" component={Groups} />
      <Screen name="new-group" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  )
}
