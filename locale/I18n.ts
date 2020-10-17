import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ja: {
    translation: {
      change: 'EN',
      introduction:
        'フロントエンドをメインにエンジニアリングをしています。直近で最も得意としているのはTypeScriptとReactによるコンポーネント設計です。他に保守レベルでのバックエンドでのエンジニアリング、AWS運用も経験があります。一貫性のあるユーザービリティの高いシステムを追求し続けています。',
      oss:
        '微力ながら下記のオープンソースソフトウェアの改善のためコミット活動をしていました。',
      step1:
        '医療システムパッケージウェアのうち画面と帳票部分の開発や改修を主に行っていました。また、SEという形でお客の打ち合わせ、仕様策定など各種業務経験も培いました。',
      step2:
        'web企業のエンジニアとして転向、フルスタックとして幅広く知識が要求される現場だったので多くの貴重な経験を積めました。',
      column21: '・SPAでのチャットアプリケーションの新規開発',
      column22: '・複数ECサイトの運用・保守・CMSの導入など',
      column23: '・某ユーザーサイトのフロントエンド新規開発',
      now: '現在は専門領域をフロントエンドとして日々開発に勤しんでいます。',
      column31: '・自社webサービスのフロントエンド設計と新規開発',
    },
  },
  en: {
    translation: {
      change: 'JP',
      introduction:
        'I am front-end developer.Especially, I love TypeScript and React component logic. Also, I experienced back-end enginnering including AWS management.',
      step1: 'I developed and modified package software app(medical system). ',
      oss: 'contributed to oss as follows.',
      step2:
        'I developed web app using various tech tips in front-end and back-end',
      column21: '・developing chat app',
      column22: '・developing, supporing and monitoring e-commerce.',
      column23: '・developing user servce in frontend.',
      now: 'Now, majoring in front-end expert developer.',
      column31: '・designing and developing in-house web service in front-end ',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ja',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
