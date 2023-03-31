import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

type Props = {
  title: string
  variant?: S.ButtonVariantType
} & TouchableOpacityProps

export function Button({ title, variant = 'primary', ...props }: Props) {
  return (
    <S.Container variant={variant} {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
