<template>
  <div>
    <!-- Page top section -->
    <section class="page-top-section set-bg" v-bind:style="{ 'background-image': 'url(img/page-top-bg.jpg)' }" data-setbg="img/page-top-bg.jpg">
      <div class="container text-white">
        <h2>Add Listing</h2>
      </div>
    </section>
    <!--  Page top end -->

    <!-- Breadcrumb -->
    <div class="site-breadcrumb">
      <div class="container">
        <router-link to="/"><i class="fa fa-home"></i>Home</router-link>
        <span><i class="fa fa-angle-right"></i>Add Listing</span>
      </div>
    </div>

    <section class="page-section">
      <form class="" enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="title-addon"><font-awesome-icon icon="align-justify" /></span>
                </div>
                <input v-model="listingData.title" type="text" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="title-addon">
              </div>
            </div>
            <div class="col-md-12">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="subtitle-addon"><font-awesome-icon icon="align-justify" /></span>
                </div>
                <input v-model="listingData.subtitle" type="text" class="form-control" placeholder="Sub Title" aria-label="Sub Title" aria-describedby="subtitle-addon">
              </div>
            </div>
            <div class="col-md-12">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="location-addon"><font-awesome-icon icon="map-marker-alt" /></span>
                </div>
                <input v-model="listingData.location" type="text" class="form-control" placeholder="Location" aria-label="Location" aria-describedby="location-addon">
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="area-addon"><font-awesome-icon icon="ruler-combined" /></span>
                </div>
                <input v-model="listingData.meta_data.area" type="text" class="form-control" placeholder="Area" aria-label="Area" aria-describedby="area-addon">
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="garage-addon"><font-awesome-icon icon="car" /></span>
                </div>
                <input v-model="listingData.meta_data.garage" type="text" class="form-control" placeholder="Garage" aria-label="Garage" aria-describedby="garage-addon">
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="bed-addon"><font-awesome-icon icon="bed" /></span>
                </div>
                <input v-model="listingData.meta_data.bedroom" type="text" class="form-control" placeholder="Bedroom" aria-label="Bedroom" aria-describedby="bed-addon">
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="bath-addon"><font-awesome-icon icon="bath" /></span>
                </div>
                <input v-model="listingData.meta_data.bathtoom" type="text" class="form-control" placeholder="Bathroom" aria-label="Bathroom" aria-describedby="bath-addon">
              </div>
            </div>
            <div class="col-md-12">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><font-awesome-icon icon="align-justify" /></span>
                </div>
                <textarea v-model="listingData.content" class="form-control" aria-label="Content"></textarea>
              </div>
            </div>
            <div class="col-md-12 mb-3">
              <div class="dropbox">
                <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                  accept="image/*" class="input-file">
                  <p v-if="isInitial">
                    Drag your file(s) here to begin<br> or click to browse
                  </p>
                  <p v-if="isSaving">
                    Uploading {{ fileCount }} files...
                  </p>
              </div>
            </div>
            <!-- <div class="col-md-12" id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
              <vue-upload-multiple-image class="mb-3"
              @upload-success="uploadImageSuccess"
              @before-remove="beforeRemove"
              @edit-image="editImage"
              @data-change="dataChange"
              @limit-exceeded="10"
              :data-images="images"
              :drag-text="'Drag Image'"
              :browse-text="'Browse Image'"
              :primary-text="'Set as Default'"
              :popup-text="'Default Image'"
              :drop-text="'Drag and Drop'"
              :max-image="10"
              :mark-is-primary-text="'Set Default Image'"
              ></vue-upload-multiple-image>
            </div> -->
            <div class="col-md-12">
              <input type="submit" class="btn btn-secondary btn-lg btn-block" value="Add listing" @click.prevent="addListing"/>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
import VueUploadMultipleImage from 'vue-upload-multiple-image'
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
export default {
  data() {
    return {
      listingData: {
        title: '',
        subtitle: '',
        location: '',
        meta_data: {},
        content: '',
        images: []
      },
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'post_images',
      formData: new FormData()
    }
  },
  components: {
    VueUploadMultipleImage
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    addListing(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;
      this.$store.dispatch('ADD_POST', this.listingData)
        .then((reponse) => {
          this.$store.dispatch('ADD_IMAGE', this.formData)
            .then((response) => {
              if (response) {
                this.currentStatus = STATUS_SUCCESS;
              }
              this.currentStatus = STATUS_INITIAL;
              this.uploadedFiles = [];
              this.uploadError = null;
            })
        })


    },
    filesChange(fieldName, fileList) {
      // handle file changes
      if (!fileList.length) return;

      // append the files to FormData
      Array
        .from(Array(fileList.length).keys())
        .map(x => {
          this.formData.append(fieldName, fileList[x], fileList[x].name);
        });
      // console.log(formData)
    }

  },
  mounted() {
   this.reset()
  }
}
</script>
<style>
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>
