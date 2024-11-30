<template>
  <div class="container">

    <router-link v-if="isAuthenticated" to="/list-images"
      class="button"><strong>← Back</strong>
    </router-link>

    <div class="image-container">
      <h1 class="title">Download your photo</h1>
      <h2 class="title is-4">Image: </h2>
      <img :src="imageUrl" alt="Downloadable" class="center-image" />
      <button class="download-button" @click="downloadImage">Download</button>
    </div>
    <div class="image-container">
      <h2 class="title is-4">Image in frame: </h2>
      <img :src="imageInFrameUrl" alt="Downloadable" class="center-image" />
      <button class="download-button" @click="downloadImageInFrame">Download</button>
    </div>
    <div class="image-container">
      <h2 class="title is-4">Image in frame with QR-Code: </h2>
      <img :src="imageInFrameWithQrCodeUrl" alt="Downloadable" class="center-image" />
      <button class="download-button" @click="downloadImageInWithQrCodeFrame">Download</button>
    </div>
  </div>
</template>
  
<script>
  import { mapState } from 'vuex';
  import axios from 'axios';

  export default {
    name: "ImageDownload",
    computed: {
        ...mapState(['isAuthenticated']),
    },
    data() {
      return {
        imageId: '',
        imageUrl: '', 
        imageInFrameUrl: '', 
        imageName: '', 
        imageInFrameName: '', 
        imageInFrameWithQrCodeUrl: '',
        imageInFrameWithQrCodeName: '',

      };
    },
    created() {
      this.getImageId()
      this.fetchImage()
      
    },
    methods: {
      async fetchImage() {
        try {
          const response = await axios.get(`image/photo/${this.imageId}`);
          this.imageUrl = response.data.photo;
          this.imageName = response.data.photo.name;
          this.imageInFrameUrl = response.data.photo_in_frame;
          this.imageInFrameName = response.data.photo_in_frame.name;
          this.imageInFrameWithQrCodeUrl = response.data.photo_in_frame_with_qr_code;
          this.imageInFrameWithQrCodeName = response.data.photo_in_frame_with_qr_code.name;
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      },
      async getImageId() {
        this.imageId = this.$route.params.id;
      },
      async downloadImage() {
        try {
          const response = await fetch(this.imageUrl);
          
          if (!response.ok) {
            throw new Error('Failed to download image');
          }

          const blob = await response.blob();

          const url = window.URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.href = url;
          a.download = this.imageName;
          a.click();

          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error downloading image:', error);
        }
      },
      async downloadImageInFrame() {
        try {
          const response = await fetch(this.imageInFrameUrl);
          
          if (!response.ok) {
            throw new Error('Failed to download image');
          }

          const blob = await response.blob();

          const url = window.URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.href = url;
          a.download = this.imageInFrameName;
          a.click();

          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error downloading image:', error);
        }
      },
      async downloadImageInWithQrCodeFrame() {
        try {
          const response = await fetch(this.imageInFrameWithQrCodeUrl);
          
          if (!response.ok) {
            throw new Error('Failed to download image');
          }

          const blob = await response.blob();

          const url = window.URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.href = url;
          a.download = this.imageInFrameWithQrCodeName;
          a.click();

          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('Error downloading image:', error);
        }
      },
    },
  };
</script>
  
<style scoped>
  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
  }
  
  .center-image {
    max-width: 90%;
    height: auto;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  .download-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .download-button:hover {
    background-color: #0056b3;
  }
</style>
  