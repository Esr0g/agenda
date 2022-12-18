<template>
    <!-- Main modal -->
<div id="contour">
    <div id="defaultModal" tabindex="-1" aria-hidden="true" class="z-50">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-3 rounded-t border-b dark:border-gray-600">
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                        {{ event.name }}
                    </h3>
                    <button type="button" @click="hidde" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="grid p-4 grid-cols-[25%_auto] gap-y-8 gap-x-10 my-6">
                    <h4 class="block justify-self-end"><b>Début : </b></h4>
                    <p class="block">{{ getDateDebut() }}</p>
                    <h4 class="block justify-self-end"><b>Fin : </b></h4>
                    <p class="block">{{ getDateFin() }}</p>
                    <h4 class="block justify-self-end"><b>Lieu : </b></h4>
                    <p class="block">{{ event.adresse }}</p>
                    <h4 class="block justify-self-end"><b>Description : </b></h4>
                    <p class="block">{{ event.description }}</p>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-4 space-x-6 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="defaultModal" @click="modifiyEvent" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Modifier</button>
                    <button data-modal-toggle="defaultModal" @click="deleteEvent" type="button" class="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Supprimer</button>
                    <button data-modal-toggle="defaultModal" @click="hidde" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Annuler</button>
                </div>
            </div>
        </div>
    </div>
    <div class="fixed h-screen w-screen top-0 right-0 left-0 z-49" id="shadow">
    </div>
</div>
</template>
    
<script>
const mois = ["Janvier", "Février", "Mars", "Avril", "Mais", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

export default {
    name: 'ShowEventModal',
    data() {
        return {
        };
    },

    props: {
        event: Object
    },

    methods: {
        hidde() {
            this.$emit('close', false);
        },

        getUserId() {
            let cookies = document.cookie.split("=");
            let user = JSON.parse(cookies[1]);
            return user.id;
        },

        deleteEvent() {
            this.$http({
                method: 'delete',
                url: '/api/auth/deleteEvent',
                data: { userID: this.getUserId() ,eventID: this.event.id }
            }).then((res) => {
                this.hidde();
            }).catch((err) => {
                console.err(err);
            })
        },

        getDateDebut() {
            let date = this.$dayjs(this.event.dateDeb);
            return jours[date.day()] + " " + date.date() + " " + mois[date.month()] + " " + date.year()
                + " à " + date.format("H:MM");
        },

        getDateFin() {
            if (!this.event.allDay) {
                let date = this.$dayjs(this.event.dateFin);
                return jours[date.day()] + " " + date.date() + " " + mois[date.month()] + " " + date.year()
                    + " à " + date.format("H:MM");
            } else {
                return "";
            }
            
        },

        modifiyEvent() {
            this.hidde();
            this.$emit('modify', this.event);
        }
    }
}
</script>
    
<style scoped>
#contour {
    position: fixed;
    width: 100%;
    height: 100%;
}

#defaultModal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#shadow {
    background-color: rgba(0, 0, 0, 0.6);
}
</style>