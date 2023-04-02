import { AppRoutes } from './app'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'

export function Routes() {
  const theme = useTheme()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export { AppRoutesList } from './app'
