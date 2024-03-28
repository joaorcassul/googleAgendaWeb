import React, { useState } from 'react';

const HomePage = () => {

  const handleSolicitarPermissao = async () => {
    try {
      const response = await fetch('http://192.168.15.109:3567/gera-link-auth');

      if (response.status === 200) {
        const resposta = await response.json();
        const url = new URL(resposta.authURL);

        await launchUrl(url.href);

      } else {
        console.error('Erro ao solicitar permissão:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao solicitar permissão:', error);
    }
  };

  const launchUrl = async (url) => {
    try {
      await window.location.replace(url);
      // await window.location.replace('http://localhost:3000/token?code=4%2F0AeaYSHAKb48iD91CFRkliiwocPecc8Yvhm06eBQOUeSsbEuE9WDzfRZ9XZCNPt3fn9pk9Q&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly');
    } catch (error) {
      console.error('Erro ao abrir a URL:', error);
    }
  };

  return (
    <div>
      <h1>Bem-vindo à Página Inicial</h1>
      <button onClick={handleSolicitarPermissao}>
        Solicitar Permissão
      </button>
    </div>
  );
};

export default HomePage;
