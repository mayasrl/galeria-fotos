# Galeria de Fotos

Uma aplicação web simples de galeria de fotos com busca em tempo real e layout responsivo.

## Funcionalidades

- **Galeria Responsiva**: Layout grid que se adapta a diferentes tamanhos de tela
- **Busca em Tempo Real**: Filtre fotos conforme digita palavras-chave
- **Efeitos Interativos**: Hover com zoom e sombra nas fotos
- **12 Fotos Pré-carregadas**: Conjunto de imagens de paisagens naturais

## Tecnologias Utilizadas

- **React 19**: Framework JavaScript para construção de interfaces
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS 4**: Framework de CSS utilitário
- **Vite**: Build tool rápido e moderno

## Como Rodar Localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou pnpm

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/galeria-fotos.git
cd galeria-fotos
```

2. Instale as dependências:

```bash
npm install
# ou
pnpm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
pnpm dev
```

4. Abra seu navegador e acesse: `http://localhost:5173`

## Estrutura do Projeto

```
galeria-fotos/
├── src/
│   ├── components/
│   │   ├── PhotoCard.tsx
│   │   └── SearchBar.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── lib/
│   │   └── photos.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Como Usar

1. **Visualizar Fotos**: A galeria carrega automaticamente com 12 fotos
2. **Buscar Fotos**: Digite palavras-chave na barra de busca para filtrar fotos
3. **Interagir**: Passe o mouse sobre as fotos para ver efeitos de zoom e sombra
4. **Responsividade**: Redimensione a janela para ver o layout se adaptar

## Requisitos Atendidos

✅ Header com título centralizado "Galeria de Fotos"  
✅ Grid responsivo de fotos com nomes centralizados  
✅ Efeitos visuais ao passar o mouse (zoom e sombra)  
✅ Barra de busca com ícone de lupa  
✅ Busca em tempo real filtrando por nome da foto  
✅ Mensagem quando nenhuma foto é encontrada  
✅ Rodapé com copyright  
✅ Mínimo de 10 fotos carregadas  
✅ Layout totalmente responsivo  

## Build para Produção

```bash
npm run build
# ou
pnpm build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## Responsividade

A aplicação é totalmente responsiva:

- **Mobile** (< 640px): 1 coluna
- **Tablet** (640px - 1024px): 2 colunas
- **Desktop** (> 1024px): 4 colunas

## Licença

MIT
