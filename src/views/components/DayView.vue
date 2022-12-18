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
import AddEventModal from "./AddEventModal.vue";
import ShowEventModal from "./ShowEventModal.vue";
import UpdateEventModal from './UpdateEventModal.vue';
import _ from 'underscore';
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
    name: "DayView",
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
            event: null,
            mounted: false
        };
    },

    beforeMount() {
        this.day = new Date().toLocaleDateString();
        this.date = this.$dayjs();
    },

    mounted() {
        this.mounted = true;
        this.buildCases();
        this.createCaseEvent();
        this.getEvents();
        this.updateEvents();
    },

    beforeUnmount() { 
        this.mounted = false;
    },

    methods: {
        buildCases() {
            let enteteDesHeures = document.querySelector('#table-days');
            let enteteDesHeuresHTML = '<th colspan="1" class="border-y border-r border-[#d1d5db] text-center w-1/7 font-bold">Horaires</th>'
          
            let dayOfWeekName = DAYS[this.date.day()];
            enteteDesHeuresHTML += `<th colspan="7" id="current-day" class="border-y border-r border-[#d1d5db] text-center w-6/7 font-bold" data-date="${this.date.toJSON()}">${dayOfWeekName}&nbsp; ${this.date.format("DD/MM/YYYY")}</th>`
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
                    <td colspan="1" id="c-${h}-Horaire">
                        <span class="num">${heure}</span>
                    </td>`;
                heureHTML += caseHorairesHTML;
                
                let element = document.querySelector('#current-day');
                let dataDate = this.$dayjs(this.date).hour(h).minute(0);
                let uneCaseHTML = `
                    <td colspan="7" id="c-${h}" class="border-y border-r border-[#d1d5db] h-32" data-date="${dataDate.toJSON()}">
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
                    if (this.showShowEventModal !== true) { 
                        let dateCell = currentCell.getAttribute('data-date');
                        this.showAddEventModal = true;
                        this.dateSelected = this.$dayjs(dateCell).format("YYYY-MM-DD");
                    }
                })
            }
        },
        clearAllEvent() {
            for (let i = 0 ; i < 24 ; i++) {
                const currentCell = document.querySelector(`#c-${i}`)
                if(currentCell){
                    currentCell.innerHTML = "";
                }
            }
        },

        previousDay() {
            this.date = this.date.add(-1, 'd');
            this.buildCases();
            this.createCaseEvent();
            this.getEvents();
        },

        nextDay() {
            this.date = this.date.add(1, 'd');
            this.buildCases();
            this.createCaseEvent();
            this.getEvents();
        },

        rezDate() {
            this.date = this.$dayjs();
            this.buildCases();
            this.createCaseEvent();
            this.getEvents();
        },

        addEvent(date) {
            if (this.showShowEventModal !== true) { 
                this.dateSelected = this.$dayjs(date).format("YYYY-MM-DD");
                this.showAddEventModal = true;
            }
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
            for (let i = 0; i < 24; i++) {
                let cellule = document.querySelector(`#c-${i}`)
                let dateCell = this.$dayjs(cellule.getAttribute("data-date"));
        
                for (let e of this.events) {
                    let dateDeb = this.$dayjs(e.dateDeb);
                    let dateFin = null;
                    if (e.dateFin) { 
                        dateFin = this.$dayjs(e.dateFin);
                    }
                    
                    if ((dateCell.isSame(dateDeb, 'day') && (dateCell.isSame(dateDeb, 'hour') || dateCell.isSame(dateFin, 'hour') || (dateCell.isBefore(dateFin, 'day') && dateCell.isAfter(dateDeb, 'hour'))))
                            || (dateCell.isAfter(dateDeb, 'day') && dateCell.isBefore(dateFin, 'day'))
                        || (dateCell.isSame(dateFin, 'day') && (dateCell.isSame(dateFin, 'hour') || (dateCell.isBefore(dateFin, 'hour') && dateCell.isAfter(dateDeb, 'hour'))))) {
                        
                        let element = document.createElement('div');
                        element.classList.add("event");
                        element.classList.add("display-event");
                        element.addEventListener("click", () => {
                            this.afficheEvt(e);
                        });
                        let eventName = document.createTextNode(e.name);
                        let eventStart = document.createTextNode("     Deb : " + dateDeb.format("H:mm") + "    Description : " + e.description);
                        let divElement = document.createElement('div');
                        divElement.style.maxWidth = "60%";
                        divElement.style.overflow = "hidden";
                        divElement.style.textOverflow = "ellipsis";
                        divElement.style.whiteSpace = "nowrap";
                        let child2 = document.createElement('div');
                        child2.marginLeft = "0.5rem";
                        divElement.appendChild(eventName);
                        divElement.appendChild(eventStart);
                        element.appendChild(divElement);
                        cellule.appendChild(element);

                    }
                }
            }
        },

        getEvents() {
            this.events = [];
            this.clearAllEvent();

            let data = {
                userID: this.getUserId(),
                dateDeb: this.date.toJSON(),
                dateFin: this.date.toJSON(),
            }
            this.$http({
                method: 'get',
                url: '/api/auth/getEventParam',
                params: data
            }).then((res) => {
                this.events = res.data.newEvents;
                console.log(this.events.length);
                this.afficherEvents()
            }).catch((err) => {
                console.log(err)
            });
        },

        updateEvents() {
            if (this.mounted) { 
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
    
                    if (this.mounted) { 
                        setTimeout(this.updateEvents, 500);
                    }
                }).catch((err) => {
                    if (this.mounted) { 
                        setTimeout(this.updateEvents, 5000);
                    }
                });
            }
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
const convertToLocaleDate = (utcDate) => {
    return new Date(utcDate.replace('Z', ''))
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