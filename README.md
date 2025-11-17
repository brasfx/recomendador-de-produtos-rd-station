# Recomendador de Produtos RD Station

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

- React.js: Para o desenvolvimento do front-end
- json-server: Para simular um servidor RESTful com dados de produtos
- Tailwind CSS: Para estilização e layout responsivo

## Requisitos Técnicos

### Familiaridade com Tailwind CSS

O layout da aplicação foi desenvolvido utilizando Tailwind CSS. Familiaridade básica com este framework de CSS utilitário será útil para entender e potencialmente modificar o layout existente.

### Versão do Node.js

Este projeto requer Node.js versão 18.3 ou superior. Se você não tem essa versão instalada, siga as instruções abaixo para instalá-la usando `n` ou `nvm`.

#### Usando `n` (Node Version Manager):

1. Instale `n` globalmente (caso ainda não tenha): npm install -g n

2. Instale e use a versão 18.3 do Node.js: n 18.3

#### Usando `nvm` (Node Version Manager):

1. Instale `nvm` (caso ainda não tenha) seguindo as instruções em: https://github.com/nvm-sh/nvm

2. Instale e use a versão 18.3 do Node.js: nvm install 18.3 & nvm use 18.3

Após instalar a versão correta do Node.js, você pode prosseguir com a instalação das dependências do projeto e iniciar o desenvolvimento.

## Desenvolvimento e melhorias aplicadas

 1. Nenhuma biblioteca extra foi adicionada.
 2. Percebi que as features e preferences trazidas pela API do json-server não são totais, são apenas 8 das 12 de cada opção. Com isso alguns testes via interface eram mais dificeis de serem executados. Não sei se foi proposital, mas deixo aqui o feedback sobre a situação.
 3. Todos os testes foram executados e aprvados no frontend. Para executar rode: `cd frontend && yarn test` ou dentro de frontend: `yarn test`.
 4. A página foi ajustada para mobile, com isso há uma visualização responsiva independente da resolução.
 5. De acordo a descrição enviada sobre o desafio, a solução foi aplicada com base no meu entedimento do que deveria ser a entrega.
 6. Foram criados novos componentes, testes e configurações. Seguem abaixo suas descrições:

 - `App.js`  

    Defini a lógica para obter informações da API em json-server como produtos, preferências e funcionalidades, além disso é gerido o estado das recomendações, esses dados são compartilhados para os componentes filhos.
 - `App.test.js`  

    Aqui foram definidos os testes para o App.js, testes simples para verificar se há titulo e descrição e se o RecomendationList.js está sendo renderizado.

- `Form.js`  

  O componente foi ajustado para receber as props provindas do App.js (onRecommendations, products, preferences, features). Com isso consigo receber as informações da API atualizadas e fornecer dados para gerar a recomendação.
  Adicionei um botão para limpar o formulário e facilitar caso o usuário deseje reiniciar o processo sem ter que desmarcar tudo ou reiniciar a página. A ação limpa todos os estados e resultados gerados.
- `Form.test.js`  

  Criei um arquivo de testes para o Form.js para testar as interações e ações de botão (gerar recomendação e limpar formulário) e envio dos dados para gerar recomendação.

- `recommendation.service.js`  

  Inseri a lógica no componente para gerar o perfil desejado de acordo as features/preferences e modo (único ou multiplo) definidas pelo usuário. Criei uma função auxiliar desacoplada para calcular o score, enum para facilitar o uso do modo de produto. Deixei comentários em cada parte do código afim de facilitar a explicação e entedimento do mesmo.
  Deixei duas versões no código, uma para melhor match (score maior), onde ela filtra somente as melhores recomendações definidas pela maior pontuação, essa versão está comentada. A outra retorna produtos que possuam match diferente de zero quando modo multi e a ultima recomendação da lista em modo single (versão que entendi que seria para entrega, de acordo os testes já escritos).
