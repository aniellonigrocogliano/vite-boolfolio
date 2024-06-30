<script>
import axios from 'axios';
export default {
    data() {
        return {
            project: null,
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
                    this.project = resp.data.response;
                })
                .catch((error) => {
                    console.error(error);
                });
            console.log(this.project);
        },
    },
};
</script>
<template>

</template>
<style lang="scss"></style>