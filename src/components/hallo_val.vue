<template>
    <div class="container">
   <form @submit.prevent="onSubmit" autocomplete="off">
    <div>
        <div class="each-field">
        <label>Username :</label>
     <input type="text" v-model="username" name="username" v-bind="usernameAttrs" placeholder="enter username..">
   <span>{{ errors.username }}</span>   
    </div>
    <div class="each-field">
        <label>Email :</label>
     <input type="text" v-model="email" name="email" v-bind="emailAttrs" placeholder="abc@gmail.com..">
   <span>{{ errors.email }}</span>   
    </div>
   <div class="each-field">
    <label>Phone :</label>
     <input type="text" v-model="phone" name="phone" v-bind="phoneAttrs" placeholder="enter number..">
   <span>{{ errors.phone }}</span>
   </div>
     <div class="each-field">
        <label>Password :</label>
        <input type="password" v-model="password" name="password" v-bind="passwordAttrs" placeholder="enter password..">
   <span>{{ errors.password }}</span>
     </div>
     <div class="each-field">
        <label>Confirm Password :</label>
           <input type="password" v-model="confirmpass" name="password" v-bind="confirmpassAttrs" placeholder="re-enter password..">
   <span>{{ errors.confirmPassword }}</span>
     </div>
</div>
<div>
    <button>Submit</button>
</div>
  
</form>
</div>
   
</template> 

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup';
import { useRouter } from 'vue-router';

const router = useRouter()

const schema =toTypedSchema( yup.object({
    username:yup.string().required().min(3,'atleast 3 characters').max(15,'Atmost 15 characters'),
    email: yup.string().required().email(),
    password:yup.string().min(6,'minimum 6 characters').max(10, 'maximum 10 characters').required(),
    phone: yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
}))


const { errors, defineField, handleSubmit } = useForm({
    validationSchema:schema
})

const onSubmit= handleSubmit((values)=>{
    localStorage.setItem('formData', JSON.stringify(values))
    router.push("/login")
})
const [username, usernameAttrs] = defineField('username', {
  validateOnModelUpdate: true
    
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: true
    
})
const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: true
    
})
const [phone, phoneAttrs] = defineField('phone', {
  validateOnModelUpdate: true
    
})
const [confirmpass, confirmpassAttrs] = defineField('confirmPassword', {
  validateOnModelUpdate: true
    
})




</script>

<style scoped>

.each-field{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
span{
    font-size:14px;
    font-family: 'Courier New', Courier, monospace;
    color:red;
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
.container{
    width:90vw;
    height:90vh;
    background-color: burlywood;
    margin:20px auto;
}
form{
    width:400px;
    height:500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:10px auto 10px auto;
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

</style>