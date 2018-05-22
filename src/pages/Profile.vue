<template>
    <transition name="transform" mode="out-in">
        <v-layout row wrap>
            <v-flex xs12>
                <v-btn
                        round
                        color="teal"
                        class="white--text mx-0 mb-4"
                        :to="{ name: 'users.add'}"
                >
                    Добавить
                    <v-icon right dark>add</v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs3 v-for="user in users" :key="user._id" class="px-1 mb-3">
                <v-card >
                    <v-card-media
                            src="/static/assets/user.png"
                            height="230px"
                            contain
                    ></v-card-media>
                    <v-card-title primary-title>
                        <h3 class="headline mb-0 mx-auto">{{ user.name}}</h3>
                    </v-card-title>
                    <v-card-title class="my-0">
                        <div class="mx-auto">{{ user.role}}</div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </transition>
</template>

<script>

    export default {
        data: () => ({
            title: 'Уровни языка',
            users: [
                {
                    _id: '',
                    "name" : '',
                    "email" : '',
                    "role" : '',
                }
            ],
            loadApi: true
        }),
        created() {
            this.getLessons();
            this.$emit('setTitle', this.title)
        },
        methods: {
            getLessons() {
                this.$http.get('http://95.213.251.172:3000/users/', {
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                    .then(response => {
                        this.users = response.data
                        this.loadApi = !this.loadApi
                    })
            }
        }
    }
</script>

<style scoped>

</style>