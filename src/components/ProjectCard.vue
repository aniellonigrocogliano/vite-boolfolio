<script>
export default {
    props: {
        cardObj: Object,
    }
};
</script>

<template>
    <div class="card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">{{ cardObj.title }}</h5>
            <p class="card-text">Descrizione: {{ cardObj.description }}</p>
            <p class="card-text">Autore: {{ cardObj.author }}</p>
            <p class="card-text">Data crerazione {{ cardObj.creation_date }}</p>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>