import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

type Props = {
  title: string
} & TouchableOpacityProps

export function GroupCard({ title, ...props }: Props) {
  return (
    <S.Container {...props}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
