<template >
    <table class="m-auto mt-10 bg-[#f9fafb] w-5/6">
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
        <tr class="bg-white">
            <th class="border-y border-r border-[#d1d5db] text-center w-1/7 font-bold">Horaires</th>
            <th class="border-y border-r border-[#d1d5db] text-center w-1/7 font-bold">Lundi</th>
            <th class="border border-[#d1d5db] text-center w-1/7 font-bold">Mardi</th>
            <th class="border border-[#d1d5db] text-center w-1/7 font-bold">Mercredi</th>
            <th class="border border-[#d1d5db] text-center w-1/7 font-bold">Jeudi</th>
            <th class="border border-[#d1d5db] text-center w-1/7 font-bold">Vendredi</th>
            <th class="border border-[#d1d5db] text-center w-1/7 font-bold">Samedi</th>
            <th class="border-y border-l border-[#d1d5db] text-center w-1/7 font-bold">Dimanche</th>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "00:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "01:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "02:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "03:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "04:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "05:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "06:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "07:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "08:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "09:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "10:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "11:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "12:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                   data-modal-toggle="defaultModal">{{ "13:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "14:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "15:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "16:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "17:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "18:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "19:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "20:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "21:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-1" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-6" class="emp"></div>
            </td>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal"></span>
                <div id="emp-7" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "22:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal">{{ cases[0].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal">{{ cases[1].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal">{{ cases[2].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal">{{ cases[3].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal">{{ cases[4].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal">{{ cases[5].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal">{{ cases[6].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    data-modal-toggle="defaultModal">{{ "23:00" }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[0].date)" data-modal-toggle="defaultModal">{{ cases[0].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[1].date)" data-modal-toggle="defaultModal">{{ cases[1].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[2].date)" data-modal-toggle="defaultModal">{{ cases[2].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[3].date)" data-modal-toggle="defaultModal">{{ cases[3].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[4].date)" data-modal-toggle="defaultModal">{{ cases[4].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[5].date)" data-modal-toggle="defaultModal">{{ cases[5].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
            <td id="case-0" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)" data-modal-toggle="defaultModal">{{ cases[6].num }}</span>
                <div id="emp-0" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-1" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[1].date)">{{
                    cases[1].num
            }}</span>
                <div id="emp-1" class="emp"></div>
            </td>
            <td id="case-2" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[2].date)">{{
                    cases[2].num
            }}</span>
                <div id="emp-2" class="emp"></div>
            </td>
            <td id="case-3" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[3].date)">{{
                    cases[3].num
            }}</span>
                <div id="emp-3" class="emp"></div>
            </td>
            <td id="case-4" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[4].date)">{{
                    cases[4].num
            }}</span>
                <div id="emp-4" class="emp"></div>
            </td>
            <td id="case-5" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[5].date)">{{
                    cases[5].num
            }}</span>
                <div id="emp-5" class="emp"></div>
            </td>
            <td id="case-6" class="border-y border-l border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[6].date)">{{ cases[6].num }}</span>
                <div id="emp-6" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-7" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[7].date)">{{ cases[7].num }}</span>
                <div id="emp-7" class="emp"></div>
            </td>
            <td id="case-8" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[8].date)">{{
                    cases[8].num
            }}</span>
                <div id="emp-8" class="emp"></div>
            </td>
            <td id="case-9" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[9].date)">{{
                    cases[9].num
            }}</span>
                <div id="emp-9" class="emp"></div>
            </td>
            <td id="case-10" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[10].date)">{{
                    cases[10].num
            }}</span>
                <div id="emp-10" class="emp"></div>
            </td>
            <td id="case-11" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[11].date)">{{
                    cases[11].num
            }}</span>
                <div id="emp-11" class="emp"></div>
            </td>
            <td id="case-12" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[12].date)">{{
                    cases[12].num
            }}</span>
                <div id="emp-12" class="emp"></div>
            </td>
            <td id="case-13" class="border-y border-l border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[13].date)">{{ cases[13].num }}</span>
                <div id="emp-13" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-14" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[14].date)">{{ cases[14].num }}</span>
                <div id="emp-14" class="emp"></div>
            </td>
            <td id="case-15" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[15].date)">{{
                    cases[15].num
            }}</span>
                <div id="emp-15" class="emp"></div>
            </td>
            <td id="case-16" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[16].date)">{{
                    cases[16].num
            }}</span>
                <div id="emp-16" class="emp"></div>
            </td>
            <td id="case-17" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[17].date)">{{
                    cases[17].num
            }}</span>
                <div id="emp-17" class="emp"></div>
            </td>
            <td id="case-18" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[18].date)">{{
                    cases[18].num
            }}</span>
                <div id="emp-18" class="emp"></div>
            </td>
            <td id="case-19" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[19].date)">{{
                    cases[19].num
            }}</span>
                <div id="emp-19" class="emp"></div>
            </td>
            <td id="case-20" class="border-y border-l border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[20].date)">{{ cases[20].num }}</span>
                <div id="emp-20" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-21" class="border-y border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[21].date)">{{ cases[21].num }}</span>
                <div id="emp-21" class="emp"></div>
            </td>
            <td id="case-22" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[22].date)">{{
                    cases[22].num
            }}</span>
                <div id="emp-22" class="emp"></div>
            </td>
            <td id="case-23" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[23].date)">{{
                    cases[23].num
            }}</span>
                <div id="emp-23" class="emp"></div>
            </td>
            <td id="case-24" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[24].date)">{{
                    cases[24].num
            }}</span>
                <div id="emp-24" class="emp"></div>
            </td>
            <td id="case-25" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[25].date)">{{
                    cases[25].num
            }}</span>
                <div id="emp-25" class="emp"></div>
            </td>
            <td id="case-26" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[26].date)">{{
                    cases[26].num
            }}</span>
                <div id="emp-26" class="emp"></div>
            </td>
            <td id="case-27" class="border-y border-l border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[27].date)">{{ cases[27].num }}</span>
                <div id="emp-27" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-28" class="border-t border-r border-b border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[28].date)">{{ cases[28].num }}</span>
                <div id="emp-28" class="emp"></div>
            </td>
            <td id="case-29" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[29].date)">{{
                    cases[29].num
            }}</span>
                <div id="emp-29" class="emp"></div>
            </td>
            <td id="case-30" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[30].date)">{{
                    cases[30].num
            }}</span>
                <div id="emp-30" class="emp"></div>
            </td>
            <td id="case-31" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[31].date)">{{
                    cases[31].num
            }}</span>
                <div id="emp-31" class="emp"></div>
            </td>
            <td id="case-32" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[32].date)">{{
                    cases[32].num
            }}</span>
                <div id="emp-32" class="emp"></div>
            </td>
            <td id="case-33" class="border border-[#d1d5db] h-32"><span class="num" @click="addEvent(cases[33].date)">{{
                    cases[33].num
            }}</span>
                <div id="emp-33" class="emp"></div>
            </td>
            <td id="case-34" class="border-t border-l border-b border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[34].date)">{{ cases[34].num }}</span>
                <div id="emp-34" class="emp"></div>
            </td>
        </tr>
        <tr>
            <td id="case-35" class="border-t border-r border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[35].date)">{{ cases[35].num }}</span>
                <div id="emp-35" class="emp"></div>
            </td>
            <td id="case-36" class="border-t border-r border-l border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[36].date)">{{ cases[36].num }}</span>
                <div id="emp-36" class="emp"></div>
            </td>
            <td id="case-37" class="border-t border-r border-l border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[37].date)">{{ cases[37].num }}</span>
                <div id="emp-37" class="emp"></div>
            </td>
            <td id="case-38" class="border-t border-r border-l border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[38].date)">{{ cases[38].num }}</span>
                <div id="emp-38" class="emp"></div>
            </td>
            <td id="case-39" class="border-t border-r border-l border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[39].date)">{{ cases[39].num }}</span>
                <div id="emp-39" class="emp"></div>
            </td>
            <td id="case-40" class="border-t border-r border-l border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[40].date)">{{ cases[40].num }}</span>
                <div id="emp-40" class="emp"></div>
            </td>
            <td id="case-41" class="border-t border-l border-[#d1d5db] h-32"><span class="num"
                    @click="addEvent(cases[41].date)">{{ cases[41].num }}</span>
                <div id="emp-41" class="emp"></div>
            </td>
        </tr>
    </table>
</template>

<script>
import AddEventModal from './AddEventModal.vue';
import ShowEventModal from "./ShowEventModal.vue";
import UpdateEventModal from './UpdateEventModal.vue';
import _ from 'underscore';

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
            showShowEventModal: false,
            showUpdateEventModal: false,
            dateSelected: null,
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
        this.setJourCases();
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

            this.clearAllEvent();
            this.getAllEvent();
        },

        clearAllEvent() {
            for (let i = 0; i < 42; i++) {
                let elem = document.querySelector("#emp-" + i);
                while (elem.hasChildNodes()) {
                    elem.removeChild(elem.firstChild);
                }
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