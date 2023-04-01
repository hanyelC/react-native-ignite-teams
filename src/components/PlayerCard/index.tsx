import * as S from './styles'
import { ButtonIcon } from '@components'

type Props = {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <S.Container>
      <S.Icon name="person" />

      <S.Name>{name}</S.Name>

      <ButtonIcon icon="close" variant="danger" onPress={onRemove} />
    </S.Container>
  )
}
