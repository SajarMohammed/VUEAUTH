<template>
    <Header/>
    <div class="text-sec">
        <h1>Welcome Buddy...!!!</h1>
        <h3>Let's Explore Vue js</h3>
    </div>
</template>
<script setup>
import Header from "@/components/header_sec.vue"
</script>

<style scoped>
.text-sec{
    text-align: center;
}
h1{
    font-family: 'Courier New', Courier, monospace;
    font-size:32px;
    letter-spacing: 2px;
    margin-top: 50px;
}
h3{
    font-family: 'Courier New', Courier, monospace;
    font-size:32px;
    letter-spacing: 2px;
    margin-top: 50px;
}
</style>