import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const Groups: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>lorem ipsum</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
