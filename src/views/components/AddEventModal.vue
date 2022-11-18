<template>
<!-- Main modal -->
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-3 rounded-t border-b dark:border-gray-600">
                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                    Ajouter un événement
                </h3>
                <button type="button" @click="hidde" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 space-y-4">
                <h2 class="text-lg font-bold text-center">{{ showDate(date) }}</h2>
                <form>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" v-model="form.allDay" value="" @change="toggleTimePickers" class="w-4 h-4 text-blue-600 bg-gray-50 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-checkbox" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-400">Toute la journée</label>
                    </div>
                    <div v-if="showTimePickers" class="flex">
                        <div class="mr-4">
                            <label for="tempsDeb" class="mb-3">Heure début : </label>
                            <input type="time"
                                class="form-control block px-2 py-1 text-base font-normal text-gray-700 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="tempsDeb"
                                v-model="form.heureDeb"/>
                            <button tabindex="0" type="button" class="timepicker-toggle-button" data-mdb-toggle="timepicker">
                                <i class="fas fa-clock timepicker-icon"></i>
                            </button>
                        </div>

                        <div class="mx-4">
                            <label for="tempsFin" class="mb-3">Heure fin : </label>
                            <input type="time"
                                class="form-control block px-2 py-1 text-base font-normal text-gray-700 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="tempsFin"
                                v-model="form.heureFin"/>
                            <button tabindex="0" type="button" class="timepicker-toggle-button" data-mdb-toggle="timepicker">
                                <i class="fas fa-clock timepicker-icon"></i>
                            </button>
                        </div>
                    </div> 
                    <label for="nomEvt" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">Nom de l'événement : </label>
                    <input type="text" class="form-control block w-full px-1 py-1.5 text-sm font-normal text-gray-70 
                                bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 
                                focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none bg-gray-50" name="nomEvt" v-model="form.name"/>

                    <label for="lieu" class="block my-2 text-md font-medium text-gray-900 dark:text-gray-400">Lieu : </label>
                    <input type="text" class="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-70
                                bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 
                                focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none bg-gray-50" name="lieu" v-model="form.adresse"/>

                    <label for="description" class="block my-2 text-md font-medium text-gray-900 dark:text-gray-400">Description : </label>
                    <textarea id="description" rows="2" class="block resize-none p-2.5 w-full text-sm font-normal text-gray-70
                                bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 
                                focus:text-gray-700 focus:bg-gray-50 focus:border-blue-600 focus:outline-none bg-gray-50" placeholder="Description..." v-model="descriptionEvt"></textarea>
                </form>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 space-x-6 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" @click="addEvent" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajouter</button>
                <button data-modal-toggle="defaultModal" @click="hidde" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Annuler</button>
            </div>
        </div>
    </div>
</div>
<div class="fixed h-screen w-screen top-0 right-0 left-0 z-49" id="shadow">
</div>
</template>

<script>
const mois = ["Janvier", "Février", "Mars", "Avril", "Mais", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

export default {
    name: 'AddEventModal',
    data() {
        return {
            showTimePickers: true,
            form: {
                userID: null,
                date: null,
                name: null,
                adresse: null,
                dateDeb: null,
                dateFin: null,
                description: null,
                allDay: null
            }
        };
    },

    props: {
        date: String
    },

    methods: {
        hidde() {
            this.$emit('close', false);
        },

        showDate(date) {
            let d = this.$dayjs(date);
            return jours[d.day()] + " " + d.date() + " " + mois[d.month()] + " " + d.year();
        },

        toggleTimePickers() {
            this.showTimePickers = !this.showTimePickers;
        },

        addEvent() {
            //TODO ajouter un événement
            let data = {
                userID: this.form.userID,
                date: this.form.date,
                name: this.form.name,
                adresse: this.form.adresse,
                heureDeb: this.form.heureDeb,
                heureFin: this.form.heureFin,
                desription: this.form.description,
                allday: this.form.allDay
            };

            this.$http({
                method: "post",
                url: "/api/auth/addEvent",
                data: data
            }).then((res) => {
                console.log(res);
            });
        }
    },
}
</script>

<style scoped>
#defaultModal {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-25%, -23%);
}

#shadow {
    background-color: rgba(0, 0, 0, 0.6);
}
</style>