import * as S from './styles'

import { Button, EmptyList, GroupCard, Header, Highlight } from '@components'
import type { AppRoutesList } from '@routes'
import { GroupsStorage } from '@storage'

import { useFocusEffect } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'

type Props = NativeStackScreenProps<AppRoutesList, 'Groups'>

export function Groups({ navigation }: Props) {
  const [groups, setGroups] = useState<string[]>([])

  async function fetchGroups() {
    try {
      const groupsStorage = new GroupsStorage()
      const { groups } = await groupsStorage.gelAll()

      setGroups(groups)
    } catch (error) {
      console.error(error)
    }
  }

  function handleNewGroup() {
    navigation.navigate('NewGroup')
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

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
