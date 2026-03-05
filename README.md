<p align="center">📊 Stalse Analytics - Dashboard de Performance</p>

---

<p align="center">
<a href="https://metrics-dashboard-h1ptvyfq2-schiminskys-projects.vercel.app">
<strong>🌐 Visualize o Projeto Online (Live Demo)</strong>
</a>
</p>

---

## 📝 Sobre o Projeto
Este dashboard foi desenvolvido para a Stalse Analytics como um desafio técnico focado em Data Visualization e arquitetura moderna com Next.js.

O diferencial deste projeto reside na expertise de mercado aplicada: com mais de 2 anos de experiência como Desenvolvedor na Corebiz, atuei dedicado ao Grupo Adcos Dermocosméticos. Por conta dessa bagagem, utilizei nomes de campanhas, métricas e canais que refletem fielmente a estratégia de performance que eu aplicaria para este cliente no dia a dia. A aplicação consome uma API interna para monitorar essas métricas, oferecendo uma visão clara e profissional de investimentos e conversões.

---

🛠️ Stacks Utilizadas
<p align="left">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/Recharts-222222?style=for-the-badge&logo=recharts&logoColor=22B5BF" />
</p>

---

## ✨ Funcionalidades em Destaque
API de Performance: Rota de API simulada (app/api/data/route.ts) que entrega 13 campanhas reais e 3 métricas de negócio.

Gráficos Reais: Visualização de investimento por canal (Google Ads, Meta, TikTok, etc.) utilizando a biblioteca Recharts.

Tipagem Estrita: Zero uso de any. Toda a aplicação utiliza as interfaces definidas em lib/types.ts.

Gestão de Campanhas: Tabela interativa com filtros por status (Ativa/Pausada) gerenciados via estado local (useState).

Feedback de Carregamento: Implementação de Skeletons customizados para garantir uma UX fluida enquanto os dados são processados.

## 📂 Estrutura de Arquivos
```bash
src/
 ├── app/
 │    └── api/data/      # Mock de dados
 ├── components/ui/      # Componentes modulares (MetricCard, Skeleton, etc)
 └── lib/                # Contrato de interfaces e tipos
 ```
---

## 🚀 Guia de Instalação e Execução

Siga as instruções abaixo para configurar o ambiente e rodar o projeto localmente em sua máquina.

## 📋 Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* **Node.js** 
* **npm** ou **Yarn**
* Um navegador moderno para visualização (Chrome, Firefox ou Edge)


## 🛠️ Passo a Passo
**Clonar o Repositório:**
```bash
  git clone https://github.com/schiminsky/metrics-dashboard.git
```
**Instale as dependências e rode (npm):**
```bash
  npm install

  npm dev
```
**se preferir usar o Yarn:**
```bash
  yarn install

  yarn dev
```

---

## 🧪 Como Validar o Teste
Para testar as funcionalidades exigidas no MVP:

Filtros: Alterne entre "Ativas" e "Pausadas" na tabela para ver a reatividade do estado.

Gráficos: Interaja com as barras para ver o detalhamento do investimento por canal formatado em BRL.

Responsividade: Redimensione a janela para observar o ajuste do layout e do gráfico.

---

 <p align="center">
Desenvolvido por <strong>Claudio Schiminsky Junior</strong>
</p>