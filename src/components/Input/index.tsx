import * as S from './styles'

import { TextInput, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { forwardRef } from 'react'

export const Input = forwardRef<TextInput, TextInputProps>(
  (props: TextInputProps, ref) => {
    const theme = useTheme()

    return (
      <S.Container
        ref={ref}
        placeholderTextColor={theme.COLORS.GRAY_300}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
