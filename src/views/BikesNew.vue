<template>
  <div class="bikess-new">
    <div class="container">      
      <form v-on:submit.prevent="submit()">
        <h1>Post a Bike</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Title:</label> 
          <input type="text" class="form-control" v-model="title">
        </div>
        <div class="form-group">
          <label>Directions:</label>
          <input type="text" class="form-control" v-model="directions">
        </div>
        <div class="form-group">
          <label>Ingredients:</label>
          <input type="text" class="form-control" v-model="ingredients">
        </div>
        <div class="form-group">
          <label>Prep Time:</label>
          <input type="text" class="form-control" v-model="prepTime">
        </div>

        <!-- <textarea rows="30" cols="80"></textarea> -->

        <div class="form-group">
          <label>Image Url:</label>
          <input type="text" class="form-control" v-model="imageUrl">
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
      seller_id: "",
      brand: "",
      model: "",
      size: "",
      speeds: "",
      plates: "",
      group: "",
      frame_material: "",
      fork_material: "",
      year_of_purchase: "",
      wheels: "",
      aestetic_condition: "",
      mechanical_condition: "",
      has_pedals: "",
      original_receipt: "",
      im_a_shop: "",
      negotiable_price: "",
      price: "",
      images: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        ingredients: this.ingredients,
        directions: this.directions,
        prep_time: this.prepTime,
        image_url: this.imageUrl
      };
      axios
        .post("/api/bikess", params)
        .then(response => {
          this.$router.push("/bikess");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>