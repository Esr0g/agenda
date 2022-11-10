<template >
    <table class="m-auto mt-10 border-collapse w-2/3">
        <tr class="date">
            <td>Left</td>
            <th colspan="5">Jour</th>
            <td>Right</td>
        </tr>
        <tr class="tr days">
            <td class="td days">case 1</td>
            <td class="td days">case 2</td>
            <td class="td days">case 3</td>
            <td class="td days">case 4</td>
            <td class="td days">case 5</td>
            <td class="td days">case 6</td>
            <td class="td days">case 7</td>
        </tr>
        <tr class="tr days">
            <td class="td days">case 8</td>
            <td class="td days">case 9</td>
            <td class="td days">case 10</td>
            <td class="td days">case 11</td>
            <td class="td days">case 12</td>
            <td class="td days">case 13</td>
            <td class="td days">case 14</td>
        </tr>
        <tr class="tr days">
            <td class="td days">case 15</td>
            <td class="td days">case 16</td>
            <td class="td days">case 17</td>
            <td class="td days">case 18</td>
            <td class="td days">case 19</td>
            <td class="td days">case 20</td>
            <td class="td days">case 21</td>
        </tr>
        <tr class="tr days">
            <td class="td days">case 22</td>
            <td class="td days">case 23</td>
            <td class="td days">case 24</td>
            <td class="td days">case 25</td>
            <td class="td days">case 26</td>
            <td class="td days">case 27</td>
            <td class="td days">case 28</td>
        </tr>
        <tr class="tr days">
            <td class="td days">case 29</td>
            <td class="td days">case 30</td>
            <td class="td days">case 31</td>
            <td class="td days">case 32</td>
            <td class="td days">case 33</td>
            <td class="td days">case 34</td>
            <td class="td days">case 35</td>
        </tr>
    </table>

</template>

<script>
export default {
    name: 'MonthView',

    data() {
        return {}
    },

    mounted() {
        console.log(this.$dayjs().toJSON());
    }
}
</script>

<style scoped>
.days {
    border: 2px solid;
    padding: 2.5em;
}

.date {
    border: 2px solid;
}
</style>