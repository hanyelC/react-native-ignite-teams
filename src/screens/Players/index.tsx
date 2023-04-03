import * as S from './styles'

import {
  Button,
  ButtonIcon,
  EmptyList,
  Filter,
  Header,
  Highlight,
  Input,
  PlayerCard,
} from '@components'
import type { AppRoutesList } from '@routes'
import { PlayersStorage } from '@storage'
import { AppError } from '@utils'
import { PlayerStorageDTO } from '~/storage/players/types'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList, View } from 'react-native'

type Props = NativeStackScreenProps<AppRoutesList, 'Players'>

export function Players({ navigation, route }: Props) {
  const [newPlayerName, setNewPlayerName] = useState<string>('')
  const [team, setTeam] = useState<string>('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const fetchPlayersByTeam = useCallback(async () => {
    try {
      const playersStorage = new PlayersStorage()

      const players = await playersStorage.findByGroupAndTeam(
        route.params.group,
        team,
      )

      setPlayers(players)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Jogadores', error.message)
      } else {
        Alert.alert(
          'Jogadores',
          'Não foi possível carregar os jogadores do time',
        )
      }
    }
  }, [route.params.group, team])

  function goBack() {
    navigation.navigate('Groups')
  }

  async function handleAddPlayer() {
    try {
      if (newPlayerName.trim().length === 0) {
        return Alert.alert(
          'Nova pessoa',
          'Informe o nome da pessoa para adicionar.',
        )
      }

      const newPlayer: PlayerStorageDTO = {
        name: newPlayerName,
        team,
      }

      const playersStorage = new PlayersStorage()

      await playersStorage.create(newPlayer, route.params.group)

      setNewPlayerName('')
      fetchPlayersByTeam()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.')
      }
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [fetchPlayersByTeam, team])

  return (
    <S.Container>
      <Header handleGoBack={goBack} />

      <Highlight
        title={route.params.group}
        subtitle="adicione a galera e separe os times"
      />

      <S.Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        />
        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => console.log(item)} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListEmptyComponent={() => (
          <EmptyList message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[players.length === 0 && { flex: 1 }]}
      />

      <Button title="Remover turma" variant="danger" />
    </S.Container>
  )
}
