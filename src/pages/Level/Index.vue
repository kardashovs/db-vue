<template>
    <transition name="transform" mode="out-in">
        <v-layout row wrap>
            <v-flex xs12>
                <v-btn
                        round
                        color="teal"
                        class="white--text mx-0 mb-4"
                        :to="{ name: 'level.add', params: {id: $route.params.id}}"
                >
                    Добавить
                    <v-icon right dark>add</v-icon>
                </v-btn>
            </v-flex>
            <v-flex v-if="levels.length" xs3 v-for="level in levels" :key="level._id" class="px-1 mb-3">
                <v-card :to="{ name: 'lessons', params: { id: level._id} }">
                    <v-card-media :src="level.image" height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ level.title}}</h3>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <!--<v-btn block color="orange" class="white&#45;&#45;text" :to="{ name: 'level.edit', params: { id: $route.params.id, id_level: level._id, level: level} }">Edit<v-icon right>edit</v-icon></v-btn>-->
                        <v-btn block color="orange" class="white--text" @click="deleteItem(level._id)">Delete<v-icon right>delete</v-icon></v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </transition>
</template>

<script>

    export default {
        data: () => ({
            title: 'Уровни языка',
            levels: [
                {
                    _id: 1,
                    "name" : '',
                    "title" : '',
                    "image" : '',
                }

            ],
            loadApi: true
        }),
        created() {
            this.getLevel();
            this.$emit('setTitle', this.title)
        },
        methods: {
            deleteItem(id) {
                this.$http.delete('http://95.213.251.172:3000/languages/levels/'+id)
                    .then( response => {
                        this.getLevel();
                    })
                    .catch( response => {
                        console.log(response)
                    })
            },
            getLevel() {
                this.$http.get('http://95.213.251.172:3000/languages/levels/'+this.$route.params.id, {
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                    .then(response => {
                        this.levels = response.data.levels
                        this.loadApi = !this.loadApi
                    })
            }
        }
    }
</script>

<style scoped>

</style>