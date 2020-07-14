import React, { Component } from 'react'

import './SignIn.scss'
import FormInput from '../form-input/FormInput'

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

    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
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
                        label='email'
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required 
                        />
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required 
                        />
                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn
