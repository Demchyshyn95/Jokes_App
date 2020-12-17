<template>
    <div class="shadow-lg p-3 mb-5  mt-5 ml-5 mr-5  bg-white rounded text-success">
        <strong class="text-danger">{{ id }}</strong>
        <p>{{ joke }}</p>
    </div>
</template>

<script>
    import {listModule} from "../../store/list/list";
    import {JOKE_BY_ID} from "../../store/list/types";

    export default {
        name: "AboutJoke",
        data() {
            return {
                joke: '',
                id: ''

            }
        },

        beforeMount() {
            const {id} = this.$route.params;
            const {joke} = this.$store.getters[`${listModule}/${JOKE_BY_ID}`](id);

            this.id = id;
            this.joke = joke;
        }
    }
</script>

<style scoped>

</style>
