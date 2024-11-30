<template>
    <div class="container">
    
    <router-link to="/"
      class="button"><strong>← Back</strong>
    </router-link>

    <div class="column is-4 is-offset-4"></div>
        <h1 class="title">Image Gallery</h1>
        <div class="image-grid">
            <div v-for="(image, index) in images" :key="index" class="image-item">
              <router-link :to="{ name: 'ImageDownload', params: { id: image.id } }">
                <img :src="image.photo" :alt="`Image ${index + 1}`" class="gallery-image" />
              </router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
  import axios from 'axios';

  export default {
    name: "ListPhotos",
    data() {
      return {
        images: [],
      };
    },
    created() {
        this.fetchImages();
    },
    methods: {
      async fetchImages() {
        try {
          const response = await axios.get("image/list_photos/");
          this.images = response.data.results;
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      },
    },
  };
</script>
  
<style scoped>
  .gallery-container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  
  .gallery-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
  }
  
  .image-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .gallery-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  
  .download-link {
    display: inline-block;
    padding: 8px 12px;
    font-size: 14px;
    color: #fff;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .download-link:hover {
    background-color: #0056b3;
  }
</style>
  