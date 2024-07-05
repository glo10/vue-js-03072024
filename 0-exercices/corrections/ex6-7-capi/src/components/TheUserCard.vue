<script setup>
const props = defineProps({
  user: Object
})
const { login, url, id, avatar_url, type, followers_url, site_admin } = props.user
</script>
<template>
  <div class="col-4">
    <div class="card" style="width: 15rem;">
      <img class="card-img-top" :src="avatar_url" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ login }}</h5>
        <p class="card-text">Id {{ id }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Type : {{ type }}</li>
        <li class="list-group-item">Admin : {{ site_admin ? 'Oui' : 'Non' }}</li>
      </ul>
      <div class="card-body">
        <a :href="url" class="card-link" target="__blank">Profil GitHub</a>
        <a :href="followers_url" class="card-link" target="__blank">Followers</a>
      </div>
    </div>
  </div>
</template>