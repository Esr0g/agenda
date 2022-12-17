<template >
    <table class="m-auto mt-10 bg-[#f9fafb] w-5/6">
        <thead>



        <tr>
            <td @click="previousWeek" class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="relative cursor-pointer w-6 h-6 left-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </td>
            <th colspan="5" class="p-2 text-lg font-bold">
                <div class="inline" title="Retour au mois actuel">
                    <svg xmlns="http://www.w3.org/2000/svg" @click="rezDate" fill="none" viewBox="0 2 20 24"
                        stroke-width="1.5" stroke="currentColor" class="inline w-6 h-6 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                </div>
            </th>
            <th colspan="5" class="p-2 text-lg font-bold"></th>
            <td @click="nextWeek" class="p-2 text-right"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="relative inline-block cursor-pointer w-6 h-6 mr-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg></td>
        </tr>
        <tr id="table-days" class="bg-white">

        </tr>
    </thead>
     <tbody id="table-cell">

     </tbody>

    </table>
    <div class="w-full p-4"></div>
    <AddEventModal v-if="showAddEventModal" :date="dateSelected" :form.heureDeb="heureDebSelected" @close="closeModal"/>
    <ShowEventModal v-if="showShowEventModal" :event="event" @close="closeModal" @modify="updateEvent"/>
    <UpdateEventModal v-if="showUpdateEventModal" :event="event" @close="closeModal"/>
</template>

<script>
import AddEventModal from './AddEventModal.vue';
import ShowEventModal from "./ShowEventModal.vue";
import UpdateEventModal from './UpdateEventModal.vue';
import _ from 'underscore';

