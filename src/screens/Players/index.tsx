import * as S from './styles'
import { ButtonIcon, Filter, Header, Highlight, Input } from '@components'

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
    </S.Container>
  )
}
