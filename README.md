# 🛒 Desafio Shopper 📦
> Desenvolvido por: Guilherme Augusto do Carmo Fernandes
> - Email: [gfengquimica@gmail.com](mailto:gfengquimica@gmail.com)
> - LinkedIn: https://www.linkedin.com/in/guilherme-ac-fernandes/
> - GitHub: https://github.com/guilherme-ac-fernandes
> - Portfolio: https://guilherme-ac-fernandes.vercel.app

<br />

Consiste em uma aplicação full-stack dockerizada para gereciamento de produtos pertences a um e-commerce, capaz de atualizar o valor de comercialização dos produtos e packs de produtos.

<br />

### FrontEnd:
* Construído com React, React Hooks, Typescript, CSS e Docker

### BackEnd:

* Construído com Node.js, Express, Typescript, MySQL, Sequelize e Docker
* Utilizando os princípios SOLID e Programação Orientada a Objetos
* Aplicando Arquitetura de Software, com as camadas de Modelo, Serviço e de Controladores

### Instruções

- Para rodar a aplicação dockerizada, realize o clone do projeto e utilize os comandos a seguir:

```
<-- na raiz do projeto -->
npm run compose:up
```

A aplicação está disponível seguintes portas: [FrontEnd](http://localhost:3000/)(3000) e [BackEnd](http://localhost:3001/users)(3001)

**Observação:** caso realize o comando `npm run compose:up`, o banco de dados é populado pelo sequelize.

<br />

- Para parar todos os container criados pelo docker, dependendo do comando utilizando para iniciar a aplicação dockerizada:

```
<-- na raiz do projeto -->
npm run compose:down
```

<br />


### Endpoints

#### Produtos

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna todos os produtos cadastrados | http://localhost:3001/products |
| `GET` | Retorna os dados de um produto específico a partir de seu código | http://localhost:3001/products/productCode |
| `POST` | Criação de um novo produto | http://localhost:3001/products |
| `PATCH` | Atualiza dados de um usuário existente | http://localhost:3001/products |

<br />

Nas requisições POST é necessário informar o seguinte JSON:

```
{
	"code": 1274,
	"name": "Funko",
	"costPrice": 23,
	"salesPrice": 24
}
```

Nas requisições PATCH é necessário informar o seguinte JSON:

```
{
	"product_code": 24, // código do produto a ser atualizado
	"new_price": "4.10" // novo valor de comercialização do produto
}
```

#### Packs de Produtos

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna todos as informações de packs cadastrados | http://localhost:3001/packs |
