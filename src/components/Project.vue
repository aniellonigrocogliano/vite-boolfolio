<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: null
        };
    },
    created() {
        this.fetchProject();
    },
    methods: {
        fetchProject() {
            const slug = this.$route.params.slug;
            axios.get(`http://127.0.0.1:8000/api/projects/${slug}`)
                .then(response => {
                    this.project = response.data.results;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getCoverImage(imagePath) {
            return imagePath
                ? `http://127.0.0.1:8000/storage/${imagePath}`
                : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
        }
    }
};
</script>
<template>
    <div class="container">
        <div class="card ">
            <img :src="getCoverImage(project.cover_image)" style="width: 18rem;" class="card-img-top"
                :alt="project.title">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">Autore: {{ project.author }}</p>
                <p class="card-text">Data di creazione: {{ project.creation_date }}</p>
                <p class="card-text">Descrizione: {{ project.description }}</p>
                <p class="card-text">Contenuto: {{ project.content }}</p>
                <p class="card-text">Tipologia: {{ project.type?.name }}</p>
                <div class="d-flex">
                    <div class="d-flex m-1" v-for="technology in project.technologies" :key="technology.id">
                        <span :style="{ backgroundColor: technology.color }" class="badge p-2">{{ technology.name
                            }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>