<template>
    <header>
        <h1 :style="{color: color}"> {{title}}</h1>
        <button @click="HandleClick()" :style="{background: bgColor}"> {{ action }} </button>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: String,
            action: String,
            color: String,
            bgColor: String
        },
        methods: {
            HandleClick() {
                console.log("button clicked")
            }
        }
    }

</script>

<style>

button {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    background: seagreen;
    color: white;
    border: none;
}

h1 {
    color: yellowgreen
}
</style>