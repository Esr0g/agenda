<template >
    <table class="m-auto mt-10 bg-[#f9fafb] w-5/6">
        <tr>
            <td @click="previousMonth" class="p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="relative cursor-pointer w-6 h-6 left-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" /></svg></td>
            <th colspan="5" class="p-2 text-lg font-bold">{{ monthName }}  <div class="inline" title="Retour au mois actuel"><svg xmlns="http://www.w3.org/2000/svg" @click="rezDate" fill="none" viewBox="0 2 20 24" stroke-width="1.5" stroke="currentColor" class="inline w-6 h-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg></div></th>
            <td @click="nextMonth" class="p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="relative cursor-pointer w-6 h-6 -right-24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" /></svg></td>
        </tr>
        <tr class="bg-white">
            <td class="border-y border-r border-[#d1d5db] text-center w-1/7 font-bold">Lundi</td>
            <td class="border border-[#d1d5db] text-center w-1/7 font-bold">Mardi</td>
            <td class="border border-[#d1d5db] text-center w-1/7 font-bold">Mercredi</td>
            <td class="border border-[#d1d5db] text-center w-1/7 font-bold">Jeudi</td>
            <td class="border border-[#d1d5db] text-center w-1/7 font-bold">Vendredi</td>
            <td class="border border-[#d1d5db] text-center w-1/7 font-bold">Samedi</td>
            <td class="border-y border-l border-[#d1d5db] text-center w-1/7 font-bold">Dimanche</td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal">{{ cases[0].num }}</span></td>
            <td id="case-1" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[1].date)">{{ cases[1].num }}</span></td>
            <td id="case-2" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[2].date)">{{ cases[2].num }}</span></td>
            <td id="case-3" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[3].date)">{{ cases[3].num }}</span></td>
            <td id="case-4" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[4].date)">{{ cases[4].num }}</span></td>
            <td id="case-5" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[5].date)">{{ cases[5].num }}</span></td>
            <td id="case-6" class="border-y border-l border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[6].date)">{{ cases[6].num }}</span></td>
        </tr>
        <tr>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[7].date)">{{ cases[7].num }}</span></td>
            <td id="case-8" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[8].date)">{{ cases[8].num }}</span></td>
            <td id="case-9" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[9].date)">{{ cases[9].num }}</span></td>
            <td id="case-10" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[10].date)">{{ cases[10].num }}</span></td>
            <td id="case-11" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[11].date)">{{ cases[11].num }}</span></td>
            <td id="case-12" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[12].date)">{{ cases[12].num }}</span></td>
            <td id="case-13" class="border-y border-l border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[13].date)">{{ cases[13].num }}</span></td>
        </tr>
        <tr>
            <td id="case-14" class="border-y border-r border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[14].date)">{{ cases[14].num }}</span></td>
            <td id="case-15" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[15].date)">{{ cases[15].num }}</span></td>
            <td id="case-16" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[16].date)">{{ cases[16].num }}</span></td>
            <td id="case-17" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[17].date)">{{ cases[17].num }}</span></td>
            <td id="case-18" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[18].date)">{{ cases[18].num }}</span></td>
            <td id="case-19" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[19].date)">{{ cases[19].num }}</span></td>
            <td id="case-20" class="border-y border-l border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[20].date)">{{ cases[20].num }}</span></td>
        </tr>
        <tr>
            <td id="case-21" class="border-y border-r border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[21].date)">{{ cases[21].num }}</span></td>
            <td id="case-22" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[22].date)">{{ cases[22].num }}</span></td>
            <td id="case-23" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[23].date)">{{ cases[23].num }}</span></td>
            <td id="case-24" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[24].date)">{{ cases[24].num }}</span></td>
            <td id="case-25" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[25].date)">{{ cases[25].num }}</span></td>
            <td id="case-26" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[26].date)">{{ cases[26].num }}</span></td>
            <td id="case-27" class="border-y border-l border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[27].date)">{{ cases[27].num }}</span></td>
        </tr>
        <tr>
            <td id="case-28" class="border-t border-r border-b border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[28].date)">{{ cases[28].num }}</span></td>
            <td id="case-29" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[29].date)">{{ cases[29].num }}</span></td>
            <td id="case-30" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[30].date)">{{ cases[30].num }}</span></td>
            <td id="case-31" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[31].date)">{{ cases[31].num }}</span></td>
            <td id="case-32" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[32].date)">{{ cases[32].num }}</span></td>
            <td id="case-33" class="border border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[33].date)">{{ cases[33].num }}</span></td>
            <td id="case-34" class="border-t border-l border-b border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[34].date)">{{ cases[34].num }}</span></td>
        </tr>
        <tr>
            <td id="case-35" class="border-t border-r border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[35].date)">{{ cases[35].num }}</span></td>
            <td id="case-36" class="border-t border-r border-l border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[36].date)">{{ cases[36].num }}</span></td>
            <td id="case-37" class="border-t border-r border-l border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[37].date)">{{ cases[37].num }}</span></td>
            <td id="case-38" class="border-t border-r border-l border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[38].date)">{{ cases[38].num }}</span></td>
            <td id="case-39" class="border-t border-r border-l border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[39].date)">{{ cases[39].num }}</span></td>
            <td id="case-40" class="border-t border-r border-l border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[40].date)">{{ cases[40].num }}</span></td>
            <td id="case-41" class="border-t border-l border-[#d1d5db] h-24"><span class="num" @click="addEvent(cases[41].date)">{{ cases[41].num }}</span></td>
        </tr>
    </table>
    <div class="w-full p-4"></div>
    <AddEventModal v-if="showAddEventModal" :date="dateSelected" @close="closeModal"/>
