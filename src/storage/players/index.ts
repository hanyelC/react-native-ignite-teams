import { PlayerAlreadyExistsError, UnexpectedError } from '@utils'
import { PLAYER_COLLECTION } from '../storageConfig'
import { PlayerStorageDTO } from './types'

import AsyncStorage from '@react-native-async-storage/async-storage'

export class PlayersStorage {
  private getStorageKey = (group: string) => `${PLAYER_COLLECTION}-${group}`

  async create(player: PlayerStorageDTO, group: string) {
    try {
      const storedPlayers = await this.findByGroup(group)

      const playerAlreadyExists = storedPlayers.some(
        (item) => item.name === player.name,
      )

      if (playerAlreadyExists) throw new PlayerAlreadyExistsError()

      await AsyncStorage.setItem(
        this.getStorageKey(group),
        JSON.stringify([player, ...storedPlayers]),
      )
    } catch (error) {
      if (error instanceof PlayerAlreadyExistsError) {
        throw error
      } else {
        console.error(error)
        throw new UnexpectedError()
      }
    }
  }

  async findByGroup(group: string) {
    try {
      const storage = await AsyncStorage.getItem(this.getStorageKey(group))

      const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : []

      return players
    } catch (error) {
      console.error(error)
      throw new UnexpectedError()
    }
  }
}
