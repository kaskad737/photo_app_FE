<template>
  <div class="container">
    <router-link v-if="isAuthenticated" to="/list-images" class="button"><strong>← Back</strong></router-link>

    <div v-for="(image, index) in images" :key="index" class="image-container">
      <h1 class="title">Download your photo</h1>
      <h2 class="title is-4">Image{{ index + 1 }}: </h2>
      <img :src="image.url" alt="Downloadable" class="center-image" />
      <button class="download-button" @click="downloadImage(image.url, image.name)">Download</button>
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
        images: [],
      };
    },
    async created() {
      await this.getImageId();
      await this.fetchImage();
    },
    methods: {
      async getImageId() {
        this.imageId = this.$route.params.id;
      },
      async fetchImage() {
        try {
          const response = await axios.get(`image/photo/${this.imageId}`);
          const photo = response.data.photo;
          const photoInFrame = response.data.photo_in_frame;
          const photoInFrameWithQrCode = response.data.photo_in_frame_with_qr_code;

          // Преобразуем данные для упрощенной работы
          this.images = [
            { url: photo, name: photo.name },
            { url: photoInFrame, name: photoInFrame.name },
            { url: photoInFrameWithQrCode, name: photoInFrameWithQrCode.name }
          ];
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      },
      async downloadImage(url, name) {
        try {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error('Failed to download image');
          }

          const blob = await response.blob();
          const objectUrl = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = objectUrl;
          link.download = name;
          link.click();
          window.URL.revokeObjectURL(objectUrl);
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