const mois = ["Janvier", "Février", "Mars", "Avril", "Mais", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const DAYS = {
    0: 'Dimanche',
    1: 'Lundi',
    2: 'Mardi',
    3: 'Mercredi',
    4: 'Jeudi',
    5: 'Vendredi',
    6: 'Samedi'
}
export default {
    name: "MonthView",
    data() {
        return {
            monthName: null,
            date: null,
            cases: [],
            showAddEventModal: false,
            showShowEventModal: false,
            showUpdateEventModal: false,
            dateSelected: null,
            heureDebSelected: null,
            events: [],
            event: null
        };
    },

    beforeMount() {
        this.monthName = mois[this.$dayjs().month()] + " " + this.$dayjs().year();
        this.date = this.$dayjs();
        this.initCases();
    },

    mounted() {
        this.buildCaseJour();
        this.buildCaseHeureJour();
        this.setJourCases();
        this.setCouleurCaseJour();
        this.createCaseEvent();
        this.updateEvents();
    },

    methods: {
        initCases() {
            for (let i = 0; i < 42; i++) {
                this.cases.push({ num: i });
            }
        },

        async getAllEvent() {
            let data = {
                userID: this.getUserId(),
                dateDeb: this.cases[0].date,
                dateFin: this.cases[41].date,
            }


            this.$http({
                method: 'get',
                url: '/api/auth/getEventParam',
                params: data

            }).then((res) => {
                this.events = res.data.newEvents;
                this.afficherEvents();
            }).catch((err) => {
                console.error(err);
            })
        },

        buildCaseJour(){

            let today = new Date()
            
            let enteteDesJours = document.querySelector('#table-days');
            let enteteDesJoursHTML = '';
            enteteDesJoursHTML += '<th class="border-y border-r border-[#d1d5db] text-center w-1/7 font-bold">Horaires</th>';
            jours.forEach(j => {
                let dayOfWeek = today.getDay()
                let dayOfMonth = today.getDate()
                let dayOffset = parseInt(Object.keys(DAYS).find(k => DAYS[k] === j))
                let dayOfCell = dayOfMonth - dayOfWeek + (dayOfWeek === 0 ? -6 : 1) + dayOffset
                let dateCell = new Date(today.getFullYear(), today.getMonth(), dayOfCell, 0, 0, 0).toISOString()
                enteteDesJoursHTML += `<th class="border-y border-r border-[#d1d5db] text-center w-1/7 font-bold" data-date="${dateCell}">${j}</th>`;
            });

            enteteDesJours.innerHTML = enteteDesJoursHTML;
        },

        buildCaseHeureJour(){
            let cases = document.querySelector('#table-cell');
            let casesHTML = '';

            for (let h = 0; h < 24; h++) {
                let heure = h.toLocaleString('fr-FR', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                });

                heure += ":00";

                let heureHTML = `<tr id="h-${h}">`;
                jours.forEach(j => {

                        if(j === 'Dimanche'){
                            let caseHorairesHTML = `
                            <td id="c-${h}-Horaire">
                                <span class="num">${heure}</span>
                            </td>
                        `;

                        heureHTML += caseHorairesHTML;
                        }
                        let today = new Date()
                        let dayOfWeek = today.getDay()
                        let dayOfMonth = today.getDate()
                        let dayOffset = parseInt(Object.keys(DAYS).find(k => DAYS[k] === j))
                        let dayOfCell = dayOfMonth - dayOfWeek + (dayOfWeek === 0 ? -6 : 1) + dayOffset
                        let dateCell = new Date(today.getFullYear(), today.getMonth(), dayOfCell - 1, h + 1, 0, 0).toISOString()
                        let uneCaseHTML = `
                            <td id="c-${h}-${j}" class="border-y border-r border-[#d1d5db] h-32" data-date="${dateCell}">
                                <span class="num" data-modal-toggle="defaultModal"></span>
                            </td>
                        `;
                        heureHTML += uneCaseHTML;
          
                });
                heureHTML += '</tr>';
                casesHTML += heureHTML;
            }

            cases.innerHTML = casesHTML;


        },

        setCouleurCaseJour() {
            const today = new Date()
            const dayOfWeek = today.getDay()

            for (let i = 0 ; i < 24 ; i++) {
                const currentDay = document.querySelector(`#c-${i}-${DAYS[dayOfWeek]}`)
                if (currentDay) {
                    currentDay.classList.add("jourActuel");
                }
            }
        },

        createCaseEvent() {
            for (let i = 0 ; i < 24 ; i++) {
                for (let d = 0 ; d < Object.keys(DAYS).length ; d++) {
                    const currentCell = document.querySelector(`#c-${i}-${DAYS[d]}`)
                    currentCell.addEventListener('click', (e) => {
                        let dateCell = currentCell.getAttribute('data-date')
                        this.showAddEventModal = true
                        this.dateSelected = dateCell.split('T')[0]
                        this.heureDebSelected = dateCell.split('T')[1]
                        console.log(this.dateSelected, this.heureDebSelected)
                    })
                }
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

                const uneCase = {
                    num: i,
                    date: moisA.toJSON()
                };
                this.cases.push(uneCase);
                //document.querySelector("#case-" + nbCasesParcourue).classList.add("jour-blanc");
                nbCasesParcourue++;
                moisA = moisA.add(1, "day");
            }

            let moisS = this.date.endOf("month").add(1, "day");
            let jourMoisS = 1;
            for (let i = nbCasesParcourue; i < 42; i++) {

                const uneCase = {
                    num: jourMoisS,
                    date: moisS.toJSON()
                };
                this.cases.push(uneCase);
                jourMoisS++;
                moisS = moisS.add(1, "day");
            }

            this.clearAllEvent();
            this.getAllEvent();
        },

        addCaseEvent() {
            for (let i = 0 ; i < 42 ; i ++) {
                let elem = documents.querySelector("#emp-" + i);
                console.log(elem)
                elem.addEventListener('click', (e) => {
                    addEvent(cases[i].date)
                    console.log("TEST")
                })

            }
        },

        //@click="addEvent(cases[${j}].date)"

        clearAllEvent() {
            for (let i = 0; i < 42; i++) {
                let elem = document.querySelector("#emp-" + i);
                /*while (elem.hasChildNodes()) {
                    elem.removeChild(elem.firstChild);
                }*/
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
                //document.querySelector("#case-" + i).classList.remove("jour-blanc");
                //document.querySelector("#case-" + i).classList.remove("jourActuel");
            }
        },

        rezDate() {
            this.date = this.$dayjs();
            this.rezBgCell();
            this.monthName = mois[this.date.month()] + " " + this.date.year();
            this.setJourCases();
        },

        addEvent(date) {
            this.dateSelected = this.$dayjs(date).format("YYYY-MM-DD");
            this.showAddEventModal = true;
        },

        closeModal(val) {
            this.showAddEventModal = val;
            this.showShowEventModal = val;
            this.showUpdateEventModal = val;
        },

        getUserId() {
            let cookies = document.cookie.split("=");
            let user = JSON.parse(cookies[1]);
            return user.id;
        },

        afficherEvents() {
            for (let i = 0; i < 42; i++) {
                let date1 = this.$dayjs(this.cases[i].date);

                for (let evt of this.events) {
                    let date2 = this.$dayjs(evt.dateDeb);
                    let date3 = null;
                    if (evt.dateFin) {
                        date3 = this.$dayjs(evt.dateFin);
                    }

                    if (date1.isSame(date2, 'day') || (date3 && date1.isBefore(date3) && date1.isAfter(date2) || (date3 && date1.isSame(date3)))) {
                        let cellule = document.querySelector('#emp-' + i);

                        if (cellule.children.length < 3) {
                            let element = document.createElement('div');
                            element.classList.add("event");
                            element.style.display = "flex";
                            element.style.justifyContent = "space-between";
                            element.style.maxWidth = "100%";
                            element.style.border = "2px #ceeafa solid";
                            element.style.borderRadius = "8px";
                            element.style.margin = "0.1rem 0.2rem 0.1rem 0.2rem";
                            element.style.backgroundColor = "#ebf8ff";
                            element.style.paddingLeft = "0.2rem";
                            element.style.paddingRight = "0.2rem";
                            element.style.color = "#203d68";
                            element.style.cursor = "pointer"
                            element.addEventListener("click", () => {
                                this.afficheEvt(evt);
                            });

                            let text1 = document.createTextNode(evt.name);
                            let text2 = document.createTextNode(date2.format("H:mm"));

                            let child1 = document.createElement('div');
                            child1.style.maxWidth = "60%";
                            child1.style.overflow = "hidden";
                            child1.style.textOverflow = "ellipsis";
                            child1.style.whiteSpace = "nowrap";

                            let child2 = document.createElement('div');
                            child2.marginLeft = "0.5rem";

                            child1.appendChild(text1);
                            child2.appendChild(text2);
                            element.appendChild(child1);
                            element.appendChild(child2);
                            cellule.appendChild(element);
                        } else {
                            cellule.removeChild(cellule.lastChild);
                            let element = document.createElement('div')
                            element.style.textAlign = "center";
                            element.style.maxWidth = "100%";
                            element.style.border = "2px #ceeafa solid";
                            element.style.borderRadius = "8px";
                            element.style.margin = "0.1rem 0.2rem 0.1rem 0.2rem";
                            element.style.backgroundColor = "#ebf8ff";
                            element.style.paddingLeft = "0.2rem";
                            element.style.paddingRight = "0.2rem";
                            element.style.color = "#203d68";
                            let text = document.createTextNode("...");
                            element.appendChild(text);
                            cellule.append(element);

                            //TODO 
                        }
                    }
                }
            }
        },

        updateEvents() {
            this.$http({
                method: 'get',
                url: '/api/auth/getEventUpdate'
            }).then((res) => {

                if (res.data.type === "ADD") {
                    this.events.push(res.data.event);
                    this.clearAllEvent();
                    this.afficherEvents();
                } else if (res.data.type === "DELETE") {
                    this.events = _.reject(this.events, (e) => e.id == res.data.eventID);
                    this.clearAllEvent();
                    this.afficherEvents();
                } else if (res.data.type === "MODIFY") {
                    this.events = _.reject(this.events, (e) => e.id == res.data.oldId);
                    this.events.push(res.data.event);
                    this.clearAllEvent();
                    this.afficherEvents();
                }



                setTimeout(this.updateEvents, 500);
            }).catch((err) => {
                setTimeout(this.updateEvents(), 500);
            });
        },

        afficheEvt(evt) {
            this.event = evt;
            this.showShowEventModal = true;
        },

        updateEvent(evt) {
            this.event = evt;
            this.showUpdateEventModal = true;
        }
    },
    components: { AddEventModal, ShowEventModal, UpdateEventModal }
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
    table-layout: fixed;
}

.jour-blanc {
    background-color: #ffffff;
}


.num {
    text-align: center;
    display: block;
    position: relative;
    top: -0.1rem;
    border-radius: 999px;
    min-width: 1.8rem;
    max-width: 1.8rem;
    min-height: 1.8rem;
    max-height: 1.8rem;
    padding-top: 0.15rem;
    cursor: pointer;
}

.num:hover {
    background-color: #06b6d4;
}

.jourActuel {
    background-color: #1e8da07b;
}

.emp {
    position: relative;
    width: 100%;
    height: 65%;
    bottom: 0.2rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
    font-size: 0.8rem;
    max-width: 100%;
    margin-top: 5px;
}
</style>