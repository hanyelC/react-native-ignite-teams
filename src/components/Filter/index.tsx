import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

type Props = {
  title: string
} & TouchableOpacityProps &
  S.FilterStyleProps

export function Filter({ title, isActive = false, ...props }: Props) {
  return (
    <S.Container isActive={isActive} {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