- `recommendation.service.test.js`  

  Os testes estavam basicamente prontos, validei somente a lógica por trás e usei deles para entender se minha resolução fazia sentido. Somente um teste achei que precisaria de ajuste, de acordo a lógica de melhor match ou match > 0. Porém mantive como estavam e todos passaram.

 - `Card.js (RecommendationsList)`  

    Crie um componente de card, afim de melhorar a visualização da recomendação gerada. Com isso além do nome do cargo e tipo, é possível ver as preferências e funcionalidades daquela recomendação. Como é um componente que por momento não precisaria ser usado para outro aspecto, mantive junto a pasta no componente pai, mas como ele recebe props especificas, pode ser reutilizado ou movido para ser compartilhado à outras features, se necessário.
    Na versão de multiplos produtos, o card exibe uma visualização diferente, inserindo uma borda na melhor recomendação, inclui a quantidade de matches(de acordo preferências e funcionalidades) e dá um destaque nas caracteristicas selecionadas.

- `Radio.js`  

  Criei esse componente de radio para ser usado no RecommendationType.js. Ele usava o mesmo componente para Preferences e Features, mudando apenas o tipo. Porém ao meu ver afim de insrir testes e ou configurações, sejam eles em estrutura, ação ou apenas design, talvez não se deseje o mesmo resultado em ambos os locais. 

- `Button.js(SubmitButton.js)`  

  Alterei o SubmitButton.js para Button.js afim de fazê lo um componente reutilizavel, apenas inserindo novas props para tipo, variação e recebendo demais props de um button padrão. Isso me permitou reutilizar o botão para gerar recomendação e limpar o form, com a mesma estrutura e só passando o que necessitava.
- `Button.test.js`  

  Fiz alguns testes para o botão como verificar variação (primary, secondary), estado de desabilitado, clique no botão.

- `assets/images`  

  Criei a pasta somente para inserir um logo para ser usado no App.js

- `tailwind.config.js`  

  Inseri algumas cores, tipografia e sombras para utilizar em alguns locais.

- `Stars.js`  
  Componente para informar por meio de estrelas o match do produto de acordo as preferencias e funcionalidades escolhidas.

## Melhorias desejadas(faltou tempo para implementar)  

  1. Aplicar tipagem aos componentes.  

  2. Criar um estado de persistência para o form e recomendação gerada após um refesh da página.  

  3. Melhorias esteticas na interface. Se houvessem mais informações da regra de negócio, daria pra ter niveis diferentes de indicação e com isso definir cores e mais insumos para escolha de um produto. 

  4. Mais alguns testes para cobrir tudo.  


## Como Executar

1. Clone o repositório: `git clone <URL_DO_REPOSITORIO>`
2. Instale as dependências: `yarn install`
3. Para instalar o projeto, execute o script `./install.sh` 
4. Inicie a aplicação: `yarn start`

### Scripts Disponíveis

- `start`: Inicia a aplicação React em modo de desenvolvimento.
- `start:frontend`: Inicia apenas a parte frontend da aplicação em modo de desenvolvimento.
- `start:backend`: Inicia apenas a parte backend da aplicação em modo de desenvolvimento.
- `dev`: Inicia simultaneamente a parte frontend e backend da aplicação em modo de desenvolvimento.

## Critérios de Aceite

1. O serviço de recomendação de produtos deve ser capaz de receber as preferências e funcionalidades desejadas do usuário através de um formulário.
2. O serviço deve retornar recomendações de produtos com base nas preferências e funcionalidades selecionadas pelo usuário.
3. Se o tipo de recomendação selecionado for "SingleProduct", o serviço deve retornar apenas um produto que corresponda melhor às preferências e funcionalidades do usuário.
4. Se o tipo de recomendação selecionado for "MultipleProducts", o serviço deve retornar uma lista de produtos que correspondam às preferências e funcionalidades do usuário.
5. Em caso de empate na seleção de produtos com base nas preferências e funcionalidades do usuário, o serviço deve retornar o último produto que atende aos critérios de seleção.
6. O serviço deve ser capaz de lidar com diferentes tipos de preferências e funcionalidades selecionadas pelo usuário.
7. O serviço deve ser modular e facilmente extensível para futuras atualizações e adições de funcionalidades.

Certifique-se de que todos os critérios de aceite são atendidos durante o desenvolvimento do projeto.

## Autor

Desenvolvido por Davi Ribeiro

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Happy Hacking! xD
