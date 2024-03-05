import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const TokenPage = () => {
    const location = useLocation();
    const [vendedor, setVendedor] = useState('');

    const enviarToken = async () => {
        if (vendedor.trim() === '') {
            alert('Informe o vendedor antes de Enviar a permissão.');
            return;
        }

        const codTokens = new URLSearchParams(location.search).get('code');
        const codVend = vendedor;

        // const dados = {
        //     codVend: '5',
        //     codTokens: 'asdasbhkxzgvuxgiabk',
        //   };

        try {
            const response = await axios.post('http://192.168.15.109:3567/login-tokens', {codVend, codTokens});

            if (response.status === 200) {
                const resposta = await response.json();
                alert("deu certo!");
            } else {
                console.error('Erro ao enviar token:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao enviar token:', error);
        }
    };

    return (
        <div>
            <h1>Página Token</h1>
            <label>
                Informe o vendedor:
                <input
                    type="text"
                    value={vendedor}
                    onChange={(e) => setVendedor(e.target.value)}
                />
            </label>
            <button onClick={enviarToken}>
                Enviar Permissão
            </button>
        </div>
    );
};

export default TokenPage;
