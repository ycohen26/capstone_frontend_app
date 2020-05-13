<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="first_name">
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" v-model="last_name">
        </div>
        <div class="form-group">
          <label>Address 1:</label>
          <input type="text" class="form-control" v-model="address_1">
        </div>
        <div class="form-group">
          <label>Address 2:</label>
          <input type="text" class="form-control" v-model="address_2">
        </div>
        <div class="form-group">
          <label>City:</label>
          <input type="text" class="form-control" v-model="city">
        </div>
        <div class="form-group">
          <label>State:</label>
          <input type="text" class="form-control" v-model="state">
        </div>
        <div class="form-group">
          <label>Zipcode:</label>
          <input type="text" class="form-control" v-model="zipcode">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password Confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      zipcode: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        address_1: this.address_1,
        address_2: this.address_2,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode,
        email: this.email,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>