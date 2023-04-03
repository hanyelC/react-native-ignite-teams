import { GROUP_COLLECTION } from './storageConfig'

import AsyncStorage from '@react-native-async-storage/async-storage'

export class GroupsStorage {
  private storageKey = GROUP_COLLECTION

  async create(name: string) {
    const { groups } = await this.gelAll()

    await AsyncStorage.setItem(
      this.storageKey,
      JSON.stringify([name, ...groups]),
    )
  }

  async gelAll() {
    const storage = await AsyncStorage.getItem(this.storageKey)

    const groups: string[] = storage ? JSON.parse(storage) : []

    return { groups }
  }
}
