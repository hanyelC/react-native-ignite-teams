import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export type ButtonVariantType = 'primary' | 'danger'

type Props = {
  variant: ButtonVariantType
}

export const Container = styled.TouchableOpacity`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;
`

export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, variant }) => ({
    size: 24,
    color: variant === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  }),
)``
