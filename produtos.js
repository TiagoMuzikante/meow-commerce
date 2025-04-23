export const itens =  [
  //lista de todos os produtos
  {
    id: 1,
    name: "Gato Siamês",
    description:"Olhos azuis marcantes, corpo esguio e muito vocal.",
    imagePath: "./assets/images/Cat.png",
    price: 1800
  },
  {
    id: 2,
    name: "Gato Persa",
    description: "Pelagem longa, focinho achatado e temperamento calmo.",
    imagePath: "./assets/images/Cat.png",
    price: 2000
  },
  {
    id: 3,
    name: "Gato Maine Coon",
    description: "Gigante gentil, peludo e super sociável.",
    imagePath: "./assets/images/Cat.png",
    price: 2000
  },
  {
    id: 4,
    name: "Gato Ragdoll",
    description: "Muito dócil, fica molinho no colo, olhos azuis intensos.",
    imagePath: "./assets/images/Cat.png",
    price: 1900
  },
  {
    id: 5,
    name: "Gato British Shorthair",
    description: "Pelagem densa, cara de ursinho, tranquilo e fofo.",
    imagePath: "./assets/images/Cat.png",
    price: 1700
  },
  {
    id: 6,
    name: "Gato Sphynx",
    description: "Sem pelos, super afetuoso e cheio de personalidade.",
    imagePath: "./assets/images/Cat.png",
    price: 2000
  },
  {
    id: 7,
    name: "Gato Bengal",
    description: "Pelo com padrão de leopardo, enérgico e curioso.",
    imagePath: "./assets/images/Cat.png",
    price: 1900
  },
  {
    id: 8,
    name: "Gato Scottish Fold",
    description: "Orelhas dobradas, olhar doce e comportamento tranquilo.",
    imagePath: "./assets/images/Cat.png",
    price: 1800
  },
  {
    id: 9,
    name: "Gato Abissínio",
    description: "Elegante, ativo e com pelagem dourada única.",
    imagePath: "./assets/images/Cat.png",
    price: 1500
  },
  {
    id: 10,
    name: "Gato Exotic Shorthair",
    description: "Versão de pelo curto do Persa, calmo e carinhoso.",
    imagePath: "./assets/images/Cat.png",
    price: 1900
  },
];

//encontra produtos attravez do id
export function findItem(id){
  return itens.filter(aux => aux.id == id)[0]
}

