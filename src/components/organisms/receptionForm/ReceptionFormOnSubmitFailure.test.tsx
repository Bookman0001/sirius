import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'

import { ReceptionForm } from 'src/components/organisms/receptionForm'

// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock('next/router', () => require('next-router-mock'))

jest.mock('src/hooks/message/useCreateMessage', () => ({
  ...jest.requireActual('src/hooks/message/useCreateMessage'),
  useCreateMessage: () => {
    return {
      createMessage: () => Promise.resolve(false),
      isLoading: false,
      error: {},
    }
  },
}))

describe('ReceptionForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    render(<ReceptionForm />)
  })

  it('to be fired onSubmit with failed status', async () => {
    await act(() => {
      fireEvent.change(screen.getByLabelText('メールアドレス'), {
        target: { value: 'sample@example.com' },
      })
      fireEvent.change(screen.getByLabelText('名前'), {
        target: { value: 'John Doe' },
      })
      fireEvent.change(screen.getByLabelText('メッセージ内容'), {
        target: { value: 'Hello.' },
      })
      fireEvent.click(screen.getByRole('button'))
    })
    await waitFor(() => {
      expect(
        screen.getByText('サーバーでエラーが発生しました')
      ).toBeInTheDocument()
    })
  })
})
