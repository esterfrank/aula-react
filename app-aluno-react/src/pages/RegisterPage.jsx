import { useState } from 'react';
import InputField from '../components/inputField';

export default function RegisterPage(){
    const [passo, setPasso]=useState(1);
    
    const [cpf, setCPF] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    
    function handleSubmit(e){
        e.preventDefault();
        if (!email || !senha || !nome){
            setErro('Preencha todos os campos');
            return;
        };
        set
    }
    return (
            <form onSubmit={handleSubmit}>
                <InputField
                    label='CPF'
                    placeholder='***.***.***-**'
                    type='text' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <InputField
                    label='Endereço de e-mail'
                    placeholder='user@email.com'
                    type='email' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <InputField
                    label='Senha' 
                    type='password' 
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                >
                <a href='esqueceu.html'>Esqueceu?</a>
                </InputField>
                
                <button type='submit'>Enviar</button>
                {erro && <p>{erro}</p>}
            </form>
        )
}