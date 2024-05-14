<template>
  <div class="box-form">
    <div class="left">
      <div class="overlay">
        <img class="logo-left" src="@/assets/Rabguard_Logo2.png" alt="hi">
    </div>  
  </div>

    <div class="right">
      <img class="logo-right" src="@/assets/Logo-Health.png" alt="hi">
      <h1>Olongapo City</h1>
      <h2>Animal Bite Treatment Center</h2>
      <div class="inputs">  
       <span><i class="fa-regular fa-envelope"></i></span><input v-model="username" type="text" placeholder="Email">
        <br>
        <span><i class="fa-solid fa-lock"></i></span><input v-model="password" type="password" placeholder="Password">
      </div>

      <br><br>

      <div class="remember-me--forget-password">
        <a href>Forgot Password?</a>       <router-link to="/dashboard" class="login-button">Login</router-link>
      </div>

    
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false
    };
  },
  methods: {
    login() {
      // Your login logic here
    }
  }
};
</script>

<style scoped>
.circle{
  position: absolute;
  background-color: black;
  height: 300px;
  width: 300px;
  border-radius: 200px;
  z-index: -1;
  margin-top: 125px;
  margin-left: -140px;
  opacity: 50%;
}

.logo-left{
  margin-top: 80px;
  margin-left: -50px;
  height: 22rem;
  width: 22rem;
  transition: 0.2s ease-out;
  align-self: center;
  border-radius: 5rem;
  z-index:-1;
}

.logo-right{
  height: 9rem;
  width: 9rem;
  transition: 0.2s ease-out;
  align-self: center;
  border-radius: 5rem;
}

body {
  background-image: url('@/assets/Olongapo_City_Hall.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: "Open Sans", sans-serif;
  color: #333333;
}

.box-form {
  margin-top: 45px;
  margin-left: 260px;
  width: 60%;
  background: #FFFFFF;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex: 1 1 100%;
  align-items: stretch;
  justify-content: space-between;
  box-shadow: 0 0 20px 6px #090b6f85;
}
@media (max-width: 980px) {
  .box-form {
    flex-flow: wrap;
    text-align: center;
    align-content: center;
    align-items: center;
  }
}
.left-title{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 50px;
}

.box-form div {
  height: auto;
}
.box-form .left {
  color: #FFFFFF;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
.box-form .left .overlay {
  padding: 30px;
  width: 100%;
  height: 100%;
  background-color:#339933;
  overflow: hidden;
  box-sizing: border-box;
}
.box-form .left .overlay h1 {
  font-size: 10vmax;
  line-height: 1;
  font-weight: 900;
  margin-top: 40px;
  margin-bottom: 20px;
}
.box-form .left .overlay span p {
  margin-top: 30px;
  font-weight: 900;
}
.box-form .left .overlay span a {
  background: pink;
  color: #FFFFFF;
  margin-top: 10px;
  padding: 14px 50px;
  border-radius: 100px;
  display: inline-block;
  box-shadow: 0 3px 6px 1px #042d4657;
}
.box-form .left .overlay span a:last-child {
  background: #1dcaff;
  margin-left: 30px;
}
.box-form .right {
  width:60%;
  padding: 40px;

  overflow: hidden;
}
@media (max-width: 980px) {
  .box-form .right {
    width: 100%;
  }
}
.box-form .right h5 {
  font-size: 6vmax;
  line-height: 0;
}
.box-form .right p {
  font-size: 14px;
  color: #B0B3B9;
}
.box-form .right .inputs {
  overflow: hidden;
}
.box-form .right input {
  width: 80%;
  padding: 10px;
  margin-top: 25px;
  font-size: 16px;
  border: none;
  outline: none;
  border-bottom: 2px solid #B0B3B9;
}
.box-form .right .remember-me--forget-password {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.box-form .right .remember-me--forget-password input {
  margin: 0;
  margin-right: 7px;
  width: auto;
}

.box-form .right .remember-me--forget-password a {
  text-decoration: none;
}

.login-button {
  float: right;
  color: #fff;
  font-size: 16px;
  padding: 12px 35px;
  border-radius: 50px;
  display: inline-block;
  border: 0;
  outline: 0;
  background-image: linear-gradient(135deg, blue 10%, #5b00ff 100%);
  transition: background-image 0.3s;
  text-decoration: none;
  opacity:80%;
}

.login-button:hover {
  opacity: 100%;
}

label {
  display: block;
  position: relative;
  margin-left: 30px;
}

label::before {
  content: ' \f00c';
  position: absolute;
  font-family: FontAwesome;
  background: transparent;
  border: 3px solid #70F570;
  border-radius: 4px;
  color: transparent;
  left: -30px;
  transition: all 0.2s linear;
}

label:hover::before {
  font-family: FontAwesome;
  content: ' \f00c';
  color: #fff;
  cursor: pointer;
  background: #70F570;
}

label:hover::before .text-checkbox {
  background: #70F570;
}

label span.text-checkbox {
  display: inline-block;
  height: auto;
  position: relative;
  cursor: pointer;
  transition: all 0.2s linear;
}

label input[type="checkbox"] {
  display: none;
}
</style>