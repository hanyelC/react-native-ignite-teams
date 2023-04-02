import { Groups, NewGroup, Players } from '@screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type AppRoutesList = {
  Groups: undefined
  NewGroup: undefined
  Players: { group: string }
}

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesList>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Groups" component={Groups} />
      <Screen name="NewGroup" component={NewGroup} />
      <Screen name="Players" component={Players} />
    </Navigator>
  )
}
