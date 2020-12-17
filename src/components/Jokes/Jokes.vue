<template>
    <div class="w-75 m-auto">
        <div class="d-flex justify-content-center  mt-2">
            <input class="w-75 " v-model="text"/>
        </div>
        <div class="mb-5">
            <button class="btn btn-success float-left mb-2" id="Prev" @click="DecCurrentPage">Назад</button>
            <button class="btn btn-success float-right" id="Next" @click="IncCurrentPage">Вперед</button>
        </div>
        <hr/>
        <div v-if="jokes" class="mt-2">
            <div v-for="(joke,i) in jokes" :key="i">
                <Joke :joke="joke"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {listModule} from "../../store/list/list";
    import {FIND_JOKE, GET_JOKES} from "../../store/list/types";
    import Joke from "../Joke/Joke";

    export default {
        name: "Jokes",

        data() {
            return {
                text: '',
                jokes: [],
                page: 1,
                pageCount: ''
            }
        },

        components: {Joke},

        async beforeMount() {
            const data = await this.$store.dispatch(`${ listModule }/${ GET_JOKES }`);
            this.jokes = data;
        },

        beforeUpdate() {
            this.GetCurrentJokes();
        },


        methods: {

            IncCurrentPage() {
                this.page++;
                this.GetCurrentJokes();
            },

            DecCurrentPage() {
                this.page--;
                this.GetCurrentJokes();
            },

            GetCurrentJokes() {
                const { allJokes, pageCount } = this.$store.getters[`${ listModule }/${ FIND_JOKE }`](this.text);
                const prevBtn = document.getElementById("Prev");
                const nextBtn = document.getElementById("Next");


                this.jokes = allJokes[this.page - 1] || allJokes[0];
                this.pageCount = pageCount;

                console.log(this.pageCount + ' довжина', this.page);

                if (this.page === 1) {
                    if (this.page === 1 && this.pageCount === 0) {
                        nextBtn.disabled = true;
                        prevBtn.disabled = true;
                    } else if (this.pageCount === this.page) {
                        nextBtn.disabled = true;
                        prevBtn.disabled = true;
                    } else {
                        prevBtn.disabled = true;
                        nextBtn.disabled = false;
                    }

                } else if (this.page > this.pageCount) {
                    prevBtn.disabled = true;
                    nextBtn.disabled = true;
                } else if (this.page === this.pageCount) {
                    prevBtn.disabled = false;
                    nextBtn.disabled = true;
                } else {
                    prevBtn.disabled = false;
                    nextBtn.disabled = false;
                }
            }

        }
    }
</script>

<style scoped>

</style>
