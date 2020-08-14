<p align="center">
<img src="./src/images/4.gif " width="200" heigth="200" >
</p>

***
### Índice
* [1. Apresentação](#1-apresentacao)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. MVP - Mínimo Produto Viável](#3-minimo-produto-viavel)
* [4. Planejamento](#4-planejamento)
* [5. Considerações Gerais](#5-consideracoes-gerais)
***

## 1. Apresentação   

A página da aplicação pode ser acessada atraves do Link: [Burger Queen](https://burger-queen-f1fd7.web.app//). Interface de pedidos _serverless_ para o restaurante fast-food Burger Queen utilizando React.js.
***

## 2. Resumo do projeto
Um pequeno restaurante de hambúrgueres, que está crescendo, necessita de uma interface em que se possa realizar pedidos utilizando um _tablet_ e enviá-los
para a cozinha para que sejam preparados de forma ordenada e eficiente.

**_Estas são as informações que temos do cliente:_**

> Somos **Burger Queen**, um fast food 24hrs.
>
>A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
>crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
>clientes.
>
>Nós temos 2 menus. Um muito simples para o café da manhã:
>
>| Item                      |Preço R$|
>|---------------------------|------|
>| Café americano            |    5 |
>| Café com leite            |    7 |
>| Misto Quente              |   10 |
>| Suco de fruta natural     |    7 |
>
>E outro menu para o resto do dia:
>
>| Item                      |Preço |
>|---------------------------|------|
>|**Hambúrgueres**           |   **R$**   |
>|Hambúrguer simples         |    10|
>|Hambúrguer duplo           |    15|
>|**Acompanhamentos**        |   **R$**   |
>|Batata frita               |     5|
>|Anéis de cebola            |     5|
>|**Bebidas**                |   **R$**   |
>|Água 500ml                 |     5|
>|Água 750ml                 |     7|
>|Refrigerante 500ml         |     7|
>|Refrigerante 750ml         |    10|
>
>**Importante:** Os clientes podem escolher entre hambúrgueres de carne bovina,
>frango ou vegetariano. Além disso, por um adicional de R$ 1,00 eles podem
>adicionar queijo ou ovo.
>
>Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
>seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O atendente deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.


***
## 3. MVP - Mínimo Produto Viável

### Definição do produto
O [Product Owner](https://www.desenvolvimentoagil.com.br/scrum/product_owner) nos apresentou este _backlog_ que é o resultado do seu trabalho com o cliente até hoje.

***

### [História de usuário 1] Usuário deve ter seu perfil (login/senha) para acessar o sistema.
Eu como funcionário do restaurante quero entrar na plataforma e ver apenas a tela importante para o meu trabalho.

##### Critérios de aceitação
* Criar login e senha.
* Registar tipo de usuário (cozinha / salão), login e senha.
* Entrar na tela correta para cada usuário.

***

#### [História de usuário 2] Garçom/Garçonete deve poder anotar o seu pedido

Eu como garçom/garçonete quero poder anotar o meu pedido saber o valor de cada produto e poder enviar o pedido para a cozinha para ser preparado.

##### Critérios de aceitação

* Anotar o nome e mesa.
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem e se adequar a um tablet.

***

#### [História de usuário 3] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

##### Critérios de aceitação

* Ver os pedidos à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.


***

#### [História de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

##### Critérios de aceitação

* Ver a lista de pedidos prontos para servir.
* Marque os pedidos que foram entregues.

##### Definição de pronto para todas as histórias
* Foi feito testes de usabilidade e incorporado o feedback do usuário.
* Foi dado o deploy do aplicativo.

##### Definição de pronto adicional para HU 4.
* Os dados devem ser mantidos intactos, mesmo depois que um pedido terminado. Tudo isso para poder ter estatísticas no futuro.

## 4. Planejamento

O Floxograma do projeto foi o primeiro passo do nosso planejamento.
#### Página de Pedidos
<img src="./src/images/fluxograma.png" width="600" heigth="500px">

Foi utilizada a ferramenta trello, para o planejamento e acompanhamento das tarefas em cada Sprint e reuniões diárias [dailys](https://www.desenvolvimentoagil.com.br/scrum/daily_scrum) para o melhor aproveitamento do tempo e gestão de impedimentos na equipe. 


***
### Protótipo
O protótipo também foi essencial no planejamento, para que a equipe tivesse a mesma visão do MVP.


#### Página de Login para o Tablet
<img src="./src/images/logintablet.png" width="600" />


#### Página de Login para Web
<img src="./src/images/loginweb.png" width="600" />


#### Página de Menu para o Tablet
<img src="./src/images/menutablet.png" width="600" />

#### Página de Menu para Web
<img src="./src/images/menuweb.png" width="600" />


#### Página de Pedidos
<img src="./src/images/pedidofeito.png" width="600" />
***

## 5. Considerações Gerais

* Interface foi pensada específicamente para rodar em **tablets**.
* Aplicativo Web **responsivo**.
* O aplicativo é um _Single Page App_.


Ferramentas e bibliotecas: 
 * JavaScript (ES6 +)
 * React.js (Hooks)
 * HTML5
 * CSS3
 * [Firebase](https://firebase.google.com/docs?hl=pt-br)
 * [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
 * [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
  * [Eslint](https://www.npmjs.com/package/eslint-plugin-react)
 * [Prettier](https://prettier.io/)
 * [Trello](https://trello.com)
 * [Growl-alert](https://www.npmjs.com/package/growl-alert)
 
 
Desenvolvido por: 
* [Daiane Vieira](https://github.com/daianevieira07)
* [Gisele Cesar](https://github.com/gisele-cesar)
* [Jéssica Brunhara](https://github.com/jessicabrunhara)


***
