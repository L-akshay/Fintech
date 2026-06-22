import { NextResponse } from 'next/server'

import { headerItem } from '@/app/types/menu'
import { featureData } from '@/app/types/featuredata'
import { socialLinksData } from '@/app/types/sociallinks'
import { plansData } from '@/app/types/plans'
import { footerlLinksData } from '@/app/types/footerlinks'

const HeaderData: headerItem[] = [
  { label: '製品', href: '/#product' },
  { label: '料金', href: '/#pricing' },
  { label: '機能', href: '/#features ' },
  { label: 'お問い合わせ', href: '/#contact ' },
  { label: 'ドキュメント', href: '/documentation' },
]

const FeatureData: featureData[] = [
  {
    imgSrc: '/images/features/time.svg',
    heading: '未払い請求アラート',
    paragraph:
      '支払い期限を二度と見逃さない。支払いが近づくと即座に通知。請求書をストレスなく管理できます。',
  },
  {
    imgSrc: '/images/features/signal.svg',
    heading: '支出インサイト',
    paragraph:
      'お金の使い道を追跡。カテゴリ別に支出を可視化。明確なデータでより賢い選択を。',
  },
  {
    imgSrc: '/images/features/dollar.svg',
    heading: 'カード管理',
    paragraph:
      '全てのカードを連携。残高と取引を追跡。一つのダッシュボードで全てを管理。',
  },
]

const PlansData: plansData[] = [
  {
    heading: 'ライト',
    price: {
      monthly: 19,
      yearly: 190,
    },
    subscriber: 0.5,
    button: '購入する',
    option: [
      '基本的な請求書作成',
      'PDF請求書ダウンロード',
      '無制限の取引',
      '更新情報のメール通知',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg',
  },
  {
    heading: 'ベーシック',
    price: {
      monthly: 29,
      yearly: 290,
    },
    subscriber: 0.5,
    button: '購入する',
    option: [
      'ライトの全機能',
      'カスタム請求書テンプレート',
      '税額計算サポート',
      '自動請求書リマインダー',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/startwo.svg',
  },
  {
    heading: 'プラス',
    price: {
      monthly: 59,
      yearly: 590,
    },
    subscriber: 0.5,
    button: '購入する',
    option: [
      'ベーシックの全機能',
      'マルチ通貨対応',
      '請求書支払い追跡',
      '優先カスタマーサポート',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starthree.svg',
  },
]

const FooterLinks: footerlLinksData[] = [
  { label: '製品', href: '/#product' },
  { label: '料金', href: '/#pricing' },
  { label: '機能', href: '/#features ' },
  { label: 'お問い合わせ', href: '/#contact ' },
]

const SocialLinks: socialLinksData[] = [
  {
    imgSrc: 'fa-brands:facebook-f',
    link: 'www.facebook.com',
    width: 10,
  },
  {
    imgSrc: 'fa6-brands:instagram',
    link: 'www.instagram.com',
    width: 14,
  },
  {
    imgSrc: 'fa6-brands:twitter',
    link: 'www.twitter.com',
    width: 14,
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeatureData,
    PlansData,
    FooterLinks,
    SocialLinks,
  })
}
