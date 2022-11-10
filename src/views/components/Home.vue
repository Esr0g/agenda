<template>
    <div class="text-center">
        <nav class="w-1/4 m-auto">
            <a @click="selection(0)" v-bind:class="{ selected: monthSelected }" class="py-1.5 px-4 border-y-2 border-l-2 border-blue-500 rounded-l-3xl bg-white ease-in-out duration-300 drop-shadow-md font-bold">Mois</a>
            <a @click="selection(1)" v-bind:class="{ selected: weekSelected }" class="py-1.5 px-4 border-2 border-blue-500 drop-shadow-md bg-white ease-in-out duration-300 font-bold">Semaine</a>
            <a @click="selection(2)" v-bind:class="{ selected: daySelected }" class="py-1.5 px-4 border-y-2 border-r-2 border-blue-500 rounded-r-3xl drop-shadow-md bg-white ease-in-out duration-300 font-bold">Jour</a>
        </nav>
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
            currentComponent: MonthView
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
        }
    }

}
</script>

<style scoped>
.selected {
    background-color: #3b82f6;
}
</style>