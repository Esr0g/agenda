<template>
    <section>
        <div class="container px-6 py-12">
            <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        class="w-full"
                        alt="Phone image"/>
                </div>
                <div class="md:w-8/12 lg:w-5/12 lg:ml-20 text-center">
                    <h1 class="text-6xl font-bold leading-normal mb-10 text-blue-600">MyAgenda</h1>
                    <form>
                        <!-- Username input -->
                        <div class="mb-6">
                            <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white 
                                bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Nom d'utilisateur"
                            v-bind:class="{ 'input-error': usernameOnError }"
                            v-model="username"
                            />
                        </div>
            
                        <!-- Password input -->
                        <div class="mb-6">
                            <input
                            type="password"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 
                                bg-white bg-clip-padding border border-solid border-gray-300 rounded transition 
                                ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Mot de passe"
                            v-bind:class="{ 'input-error': passwordOnError }"
                            v-model="password"
                            />
                        </div>
            
                        <!-- Submit button -->
                        <button
                            type="button"
                            class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug 
                                uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                                focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                @click="login">
                            Connexion
                        </button>
            
                        <div
                            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 
                            before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                        </div>
                        <router-link to="/register" class="text-slate-600 hover:text-slate-700">Créer un compte</router-link>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
    
<script>
export default {
    name: "LoginForm",

    data() {
        return {
            username: null,
            password: null,
            usernameOnError: false,
            passwordOnError: false
        };
    },

    methods: {
        login() {
            if (this.checkUsername() && this.checkPassword()) {
                this.$http({
                    method: 'post',
                    url: 'api/login',
                    data: { username: this.username, password: this.password }
                }).then((res) => {
                    this.$router.push('/');
                }).catch((err) => {
                    const info = err.response.data;
                    if (info.message && info.error) {
                        this.$emit('error', info.message + " : " + info.error);
                    } else if (info.message) {
                        this.$emit('error', info.message);
                    }
                })
            }
        },

        checkUsername() {
            if (!this.username) {
                this.$emit('error', "Veuillez entrer un nom d'utilisateur valide.");
                this.usernameOnError = true;
                return false
            }

            this.usernameOnError = false;
            return true;
        },

        checkPassword() {
            if (!this.password || this.password.length < 6) {
                this.$emit('error', "Veuillez entrez un mot de passe valide")
                this.passwordOnError = true;
                return false;
            }

            this.passwordOnError = false;
            return true;
        }
    },

    mounted() {
        window.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.login();
            }
        })
    }
};
</script>
    
<style scoped>

.input-error {
    border-color: #d92121;
}
</style>