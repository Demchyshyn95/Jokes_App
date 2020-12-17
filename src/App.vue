<template>
    <router-view/>
</template>

<script>


    import { listModule } from "./store/list/list";
    import { GET_JOKES } from "./store/list/types";

    export default {
        name: 'App',
        components: {},

        async created() {
           await this.$store.dispatch(`${ listModule }/${ GET_JOKES }`);
        }

    }

</script>

<style>

</style>
