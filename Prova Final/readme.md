# Trabalho Final da Disciplina de Desenvolvimento Mobile

## Features

- Authentication
- CRUD ( Create, Read, Update, Delete )
- Form validation
- Redux
- Firebase

## Preview

<img src="previewgif.gif" width="300">

## Getting started

### Clone Repo

````
git clone 
````

### npm install dependencies

````
npm install
````

## Firebase

### Criando o firebase app

- Você precisará do JavaScript (web ou Node.js) para criar no Firebase.
- Encontre o arquivo firebase.example.json no diretório src, renomeie-o para firebase.json e edite-o com a configuração do seu aplicativo firebase.

### Adicionar regras ao banco de dados Firebase

No console do Firebase, navegue até Banco de dados -> Regras e adicione o seguinte trecho de código.

````
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
````

## Rodando o app

### IOS

````
react-native run-ios
````

### Android

````
react-native run-android
````

### Testing

````
npm run test
````

### Linting

````
npm run lint
````
