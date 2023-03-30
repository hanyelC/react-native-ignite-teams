/* eslint-disable camelcase */
import { Groups } from '@screens'
import theme from '@theme'

import { ActivityIndicator } from 'react-native'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  )
}
