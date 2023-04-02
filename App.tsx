/* eslint-disable camelcase */
import { Loading } from '@components'
import { Routes } from '@routes'
import theme from '@theme'

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
