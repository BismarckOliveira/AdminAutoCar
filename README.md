# Cadastro de Carro

**RF** => Requisitos Funcionais
- Deve ser possível cadastrar um novo carro

**RNF** => Requisitos não Funcionais
  N/D

**RN** => Regras de negócio
- Não deve ser possível cadastar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de Carros

**RF**
- Deve ser possível listar todos os carros disponiveis
- Deve ser possível listar todos os carros disponiveis pelo nome da categoria
- Deve ser possível listar todos os carros disponiveis pelo nome da marca
- Deve ser possível listar todos os carros disponiveis pelo nome do carro

**RN**
- O usuário não precisa estar logado no sistema

# Cadastro de Especificação no Carro

**RF**
- Deve ser possível cadastar uma especificação para um carro
- Deve ser possível listar todas as especificações 
- Deve ser possivel listar todos os carros



**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do Carro

**RF**
- Deve ser possivel cadastrar a imagem do carro
- Deve ser possivel listar todos os carros

**RNF**
- Utilizar o multer para upload dos arquivos

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
- Deve ser possível cadastrar um aluguel

**RN**
- O aluguel deve ter duração minima de 24 hora.
- Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuario
- Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro