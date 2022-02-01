import React from 'react'
import Header from '../../components/layout/header/Header'
// import { Login } from './login/Login'
import { NewCredential } from './newcredentials/NewCredential'
// import { ResetPassword } from './resetpassword/ResetPassword'

export const ForgotPage = () => {
    return (
        <div>
            <Header />
            <NewCredential />
        </div>
    )
}
