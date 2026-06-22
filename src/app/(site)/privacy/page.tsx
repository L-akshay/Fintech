import { Metadata } from 'next'
import Breadcrumb from '@/app/components/Common/Breadcrumb'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | Paidin',
  description: 'Paidinサービスのプライバシーポリシー',
}

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb pageName='プライバシーポリシー' />
      
      <section className='py-20 bg-white'>
        <div className='container max-w-4xl'>
          <div className='prose prose-lg max-w-none'>
            <p className='text-gray-600 mb-8'>最終更新日：2025年1月1日</p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>1. はじめに</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              Paidin株式会社（以下「当社」といいます）は、お客様のプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシー（以下「本ポリシー」といいます）は、当社が提供するサービス「Paidin」（以下「本サービス」といいます）における個人情報の取扱いについて定めるものです。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>2. 収集する情報</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              当社は、本サービスの提供にあたり、以下の情報を収集します：
            </p>
            
            <h3 className='text-xl font-semibold text-midnight_text mb-3 mt-6'>2.1 お客様が提供する情報</h3>
            <div className='ml-6 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li><strong>アカウント情報：</strong>氏名、メールアドレス、パスワード、電話番号</li>
                <li><strong>プロフィール情報：</strong>会社名、役職、住所</li>
                <li><strong>支払情報：</strong>クレジットカード情報、請求先住所</li>
                <li><strong>取引情報：</strong>請求書、経費、支出データ</li>
                <li><strong>通信内容：</strong>お問い合わせやサポートリクエスト</li>
              </ul>
            </div>

            <h3 className='text-xl font-semibold text-midnight_text mb-3 mt-6'>2.2 自動的に収集される情報</h3>
            <div className='ml-6 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li><strong>ログ情報：</strong>IPアドレス、ブラウザタイプ、アクセス日時</li>
                <li><strong>デバイス情報：</strong>デバイスID、OS情報、画面解像度</li>
                <li><strong>Cookie情報：</strong>Cookie、ピクセルタグ、その他の追跡技術</li>
                <li><strong>利用状況：</strong>閲覧ページ、クリック、滞在時間</li>
              </ul>
            </div>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>3. 情報の利用目的</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              当社は、収集した個人情報を以下の目的で利用します：
            </p>
            <div className='ml-6 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li>本サービスの提供、維持、改善</li>
                <li>アカウントの管理と認証</li>
                <li>お客様からのお問い合わせへの対応</li>
                <li>カスタマーサポートの提供</li>
                <li>サービスの利用状況の分析と統計データの作成</li>
                <li>新機能、サービス、キャンペーンのご案内</li>
                <li>利用規約の遵守状況の確認</li>
                <li>不正利用の防止とセキュリティの維持</li>
                <li>法令上の義務の履行</li>
              </ul>
            </div>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>4. 情報の共有と開示</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              当社は、以下の場合を除き、お客様の個人情報を第三者に開示または共有しません：
            </p>
            
            <h3 className='text-xl font-semibold text-midnight_text mb-3 mt-6'>4.1 お客様の同意がある場合</h3>
            <p className='text-gray-700 leading-relaxed mb-4 ml-6'>
              お客様の事前の同意を得た場合、第三者に個人情報を提供することがあります。
            </p>

            <h3 className='text-xl font-semibold text-midnight_text mb-3 mt-6'>4.2 サービスプロバイダー</h3>
            <p className='text-gray-700 leading-relaxed mb-4 ml-6'>
              当社に代わってサービスを提供する以下の第三者サービスプロバイダーと情報を共有することがあります：
            </p>
            <div className='ml-12 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li>クラウドストレージプロバイダー</li>
                <li>決済処理業者</li>
                <li>メール配信サービス</li>
                <li>分析ツールプロバイダー</li>
                <li>カスタマーサポートツールプロバイダー</li>
              </ul>
            </div>

            <h3 className='text-xl font-semibold text-midnight_text mb-3 mt-6'>4.3 法的要求</h3>
            <p className='text-gray-700 leading-relaxed mb-4 ml-6'>
              法令に基づく開示要求、裁判所命令、政府機関からの要請がある場合、個人情報を開示することがあります。
            </p>

            <h3 className='text-xl font-semibold text-midnight_text mb-3 mt-6'>4.4 事業譲渡</h3>
            <p className='text-gray-700 leading-relaxed mb-4 ml-6'>
              合併、買収、事業譲渡の場合、個人情報が譲渡される可能性があります。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>5. データのセキュリティ</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              当社は、お客様の個人情報を保護するため、以下のセキュリティ対策を実施しています：
            </p>
            <div className='ml-6 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li>SSL/TLS暗号化通信の使用</li>
                <li>データベースの暗号化</li>
                <li>アクセス制御とアクセスログの管理</li>
                <li>定期的なセキュリティ監査</li>
                <li>従業員への情報セキュリティ教育</li>
                <li>ファイアウォールと侵入検知システムの導入</li>
              </ul>
            </div>
            <p className='text-gray-700 leading-relaxed mb-4'>
              ただし、インターネット上の情報伝送は完全に安全ではないため、当社は絶対的なセキュリティを保証することはできません。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>6. Cookie とトラッキング技術</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              当社は、本サービスにおいてCookieおよびその他のトラッキング技術を使用しています。
            </p>
            
            <h3 className='text-xl font-semibold text-midnight_text mb-3 mt-6'>6.1 Cookieの種類</h3>
            <div className='ml-6 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li><strong>必須Cookie：</strong>本サービスの基本機能に必要</li>
                <li><strong>機能Cookie：</strong>お客様の設定を記憶</li>
                <li><strong>分析Cookie：</strong>サービスの利用状況を分析</li>
                <li><strong>広告Cookie：</strong>関連性の高い広告を表示</li>
              </ul>
            </div>

            <h3 className='text-xl font-semibold text-midnight_text mb-3 mt-6'>6.2 Cookieの管理</h3>
            <p className='text-gray-700 leading-relaxed mb-4 ml-6'>
              ブラウザの設定でCookieを無効化または削除できますが、本サービスの一部機能が正常に動作しなくなる場合があります。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>7. データの保存期間</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              当社は、以下の基準に従って個人情報を保存します：
            </p>
            <div className='ml-6 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li>サービス提供に必要な期間</li>
                <li>法令で定められた保存期間</li>
                <li>お客様からの削除要請があるまで</li>
                <li>正当な事業目的がある期間</li>
              </ul>
            </div>
            <p className='text-gray-700 leading-relaxed mb-4'>
              アカウント削除後、個人情報は原則として90日以内に削除されます。ただし、法令により保存が義務付けられている情報は除きます。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>8. お客様の権利</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              お客様は、自己の個人情報に関して以下の権利を有します：
            </p>
            <div className='ml-6 mb-4'>
              <ul className='list-disc ml-6 text-gray-700 space-y-2'>
                <li><strong>アクセス権：</strong>当社が保有する個人情報の開示を請求できます</li>
                <li><strong>訂正権：</strong>不正確な個人情報の訂正を請求できます</li>
                <li><strong>削除権：</strong>一定の条件下で個人情報の削除を請求できます</li>
                <li><strong>利用停止権：</strong>個人情報の利用停止を請求できます</li>
                <li><strong>データポータビリティ権：</strong>構造化された形式で個人情報の提供を請求できます</li>
                <li><strong>異議申立権：</strong>個人情報の処理に異議を申し立てることができます</li>
              </ul>
            </div>
            <p className='text-gray-700 leading-relaxed mb-4'>
              これらの権利を行使される場合は、お問い合わせページよりご連絡ください。本人確認の上、合理的な期間内に対応いたします。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>9. 子供のプライバシー</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              本サービスは18歳未満の方を対象としていません。当社は、18歳未満の方から故意に個人情報を収集することはありません。18歳未満の方の個人情報を収集したことが判明した場合、速やかに削除します。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>10. 国際的なデータ転送</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              お客様の個人情報は、日本国内のサーバーに保存されます。ただし、一部のサービスプロバイダーが海外に所在する場合、個人情報が海外に転送される可能性があります。その場合、適切なデータ保護措置を講じます。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>11. 第三者サイトへのリンク</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              本サービスには、第三者が運営するウェブサイトへのリンクが含まれる場合があります。当社は、第三者サイトのプライバシー慣行について責任を負いません。第三者サイトを訪問する際は、それぞれのプライバシーポリシーをご確認ください。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>12. プライバシーポリシーの変更</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              当社は、本ポリシーを随時変更することがあります。重要な変更がある場合は、本サービス上での通知またはメールでお知らせします。変更後も本サービスを継続してご利用いただく場合、変更後のポリシーに同意したものとみなされます。
            </p>

            <h2 className='text-3xl font-bold text-midnight_text mb-4 mt-8'>13. お問い合わせ</h2>
            <p className='text-gray-700 leading-relaxed mb-4'>
              本ポリシーまたは個人情報の取扱いに関するご質問、ご要望は、以下の方法でお問い合わせください：
            </p>
            <div className='ml-6 mb-4'>
              <ul className='list-none text-gray-700 space-y-2'>
                <li><strong>会社名：</strong>Paidin株式会社</li>
                <li><strong>所在地：</strong>〒150-0001 東京都渋谷区神宮前1-1-1</li>
                <li><strong>メール：</strong>privacy@paidin.com</li>
                <li><strong>お問い合わせフォーム：</strong><a href='/contact' className='text-blue-600 hover:underline'>お問い合わせページ</a></li>
              </ul>
            </div>

            <div className='mt-12 p-6 bg-gray-50 rounded-lg'>
              <p className='text-gray-600 text-sm'>
                本プライバシーポリシーは、2025年1月1日より有効とします。
              </p>
              <p className='text-gray-600 text-sm mt-2'>
                Paidin株式会社<br />
                個人情報保護管理者：法務部長<br />
                東京都渋谷区神宮前1-1-1
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy
