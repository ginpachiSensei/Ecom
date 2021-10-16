import React from 'react'
import { Alert } from 'react-bootstrap'

function Messege( variant, children ) {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

Messege.defaultProps = {
    variant: 'info',
}

export default Messege
