import { Metadata } from 'next'
import Breadcrumb from '@/app/components/Common/Breadcrumb'

export const metadata: Metadata = {
  title: '利用規約 | Paidin',
  description: 'Paidinサービスの利用規約',
}

const TermsOfService = () => {
  return (
    <>
      <Breadcrumb pageName='利用規約' />
      
      <section className='py-20 bg-white'>
        <div className='container max-w-4xl'>
          <div className='prose prose-lg max-w-none'>
            <p className='text-gray-600 mb-8'>最終更新日：2025年1月1日</p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>1. 総則</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              本利用規約（以下「本規約」といいます）は、Paidin株式会社（以下「当社」といいます）が提供するサービス「Paidin」（以下「本サービス」といいます）の利用条件を定めるものです。登録ユーザーの皆様（以下「ユーザー」といいます）には、本規約に従って本サービスをご利用いただきます。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>2. アカウント登録</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              本サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によってユーザー登録を申請し、当社がこれを承認することによって、ユーザー登録が完了します。
            </p>
            <div className='ml-6 mb-4'>
              <h3 className='text-xl font-semibold text-midnight_text mb-3'>登録時の要件：</h3>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li>正確かつ最新の情報を提供すること</li>
                <li>18歳以上であること（未成年者は法定代理人の同意が必要）</li>
                <li>過去に本サービスの利用停止処分を受けていないこと</li>
                <li>反社会的勢力に該当しないこと</li>
              </ul>
            </div>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>3. サービス内容</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              本サービスは、請求書管理、支出追跡、カード管理などの財務管理ツールを提供します。当社は、サービスの内容を予告なく変更、追加、または削除することができます。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>4. 利用料金</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              本サービスの利用料金は、当社が別途定める料金プランに基づきます。料金プランの詳細は、当社ウェブサイトの料金ページをご確認ください。
            </p>
            <div className='ml-6 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li>料金は、選択したプランに応じて月額または年額で請求されます</li>
                <li>支払方法は、クレジットカードまたは当社が指定する方法とします</li>
                <li>一度支払われた料金の返金は、原則として行いません</li>
                <li>料金の改定は、30日前までに通知します</li>
              </ul>
            </div>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>5. 禁止事項</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
            </p>
            <div className='ml-6 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社、本サービスの他のユーザー、または第三者の知的財産権を侵害する行為</li>
                <li>当社、本サービスの他のユーザー、または第三者のプライバシーを侵害する行為</li>
                <li>本サービスのネットワークまたはシステムに過度な負荷をかける行為</li>
                <li>本サービスの運営を妨害する行為</li>
                <li>不正アクセス行為</li>
                <li>他のユーザーのアカウントを不正に使用する行為</li>
                <li>反社会的勢力に対する利益供与</li>
              </ul>
            </div>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>6. ユーザーの責任</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              ユーザーは、自己の責任において本サービスを利用するものとし、本サービスの利用により生じた一切の結果について責任を負います。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>7. データのバックアップ</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              当社は、本サービスに保存されたデータについて、定期的なバックアップを行いますが、データの完全性を保証するものではありません。ユーザーは、重要なデータについて、自己の責任においてバックアップを行ってください。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>8. サービスの中断・停止</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              当社は、以下の場合、ユーザーへの事前通知なく、本サービスの全部または一部の提供を中断または停止することができます：
            </p>
            <div className='ml-6 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li>本サービスに係るシステムの保守・点検を行う場合</li>
                <li>火災、停電、天災などの不可抗力により本サービスの提供が困難な場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </div>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>9. 知的財産権</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              本サービスに関する知的財産権は、すべて当社または当社にライセンスを許諾している者に帰属します。本規約に基づく本サービスの利用許諾は、本サービスに関する知的財産権の使用許諾を意味するものではありません。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>10. 免責事項</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              当社は、本サービスに関して、以下の事項について一切の責任を負いません：
            </p>
            <div className='ml-6 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li>本サービスの内容、品質、正確性、完全性</li>
                <li>本サービスがユーザーの特定の目的に適合すること</li>
                <li>本サービスの利用により生じたユーザーまたは第三者の損害</li>
                <li>ユーザー間またはユーザーと第三者との間で生じた紛争</li>
              </ul>
            </div>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>11. 損害賠償</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              ユーザーが本規約に違反したことにより当社に損害が生じた場合、ユーザーは当社に対し、その損害（弁護士費用を含む）を賠償するものとします。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>12. 規約の変更</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              当社は、ユーザーの承諾を得ることなく、本規約を変更することができます。変更後の規約は、当社ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>13. 準拠法および管轄裁判所</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              本規約の準拠法は日本法とします。本サービスに関して紛争が生じた場合、当社の本店所在地を管轄する裁判所を専属的合意管轄裁判所とします。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>14. お問い合わせ</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              本規約に関するお問い合わせは、お問い合わせページよりご連絡ください。
            </p>

            <div className='mt-12 p-6 bg-gray-50 rounded-lg'>
              <p className='text-gray-600 text-sm'>
                本規約は、2025年1月1日より有効とします。
              </p>
              <p className='text-gray-600 text-sm mt-2'>
                Paidin株式会社<br />
                東京都渋谷区
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsOfService
