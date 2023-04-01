import * as S from './styles'

import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: S.ButtonVariantType
} & TouchableOpacityProps

export function ButtonIcon({ icon, variant = 'primary', ...props }: Props) {
  return (
    <S.Container {...props}>
      <S.Icon name={icon} variant={variant} />
    </S.Container>
  )
}
