import { Metadata } from 'next'
import Breadcrumb from '@/app/components/Common/Breadcrumb'

export const metadata: Metadata = {
  title: 'お問い合わせ | Paidin',
  description: 'Paidinへのお問い合わせ',
}

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName='お問い合わせ' />
      
      <section className='py-20 bg-white'>
        <div className='container max-w-6xl'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div>
              <h2 className='text-3xl font-bold text-midnight_text mb-6'>お問い合わせ先</h2>
              <p className='text-gray-700 leading-relaxed mb-8'>
                ご質問、ご要望、サポートが必要な場合は、お気軽にお問い合わせください。できるだけ早くご返信いたします。
              </p>

              <div className='space-y-6'>
                {/* Company Info */}
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-midnight_text mb-2'>会社情報</h3>
                    <p className='text-gray-700'>Paidin株式会社</p>
                    <p className='text-gray-700'>〒150-0001</p>
                    <p className='text-gray-700'>東京都渋谷区神宮前1-1-1</p>
                  </div>
                </div>

                {/* Email */}
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-midnight_text mb-2'>メールアドレス</h3>
                    <p className='text-gray-700'>一般のお問い合わせ：</p>
                    <a href='mailto:info@paidin.com' className='text-primary hover:underline'>info@paidin.com</a>
                    <p className='text-gray-700 mt-2'>サポート：</p>
                    <a href='mailto:support@paidin.com' className='text-primary hover:underline'>support@paidin.com</a>
                    <p className='text-gray-700 mt-2'>営業：</p>
                    <a href='mailto:sales@paidin.com' className='text-primary hover:underline'>sales@paidin.com</a>
                  </div>
                </div>

                {/* Phone */}
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-midnight_text mb-2'>電話番号</h3>
                    <p className='text-gray-700'>カスタマーサポート：</p>
                    <a href='tel:+81-3-1234-5678' className='text-primary hover:underline'>03-1234-5678</a>
                    <p className='text-gray-600 text-sm mt-1'>営業時間：平日 9:00〜18:00（土日祝休）</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-midnight_text mb-2'>ソーシャルメディア</h3>
                    <div className='flex gap-4 mt-2'>
                      <a href='https://twitter.com/paidin' className='text-gray-700 hover:text-primary'>Twitter</a>
                      <a href='https://facebook.com/paidin' className='text-gray-700 hover:text-primary'>Facebook</a>
                      <a href='https://instagram.com/paidin' className='text-gray-700 hover:text-primary'>Instagram</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className='mt-10 p-6 bg-blue-50 rounded-lg'>
                <h3 className='text-lg font-semibold text-midnight_text mb-2'>回答時間について</h3>
                <p className='text-gray-700 text-sm leading-relaxed'>
                  通常、営業日2〜3日以内にご返信いたします。お急ぎの場合は、電話でのお問い合わせをお願いいたします。
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-gray-50 p-8 rounded-lg'>
              <h2 className='text-3xl font-bold text-midnight_text mb-6'>お問い合わせフォーム</h2>
              
              <form className='space-y-6'>
                {/* Name */}
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                    お名前 <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                    placeholder='山田 太郎'
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                    メールアドレス <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                    placeholder='example@example.com'
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>
                    会社名
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                    placeholder='株式会社例'
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
                    件名 <span className='text-red-500'>*</span>
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                  >
                    <option value=''>選択してください</option>
                    <option value='general'>一般的なお問い合わせ</option>
                    <option value='support'>技術サポート</option>
                    <option value='sales'>製品・料金について</option>
                    <option value='partnership'>パートナーシップ</option>
                    <option value='other'>その他</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                    メッセージ <span className='text-red-500'>*</span>
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                    placeholder='お問い合わせ内容をご記入ください'
                  />
                </div>

                {/* Privacy Policy Agreement */}
                <div className='flex items-start gap-2'>
                  <input
                    type='checkbox'
                    id='privacy'
                    name='privacy'
                    required
                    className='mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary'
                  />
                  <label htmlFor='privacy' className='text-sm text-gray-700'>
                    <a href='/privacy' className='text-primary hover:underline'>プライバシーポリシー</a>
                    に同意します <span className='text-red-500'>*</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  className='w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200'
                >
                  送信する
                </button>
              </form>

              <p className='text-gray-600 text-sm mt-4'>
                <span className='text-red-500'>*</span> は必須項目です
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className='mt-16'>
            <h2 className='text-3xl font-bold text-midnight_text mb-8 text-center'>よくあるご質問</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='p-6 bg-gray-50 rounded-lg'>
                <h3 className='text-lg font-semibold text-midnight_text mb-2'>料金プランについて</h3>
                <p className='text-gray-700 text-sm'>
                  料金プランの詳細は、<a href='/#pricing' className='text-primary hover:underline'>料金ページ</a>をご覧ください。プランの変更やアップグレードはいつでも可能です。
                </p>
              </div>
              <div className='p-6 bg-gray-50 rounded-lg'>
                <h3 className='text-lg font-semibold text-midnight_text mb-2'>無料トライアルはありますか？</h3>
                <p className='text-gray-700 text-sm'>
                  はい、14日間の無料トライアルをご利用いただけます。クレジットカードの登録なしで開始できます。
                </p>
              </div>
              <div className='p-6 bg-gray-50 rounded-lg'>
                <h3 className='text-lg font-semibold text-midnight_text mb-2'>データのセキュリティは？</h3>
                <p className='text-gray-700 text-sm'>
                  お客様のデータは、最新の暗号化技術で保護されています。詳細は<a href='/privacy' className='text-primary hover:underline'>プライバシーポリシー</a>をご確認ください。
                </p>
              </div>
              <div className='p-6 bg-gray-50 rounded-lg'>
                <h3 className='text-lg font-semibold text-midnight_text mb-2'>解約について</h3>
                <p className='text-gray-700 text-sm'>
                  いつでも解約可能です。解約後もデータは30日間保持され、再契約時に復元できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
