import SignUp from '@/app/components/Auth/SignUp'
import Breadcrumb from '@/app/components/Common/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '新規登録 | Paidin',
}

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName='新規登録ページ' />

      <SignUp />
    </>
  )
}

export default SignupPage
