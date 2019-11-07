<template>
<!-- feature section -->
<section class="feature-section spad">
  <div class="container">
    <div class="section-title text-center">
      <h3>Featured Listings</h3>
      <p>Browse houses and flats for sale and to rent in your area</p>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6" v-for="(post, index) in posts">
        <!-- feature -->
        <div class="feature-item" v-if="!isLoading">
          <div class="feature-pic set-bg" v-bind:style="{ 'background-image': 'url('+post.post_image+')' }" :data-setbg="post.post_image">
            <div class="sale-notic">{{ post.is_forsale === 1 ? 'FOR SALE' : 'FOR RENT'}}</div>
          </div>
          <div class="feature-text">
            <div class="text-center feature-title">
              <h5>{{ post.title }}</h5>
              <p><i class="fa fa-map-marker"></i> {{ post.location }}</p>
            </div>
            <div class="room-info-warp">
              <div class="room-info">
                <div class="rf-left">
                  <p><i class="fa fa-th-large"></i> {{ JSON.parse(post.meta_data).area }}</p>
                  <p><i class="fa fa-bed"></i> {{ JSON.parse(post.meta_data).bedrooms }}</p>
                </div>
                <div class="rf-right">
                  <p><i class="fa fa-car"></i> {{ JSON.parse(post.meta_data).garage }}</p>
                  <p><i class="fa fa-bath"></i> {{ JSON.parse(post.meta_data).bathrooms }}</p>
                </div>
              </div>
              <div class="room-info">
                <div class="rf-left">
                  <p><i class="fa fa-user"></i> {{ post.author }}</p>
                </div>
                <div class="rf-right">
                  <p><i class="fa fa-clock-o"></i>{{ post.createdAt | moment("from", "now") }}</p>
                </div>
              </div>
            </div>
            <a href="#" class="room-price">MORE DETAILS</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6" v-if="posts.length <= 0 && !isLoading">
        <div class="section-title text-center">
          <h4>No Results Found</h4>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- feature section end -->
</template>

<script>
export default {
  props: {
    posts: Array
  },
  data () {
    return {

    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  mounted () {
  }
}
</script>
