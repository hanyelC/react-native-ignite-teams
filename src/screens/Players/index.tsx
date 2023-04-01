import * as S from './styles'
import { Header, Highlight } from '@components'

export function Players() {
  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
    </S.Container>
  )
}
