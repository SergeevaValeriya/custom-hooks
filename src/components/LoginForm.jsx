import React from 'react';
import useInput from "../hooks/useInput";

const LoginForm = () => {
    const username = useInput('');
    const password = useInput('');

    return (
        <div>
            <input type="text" {...username} placeholder="Username" />
            <input type="text" {...password} placeholder="Password" />
            <button onClick={() => console.log(username.value, password.value)}>Change value</button>
        </div>
    );
};

export default LoginForm;