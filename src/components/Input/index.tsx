import * as S from './styles'

import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

export function Input(props: TextInputProps) {
  const theme = useTheme()

  return <S.Container placeholderTextColor={theme.COLORS.GRAY_300} {...props} />
}
