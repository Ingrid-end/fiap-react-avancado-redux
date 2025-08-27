# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Gestão de estados com redux 
 - O que é Redux?
    - é uma das funções para gerenciar um estado de uma aplicação (global, não como usestate);
    - A ideia dele é separar por contexto,
	- tem q instalar - npm install npm install @reduxjs/toolkit
	- dois métodos que vem do redux
		- creatSlice:cada funcionalidade/ feature e dividindo
		- configureStore: resposavel por conhecer todas as funcionalidades e prover para nossa aplicação
                      - função reducer: controla a ação e o estado - cada um é um combo de estado e ação.