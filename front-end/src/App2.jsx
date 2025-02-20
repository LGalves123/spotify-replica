import React from "react";

const App2 = () => {
  console.log("Olá, Mundo!");
  return <div>App2</div>;
};

// export default App2

//
// Arrow Function

// const App2 = () => <h1>Olá, Mundo</h1>;

// Utilizando PascalCase para nomeaçoes de componentes

// Utilizando camelCase para nomeaçoes de variáveis, funçoes...

// export default, posso importar com qualquer nome e sem chaves

// export (sem default), só posso importar entre chaves e com o nome exportado

// Self closing tag
// </Header>

// Nomeaçao de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// Exemplo:
// header
// header__link
// header__link--small

// kebab-case

// Tag vazia em React se chama fragment

// Componentes recebem "props"

// // {items === 5 ? (
//   <>
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
// </>
// ) : (
// <>
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
// </>
// )}

// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`} />
//   ))}

// Spread operator
// ...
