<template>
    <div class="flex-col content-center h-screen">
        <div class="w-screen">
            <Error v-visible="showError" :error-message="errorMessage" @close="closeError" />
        </div>
        <div class="w-screen">
            <router-view @error="getError" @close="closeError"></router-view>
        </div>
    </div>
</template>

<script>
import Error from "./components/Error.vue";

export default {
    data() {
        return {
            showError: false,
            errorMessage: "",
        };  
    },

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

    methods: {
        closeError(bool) {
            this.showError = false;
            this.errorMessage = "";
        },

        getError(message) {
            this.errorMessage = message;
            this.showError = true;
        }
    },

    components: {
        Error
    }
};
</script>

