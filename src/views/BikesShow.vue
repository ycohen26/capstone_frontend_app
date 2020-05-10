<template>
  <div class="bikes-show">
    <img v-for="photo in bike.photos" v-bind:src="photo.image_url"/>
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
    <p>price: {{ bike.price }}</p>
    <p>favorites: {{ bike.favorites }}</p>
    <p>comments: {{ bike.comment }}</p>

    <a v-if="bike.seller_id === $parent.getUserId()" v-bind:href="`/bikes/${bike.id}/edit`">Edit this bike</a>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      bike: {}
    };
  },
  created: function() {
    console.log(this.$route.params.id)
    axios.get('/api/bikes/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.bike = response.data;
    })
  },
  methods: {}
};
</script>