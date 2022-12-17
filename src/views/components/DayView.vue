<template>
    <div class="drop-shadow bg-[#f9fafb] w-[60%] m-auto rounded h-[50rem] grid-cols-1">
        <div class="text-center">{{( currentDayNa + " " + currentDayNb + " " + currentMonth + " " + currentYear)}}</div>
        <div v-for="n in 24" :key="(n-1)" class="w-full border">
            {{ n-1 }}
            <div class="border w-full">{{ n-1 }}:30</div>
        </div>
    </div>
    <div class="w-full p-4"></div>
</template>

<script>
const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const mois = ["Janvier", "Février", "Mars", "Avril", "Mais", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];

export default {
    name: "DayView",
    data() {
        return {
            currentDayNa: null,
            currentDayNb: 0,
            currentMonth: null,
            currentYear: 0
        };
    },

    beforeMount() {
        this.currentDayNa = jours[this.$dayjs().day()];
        this.currentDayNb = this.$dayjs().date();
        this.currentMonth = mois[this.$dayjs().month()];
        this.currentYear = this.$dayjs().year();
    }
}
</script>

<style scoped>
</style>