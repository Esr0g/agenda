<script>

export default {
    data() {
        return {
            count: 0,
            texte: null
        }
    },

    beforeMount() {
        // this.$http({
        //     method: 'get',
        //     url: '/api/test'
        // }).then((response, err) => {
        //     this.texte = response.data.message;
        // })
    }
};
</script>

<template>
    <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-rose-800">Hello Guys !</h1>
    <button @click="count++">Count is: {{ count }}</button>
    <p v-if="texte">{{ texte }}</p>
</template>

<style scoped>
</style>