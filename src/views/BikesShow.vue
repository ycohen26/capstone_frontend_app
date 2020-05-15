<template>
  <div class="bikes-show">
    <img v-for="photo in bike.photos" v-bind:src="photo.image_url"/>
    <h1>${{ bike.price }}</h1>
      <div class="table-wrapper">
        <table>
          <!-- <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead> -->
          <tbody>
            <tr>
              <td>Brand</td>
              <td>{{ bike.brand }}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{{ bike.model }}</td>
            </tr>
            <tr>
              <td>Size</td>
              <td> {{ bike.size }}</td>
            </tr>
            <tr>
              <td>Speeds</td>
              <td>{{ bike.speeds }}</td>
            </tr>
            <tr>
              <td>Plates</td>
              <td>{{ bike.plates }}</td>
            </tr>
            <tr>
              <td>Group</td>
              <td>{{ bike.group }}</td>
            </tr>
            <tr>
              <td>Frame Material</td>
              <td>{{ bike.frame_material }}</td>
            </tr>
            <tr>
              <td>Fork Material</td>
              <td>{{ bike.fork_material }}</td>
            </tr>
            <tr>
              <td>Year of Purchase</td>
              <td>{{ bike.year_of_purchase }}</td>
            </tr>
            <tr>
              <td>Wheels</td>
              <td>{{ bike.wheels }}</td>
            </tr>
            <tr>
              <td>Aestetic Condition</td>
              <td>{{ bike.aestetic_condition }}</td>
            </tr>
            <tr>
              <td>Mechanical Condition</td>
              <td>{{ bike.mechanical_condition }}</td>
            </tr>
            <tr>
              <td>Has Pedals?</td>
              <td v-if="bike.has_pedals == 1">Yes</td>
              <td v-else>No</td>
            </tr>
            <tr>
              <td>Original Receipt?</td>
              <td v-if="bike.has_pedals == 1">Yes</td>
              <td v-else>No</td>
            </tr>
            <tr>
              <td>I'm a Shop?</td>
              <td v-if="bike.has_pedals == 1">Yes</td>
              <td v-else>No</td>
            </tr>
            <tr>
              <td>Negotiable Price?</td>
              <td v-if="bike.has_pedals == 1">Yes</td>
              <td v-else>No</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    <a v-if="bike.seller_id === getUserId()" v-bind:href="`/bikes/${bike.id}/edit`">Edit this bike</a>
    <br></br>
    <!-- <p>comments: {{ bike.comment }}</p> -->
    <h3>Comments</h3>
      <hr />
      <h4>Joe B Says:</h4>
      <p>Amazing bike!  Horrible price though!</p>
      <hr />
      <h4>MJ Thegoat Says:</h4>
      <p>Wow! If I needed a bike like this I'd scoop it up right now.  Beutiful condition.  Amazing price.  If you need a triathlon bike, this should be it!!!
      </p>
      <hr />

    <br></br>
    <h3>Leave a Comment</h3>

    <form method="post" action="#">
    <div class="row gtr-uniform">
      <div class="col-12">
        <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
      </div>
      <!-- Break -->
      <div class="col-12">
        <ul class="actions">
          <li><input type="submit" value="Post" class="primary" /></li>
          <li><input type="reset" value="Reset" /></li>
        </ul>
      </div>
    </div>
</form>


    


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
  methods: {
    getUserId: function() {
      console.log(localStorage.getItem("user_id"));
      return parseInt(localStorage.getItem("user_id"));
    }
  }
};
</script>