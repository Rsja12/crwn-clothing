import React, { useState } from 'react'

import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

const SignIn = () => {

    const initialState = {
        email: '',
        password: ''
    }
    const [credentials, setCredentials] = useState(initialState)
    const { email, password } = credentials
    

    const handleChange = e => {
        const { name, value } = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setCredentials(initialState)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    label='Email'
                    value={email} 
                    handleChange={handleChange} 
                    required 
                    />
                <FormInput 
                    name='password' 
                    type='password' 
                    label='Password'
                    value={password} 
                    handleChange={handleChange} 
                    required 
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton 
                        isGoogleSignIn={true}
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn
