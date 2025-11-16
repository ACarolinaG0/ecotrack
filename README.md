🌱 EcoTrack – Gestão Inteligente de Resíduos para Condomínios

O EcoTrack é uma solução inteligente que conecta tecnologias IoT, educação ambiental e gamificação para transformar a forma como condomínios realizam a coleta seletiva.
A plataforma combina sensores em tempo real, um aplicativo mobile intuitivo e um dashboard para administradores, tornando a gestão de resíduos mais eficiente, sustentável e engajadora.

📱 Sobre o Projeto

O EcoTrack utiliza sensores IoT instalados nos coletores de resíduos para monitorar:

Nível de preenchimento

Status de coleta

Histórico de descartes

Volume por categoria de material

O aplicativo permite que moradores acompanhem seu impacto, recebam alertas e acumulem pontos conforme reciclam corretamente, criando um ambiente gamificado que incentiva práticas sustentáveis.

🚀 Principais Funcionalidades
👤 Para Moradores

Dashboard com nível dos resíduos em tempo real

Registro de descarte por tipo de material

Sistema de pontos e recompensas

Ranking entre moradores

Dicas e educação ambiental

Histórico pessoal de reciclagem

🏢 Para Síndicos e Administradores

Visão geral dos coletores e status de ocupação

Relatórios automáticos mensais

Alertas de coleta e situações críticas

Gestão de moradores e desempenho geral

🛠 Tecnologias Utilizadas (sugerido)

Frontend: React, HTML/CSS/JavaScript

Mobile prototyping: Figma + IA (Galileo)

Backend: Node.js / Python (a definir)

IoT: ESP32 + sensores ultrassônicos / load cell

Banco de Dados: Firebase / PostgreSQL

Infraestrutura: (AWS / Azure / Render)

(Se quiser, posso adaptar exatamente para o stack que você já usa.)

🧩 Arquitetura Geral do Sistema
[Moradores] → App Mobile → API → Banco de Dados
                                 ↑
                      Sensores IoT → MQTT/HTTP
                                 ↓
                       Dashboard Web (Síndico)

🎯 Público-Alvo

Condomínios urbanos

Gestores de sustentabilidade

Moradores engajados

Estabelecimentos públicos com alta geração de resíduos

🌍 Problema que o EcoTrack resolve

Falta de gestão automatizada

Baixa adesão da coleta seletiva

Custos operacionais elevados

Falta de engajamento dos moradores

Falta de dados reais sobre resíduos gerados

💡 Proposta de Valor

Reduz custo de coleta → eliminando idas desnecessárias

Aumenta a adesão dos moradores via gamificação

Fornece dados concretos para decisões

Melhora o impacto ambiental do condomínio

Automatiza a operação e economiza tempo do síndico

💸 Modelo de Negócio

Mensalidade recorrente para condomínios (R$ 250 – R$ 300) incluindo:

Acesso à plataforma

Monitoramento IoT

Relatórios

Suporte técnico

Gamificação integrada

📊 Impacto Ambiental

O EcoTrack contribui diretamente para os seguintes ODS (ONU):

ODS 11: Cidades e Comunidades Sustentáveis

ODS 12: Consumo e Produção Responsáveis

ODS 13: Ação Contra a Mudança Global do Clima

👥 Equipe

Ana Carolina Gomes – Hustler (Gestão e Estratégia)

Lucca Meneses – Hacker (UX/UI Design)

Maria Fernanda Gosula – Hipster (Sustentabilidade)

Charles Moese – Hacker (Engenharia de Computação)

🧪 Status do Projeto

✔ Ideação

✔ Pitch inicial

✔ Protótipo no Realista

☐ Testes em condomínio piloto

📥 Como executar o projeto

git clone https://github.com/ACarolinaG0/ecotrack.git
cd ecotrack-app-showcase
npm install
npm run dev


Abra em:

http://localhost:3000
