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
let currentDay = new Date()
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
            event: null
        };
    },
    beforeMount() {
        this.day = new Date().toLocaleDateString()
        this.date = this.$dayjs()
    },
    mounted() {
        this.buildCases()
        this.createCaseEvent()
        this.updateEvents()
    },
    methods: {
        buildCases() {
            let enteteDesHeures = document.querySelector('#table-days');
            let enteteDesHeuresHTML = '<th colspan="1" class="border-y border-r border-[#d1d5db] text-center w-1/7 font-bold">Horaires</th>'
          
            let dayOfWeekName = DAYS[currentDay.getDay()]
            let dateCell = currentDay.toISOString()
            dateCell = dateCell.split('T')[0]
            let dateFormat = dateCell.split('-').reverse()
            dateFormat = dateFormat[0] + "/" + dateFormat[1] + "/" + dateFormat[2]
            enteteDesHeuresHTML += `<th colspan="7" id="current-day" class="border-y border-r border-[#d1d5db] text-center w-6/7 font-bold" data-date="${dateCell}">${dayOfWeekName}&nbsp; ${dateFormat}</th>`
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
                
                let element = document.querySelector('#current-day')
                let dataDate = element.getAttribute('data-date')
                let dateCell = dataDate + 'T' + heure
                let uneCaseHTML = `
                    <td colspan="7" id="c-${h}" class="border-y border-r border-[#d1d5db] h-32" data-date="${dateCell}">
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
                })
            }
        },
        clearAllEvent() {
            this.events = []
            for (let i = 0 ; i < 24 ; i++) {
                const currentCell = document.querySelector(`#c-${i}`)
                if(currentCell){
                    currentCell.innerHTML = ""
                }
            }
        },
        previousDay() {
            currentDay.setDate(currentDay.getDate() - 1)
            this.buildCases()
            this.createCaseEvent()
        },
        nextDay() {
            currentDay.setDate(currentDay.getDate() + 1)
            this.buildCases()
            this.createCaseEvent()
        },
        rezDate() {
            currentDay = new Date()
            this.buildCases()
            this.createCaseEvent()
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
            for (let i = 0; i < 24; i++) {
                let cellule = document.querySelector(`#c-${i}`)
                let dateCell = this.$dayjs(cellule.getAttribute("data-date"));
        
                for (let e of this.events) {
                    console.log(ok);
                    let dateDeb = this.$dayjs(e.dateDeb);
                    let dateFin = null;
                    if (e.dateFin) { 
                        dateFin = this.$dayjs(e.dateFin);
                    }
                    
                    if (dateCell.isSame(dateDeb, 'day') && dateCell.isAfter(dateDeb, 'hour')) {
                        
                            if (cellule.children.length < 3) {
                                let element = document.createElement('div');
                                element.classList.add("event");
                                element.classList.add("display-event")
                                element.addEventListener("click", () => {
                                    this.afficheEvt(e);
                                });
                                let eventName = document.createTextNode(e.name);
                                let eventStart = document.createTextNode(dateDeb);
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
            this.clearAllEvent()
            let dateDebutText = document.querySelector("#c-0").getAttribute("data-date")
            let dateFinText = document.querySelector("#c-23").getAttribute("data-date")
            let dateDebut = convertToLocaleDate(dateDebutText)
            dateDebut.setDate(dateDebut.getDate() - 1)
            let dateDebutQuery = dateDebut.toISOString().split('T')[0]
            let dateFin = convertToLocaleDate(dateFinText)
            dateFin.setDate(dateFin.getDate() + 1)
            let dateFinQuery = dateFin.toISOString().split('T')[0]
            //console.log(dateDebut, dateFin)
            let data = {
                userID: this.getUserId(),
                dateDeb: dateDebutQuery,
                dateFin: dateFinQuery,
            }
            this.$http({
                method: 'get',
                url: '/api/auth/getEventParam',
                params: data
            }).then((res) => {
                this.events = this.data.newEvents;
                this.afficherEvents()
            }).catch((err) => {
                console.log(err)
            });
            setTimeout(this.updateEvents, 3000);
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