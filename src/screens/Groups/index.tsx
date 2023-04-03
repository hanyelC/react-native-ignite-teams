import * as S from './styles'

import {
  Button,
  EmptyList,
  GroupCard,
  Header,
  Highlight,
  Loading,
} from '@components'
import type { AppRoutesList } from '@routes'
import { GroupsStorage } from '@storage'

import { useFocusEffect } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'

type Props = NativeStackScreenProps<AppRoutesList, 'Groups'>

export function Groups({ navigation }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [groups, setGroups] = useState<string[]>([])

  async function fetchGroups() {
    try {
      setIsLoading(true)

      const groupsStorage = new GroupsStorage()
      const { groups } = await groupsStorage.gelAll()

      setGroups(groups)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  function handleNewGroup() {
    navigation.navigate('NewGroup')
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('Players', { group })
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <EmptyList message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  )
}
