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

import { FlatList, View } from 'react-native'
import { useState } from 'react'

export function Players() {
  const [team, setTeam] = useState<string>('Time A')
  const [players, setPlayers] = useState<string[]>([])

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => console.log(item)} />
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
