<template>
    <div class=" w-3/4 bg-red-100 border border-red-400 text-red-700 px-4 py-4 rounded relative m-auto mt-3 mb-2">
        <span class="absolute -top-2 -bottom-2 left--1 px-4 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
        </span>
        <strong class="font-bold pl-28 pr-3 text-lg">{{ errorMessage }}</strong>
        <span class="block sm:inline"></span>
        <span class="absolute top-1 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-6 w-6 text-red-500" @click="close" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
</div>
</template>

<script>
export default {
    name: 'Error',
    props: {
        errorMessage: String
    },
    methods: {
        close() {
            this.$emit('close', true);
        }
    }
};
</script>