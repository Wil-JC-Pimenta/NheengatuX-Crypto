# Crypto Dashboard

## NheengatuX Crypto 

### Descrição

O **Crypto Dashboard** é um sistema web interativo que permite aos usuários explorar e acessar recursos importantes de várias blockchains, como Solana, Bitcoin, Binance Smart Chain e outros. O painel exibe informações detalhadas, incluindo exploradores de blockchain, recursos de desenvolvimento, plataformas DeFi, marketplaces de NFT e muito mais.

Este sistema foi desenvolvido utilizando **Vite** como bundler, **TypeScript** para tipagem estática e **Lovable** para componentes de interface, garantindo uma experiência rápida, segura e eficiente tanto para desenvolvedores quanto para usuários.

Além disso, o sistema divulga informações do token **NheengatuX (NGTX)**,desenvolvido na rede mainnet da Solana, através do do SPL Token Mint, permitindo que os usuários explorem e interajam com informações sobre o token.

## Funcionalidades em desenvolvimento 

-**Back End**
-*Integração de Smart Contract e Stripe Payment**
- **Exploração de Blockchains**: Acesso rápido a exploradores de transações e blocos para várias redes, incluindo Solana, Bitcoin, Binance Smart Chain.
- **Plataformas DeFi**: Links para as principais plataformas DeFi (Finanças Descentralizadas) para cada blockchain, permitindo que os usuários interajam com o ecossistema.
- **NFT Ecosystem**: Exploração de plataformas e marketplaces de NFTs para cada blockchain, como Magic Eden para Solana e Binance NFT.
- **Recursos de Desenvolvimento**: Ferramentas e documentação para desenvolvedores interessados em construir sobre essas blockchains, com suporte para desenvolvimentos em várias linguagens, incluindo Solidity e Rust.
- **NheengatuX (NGTX)**: Integração com o token.

## Tecnologias Utilizadas

### Frontend:
- **Vite**: Bundler rápido e de alta performance para o desenvolvimento frontend.
- **TypeScript**: Tipagem estática que melhora a confiabilidade e a manutenção do código.
- **Lovable**: Framework/lib para componentes de UI simples e prontos para uso, proporcionando uma experiência de desenvolvimento ágil e moderna.
- **React.js**: Biblioteca JavaScript para a construção de interfaces de usuário dinâmicas.
- **Tailwind CSS**: Framework CSS utilitário para um design responsivo e moderno.
- **Lucide Icons**: Pacote de ícones para UI.

### APIs de Blockchain:
- APIs públicas para **Solana**, **Binance Smart Chain**, **Bitcoin**, **NheengatuX (NGTX)** e outros, para acessar dados de transações e informações de blocos.


### Solana Network & Resources:
Explore a blockchain Solana, visualize transações, use ferramentas de desenvolvimento e interaja com o ecossistema de NFTs.

### Bitcoin Blockchain & Resources:
Explore transações na rede Bitcoin, entenda como interagir com a blockchain e acesse recursos úteis.

### Binance Smart Chain & Resources:
Explore a Binance Smart Chain, recursos DeFi, marketplaces de NFTs e ferramentas de desenvolvimento.

### Links para DeFi e Marketplaces NFT:
Acesse os melhores recursos DeFi e marketplaces de NFTs para cada blockchain, facilitando a interação com plataformas de finanças descentralizadas e ativos digitais.

### NheengatuX (NGTX) Token:
A integração com o token **NheengatuX (NGTX)** permite aos usuários explorar as informações sobre este token e interagir com o ecossistema, incluindo o acompanhamento de transações e histórico de preços.

## Arquitetura

A arquitetura do sistema foi construída com foco em escalabilidade e eficiência, utilizando uma arquitetura de **SPA (Single Page Application)** que facilita a interação com o usuário de maneira rápida e fluida. A comunicação com as APIs de blockchain é feita de forma assíncrona, garantindo que as informações sejam carregadas dinamicamente.

A estrutura do projeto é organizada em componentes reutilizáveis, com o uso de hooks personalizados em React para gerenciamento de estado e requisições API. Além disso, a interface de usuário é responsiva, adaptando-se a diferentes dispositivos e tamanhos de tela utilizando **Tailwind CSS**.

### Componentes principais da arquitetura:
- **Frontend (React + TypeScript)**: Responsável pela interação com o usuário e exibição das informações de blockchain, DeFi, NFTs, NGTX, etc.
- **API Gateway**: Um único ponto de entrada para todas as requisições feitas ao servidor backend (quando necessário), facilitando o roteamento de dados entre as APIs de blockchain e a interface do usuário.
- **APIs de Blockchain**: Interfaces para acessar dados das redes Solana, Bitcoin, Binance Smart Chain, NGTX e outros.
- **Requisições Assíncronas**: Todas as interações com as APIs de blockchain são feitas via chamadas assíncronas para garantir uma experiência fluida.
- **Design Responsivo**: Utiliza Tailwind CSS para garantir uma experiência otimizada em dispositivos móveis e desktops.

