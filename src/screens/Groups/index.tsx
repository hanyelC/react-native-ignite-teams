import * as S from './styles'

import { Header, Highlight } from '@components'

import React from 'react'

export const Groups: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Highlight subtitle="Jogue com a sua turma" title="Turmas" />
    </S.Container>
  )
}
