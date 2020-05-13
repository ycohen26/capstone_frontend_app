<template>
  <div class="bikess-new">
    <div class="container">      
      <form v-on:submit.prevent="submit()">
        <h1>Edit Your Bike</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Brand:</label> 
          <input type="text" class="form-control" v-model="bike.brand">
        </div>
        <div class="form-group">
          <label>Model:</label>
          <input type="text" class="form-control" v-model="bike.model">
        </div>
        <div class="form-group">
          <label>Size:</label>
          <input type="text" class="form-control" v-model="bike.size">
        </div>
        <div class="form-group">
          <label>Speeds:</label>
          <input type="text" class="form-control" v-model="bike.speeds">
        </div>
        <div class="form-group">
          <label>Plates:</label>
          <input type="text" class="form-control" v-model="bike.plates">
        </div>
        <div class="form-group">
          <label>Group:</label>
          <input type="text" class="form-control" v-model="bike.group">
        </div>
        <div class="form-group">
          <label>Frame material:</label>
          <input type="text" class="form-control" v-model="bike.frame_material">
        </div>
        <div class="form-group">
          <label>Fork material:</label>
          <input type="text" class="form-control" v-model="bike.fork_material">
        </div>
        <div class="form-group">
          <label>Year of Purchase:</label>
          <input type="text" class="form-control" v-model="bike.year_of_purchase">
        </div>
        <div class="form-group">
          <label>Wheels</label>
          <input type="text" class="form-control" v-model="bike.wheels">
        </div>
        <div class="form-group">
          <label>Aestetic Condition</label>
          <input type="text" class="form-control" v-model="bike.aestetic_condition">
        </div>
        <div class="form-group">
          <label>Mechanical_condition</label>
          <input type="text" class="form-control" v-model="bike.mechanical_condition">
        </div>
        <div class="form-group">
          <label>Has pedals?</label>
          <select v-model="bike.has_pedals">
            <option value="True">yes</option>
            <option value="False">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>Original receipt?</label>
          <select v-model="bike.original_receipt">
            <option value="True">yes</option>
            <option value="False">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>I'm a Shop?</label>
          <select v-model="bike.im_a_shop">
            <option value="True">yes</option>
            <option value="False">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>Negotiable Price?</label>
          <select v-model="bike.negotiable_price">
            <option value="True">yes</option>
            <option value="False">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>Price:</label>
          <input type="text" class="form-control" v-model="bike.price">
        </div>
        <div class="form-group">
           <label>Images:</label> <!-- REPLACE WITH UPLOAD FUNCTION -->
          <input type="file" accept="images/*" @change="uploadImage($event)" id="file-input">
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
      bike: {},
      errors: []
    };
  },
  created: function() {
    console.log('in created on edit page')
    axios.get(`/api/bikes/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.bike = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        seller_id: this.bike.seller_id,
        brand: this.bike.brand,
        model: this.bike.model,
        size: this.bike.size,
        speeds: this.bike.speeds,
        plates: this.bike.plates,
        group: this.bike.group,
        frame_material: this.bike.frame_material,
        fork_material: this.bike.fork_material,
        year_of_purchase: this.bike.year_of_purchase,
        wheels: this.bike.wheels,
        aestetic_condition: this.bike.aestetic_condition,
        mechanical_condition: this.bike.mechanical_condition,
        has_pedals: this.bike.has_pedals,
        original_receipt: this.bike.original_receipt,
        im_a_shop: this.bike.im_a_shop,
        negotiable_price: this.bike.negotiable_price,
        price: this.bike.price,
        images: this.bike.images
      };
      console.log('params');
      console.log(params);
      axios
        .post("/api/bikes", params)
        .then(response => {
          this.$router.push("/bikes");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  } 
};
</script>