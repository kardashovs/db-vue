<template>
    <transition name="transform" mode="out-in">
        <v-layout row wrap justify-center v-if="loadApi">
            <v-flex xs6 class="px-0 mx-0">
                <v-card >
                    <v-container fluid grid-list-lg>
                        <v-form>
                            <v-text-field
                                    v-model="user.name"
                                    :counter="25"
                                    label="ФИО"
                                    required
                            ></v-text-field>
                            <v-text-field
                                    v-model="user.email"
                                    label="Email"
                                    required
                            ></v-text-field>
                            <v-text-field
                                    v-model="user.password"
                                    label="Пароль"
                                    required
                                    type="password"
                            ></v-text-field>
                            <v-text-field
                                    v-model="user.role"
                                    label="Роль пользователя"
                                    placeholder="Ученик"
                                    required
                            ></v-text-field>
                            <v-btn
                                    round
                                    color="teal"
                                    class="white--text mx-0 mb-4"
                                    @click="addUser()"
                            >
                                Добавить
                                <v-icon right dark>add</v-icon>
                            </v-btn>
                        </v-form>
                    </v-container>
                </v-card>
            </v-flex>

        </v-layout>
    </transition>
</template>

<script>

    export default {
        data: () => ({
            title: 'Добавление пользователя',
            user: {
                name: '',
                password: '',
                role: '',
                email: ''
            },
            loadApi: true
        }),
        created() {
            this.$emit('setTitle', this.title)
        },
        methods: {
            addUser() {
                this.$http.post('http://95.213.251.172:3000/users', this.user , {
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                    .then(response => {
                        this.$router.push({name: 'users'})
                    })
            },
        }
    }
</script>

<style scoped>

</style>