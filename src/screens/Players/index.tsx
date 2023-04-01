import * as S from './styles'
import { ButtonIcon, Header, Highlight, Input } from '@components'

export function Players() {
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
    </S.Container>
  )
}
