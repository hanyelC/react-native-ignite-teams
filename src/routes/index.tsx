import { AppRoutes } from './app'

import { NavigationContainer } from '@react-navigation/native'

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}

export { AppRoutesList } from './app'
