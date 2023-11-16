create database bancoDedados;

create table bancoDedados.usuario(
    IDusuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    user_Name VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    atribuicao_ID INT FOREIGN KEY
);

create table bancoDedados.atribuicao(
    atribuicaoID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    descricao VARCHAR(255),
    status BOOLEAN DEFAULT(1) NOT NULL
);

create TABLE bancoDedados.recuperar_senha(
    recuperacao_ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    chave VARCHAR(255),
    usuario_ID INT FOREIGN KEY
);