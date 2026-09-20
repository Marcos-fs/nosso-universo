# Nosso Universo

Uma experiência romântica em React + TypeScript + Vite, pensada para funcionar bem mesmo antes de receber as fotos, a data e a música reais.

## Começar

```bash
npm install
npm run dev
```

Para validar a build de produção:

```bash
npm run build
```

## Personalizar

Edite apenas `src/data/loveData.ts` para trocar nomes, data, textos, cartas, memórias, motivos e sonhos iniciais.

- Foto principal: `public/images/hero/main.png`
- Foto especial final: `public/images/hero/surprise.jpg`
- Fotos do álbum: `public/images/photos/`
- Fotos da timeline: `public/images/memories/`
- Música: `public/audio/nossa-musica.mp3`

Enquanto os arquivos não existem, a interface exibe artes de fallback e o player informa exatamente o caminho que precisa ser preenchido.

## Interações incluídas

- Tela de entrada com transição e tentativa de iniciar a música após o clique.
- Contador em tempo real, sem inventar data quando `startDate` está vazio.
- Timeline com reveal on scroll.
- Cards “pequenas coisas”.
- Cartas “abra quando...”.
- Álbum com polaroids, fallback e lightbox.
- Constelação clicável.
- Motivos aleatórios sem repetição até completar o ciclo.
- Sonhos adicionáveis com persistência em `localStorage`.
- Player customizado e tolerante à ausência do áudio.
- Carta final e surpresa revelada.
- Modo secreto: clique cinco vezes na pequena estrela ou no coração do rodapé.
- `prefers-reduced-motion`, foco visível, labels e navegação por teclado.
