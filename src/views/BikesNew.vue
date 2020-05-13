<template>
  <div class="bikess-new">
    <div class="container">      
      <form v-on:submit.prevent="submit()">
        <h1>Post a Bike</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Brand:</label> 
          <input type="text" class="form-control" v-model="brand">
        </div>
        <div class="form-group">
          <label>Model:</label>
          <input type="text" class="form-control" v-model="model">
        </div>
        <div class="form-group">
          <label>Size:</label>
          <input type="text" class="form-control" v-model="size">
        </div>
        <div class="form-group">
          <label>Speeds:</label>
          <input type="text" class="form-control" v-model="speeds">
        </div>
        <div class="form-group">
          <label>Plates:</label>
          <input type="text" class="form-control" v-model="plates">
        </div>
        <div class="form-group">
          <label>Group:</label>
          <input type="text" class="form-control" v-model="group">
        </div>
        <div class="form-group">
          <label>Frame material:</label>
          <input type="text" class="form-control" v-model="frame_material">
        </div>
        <div class="form-group">
          <label>Fork material:</label>
          <input type="text" class="form-control" v-model="fork_material">
        </div>
        <div class="form-group">
          <label>Year of Purchase:</label>
          <input type="text" class="form-control" v-model="year_of_purchase">
        </div>
        <div class="form-group">
          <label>Wheels</label>
          <input type="text" class="form-control" v-model="wheels">
        </div>
        <div class="form-group">
          <label>Aestetic Condition</label>
          <input type="text" class="form-control" v-model="aestetic_condition">
        </div>
        <div class="form-group">
          <label>Mechanical_condition</label>
          <input type="text" class="form-control" v-model="mechanical_condition">
        </div>
        <div class="form-group">
          <label>Has pedals?</label>
          <select>
            <option value="True">yes</option>
            <option value="False">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>Original receipt?</label>
          <select>
            <option value="True">yes</option>
            <option value="False">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>I'm a Shop?</label>
          <select>
            <option value="True">yes</option>
            <option value="False">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>Negotiable Price?</label>
          <select v-model="negotiable_price">
            <option value="True">yes</option>
            <option value="False">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>Price:</label>
          <input type="text" class="form-control" v-model="price">
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
      has_pedals: 0, 
      original_receipt: 0, 
      im_a_shop: 0, 
      negotiable_price: 0, 
      price: "", 
      images: [], 
      errors: [],
      myOptions: [
        {text: 'yes', value: true},
        {text: 'no', value: false}
      ]
    };
  },
  methods: {
    submit: function() {
      var params = {
        seller_id: this.seller_id,
        brand: this.brand,
        model: this.model,
        size: this.size,
        speeds: this.speeds,
        plates: this.plates,
        group: this.group,
        frame_material: this.frame_material,
        fork_material: this.fork_material,
        year_of_purchase: this.year_of_purchase,
        wheels: this.wheels,
        aestetic_condition: this.aestetic_condition,
        mechanical_condition: this.mechanical_condition,
        has_pedals: this.has_pedals,
        original_receipt: this.original_receipt,
        im_a_shop: this.im_a_shop,
        negotiable_price: this.negotiable_price,
        price: this.price,
        images: this.images
      };
      console.log(params)
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