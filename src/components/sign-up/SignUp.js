import React, { useState } from 'react'

import './SignUp.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

const SignUp = () => {

    const initialState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [newUserInfo, setNewUserInfo] = useState(initialState)
    const {
        displayName,
        email,
        password,
        confirmPassword
    } = newUserInfo

    const handleSubmit = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            // displayName would be additional data
            // wait for this to return before resetting state (clear form fields)
            await createUserProfileDocument(user, { displayName: displayName })
            setNewUserInfo({ initialState })
        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = e => {
        const { name, value } = e.target
        setNewUserInfo({
            ...newUserInfo,
            [name]: value
        })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign Up With Email / Password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
    
}

export default SignUp
