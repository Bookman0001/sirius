import { useState } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import 'locale/I18n'

const Sharing = dynamic(() => import('components/molecures/Sharing'))
const Button = dynamic(() => import('components/atoms/Button'))
const Image = dynamic(() => import('components/atoms/Picture'))

interface Props {
  hideLangSwitch?: boolean
}

export default function Header({ hideLangSwitch = false }: Props) {
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState<string>('ja')
  const [showSharing, setShowSharing] = useState<boolean>(false)

  const handleClick = () => {
    const targetedLang = lang === 'en' ? 'ja' : 'en'
    i18n.changeLanguage(targetedLang)
    setLang(targetedLang)
  }

  const handleSharingClick = () => {
    setShowSharing(!showSharing)
  }

  return (
    <HeaderContainer>
      <Container>
        {hideLangSwitch ? null : (
          <ButtonContainer>
            <Button onClick={handleClick}>{t('change')}</Button>
          </ButtonContainer>
        )}
        <Link href="/">
          <StyledLink>
            <Image src={'/favicon.ico'} alt={'mail'} width={41} height={41} />
          </StyledLink>
        </Link>
        <SharingContainer onClick={handleSharingClick}>
          <Image
            src={'/assets/share.png'}
            alt={'share'}
            width={25}
            height={25}
          />
        </SharingContainer>
        {showSharing ? <Sharing /> : null}
      </Container>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #303030;
  z-index: 1000;
  color: #303030;
  font-size: 12px;
`

const Container = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  ${media.greaterThan('small')`
     max-width: 768px;
     margin: 0 auto;
  `}
`

const ButtonContainer = styled.div`
  margin-left: 15px;
  button {
    padding: 0 10px;
    font-size: 1rem;
  }
  ${media.greaterThan('large')`
    margin-left: 0;
  `}
`

const StyledLink = styled.span`
  display: block;
  cursor: pointer;
  position: absolute;
  left: calc(50% - 20px);
  height: 40px;
`

const SharingContainer = styled.div`
  display: block;
  position: absolute;
  right: 0;
  margin-right: 15px;
  cursor: pointer;
  ${media.greaterThan('large')`
    margin-right: 0;
  `}
`
