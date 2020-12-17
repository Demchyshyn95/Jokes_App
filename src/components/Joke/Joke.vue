<template>
    <div class="shadow p-3 mb-5 bg-light rounded" @click="more">
        <strong class="text-danger">{{ joke.id }}</strong>
        <p>{{ joke.joke }}</p>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "Joke",

        props: {
            joke: {
                type: Object
            }
        },

        methods: {
            more() {
                this.$router.push(`${ this.joke.id }`);
            }
        }

    }
</script>

<style scoped>

</style>
