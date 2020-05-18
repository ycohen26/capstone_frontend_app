<template>
  <div class="home">
    <!-- <div v-bind:key="bike.id" v-for="bike in bikes" v-on:click="$router.push(`/bikes/${bike.id}`)">
      <img v-bind:src="bike.photos[0].image_url"/>
      <p>id: {{ bike.id }}</p>
      <p>seller_id: {{ bike.seller_id }}</p>
      <p>buyer_id: {{ bike.buyer_id }}</p>
      <p>brand: {{ bike.brand }}</p>
      <p>model: {{ bike.model }}</p>
      <p>size: {{ bike.size }}</p>
      <p>speeds: {{ bike.speeds }}</p>
      <p>plates: {{ bike.plates }}</p>
      <p>group: {{ bike.group }}</p>
      <p>frame_material: {{ bike.frame_material }}</p>
      <p>fork_material: {{ bike.fork_material }}</p>
      <p>year_of_purchase: {{ bike.year_of_purchase }}</p>
      <p>wheels: {{ bike.wheels }}</p>
      <p>aestetic_condition: {{ bike.aestetic_condition }}</p>
      <p>mechanical_condition: {{ bike.mechanical_condition }}</p>
      <p>has_pedals: {{ bike.has_pedals }}</p>
      <p>original_receipt: {{ bike.original_receipt }}</p>
      <p>im_a_shop: {{ bike.im_a_shop }}</p>
      <p>negotiable_price: {{ bike.negotiable_price }}</p>
      <p>price: {{ bike.price }}</p> -->
      <!-- <img v-for="photo in bike.photos" v-bind:src="photo.image_url"/> -->
      <!-- <p>favorites: {{ bike.favorites }}</p>
      <p>comments: {{ bike.comment }}</p>
    </div> -->
                <!-- Banner -->
              <section>
                <div class="content">
                  <header>
                    <h1>Welcome To CycloShop</h1>
                    <p>THE PERFECT PLACE TO BUY AND SELL USED BIKES</p>
                  </header>
                </div>
                <header class="major">
                  <h2>Categories</h2>
                </header>
                <div class="features">
                  <article>
                    <span class="image left"><img src="images/roadicon.jpg" alt="" /></span>
                    <div class="content">
                      <h3>Road</h3>
                    </div>
                  </article>
                  <article>
                    <span class="image left"><img src="images/mountain.jpg" alt="" /></span>
                    <div class="content">
                      <h3>Mountain</h3>
                    </div>
                  </article>
                  <article>
                    <span class="image left"><img src="images/bmx-stunt-silhouette-2.jpg" alt="" /></span>
                    <div class="content">
                      <h3>BMX</h3>
                    </div>
                  </article>
                  <article>
                    <span class="image left"><img src="images/triathlon.jpg" alt="" /></span>
                    <div class="content">
                      <h3>Triathlon</h3>
                    </div>
                  </article>
                </div>
              </section>

            <!-- Section -->
              <section>
                <header class="major">
                  <h2>Major Brands</h2>
                </header>
                <div class="features">
                  <article>
                    <span class="image left"><img src="images/trek.jpg" alt="" /></span>
                    <div class="content">
                      <h3>Trek</h3>
                    </div>
                  </article>
                  <article>
                    <span class="image left"><img src="images/orbea.jpg" alt="" /></span>
                    <div class="content">
                      <h3>Orbea</h3>
                    </div>
                  </article>
                  <article>
                    <span class="image left"><img src="images/cannondale.jpg" alt="" /></span>
                    <div class="content">
                      <h3>Cannondale</h3>
                    </div>
                  </article>
                  <article>
                    <span class="image left"><img src="images/scott.jpg" alt="" /></span>
                    <div class="content">
                      <h3>Scott</h3>
                    </div>
                  </article>
                </div>
              </section>

            <!-- Section -->
              <section>
                <header class="major">
                  <h2>Bikes</h2>
                </header>
                <div class="posts">
                  <article v-bind:key="bike.id" v-for="bike in bikes" v-on:click="$router.push(`/bikes/${bike.id}`)">
                    <a href="#" class="image"><img v-bind:src="bike.photos[0].image_url" alt="" /></a>
                    <h3>${{ bike.price + "0"}}</h3>
                  </article>
                </div>
              </section>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      bikes: []
    };
  },
  created: function() {
    console.log('in the created');
    axios.get("/api/bikes").then(response => {
      console.log(response.data);
      this.bikes = response.data;
    });
  },
  methods: {}
};
</script>