<template>
    <transition name="transform" mode="out-in">
        <v-layout row wrap justify-center v-if="loadApi">
            <v-flex xs6 class="px-0 mx-0">
                <v-card >
                    <v-container fluid grid-list-lg>
                        <v-form>
                            <v-text-field
                                    v-model="language.name"
                                    :counter="10"
                                    label="Name"
                                    required
                            ></v-text-field>
                            <v-text-field
                                    v-model="language.title"
                                    label="Название"
                                    required
                            ></v-text-field>
                            <v-text-field
                                    v-model="language.flag"
                                    label="Url изображения"
                                    placeholder="/static/assets/flags/en.png"
                                    required
                            ></v-text-field>
                            <v-btn
                                    round
                                    color="teal"
                                    class="white--text mx-0 mb-4"
                                    @click="addLanguage()"
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
            title: 'Добавление языка',
            language: {
                name: '',
                title: '',
                flag: ''
            },
            loadApi: true
        }),
        created() {
            this.$emit('setTitle', this.title)
        },
        methods: {
            addLanguage() {
                this.$http.post('http://95.213.251.172:3000/languages', this.language , {
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                    .then(response => {
                        this.$router.push({name: 'languages'})
                    })
            },
            updateLanguage() {
                this.$http.post('http://95.213.251.172:3000/languages/'+this.$route.params.id, this.language , {
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                    .then(response => {
                        this.language = response.data.language
                        this.loadApi = true
                    })
            },
            showLanguage() {
                this.$http.get('http://95.213.251.172:3000/languages/'+this.$route.params.id, {
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                    .then(response => {
                        this.language = response.data.language
                        this.loadApi = true
                    })
            },
        }
    }
</script>

<style scoped>

</style>