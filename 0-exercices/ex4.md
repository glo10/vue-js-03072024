# Exercice 4

---

## Enoncé

1. Créez l'application Vue avec `npm`
2. Récupérez les fichiers sources du template [convertisseur de devises](./ressources/convertor.zip)
3. Refactorisez les sources récupérés en application ***Vue*** en utilisant le Single File Components ainsi que les propriétés, directives et événements du framework ***Vue***.

---

## Aide pour une mise en place avec l'Options API

1. Créez un nouveau ou plusieurs composants au niveau du dossier */src/components*
2. Importez-les dans */src/App.vue*.
3. Supprimez tout ce qui se réfère à *HelloWorld.vue* dans */src/App.vue*.
4. Dans */public/index.html*, ajoutez tous les liens externes aux fonts, librairies, etc dans la balise `<head></head>`.
5. Ajoutez le contenu du *body* HTML et le CSS aux endroits dédiés dans votre composant. Le HTML entre les balises `<template></template>` et le CSS entre les balises `<style></style>`
6. Dans le CSS, supprimez toutes les propriétés `display:none`.
7. Intégrez et refactorisez progressivemment le JavaScript d'origine dans la partie dédiée au JS de votre composant entre les balises `<script></script>`.
- Remplacez l'appel des méthodes du DOM (*querySelector, getElementById, etc.*) par les propriétés Vue
- Ajoutez les fonctions dans la partie *methods*
- Modifiez les fonctions si nécessaires par rapport à la logique du framework Vue
- Ajoutez, associez les événements et les méthodes

---

## Illustration

![convertor](./img/convertor.png)

---

## Bonus : optimisation appel API

1. Pour éviter de faire des appels à l'API à chaque requête, stockez les taux en local à l'aide de localStorage.
N'oubliez pas d'utiliser les fonctions `JSON.parse() et JSON.stringify` pour sérialiser et désérialiser les données.
2. Désactivez le bouton de conversion lorsque le montant n'est pas saisi.

