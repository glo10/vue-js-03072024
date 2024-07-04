<template>
<main>
  <slot name="banner">
    Banner par defaut si le parent ne fournit pas le template dédiée à cette partie
  </slot>
  <slot name="title">
    <h1>Titre par defaut</h1>
  </slot>
  <slot>Contenu principal non nommée</slot>
  <slot name="footer">Copyright 2024</slot>
</main>
</template>
