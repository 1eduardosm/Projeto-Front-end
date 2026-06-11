import React from 'react'
import '../assets/style.css'

const InputField = ({ label, type = 'text', value, onChange, placeholder, className, children }) => {
    return (
        <div>
            <label>
                {label}
                {children}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
            />
        </div>
    )
}

export default InputField