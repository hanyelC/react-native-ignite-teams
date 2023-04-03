import * as S from './styles'

import { Button, Header, Highlight, Input } from '@components'
import type { AppRoutesList } from '@routes'
import { GroupsStorage } from '@storage'
import { AppError } from '@utils'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'
import { Alert } from 'react-native'

type Props = NativeStackScreenProps<AppRoutesList, 'NewGroup'>

export function NewGroup({ navigation }: Props) {
  const [group, setGroup] = useState<string>('')

  function goBack() {
    navigation.goBack()
  }

  async function handleCreateGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Nova turma', 'Informe o nome da turma.')
      }

      const groupsStorage = new GroupsStorage()
      await groupsStorage.create(group)

      navigation.navigate('Players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova turma', error.message)
      } else {
        console.error(error)
        Alert.alert('Nova turma', 'Não foi possível criar uma nova turma')
      }
    }
  }

  return (
    <S.Container>
      <Header handleGoBack={goBack} />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
          value={group}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </S.Content>
    </S.Container>
  )
}
