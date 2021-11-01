import styled from 'styled-components'

import Description from 'src/components/atoms/paragraphContent'
import CirclePicture from 'src/components/atoms/picture'
import { COLOR } from 'src/theme/constants'

export default function Footer() {
  return (
    <FooterContainer>
      <Description>
        © {new Date().getFullYear().toString()} k-puppeteer.com
      </Description>
      <PictureContainer>
        <a
          href="https://github.com/Bookman0001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CirclePicture
            alt={'guthub'}
            src={'/assets/github.png'}
            width={30}
            height={30}
          />
        </a>
      </PictureContainer>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: ${COLOR.WHITE};
  border-top: 1px solid ${COLOR.GRAY};
  text-align: center;
`

const PictureContainer = styled.div`
  margin-left: 30px;
`
