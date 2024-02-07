<template>
    <div class="containerone">
        <div class="logo">
            <h1>AuthVue</h1>
        </div>
        <div >
            <ul class="route-sec">
               <li><router-link to="/">SignUp</router-link></li> 
               <li><router-link to="/login">Login</router-link></li>
            </ul>
             
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
 .containerone{
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

 .route-sec{
    display: flex;
    gap:20px;
    margin-right:50px;
 }
 li{
    list-style: none;
 }
 
</style>