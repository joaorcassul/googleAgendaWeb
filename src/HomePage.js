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
