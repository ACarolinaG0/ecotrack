<h1 align="center">🌱 EcoTrack – Gestão Inteligente de Resíduos para Condomínios</h1>

<p align="center">
  <img src="https://img.shields.io/badge/IoT-ESP32-blue" />
  <img src="https://img.shields.io/badge/Status-Protótipo-green" />
  <img src="https://img.shields.io/badge/Licença-MIT-yellow" />
</p>

<p align="center">
  O <strong>EcoTrack</strong> é uma solução inteligente que conecta tecnologias IoT, educação ambiental e gamificação para transformar a coleta seletiva em condomínios.  
  Com sensores de monitoramento em tempo real, um app intuitivo e um dashboard administrativo, o EcoTrack torna a gestão de resíduos mais eficiente, sustentável e engajadora.
</p>

---

## 📱 Sobre o Projeto

O EcoTrack utiliza sensores IoT instalados nos coletores para monitorar:

- 📊 Nível de preenchimento  
- 🔄 Status da coleta  
- 🗂 Histórico de descartes  
- ♻ Volume por categoria de material  

Os moradores acompanham seu impacto ambiental, recebem alertas e acumulam pontos ao reciclar, incentivando práticas sustentáveis por meio de gamificação.

---

## 🚀 Principais Funcionalidades

### 👤 Para Moradores
- Dashboard com nível dos resíduos em tempo real  
- Registro de descarte por tipo de material  
- Sistema de pontos e recompensas  
- Ranking entre moradores  
- Dicas e educação ambiental  
- Histórico pessoal de reciclagem  

### 🏢 Para Síndicos e Administradores
- Visão geral dos coletores  
- Relatórios automáticos mensais  
- Alertas de situações críticas  
- Gestão de moradores e desempenho geral  

---

## 🛠 Tecnologias Utilizadas

- **Frontend:** React, HTML/CSS/JavaScript  
- **Prototipação Mobile:** Figma + IA (Galileo)  
- **Backend:** Node.js / Python (a definir)  
- **IoT:** ESP32 + sensores ultrassônicos / load cell  
- **Banco de Dados:** Firebase / PostgreSQL  
- **Infraestrutura:** AWS / Azure / Render  

> 🔧 *Este README pode ser atualizado conforme a stack final for definida.*

---

## 🧩 Arquitetura do Sistema

[Moradores] → App Mobile → API → Banco de Dados
↑
Sensores IoT → MQTT/HTTP
↓
Dashboard Web (Síndico)

yaml

---

## 🎯 Público-Alvo

- Condomínios urbanos  
- Gestores de sustentabilidade  
- Moradores engajados  
- Estabelecimentos públicos com alta geração de resíduos  

---

## 🌍 Problemas que o EcoTrack Resolve

- Falta de gestão automatizada  
- Baixa adesão à coleta seletiva  
- Custos operacionais elevados  
- Baixo engajamento dos moradores  
- Ausência de dados reais sobre resíduos gerados  

---

## 💡 Proposta de Valor

- 💰 Redução de custos de coleta  
- 🎮 Gamificação para aumentar a participação  
- 📈 Decisões baseadas em dados  
- 🌱 Melhora do impacto ambiental  
- 🕒 Economia de tempo para o síndico  

---

## 💸 Modelo de Negócio

Mensalidade recorrente (R$ 250 – R$ 300) por condomínio, incluindo:

- Acesso à plataforma  
- Monitoramento IoT  
- Relatórios mensais  
- Suporte técnico  
- Gamificação integrada  

---

## 📊 Impacto Ambiental

Contribuição direta para os ODS da ONU:

- **ODS 11:** Cidades e Comunidades Sustentáveis  
- **ODS 12:** Consumo e Produção Responsáveis  
- **ODS 13:** Ação Contra a Mudança Global do Clima  

---

## 👥 Equipe

| Nome | Função |
|------|--------|
| Ana Carolina Gomes | Hustler – Gestão e Estratégia |
| Lucca Meneses | Hacker – UX/UI Design |
| Maria Fernanda Gosula | Hipster – Sustentabilidade |
| Charles Moese | Hacker – Engenharia de Computação |

---

## 🧪 Status do Projeto

- ✔ Ideação  
- ✔ Pitch inicial  
- ✔ Protótipo realista  
- ☐ Testes em condomínio piloto  

---

## 📥 Como executar o projeto

```sh
git clone https://github.com/ACarolinaG0/ecotrack.git
cd ecotrack
npm install
npm run dev
Abra no navegador:

arduino
http://localhost:3000
