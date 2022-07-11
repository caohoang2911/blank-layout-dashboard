import React from "react";

interface Props{
    children: React.ReactNode
}

const AuthLayout: React.FC<Props> = ({children}) => {
    return <>
        <div className="auth-layout">
            <div>AuthLayout</div>
            <br/>
            {children}
        </div>
    </>
}

export default AuthLayout;