import { GroupNameInUseError, UnexpectedError } from '@utils'
import { PlayersStorage } from './players'
import { GROUP_COLLECTION } from './storageConfig'

import AsyncStorage from '@react-native-async-storage/async-storage'

export class GroupsStorage {
  private storageKey = GROUP_COLLECTION

  async create(name: string) {
    try {
      const { groups } = await this.gelAll()

      const groupAlreadyExists = groups.includes(name)

      if (groupAlreadyExists) throw new GroupNameInUseError()

      await AsyncStorage.setItem(
        this.storageKey,
        JSON.stringify([name, ...groups]),
      )
    } catch (error) {
      if (error instanceof GroupNameInUseError) {
        throw error
      } else {
        console.error(error)
        throw new UnexpectedError()
      }
    }
  }

  async gelAll() {
    try {
      const storage = await AsyncStorage.getItem(this.storageKey)

      const groups: string[] = storage ? JSON.parse(storage) : []

      return { groups }
    } catch (error) {
      console.error(error)
      throw new UnexpectedError()
    }
  }

  async removeByName(name: string) {
    try {
      const { groups } = await this.gelAll()

      const filtered = groups.filter((group) => group !== name)

      await AsyncStorage.setItem(this.storageKey, JSON.stringify(filtered))

      await new PlayersStorage().removeByGroup(name)
    } catch (error) {
      console.error(error)
      throw new UnexpectedError()
    }
  }
}
