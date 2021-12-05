import React, { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { COLOR } from 'src/theme/constants'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelEl?: React.ReactChild
  hasError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  return <StyledInput ref={ref} hasError={props.hasError || false} {...props} />
})

Input.displayName = 'Input'

export default Input

const StyledInput = styled.input<{ hasError: boolean }>`
  width: 100%;
  flex: 1;
  height: 100%;
  min-height: 40px;
  font-size: 1.25rem;
  text-indent: 10px;
  border: 1px solid ${COLOR.BLACK};
  border-radius: 8px;
  background-color: ${COLOR.WHITE};
  @media (prefers-color-scheme: dark) {
    background-color: ${COLOR.BLACK};
    color: ${COLOR.WHITE};
    border: 1px solid ${COLOR.WHITE};
  }
  ${({ hasError }) =>
    hasError &&
    css`
      border: 2px solid ${COLOR.WARNING};
      @media (prefers-color-scheme: dark) {
        border: 2px solid ${COLOR.WARNING};
      }
    `}
`
