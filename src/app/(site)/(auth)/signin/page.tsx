import Signin from '@/app/components/Auth/SignIn'
import Breadcrumb from '@/app/components/Common/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ログイン | Paidin',
}

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName='ログインページ' />

      <Signin />
    </>
  )
}

export default SigninPage
