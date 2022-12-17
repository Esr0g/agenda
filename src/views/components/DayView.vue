<template >
    <table class="m-auto mt-10 bg-[#f9fafb] w-5/6">
        <thead>
            <tr>
                <td colspan="1" @click="previousDay" class="text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="relative cursor-pointer w-6 h-6 left-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </td>
                <td colspan="6" class="text-center font-bold">
                    <div class="inline" title="Retour au jour actuel">
                        <svg xmlns="http://www.w3.org/2000/svg" @click="rezDate" fill="none" viewBox="0 2 20 24"
                            stroke-width="1.5" stroke="currentColor" class="inline w-6 h-6 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                    </div>
                </td>
                <td colspan="1" @click="nextDay" class="text-right"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="relative inline-block cursor-pointer w-6 h-6 mr-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg></td>
            </tr>
            <tr id="table-days" class="bg-white"></tr>
        </thead>
        <tbody id="table-cell"></tbody>
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
let currentDay = new Date()

export default {

    data() {
        return {
            day: null,
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
        this.day = new Date().toLocaleDateString()
    },

    mounted() {
        this.buildCases()
        this.createCaseEvent()
        this.updateEvents()
    },

    methods: {

        async getAllEvent() {
            let data = {
                userID: this.getUserId(),
                startHour: this.cases[0].date,
                endHour: this.cases[23].date,
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

        buildCases() {
            let enteteDesHeures = document.querySelector('#table-days');
            let enteteDesHeuresHTML = '<th class="border-y border-r border-[#d1d5db] text-center w-1/7 font-bold">Horaires</th>'
          
            let dayOfWeekName = DAYS[currentDay.getDay()]
            let dateCell = currentDay.toISOString()
            dateCell = dateCell.split('T')[0]
            let dateFormat = dateCell.split('-').reverse()
            dateFormat = dateFormat[0] + "/" + dateFormat[1] + "/" + dateFormat[2]

            enteteDesHeuresHTML += `<th id="current-day" class="border-y border-r border-[#d1d5db] text-center w-1/7 font-bold" data-date="${dateCell}">${dayOfWeekName}&nbsp; ${dateFormat}</th>`
            enteteDesHeures.innerHTML = enteteDesHeuresHTML;
            let heureHTML
            let cases = document.querySelector('#table-cell');
            let casesHTML = '';
            let heure
            for (let h = 0; h < 24; h++) {
                    heure = h.toLocaleString('fr-FR', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                });
                heure += ":00";
                heureHTML = `<tr id="h-${h}">`;
                let caseHorairesHTML = `
                    <td id="c-${h}-Horaire">
                        <span class="num">${heure}</span>
                    </td>`;

                heureHTML += caseHorairesHTML;
                
                let element = document.querySelector('#current-day')
                let dataDate = element.getAttribute('data-date')
                let dateCell = dataDate + 'T' + heure

                let uneCaseHTML = `
                    <td id="c-${h}" class="border-y border-r border-[#d1d5db] h-32" data-date="${dateCell}">
                        <span class="num" data-modal-toggle="defaultModal"></span>
                    </td>
                `;
                heureHTML += uneCaseHTML;
                heureHTML += '</tr>';
                casesHTML += heureHTML;

                cases.innerHTML = casesHTML;
          
                };

            },

            createCaseEvent() {
            for (let i = 0 ; i < 24 ; i++) {
                const currentCell = document.querySelector(`#c-${i}`)
                currentCell.addEventListener('click', (e) => {
                    let dateCell = currentCell.getAttribute('data-date')
                    this.showAddEventModal = true
                    this.dateSelected = dateCell.split('T')[0]
                    this.heureDebSelected = dateCell.split('T')[1]
                    console.log(this.dateSelected, this.heureDebSelected)
                })
            }
        },

        addCaseEvent() {
            for (let i = 0 ; i < 42 ; i ++) {
                let elem = documents.querySelector("#emp-" + i);
                console.log(elem)
                elem.addEventListener('click', (e) => {
                    console.log("TEST")
                    addEvent(cases[i].date)
                })
            }
        },

        previousDay() {
            currentDay.setDate(currentDay.getDate() - 1)
            this.buildCases()
        },

        nextDay() {
            currentDay.setDate(currentDay.getDate() + 1)
            this.buildCases()
        },


        rezDate() {
            currentDay = new Date()
            this.buildCases()

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
}

</script>