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
            <v-flex xs3 class="px-1 mb-1">
                <v-card >
                    <v-container fluid grid-list-lg>
                        <v-layout row wrap>
                            <v-flex xs12 class="text-xs-center">
                                Количество языков
                            </v-flex>
                            <v-flex xs12 class="text-xs-center">
                                    <div class="headline bigsize">{{languages.length}}</div>
                            </v-flex>

                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
            <v-flex xs3 class="px-1 mb-1">
                <v-card >
                    <v-container fluid grid-list-lg>
                        <v-layout row wrap>
                            <v-flex xs12 class="text-xs-center">
                                Количество пользователей
                            </v-flex>
                            <v-flex xs12 class="text-xs-center">
                                    <div class="headline bigsize text-xs-center mx-auto">{{users.length}}</div>
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
            title: 'Главная',
            languages: [
                {
                    id: '',
                    "name" : '',
                    "title" : '',
                    "flag" : '',
                }
            ],
            users: [],
            loadApi: false
        }),
        created() {
            this.loadLanguages();
            this.loadUsers();
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
            loadUsers(){
                this.$http.get('http://95.213.251.172:3000/users', {headers: {
                        'Content-Type': 'application/json'
                    }})
                    .then(response => {
                        this.users = response.data
                        this.loadApi = true
                    })
            },
        }
    }
</script>

<style scoped>
    .bigsize {
        font-size: 90px !important;
        line-height: 100% !important;
    }
</style>