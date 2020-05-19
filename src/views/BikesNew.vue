<template>
  <div class="bikess-new">
    <div class="container">      
      <form v-on:submit.prevent="submit()">
        <h1>Post a Bike</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Category:</label> 
          <select v-model="category">
            <option>Road Bike</option>
            <option>Mountain Bike</option>
            <option>Triathlon</option>
            <option>BMX</option>
          </select>
        </div>
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
          <select v-model="size">
            <option>44 (XXS)</option>
            <option>48 (XS)</option>
            <option>49 (XS)</option>
            <option>51 (S)</option>
            <option>52 (S)</option>
            <option>53 (M)</option>
            <option>54 (M)</option>
            <option>55 (L)</option>
            <option>56 (L)</option>
            <option>57 (XL)</option>
            <option>58 (XL)</option>
            <option>59 (XL - XXL)</option>
            <option>61 (XXL)</option>
            <option>+61 (XXXL)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Speeds:</label>
          <select v-model="speeds">
            <option>7v</option>
            <option>8v</option>
            <option>9v</option>
            <option>10v</option>
            <option>11v</option>
          </select>
        </div>
        <div class="form-group">
          <label>Plates:</label>
          <select v-model="plates">
            <option>Compac (50/34)</option>
            <option>Mid Compac (52/36)</option>
            <option>Standard (53/39)</option>
            <option>Others</option>
          </select>
        </div>
        <div class="form-group">
          <label>Group:</label>
          <input type="text" class="form-control" v-model="group">
        </div>
        <div class="form-group">
          <label>Frame material:</label>
          <select v-model="frame_material">
            <option>Aluminum</option>
            <option>Carbon</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label>Fork material:</label>
          <select v-model="fork_material">
            <option>Aluminum</option>
            <option>Carbon</option>
            <option>Other</option>
          </select>
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
          <select v-model="aestetic_condition">
            <option>Brand New</option>
            <option>With slight marks, scratches, or pecks</option>
            <option>With obvious marks or signsthat do not compromise the safety of the rider</option>
            <option>With obvious marks, bumps or cracks that may need repair</option>
            <option>Needs repair</option>
          </select>
        </div>
        <div class="form-group">
          <label>Mechanical_condition</label>
          <select v-model="aestetic_condition">
            <option>In perfect condition, ready to go out for a ride</option>
            <option>Requires replacement of consumables, parts or covers</option>
            <option>Needs maintenance of pedal, steering or wheel bearings</option>
            <option>suspension maintenance required</option>
            <option>Worn transmission(plates, sprockets, chain)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Has pedals?</label>
          <select v-model="has_pedals">
            <option v-bind:value="true">yes</option>
            <option v-bind:value="false">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>Original receipt?</label>
          <select v-model="original_receipt">
            <option v-bind:value="true">yes</option>
            <option v-bind:value="false">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>I'm a Shop?</label>
          <select v-model="im_a_shop">
            <option v-bind:value="true">yes</option>
            <option v-bind:value="false">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>Negotiable Price?</label>
          <select v-model="negotiable_price">
           <option v-bind:value="true">yes</option>
            <option v-bind:value="false">No</option>
          </select>
        </div>
        <div class="form-group">
          <label>Price $</label>
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
      category: "", 
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
        category: this.brand,
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