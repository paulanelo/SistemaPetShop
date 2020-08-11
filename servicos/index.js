const adicionarPet = (nome, rga, lista) => {
  let novoPet = {
    nome,
    rga,
  };

  lista.push(novoPet);
};

//criar uma função para listar os pets

const listarPets = (lista) => {
  let resultado = '';
  lista.forEach((pet) => {
    resultado += 'Nome: ' + pet.nome + ' || RGA: ' + pet.rga + '\n';
  });
  return resultado;
};

const vacinar = (pet) => {
  if (pet.Vacinado) {
    return console.log('Pet já está vacinado');
  }
  pet.Vacinado = true;
  console.log('pet vacinado com sucesso!');
};

const castrar = (pet) => {
  if (pet.Castrado) {
    return console.log('Pet já está Castrado');
  }
  pet.Castrado = true;
  console.log('pet Castrado com sucesso!');
};

const servico = (pet, servico) => {
  console.log('iniciando serviço');
  servico(pet);
};

const encontraPet = (petRga, lista) => {
  let petEncontrado = lista.find((pet) => pet.rga == petRga);
  return petEncontrado;
};

module.exports = {
  adicionarPet,
  listarPets,
  vacinar,
  castrar,
  servico,
  encontraPet,
};
