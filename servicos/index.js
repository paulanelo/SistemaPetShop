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
  }
  
  
  //criar uma função para listar os pets
  
  const listarPets = () => {
    listaDePets.map((pet) => {
      console.log("-".repeat(12));
      console.log("Nome do Pet:" + pet.Nome);
      console.log("Idade do Pet:" + pet.Idade);
      console.log("Raca do Pet:" + pet.Raca);
      console.log("Sexo do Pet:" + pet.Sexo);
      console.log("Cuidador do Pet:" + pet.Cuidador);
      console.log("Castrado:" + pet.Castrado);
      console.log("Vacinado:" + pet.Vacinado);
      console.log("-".repeat(12));
    });
  };
  
const vacinar = (pet) => {
    if (pet.Vacinado) {
      return console.log("Pet já está vacinado");
    }
    pet.Vacinado = true;
    console.log("pet vacinado com sucesso!");
  }
  
  const castrar = (pet) => {
    if (pet.Castrado) {
      return console.log("Pet já está Castrado");
    }
    pet.Castrado = true;
    console.log("pet Castrado com sucesso!");
  };
  
  const servico = (pet, servico) => {
    console.log("iniciando serviço");
    servico(pet);
  };

  const encontraPet = (petRga) => {
    let petAchado = listaDePets.find(
      (pet, numero) => !!(listaDePets[numero].rga == petRga)
    );
  
    return petAchado != undefined;
  };

module.exports = {adicionarPet, listarPets, vacinar, castrar, servico, encontraPet}