import * as S from './styles'

import { Button, EmptyList, GroupCard, Header, Highlight } from '@components'
import type { AppRoutesList } from '@routes'

import { useState } from 'react'
import { FlatList } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<AppRoutesList, 'Groups'>

export function Groups({ navigation }: Props) {
  const [groups, setGroups] = useState<string[]>([])

  function handleNewGroup() {
    navigation.navigate('NewGroup')
  }

  return (
    <S.Container>
      <Header />
      <Highlight subtitle="Jogue com a sua turma" title="Turmas" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  )
}
