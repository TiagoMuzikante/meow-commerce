export const itens = [
  //lista de todos os produtos
  {
    id: 1,
    name: "Gato vira-lata",
    description:"Um gato vira-lata, também conhecido como gato SRD (sem raça definida), é um gato que não tem pedigree. Ou seja, não tem um certificado que ateste a sua linhagem pura.",
    imagePath: "./assets/images/Cat.png",
    price: 1239.99
  },
  {
    id: 2,
    name: "Gato tico-tico",
    description: "Um gato tico-tico, também conhecido como gato GTT, é um gato de raça. Ou seja, tem um certificado e a sua linhagem é pura.",
    imagePath: "./assets/images/Cat.png",
    price: 5199.99
  },
];

//encontra produtos attravez do id
export function findItem(id){
  return itens.filter(aux => aux.id == id)[0]
}

