<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
    components: {
        ProjectCard,

    },
    data() {
        return {
            project: [],
        };
    },
    created() {
        this.generateProject();
    },
    methods: {
        generateProject() {
            axios
                .get('http://127.0.0.1:8000/api/projects')
                .then((resp) => {
                    console.log(resp);
                    this.project = resp.data.results;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
};
</script>
<template>
    <div class="container">
        <div class="row row-cols-4">
            <div class="col" v-for="card in project.data">
                <ProjectCard :cardObj="card" />
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>