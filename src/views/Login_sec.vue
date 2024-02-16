<style scoped>
.container{
    width:90vw;
    height:90vh;
    background-color: burlywood;
    margin:20px auto;
}
form{
    width:400px;
    height:450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    justify-content: center;
    margin:10px auto 10px auto;
}
.each-input{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
}
label{
    font-size:14px;
    font-family: 'Courier New', Courier, monospace;
    color:black;
}
input{
    width:230px;
    height:30px;
    border-radius: 10px;
    border: 1px solid grey;
    padding-left: 13px;
    font-family: 'Courier New', Courier, monospace;
}
input::placeholder{
    padding-left: 14px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
}
button{
    width:150px;
    height:30px;
    border:1px solid grey;
    border-radius: 10px;
    background-color: grey;
    color: aliceblue;
    font-size:14px;
    font-family: 'Courier New', Courier, monospace;
    font-weight:bold;
    letter-spacing: 2px;
}
button:hover{
    background-color: lightgrey;
    color:black;
    transition: ease-in 1s;
}
.errorsec{
    font-size:14px;
    color:red;
}
</style>
<template>
<div>


    <HeaderAuth/>
   <div class="container">
    <form @submit.prevent="onSubmit" >
        <div>
        <div class="each-input">
            <label>User Email</label>
             <input type="email" placeholder="enter your mail..." v-model="email">
        </div>
         <div class="each-input">
            <label>User Password</label>
            <input type="password" placeholder="enter your password..." v-model="password">
         </div>
        </div>
        <div>
        <button>submit</button>
    </div>
         <div v-if="loginError" class="errorsec">{{ loginError }}</div>
    </form>
   </div>
   </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import HeaderAuth from "@/components/header_auth.vue"
const email = ref("");
const password = ref("");
const router = useRouter();
const loginError = ref("")


const onSubmit = () =>{
    const storedData = localStorage.getItem('formData');

     if(!storedData){
        loginError.value="no such credentials"
        return;
     }
      
     const users = JSON.parse(storedData);

     const userExists = users.some(user => user.email === email.value && user.password == password.value)
     
        // const {email : storedEmail , password : storedPassword} = JSON.parse(storedData);
        
//    if ( storedEmail === email.value && storedPassword=== password.value){
//       router.push('/home')
   if(userExists){
     router.replace('/home')
   }else{
       loginError.value = "invalid email or password"
   }
     
}

</script>