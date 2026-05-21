# 📦 Template Front-End Padrão

## 📌 Sobre o Projeto

Este projeto é um **template base** criado com a finalidade de servir como **esqueleto inicial** para os projetos de front-end da equipe.

Ele já vem configurado com as ferramentas e bibliotecas que utilizamos como padrão, permitindo iniciar novos projetos de forma rápida, organizada e padronizada.

> ⚠️ Este projeto não possui regras de negócio implementadas. Ele serve apenas como estrutura inicial.

---

## 🚀 Tecnologias Utilizadas

O template já vem configurado com as seguintes ferramentas:

- Vue 3  
- PrimeVue  
- Pinia  
- Axios  
- TailwindCSS  
- Vue Router  

---

## 🧱 Estrutura Base

O projeto já inclui:

- Configuração do Vue Router para gerenciamento de rotas  
- Configuração do Pinia para gerenciamento de estado  
- Configuração global do Axios para requisições HTTP  
- Integração do PrimeVue com tema configurado  
- Configuração do TailwindCSS  
- Estrutura de pastas padronizada para:
  - `components`
  - `views`
  - `services`
  - `stores`
  - `router`

---

## 📥 Como Iniciar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2️⃣ Acessar a pasta do projeto

```bash
cd nome-do-projeto
```

### 3️⃣ Instalar as dependências

```bash
npm install
```

### 4️⃣ Executar o projeto em ambiente de desenvolvimento

```bash
npm run dev
```

O projeto será iniciado normalmente em:

```
http://localhost:5173
```

---

## 🏗️ Gerando um Novo Projeto a Partir do Template

Para utilizar este template como base para um novo projeto:

1. Faça um clone do repositório  
2. Remova o vínculo com o repositório original:

```bash
git remote remove origin
```

3. Crie um novo repositório  
4. Aponte para o novo repositório:

```bash
git remote add origin <nova-url>
```

5. Faça o primeiro commit:

```bash
git push -u origin main
```

---

## 📐 Padrões Adotados

- Organização por responsabilidade (views, services, stores)  
- Comunicação com API centralizada em `services`  
- Gerenciamento de estado via Pinia  
- Componentização utilizando PrimeVue  
- Estilização com TailwindCSS  
- Rotas organizadas por módulos  

---

## 🎯 Objetivo

Garantir:

- Padronização dos projetos  
- Redução de tempo na criação de novas aplicações  
- Organização e escalabilidade  
- Facilidade de manutenção  

---

## 📄 Observação

Este template deve ser utilizado como base inicial.  
Cada projeto pode evoluir conforme a necessidade, mantendo os padrões definidos.