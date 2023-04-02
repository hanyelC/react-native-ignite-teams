import * as S from './styles'
import logoImg from '@assets/logo.png'

type Props = {
  handleGoBack?: () => void
}

export function Header({ handleGoBack }: Props) {
  return (
    <S.Container>
      {handleGoBack && (
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg} />
    </S.Container>
  )
}
