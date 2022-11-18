<template>
    <div class="container p-6 rounded-lg shadow-lg bg-white max-w-sm mt-20 m-auto">
        <form>
        <div class="text-2xl text-center mb-7 text-blue-600 font-bold ">Créer un Compte</div>
        <div class="mb-10">
            <input type="text" class="
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            v-model="username"
            id="input-username"
            placeholder="Nom d'utilisateur">
        </div>
        <div class="mb-10">
            <input type="password" class="
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model="password"
            id="input-password"
            placeholder="Mot de passe">
        </div>
        <div class="mb-10">
            <input type="password" class="
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model="passwordCheck"
            id="input-passwordCheck"
            placeholder="Confirmer mot de passe">
        </div>
        <button type="button" class="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            @click="submitForm" >Créer compte</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "RegisterForm",

    data() {
        return {
            username: null,
            password: null,
            passwordCheck: null
        };
    },

    methods: {
        submitForm() {
            if (this.checkUsername() && this.checkPassword()) {
                this.$http({
                    method: 'post',
                    url: 'api/register',
                    data: { username : this.username, password: this.password }
                }).then((res) => {
                    this.$emit('close', true);
                    this.config.globalProperties.$user = res.data.username;
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
            if (this.username.length < 4) {
                this.$emit('error', "Le nom d'utilisateur doit contenir au moins 4 caractères.");
                document.querySelector('#input-username').classList.add("input-error");
                return false;
            }

            const re = /^[a-zA-Z][a-zA-Z0-9]+$/i;

            if (!this.username.match(re)) {
                this.$emit('error', "Le nom d'utilisateur doit commencer par une lettre et peut être composé uniquement de lettres et de chiffres.");
                document.querySelector('#input-username').classList.add("input-error");
            }

            document.querySelector('#input-username').classList.remove("input-error");
            return true;
        },

        checkPassword() {
            if (this.password.length < 6) {
                this.$emit('error', "Le mot de passe doit contenir au moins 6 caractères.");
                document.querySelector('#input-password').classList.add("input-error");
                return false;
            }

            if (this.password !== this.passwordCheck) {
                this.$emit('error', "Les 2 mots de passe ne correspondent pas.");
                document.querySelector('#input-password').classList.add("input-error");
                document.querySelector('#input-passwordCheck').classList.add("input-error");
                return false;
            }

            document.querySelector('#input-password').classList.remove("input-error");
            document.querySelector('#input-passwordCheck').classList.remove("input-error");
            return true;
        }
    }
}
</script>

<style scoped>

.input-error {
    border-color: #d92121;
}

.input-error:hover {
    border-color: #bd1515
}
</style>