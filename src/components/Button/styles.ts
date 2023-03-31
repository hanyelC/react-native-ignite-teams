import { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css, DefaultTheme } from 'styled-components/native'

export type ButtonVariantType = 'primary' | 'danger'

type Props = {
  variant: ButtonVariantType
}

const getVariantStyles = (theme: DefaultTheme, variant: ButtonVariantType) => {
  const variantStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    primary: css`
      background-color: ${theme.COLORS.GREEN_700};
    `,
    danger: css`
      background-color: ${theme.COLORS.RED_DARK};
    `,
  }

  return variantStyles[variant]
}

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme, variant }) => getVariantStyles(theme, variant)}

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
