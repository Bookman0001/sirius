import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

import { borderRadius, color, fontSize } from 'src/theme/constants'
import type { ButtonBgColor } from 'src/types/theme'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  bgColor?: ButtonBgColor
}

export function Button({ children, bgColor = color.BLACK, ...props }: Props) {
  console.log('test')
  return (
    <ButtonItem {...props} $bgColor={bgColor}>
      {children}
    </ButtonItem>
  )
}

const ButtonItem = styled.button<{ $bgColor: ButtonBgColor }>`
  height: 40px;
  border-radius: ${borderRadius.DEFAULT};
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSize.S};
  background-color: ${({ $bgColor }) => $bgColor};
  border: 2px solid ${color.WHITE};
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  :disabled {
    opacity: 0.7;
  }
`
