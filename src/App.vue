<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="logged" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @logged="setlogged" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                logged: false,
                mockAccount: {
                    username: "admin",
                    password: "123"
                }
            }
        },
        mounted() {
            if(!this.logged) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setlogged(status) {
                this.logged = status;
            },
            logout() {
                this.logged = false;
            }
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>
