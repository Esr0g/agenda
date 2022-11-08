<template>
    <router-view></router-view>
</template>

<script>
export default {
    beforeMount() {
        this.$http({
            method: 'get',
            url: '/api/auth/isAuthenticated'
        }).then((response) => {
            this.$router.push("/");
        }).catch((err) => {
            this.$router.push("/login");
        })
    },

};
</script>

