import React, { Component } from 'react'

import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

export class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { email, password } = this.state
        
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() { 
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='Email'
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required 
                        />
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password'
                        value={this.state.password} 
                        handleChange={this.handleChange} 
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
}

export default SignIn