</template>

<script>
import AddEventModal from './AddEventModal.vue';
const mois = ["Janvier", "Février", "Mars", "Avril", "Mais", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
export default {
    name: "MonthView",
    data() {
        return {
            monthName: null,
            date: null,
            cases: [],
            showAddEventModal: false,
            dateSelected: null,
        };
    },

    beforeMount() {
        this.monthName = mois[this.$dayjs().month()] + " " + this.$dayjs().year();
        this.date = this.$dayjs();
        this.initCases();
    },

    mounted() {
        this.setJourCases();
    },

    methods: {
        initCases() {
            for (let i = 0; i < 42; i++) {
                this.cases.push({ num: i });
            }
        },

        setJourCases() {
            this.cases = [];
            let nbCasesParcourue = 0;

            // Mois actuel
            let nbJourMoisA = this.date.daysInMonth();
            let firstDayOfMonthA = this.date.startOf("month").day() === 0 ? 6 : this.date.startOf("month").day() - 1;

            //Mois précédent
            let moisP = this.date.month() === 0 ? 11 : this.date.month() - 1;
            let nbJourMoisP = this.date.month(moisP).daysInMonth();
            let moisPP = this.date.startOf("month").add(-firstDayOfMonthA, "day");
            nbJourMoisP = nbJourMoisP - firstDayOfMonthA + 1;

            for (let i = 0; i < firstDayOfMonthA; i++) {
                if (this.$dayjs().isSame(moisPP, 'day')) {
                    document.querySelector('#case-' + nbCasesParcourue).classList.add("jourActuel");
                }

                const uneCase = {
                    num: nbJourMoisP,
                    date: moisPP.toJSON()
                };
                this.cases.push(uneCase);
                nbJourMoisP++;
                nbCasesParcourue++;
                moisPP = moisPP.add(1, "day");
            }

            let moisA = this.date.startOf("month");
            for (let i = 1; i < nbJourMoisA + 1; i++) {
                if (this.$dayjs().isSame(moisA, 'day')) {
                    document.querySelector('#case-' + nbCasesParcourue).classList.add("jourActuel");
                }

                const uneCase = {
                    num: i,
                    date: moisA.toJSON()
                };
                this.cases.push(uneCase);
                document.querySelector("#case-" + nbCasesParcourue).classList.add("jour-blanc");
                nbCasesParcourue++;
                moisA = moisA.add(1, "day");
            }

            let moisS = this.date.endOf("month").add(1, "day");
            let jourMoisS = 1;
            for (let i = nbCasesParcourue; i < 42; i++) {
                if (this.$dayjs().isSame(moisS, 'day')) {
                    document.querySelector('#case-' + nbCasesParcourue).classList.add("jourActuel");
                }

                const uneCase = {
                    num: jourMoisS,
                    date: moisS.toJSON()
                };
                this.cases.push(uneCase);
                jourMoisS++;
                moisS = moisS.add(1, "day");
            }
        },
        previousMonth() {
            this.rezBgCell();
            this.date = this.date.startOf("month").add(-1, "day");
            this.monthName = mois[this.date.month()] + " " + this.date.year();
            this.setJourCases();
        },
        nextMonth() {
            this.rezBgCell();
            this.date = this.date.endOf("month").add(1, "day");
            this.monthName = mois[this.date.month()] + " " + this.date.year();
            this.setJourCases();
        },
        rezBgCell() {
            for (let i = 0; i < 42; i++) {
                document.querySelector("#case-" + i).classList.remove("jour-blanc");
                document.querySelector("#case-" + i).classList.remove("jourActuel");
            }
        },
        rezDate() {
            this.date = this.$dayjs();
            this.rezBgCell();
            this.monthName = mois[this.date.month()] + " " + this.date.year();
            this.setJourCases();
        },
        addEvent(date) {
            this.dateSelected = date;
            this.showAddEventModal = true;
        },

        closeModal(val) {
            this.showAddEventModal = val;
        }
    },
    compilerOptions: {
        AddEventModal
    },
    components: { AddEventModal }
}
</script>

<style scoped>

table {
    border-collapse: separate !important;
    border-spacing: 0;
    border: 1px solid;
    border-radius: 0.8em;
    border-color: #f3f3f4;
    box-shadow: 1px 1px 5px #f3f3f4;
}

.jour-blanc {
    background-color: #ffffff;
}

.num {
    position: relative;
    top: -1.5rem;
    left: 0.75rem;
    border-radius: 500px;
    padding: 0.5rem;
    cursor: pointer;
}

.num:hover {
    background-color: #06b6d4;
}

.jourActuel {
    background-color: #1e8da07b;
}

</style>