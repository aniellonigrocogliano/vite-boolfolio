<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        cardObj: Object,
    },
    components: {
        RouterLink
    },
};
</script>

<template>
    <RouterLink :to="{ name: 'project', params: { slug: cardObj.slug } }" class="card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">{{ cardObj.title }}</h5>
            <p class="card-text">Descrizione: {{ cardObj.description }}</p>
            <p class="card-text">Autore: {{ cardObj.author }}</p>
            <p class="card-text">Data crerazione {{ cardObj.creation_date }}</p>

        </div>
    </RouterLink>
</template>

<style lang="scss" scoped></style>