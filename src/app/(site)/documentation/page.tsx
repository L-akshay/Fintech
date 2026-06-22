import { Documentation } from '@/app/components/Documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'ドキュメント | Paidin',
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}
