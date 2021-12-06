import React from 'react'
import styled from 'styled-components'

import { DEVICE_WIDTH, FONT_SIZE } from 'src/theme/constants'

interface Props {
  children: React.ReactNode
}

export default function Title({ children }: Props) {
  return <TitleContainer>{children}</TitleContainer>
}

const TitleContainer = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  padding-bottom: 4rem;
  font-size: ${FONT_SIZE.L};
  @media (max-width: ${DEVICE_WIDTH.PHONE}) {
    font-size: ${FONT_SIZE.M};
  }
`
