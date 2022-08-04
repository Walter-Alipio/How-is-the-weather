# Como está o tempo hoje?

Este projeto faz parte do processo seletivo para vaga de estágio do [Letras](https://www.letras.mus.br/)

#

## Desafio

O intuito desse desafio é identificar o clima da cidade pesquisada através do [Open Wheater](https://openweathermap.org/)

### Implementado

- Responsividade a telas grandes e pequenas.
- Input da página home com auto complete pela api google maps.
- Imprime erro caso não encontre resultados.
- Informações do clima e icones da api do open weather.
- Seleção entre fahrenheit e celsius.
- Seleção de idiomas.
- Temperatura para os próximos 5 dias.

### Descrição

<p>Digite o nome da cidade no campo para ver o clima atual.</p>
<p align="center" width="100%">
  <img src='https://i.imgur.com/giZEU7C.png' alt='Campo de input para nome da cidade' align='center'>
</p>

#

<p>Por default, a temperatura virá em fahrenheit, é possível alterar a opção de temperatura clicando no select no canto superior direito.</p>
<p align="center" width="100%">
  <img src='https://i.imgur.com/vygbZrt.png' alt='Seletor de unidade da temperatura' align='center'>
</p>

#

<p>O idioma padrão é português, é possível alterar entre português, inglês e espanhol clicando nos botões presentes no rodapé.</p>
<p align="center" width="100%">
  <img src='https://i.imgur.com/4TLppPb.png' alt='Botões de seleção de idioma' >
</p>

#

### Como rodar o projeto

`npm install`<br>
`npm run dev`<br>
`<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>`<br>

YOUR_API_KEY deve ser substituído por sua chave da [API Google](https://developers.google.com/maps/documentation/javascript/places-autocomplete)<br>

<p>Preencha o arquivo .env conforme o exemplo</p>

#

### Tecnologias utilizadas

<p>Reactjs | Tailwindcss | Typescript</p>

#

### Deploy

[Como está o tempo hoje?](https://desafio-pratico-letras.vercel.app/)
