<template>
    <v-app id="inspire">

        <v-navigation-drawer
                v-model="drawer"
                fixed
                app
                clipped
        >
            <v-list >
                <v-list-tile @click="$router.push({ name: 'index'})">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Главная</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="$router.push({ name: 'users'})">
                    <v-list-tile-action>
                        <v-icon>account_circle</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Пользователи</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="$router.push({ name: 'languages'})">
                    <v-list-tile-action>
                        <v-icon>language</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Изучаемые языки</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app clipped-lef>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <v-layout >
                    <v-flex >
                        <transition name="transform" mode="out-in">
                            <router-view
                                    v-on:setTitle="setTitle"
                            ></router-view>
                        </transition>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
        drawer: null,
        title: ''
    }),
    methods: {
        setTitle(title) {
            this.title = title;
        },
    }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .transform-enter-active, .transform-leave-active {
        transition: all .5s cubic-bezier(.87,-.41,.19,1.44);
        transform-origin: 0 0;

    }
    .transform-enter, .transform-leave-to {
        transform: translateX(-50%);
        opacity: 0;
        position: relative;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>
