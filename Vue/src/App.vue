<template>
    <h1> Counter: {{ counter }}</h1>
</template>


<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        mounted() {
            setInterval(() => {
                this.counter++
            }, 1000)
        }
    }
</script>
