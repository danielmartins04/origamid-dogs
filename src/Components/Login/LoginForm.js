import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        }).then((response) => {
            //console.log(response);
            return response.json();
        }).then(json => {
            console.log(json);
        })
    }

    return (
        <section>
           <h4>Login</h4>
           <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" />
                <Input label="Senha" type="password" name="password" />

                <Button>Entrar</Button>
           </form>

           <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm;