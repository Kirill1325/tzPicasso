import React, { Children } from 'react'
import classes from './Button.module.css'

interface ButtonProps {
    children: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ children, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className={classes.btn}>{children}</button>
    )
}

export default Button