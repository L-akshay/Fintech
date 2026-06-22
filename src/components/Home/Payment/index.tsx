import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const Payment = () => {
  return (
    <section className='py-10'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
          <div className='col-span-6'>
            <Image
              src='/images/payment/payment.png'
              alt='payment'
              width={600}
              height={500}
            />
          </div>
          <div className='col-span-6 flex flex-col justify-center'>
            <h2 className='text-midnight_text text-4xl sm:text-5xl font-semibold text-center lg:text-start leading-140!'>
              今こそ支払い方法を変える時です。
            </h2>
            <p className='text-black/75 text-lg font-normal text-center lg:text-start leading-180! pt-3'>
              複数の支払いオプションを提供し、顧客がどこにいても簡単・安全に支払いができる環境を整えましょう。より速い決済でビジネスのキャッシュフローを改善します。
            </p>
            <Link
              href={'/'}
              className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2 pt-4 mx-auto lg:mx-0'>
              詳しく見る
              <Icon icon='tabler:arrow-right' className='text-2xl' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment
