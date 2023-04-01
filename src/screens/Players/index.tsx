import * as S from './styles'
import { ButtonIcon, Filter, Header, Highlight, Input } from '@components'

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

      <Filter title="Time A" isActive />
      <Filter title="Time B" />
    </S.Container>
  )
}
