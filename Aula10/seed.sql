-- database: banco.db
CREATE TABLE usuarios (
    id,
    nome,
    email
);

INSERT INTO usuarios (id, nome, email)
VALUES (1, 'jarvis', 'jarvis@megabrain.com.br');

SELECT * FROM usuarios;