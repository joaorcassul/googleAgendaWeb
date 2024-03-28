import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const TokenPage = () => {
    const location = useLocation();
    const [vendedor, setVendedor] = useState('');

    const enviarToken = async () => {
        if (vendedor.trim() == '') {
            alert('teste');
            alert('Informe o vendedor antes de Enviar a permissão.');
            return;
        }

        const codTokens = new URLSearchParams(location.search).get('code');
        const codVend = vendedor;

        try {
            const response = await axios.post('http://localhost:3567/login-tokens', { codVend, codTokens });

            if (response.status === 200) {
                const resposta = response.data;
                if (resposta.success) {
                    alert('Sucesso!');
                }
                else {
                    alert(resposta.message);
                }
            } else {
                console.error('Erro ao enviar token:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao enviar token:', error);
        }
    };

    return (
        <div>
            <h1>Gravar</h1>
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
