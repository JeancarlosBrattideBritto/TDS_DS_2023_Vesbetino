create database banquinho;

CREATE TABLE `alunos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `idade` int(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
);


CREATE TABLE `professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `estado` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO apiDB.alunos (id, nome, idade, email) VALUES(1, 'jeancarlosOhomem', 17, NULL);
INSERT INTO apiDB.alunos (id, nome, idade, email) VALUES(2, 'Jeancarlos', 18, NULL);
INSERT INTO apiDB.alunos (id, nome, idade, email) VALUES(3, 'tobias', 10, NULL);
INSERT INTO apiDB.alunos (id, nome, idade, email) VALUES(4, 'mateus', 26, NULL);
INSERT INTO apiDB.alunos (id, nome, idade, email) VALUES(5, 'douglas', 66, NULL);

INSERT INTO apiDB.professor (id, nome, estado) VALUES(1, 'GuilhermePira', 'so Dando Aula ou Seja desempregado');