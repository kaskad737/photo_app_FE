<template>
  <div class="container">

    <router-link to="/"
      class="button"><strong>← Back</strong>
    </router-link>

    <h2 class="title is-flex is-justify-content-center">Upload the frame below</h2>
    <div class="file-upload-wrapper is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <label for="restaurants">
        Select a restaurant:
      </label>
      <div class="select is-medium">
        <select v-model="selectedRestaurantId">
          <option v-for="restaurant in restaurants" :key="restaurant.id" :value="restaurant.id">
            {{ restaurant.name }}
          </option>
        </select>
      </div>

      <div v-if="errorMessage" class="notification is-danger">
          {{ errorMessage }}
      </div>

      <div  v-if="selectedRestaurantId" class="file-upload-container">
        <div class="file has-name is-boxed">
          <label class="file-label">
            <input class="file-input" type="file" @change="handleFileChange" accept="image/*">
            <span class="file-cta">
              <OhVueIcon class="icon" name="md-cloudupload-outlined" scale="1.5" animation="float" />
              <span class="file-label">
                Select a file...
              </span>
            </span>
            <span class="file-name" v-if="selectedFileName">{{ selectedFileName }}</span>
          </label>
        </div>

        <div class="buttons is-flex is-justify-content-center">
          <button class="button is-primary" @click="uploadFile" :disabled="!(selectedFile && selectedRestaurantId)">Upload</button>
        </div>

        <div v-if="uploadedImageUrl" class="image-preview">
          <p class="has-text-centered">Preview the uploaded image:</p>
          <figure class="image is-128x128 is-flex is-justify-content-center">
            <img :src="uploadedImageUrl" alt="Uploaded Image">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
  import axios from 'axios';
  import { OhVueIcon, addIcons } from "oh-vue-icons";
  import { MdClouduploadOutlined } from "oh-vue-icons/icons";

  addIcons(MdClouduploadOutlined)
    
    export default {
    name: 'FrameUpload',
    components: {
      OhVueIcon,
    },
      data() {
        return {
          selectedFile: null,
          selectedFileName: '',
          uploadedImageUrl: '',
          restaurants: [],
          selectedRestaurantId: null,
          errorMessage: '',
        };
      },
      mounted() {
        this.fetchRestaurants();
      },
      methods: {
        handleFileChange(event) {
          const file = event.target.files[0];
          if (file) {
            this.selectedFile = file;
            this.selectedFileName = file.name;
            this.uploadedImageUrl = URL.createObjectURL(file);
          }
        },

        async fetchRestaurants() {
          try {
            const response = await axios.get('workday/restaurants/');
            this.restaurants = response.data.results;
          } catch (error) {
            console.error('Error fetching restaurants:', error);
          }
        },

        async uploadFile() {
          if (!this.selectedFile) return;
    
          const formData = new FormData();
          formData.append('file', this.selectedFile);
          formData.append('restaurant', this.selectedRestaurantId);
          
          console.log(axios.defaults.headers.common)
          try {
            const response = await axios.post('image/upload_frame/', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'accept': '*/*',
              },
            });
    
            console.log('The file has been successfully uploaded:', response.data);
    
            this.selectedFile = null;
            this.selectedFileName = '';
            this.selectedRestaurantId = null;
          } catch (error) {
            console.error('Error when uploading a file:', error);

            if (error.response && error.response.data && error.response.data.message) {
              this.errorMessage = error.response.data.message;
            } else {
              this.errorMessage = 'An unknown error occurred. Please try again.';
            } 

            this.selectedFile = null;
            this.selectedFileName = '';
            this.uploadedImageUrl = '';
            this.selectedRestaurantId = null;
          }
        },
      },
    };
</script>
    
<style scoped>
  .file-upload-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-preview {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .file.is-boxed.has-name .file-cta {
    border-radius: 10px;
  }

  .image.is-128x128 {
    height: 100%;
    width: 500px;
  }
</style>
    