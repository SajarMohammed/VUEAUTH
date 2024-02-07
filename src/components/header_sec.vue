<template>
    <div class="container">
        <div class="logo">
            <h1>AuthVue</h1>
        </div>
        <div class="links-sec" >
            <ul v-for="link in links" :key="link.id" >
                <li>{{ link.name }}</li>
            </ul>
        </div>
        <div >
            <ul class="route-sec">
               <li><router-link to="/login">SignOut</router-link></li> 
            </ul>
             
        </div>
    </div>
</template>

<script setup>
const links = [
    {id:1, name:"Home"},
    {id:2, name:"About"},
    {id:3, name:"Contact"},
]

</script>

<style scoped>
 .container{
    width:100vw;
    height:70px;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: space-between;
 }
 h1{
    padding-left:50px;
    font-size:28px;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 2px;
    font-weight:bolder;
    color:burlywood
 }
 .links-sec{
    display: flex;
    align-items: center;
    gap:40px;
    margin-right:70px;
 }
 li{
    list-style: none;
    color:burlywood;
    font-weight:bold;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 1px;
 }
 .route-sec{
    display: flex;
    gap:20px;
    margin-right:30px;
 }
 
</style>