import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './withSpinner.styles'

// function that takes in a component we want to wrap. 
// WrappedComponent gets passed to function that determines, based on isLoading prop, weather we render <SpinnerContainer /> or <WrappedComponent />

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...rest }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...rest} />
        )
    }
    return Spinner
}

export default WithSpinner
