import * as S from './styles'
import { Button, Header, Highlight, Input } from '@components'
import type { AppRoutesList } from '@routes'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<AppRoutesList, 'NewGroup'>

export function NewGroup({ navigation }: Props) {
  function goBack() {
    navigation.goBack()
  }

  function handleCreateGroup() {
    navigation.navigate('Players', { group: 'foo' })
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

        <Input placeholder="Nome da turma" />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </S.Content>
    </S.Container>
  )
}
