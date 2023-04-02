import * as S from './styles'
import { Button, Header, Highlight, Input } from '@components'
import type { AppRoutesList } from '@routes'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'

type Props = NativeStackScreenProps<AppRoutesList, 'NewGroup'>

export function NewGroup({ navigation }: Props) {
  const [group, setGroup] = useState<string>('')

  function goBack() {
    navigation.goBack()
  }

  function handleCreateGroup() {
    navigation.navigate('Players', { group })
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
