import React, { ButtonHTMLAttributes, MouseEvent } from 'react'
import styled from 'styled-components'

import { BORDER_RADIUS, COLOR, FONT_SIZE } from 'src/theme/constants'
import { ThemeColor } from 'src/types/theme'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  children?: React.ReactNode
  bgColor?: ThemeColor
  onClick?: () => void
}

export default function Button({
  disabled,
  children,
  bgColor = COLOR.WHITE,
  onClick,
}: Props) {
  const handleClick = (e: MouseEvent) => {
    if (onClick) {
      e.stopPropagation()
      e.preventDefault()
      onClick()
    }
  }
  return (
    <ButtonItem
      onClick={handleClick}
      disabled={disabled}
      role={'button'}
      bgColor={bgColor}
    >
      {children}
    </ButtonItem>
  )
}

const ButtonItem = styled.button<{ width?: string; bgColor: ThemeColor }>`
  min-height: 40px;
  height: 100%;
  background-color: ${(props) => props.bgColor};
  border: 2px solid ${COLOR.BLACK};
  border-radius: ${BORDER_RADIUS.DEFAULT};
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONT_SIZE.M};
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  :disabled {
    opacity: 0.7;
  }
  @media (prefers-color-scheme: dark) {
    background-color: ${COLOR.BLACK};
    border: 2px solid ${COLOR.WHITE};
    color: ${COLOR.WHITE};
  }
`
