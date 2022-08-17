# Découverte de react

## Le fragment

En React, il est courant pour un composant de renvoyer plusieurs éléments. Les fragments nous permettent de grouper une liste d’enfants sans ajouter de nœud supplémentaire au DOM.

```js
const App = () => {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
```
