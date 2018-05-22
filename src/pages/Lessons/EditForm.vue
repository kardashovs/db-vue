<template>
    <transition name="transform" mode="out-in">
        <v-layout row wrap justify-center v-if="loadApi">
            <v-flex xs6 class="px-0 mx-0">
                <v-card >
                    <v-container fluid grid-list-lg>
                        <v-form>
                            <v-text-field
                                    v-model="lesson.name"
                                    :counter="10"
                                    label="Name"
                                    required
                            ></v-text-field>
                            <v-text-field
                                    v-model="lesson.title"
                                    label="Название"
                                    required
                            ></v-text-field>
                            <v-btn
                                    round
                                    color="teal"
                                    class="white--text mx-0 mb-4"
                                    @click="addLevel()"
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
            lesson: {
                name: '',
                title: ''
            },
            loadApi: true
        }),
        created() {
            // this.showLevel()
            this.title = (this.$route.params.id_level? ' Редактирование':'Доабвление') + ' урока'
            this.$emit('setTitle', this.title)
        },
        methods: {
            addLevel() {
                this.$http.post('http://95.213.251.172:3000/languages/lessons/'+this.$route.params.id, this.lesson , {
                    headers: {
                        'Content-Type': 'application/json'
                    }})
                    .then(response => {
                        this.$router.push({name: 'lessons', params: {id: this.$route.params.id}})
                    })
            },
            // updateLevel() {
            //     this.$http.put('http://95.213.251.172:3000/languages/levels/'+this.$route.params.id+'/'+this.$route.params.id_level, this.level , {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }})
            //         .then(response => {
            //             this.level = response.data.level
            //             this.loadApi = true
            //         })
            // },
            // showLevel() {
            //     if(this.$route.params.id_level) {
            //         this.$http.get('http://95.213.251.172:3000/languages/level/' + this.$route.params.id_level, {
            //             headers: {
            //                 'Content-Type': 'application/json'
            //             }
            //         })
            //             .then(response => {
            //                 this.level = response.data.level
            //                 this.loadApi = true
            //             })
            //     }
            // },
        }
    }
</script>

<style scoped>

</style>