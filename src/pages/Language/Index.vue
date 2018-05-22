<template>
    <transition name="transform" mode="out-in">
        <v-layout row wrap v-if="loadApi">
            <v-flex xs12>
                <v-btn
                        round
                        color="teal"
                        class="white--text mx-0 mb-4"
                        :to="{ name: 'language.add'}"
                >
                    Добавить
                    <v-icon right dark>add</v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs3 v-for="language in languages" :key="language._id" class="px-1 mb-1">
                <v-card  class="" :to="{ name: 'levels', params: { id: language._id} }">
                    <v-container fluid grid-list-lg>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-card-media
                                        :src="language.flag"
                                        height="64px"
                                        contain
                                ></v-card-media>
                            </v-flex>
                            <v-flex xs8>
                                <div>
                                    <div class="headline">{{language.title}}</div>
                                    <div>{{language.name}}</div>
                                </div>
                            </v-flex>
                            <v-flex xs4>
                                <v-card-actions class="justify-end">
                                    <v-btn color="red lighten-3" @click="deleteItem(language._id)"><v-icon>delete</v-icon></v-btn>
                                </v-card-actions>
                            </v-flex>

                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </transition>
</template>

<script>

    export default {
        data: () => ({
            title: 'Изучаемые языки',
            languages: [
                {
                    id: 1,
                    "name" : 'en',
                    "title" : 'English',
                    "flag" : '/static/assets/flags/en.png',
                }
            ],
            loadApi: false
        }),
        created() {
            this.loadLanguages();
            this.$emit('setTitle', this.title)
        },
        methods: {
            loadLanguages(){
                this.$http.get('http://95.213.251.172:3000/languages', {headers: {
                        'Content-Type': 'application/json'
                    }})
                    .then(response => {
                        this.languages = response.data.languages
                        this.loadApi = true
                    })
            },
            deleteItem(id) {
                this.$http.delete('http://95.213.251.172:3000/languages/'+id)
                    .then( response => {
                        this.loadLanguages();
                    })
            },
        }
    }
</script>

<style scoped>

</style>