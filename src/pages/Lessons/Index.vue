<template>
    <transition name="transform" mode="out-in">
        <v-layout row wrap>
            <v-flex xs12>
                <v-btn
                        round
                        color="teal"
                        class="white--text mx-0 mb-4"
                        :to="{ name: 'lessons.add', params: {id: $route.params.id}}"
                >
                    Добавить
                    <v-icon right dark>add</v-icon>
                </v-btn>
            </v-flex>
            <v-flex v-if="lessons.length" xs2 v-for="lesson in lessons" :key="lesson._id" class="px-1 mb-3">
                <v-card :to="{ name: 'tasks'}">
                    <v-card-title primary-title>
                        <h3 class="headline mb-0 mx-auto">{{ lesson.title}}</h3>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </transition>
</template>

<script>

    export default {
        data: () => ({
            title: 'Уроки',
            lessons: [
                {
                    _id: '',
                    "name" : '',
                    "title" : '',
                }

            ],
            loadApi: true
        }),
        created() {
            this.getLessons();
            this.$emit('setTitle', this.title)
        },
        methods: {
            // deleteItem(id) {
            //     this.$http.delete('http://95.213.251.172:3000/languages/levels/'+id)
            //         .then( response => {
            //             this.getLevel();
            //         })
            //         .catch( response => {
            //             console.log(response)
            //         })
            // },
            getLessons() {
                this.$http.get('http://95.213.251.172:3000/languages/lessons/'+this.$route.params.id, {
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                    .then(response => {
                        this.lessons = response.data.lessons
                        this.loadApi = !this.loadApi
                    })
            }
        }
    }
</script>

<style scoped>

</style>