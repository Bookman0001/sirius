import styled from 'styled-components'
import media from 'styled-media-query'
import { useTranslation } from 'react-i18next'

import Title from '../atoms/Title'
import CirclePicture from '../atoms/Picture'
import ParagraphContent from '../atoms/ParagraphContent'
import 'locale/I18n'

export default function EnginnerCareer() {
  const { t } = useTranslation()
  return (
    <Section>
      <Title>
        <span>C</span>areer
      </Title>
      <DetailWrapper>
        <ImageWrapper>
          <CirclePicture src="/assets/hospital.png" alt="hospital" isCircle />
        </ImageWrapper>
        <ParagraphContent>{t('step1')}</ParagraphContent>
      </DetailWrapper>
      <DetailWrapper>
        <ImageWrapper>
          <CirclePicture src="/assets/net.png" alt="net" isCircle />
        </ImageWrapper>
        <ParagraphContent>
          <StyledParagraph>{t('step2')}</StyledParagraph>
          {t('column21')}
          <br />
          {t('column22')}
          <br />
          {t('column23')}
        </ParagraphContent>
      </DetailWrapper>
      <DetailWrapper>
        <ImageWrapper>
          <CirclePicture src="/assets/frontend.png" alt="frontend" isCircle />
        </ImageWrapper>
        <ParagraphContent>
          <StyledParagraph>{t('now')}</StyledParagraph>
          {t('column31')}
        </ParagraphContent>
      </DetailWrapper>
    </Section>
  )
}

const Section = styled.section`
  margin-bottom: 150px;
  ${media.lessThan('medium')`
  margin-bottom: 100px;
  `}
`

const DetailWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  border-radius: 10px;
  ${media.lessThan('small')`
    display: block;
  `}
  p {
    margin: 20px 0;
  }
`

const ImageWrapper = styled.div`
  margin-right: 50px;
`

const StyledParagraph = styled.div`
  margin-bottom: 1rem;
`
