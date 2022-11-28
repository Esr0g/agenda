<template>
    <div class="flex justify-between content-center items-center fixed top-0 w-screen z-10 bg-[#1f2937] text-[#cacfd5] font-bold text-lg p-2">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="inline w-9 h-9 mx-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="relative top-1">{{ getUsername() }}</span>
        </div>

        <nav class="flex">
            <a @click="selection(0)" v-bind:class="{ selected: monthSelected }" class="m-auto px-3 py-1 mx-2 rounded-lg cursor-pointer">Mois</a>
            <a @click="selection(1)" v-bind:class="{ selected: weekSelected }" class="m-auto px-3 py-1 mx-2 rounded-lg cursor-pointer">Semaine</a>
            <a @click="selection(2)" v-bind:class="{ selected: daySelected }" class="m-auto px-3 py-1 mx-2 rounded-lg cursor-pointer">Jour</a>
        </nav>

        <div title="déconnexion">
            <svg xmlns="http://www.w3.org/2000/svg" @click="deconnexion" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 mx-5 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
            </svg>
        </div>
    </div>

    <component :is="currentComponent"></component>
</template>

<script>
import MonthView from './MonthView.vue';
import WeekView from './WeekView.vue';
import DayView from './DayView.vue';

export default {
    name: "Home",

    data() {
        return {
            monthSelected: true,
            weekSelected: false,
            daySelected: false,
            views: [MonthView, WeekView, DayView],
            currentComponent: MonthView,
        } 
    },

    methods: {
        selection(id) {
            if (id === 0) {
                this.monthSelected = true;
                this.weekSelected = false;
                this.daySelected = false;
                this.currentComponent = this.views[0];
            } else if (id === 1) {
                this.monthSelected = false;
                this.weekSelected = true;
                this.daySelected = false;
                this.currentComponent = this.views[1];
            } else if (id === 2) {
                this.monthSelected = false;
                this.weekSelected = false;
                this.daySelected = true;
                this.currentComponent = this.views[2];
            }
        },

        getUsername() {
            let cookies = document.cookie.split("=");
            let user = JSON.parse(cookies[1]);
            return user.username;
        },

        deconnexion() {
            this.$http({
                method: "get",
                url: "/api/auth/logout"
            }).then((res) => {
                this.$router.push("/login");
            })
        }
    }

}
</script>

<style scoped>
.selected {
    background-color: #111827;
}
</style>