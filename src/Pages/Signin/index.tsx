import React, { useState } from 'react'

import logoImg from '../../Assets/logo.svg'

import { Container, Logo, Form, FormTitle } from './style'

import Input from '../../Components/Input'
import Button from '../../Components/Button'

import { useAuth } from '../../Hooks/auth'

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth()

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha carteira" />
                <h3>Minha Carteira</h3>
            </Logo>

            <Form onSubmit={() => {signIn(email, password)}}>
                <FormTitle>Entrar</FormTitle>
                <Input 
                type="email"
                name="email" 
                placeholder="Email"
                onChange={(e) => {setEmail(e.target.value)}}
                />

                <Input 
                type="password" 
                name="password" 
                placeholder="Password"
                onChange={(e) => {setPassword(e.target.value)}}             
                />

                <Button 
                type="submit">
                    Acessar
                </Button>
            </Form>

            <div>
                <h3>Informações de login:</h3>
                <p>Email: email@email.com</p>
                <p>Senha: 123</p>
            </div>


        </Container>
    )
}

export default SignIn