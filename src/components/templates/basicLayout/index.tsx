import React from 'react'

import MetaTag from 'src/components/organisms/meta/default'
import Header from 'src/components/organisms/header'
import Footer from 'src/components/organisms/footer'

interface Props {
  children: React.ReactChild
  hideLangSwitch?: boolean
}

export default function BasicLayout({
  children,
  hideLangSwitch = false,
}: Props) {
  return (
    <>
      <MetaTag />
      <Header hideLangSwitch={hideLangSwitch} />
      {children}
      <Footer />
    </>
  )
}
