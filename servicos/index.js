const adicionarPet = (
  nome,
  idade,
  raca,
  sexo,
  cuidador,
  castrado,
  vacinado,
  rga
) => {
  let novoPet = {
    nome,
    idade,
    raca,
    sexo,
    cuidador,
    castrado,
    vacinado,
    rga,
  };

  listaDePets.push(novoPet);
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

const encontraPet = (petRga) => {
  let petAchado = listaDePets.find(
    (pet, numero) => !!(listaDePets[numero].rga == petRga)
  );

  return petAchado != undefined;
};

module.exports = {
  adicionarPet,
  listarPets,
  vacinar,
  castrar,
  servico,
  encontraPet,
};
