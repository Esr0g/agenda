<script>
import axios from "axios";

export default {
    data() {
        return {
            count: 0,
            texte: null
        }
    },

    beforeMount() {
        axios({
            method: 'get',
            url: '/api/test'
        }).then((response, err) => {
            this.texte = response.data.message;
        })
    }
};
</script>

<template>
    <h1>Hello Guys !</h1>
    <button @click="count++">Count is: {{ count }}</button>
    <p v-if="texte">{{ texte }}</p>
</template>

<style scoped>
h1 {
    color: blue;
}
</style>