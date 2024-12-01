<template>
  <h2 class="title">Register a new restaurant</h2>
  <div class="file-upload-wrapper is-flex is-justify-content-center is-align-items-center">
    <div class="file-upload-container">
      <label for="name" class="label">
        Restaurant name
        <input type="text" class="input" v-model="newRestaurant" required>
      </label>
      <form class="file has-name is-boxed">
        <label class="file-label">
          <input class="file-input" type="file" @change="handleFileChange" accept="image/*" required>
          <span class="file-cta">
            <OhVueIcon class="icon" name="md-cloudupload-outlined" scale="1.5" animation="float" />
            <span class="file-label">
              Select a file...
            </span>
          </span>
          <span class="file-name" v-if="selectedFileName">{{ selectedFileName }}</span>
        </label>
      </form>

      <div class="buttons is-flex is-justify-content-center">
        <button class="button is-primary" @click="addItem" :disabled="!selectedFile||!newRestaurant">Save</button>
      </div>

      <!-- <div v-if="uploadedImageUrl" class="image-preview">
        <p class="has-text-centered">Preview the uploaded image:</p>
        <figure class="image is-128x128 is-flex is-justify-content-center">
          <img :src="uploadedImageUrl" alt="Uploaded Image">
        </figure>
      </div> -->

    </div>
  </div>
  <div>
    <h2 class="title">A list of restaurants</h2>
    <ul>
      <li v-for="item, index in restaurants" class="list-item-container">
        <p class="item-title">{{item.name}}</p>
        <img :src="item.picture" >
        <button type="button" class="update-btn">
          update
        </button>
        <button type="button" @click="deleteItem(index)">
          <OhVueIcon name="md-close"/>
        </button>
      </li>
    </ul>
  </div>
</template>
    
  <script>
  import restaurants from '../assets/restaurants.json'
  import axios from 'axios';
  import { OhVueIcon, addIcons } from "oh-vue-icons";
  import { MdClouduploadOutlined, MdClose } from "oh-vue-icons/icons";


  addIcons(MdClouduploadOutlined, MdClose)
    
    export default {
    name: 'FrameUpload',
    components: {
      OhVueIcon,
    },
      data() {
        return {
          newRestaurant:'',
          selectedFile: null,
          selectedFileName: '',
          uploadedImageUrl: '',
          restaurants,
        };
      },
    methods: {
      deleteItem(index) { 
        this.restaurants.splice(index, 1)
      },
      addItem() {
        const formData = new FormData();
        const data = {
          name: this.newRestaurant,
          file: this.selectedFile,
        }
        formData.append('formData', data);
        const file = formData.get('formData')
        console.log(file)

      },
        handleFileChange(event) {
          const file = event.target.files[0];
          if (file) {
            this.selectedFile = file;
            this.selectedFileName = file.name;
            this.uploadedImageUrl = URL.createObjectURL(file);
          }
        },
        async uploadFile() {
          if (!this.selectedFile) return;
    
          const formData = new FormData();
          formData.append(this.selectedFile);
          
          console.log(axios.defaults.headers.common)
          try {
            const response = await axios.post('http://localhost:8000/image/upload_frame/', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'accept': '*/*',
              },
            });
    
            console.log('The file has been successfully uploaded:', response.data);
    
            this.selectedFile = null;
            this.selectedFileName = '';
          } catch (error) {
            console.error('Error when uploading a file:', error);
          }
        },
      },
    };
  </script>
    
  <style scoped>
  .file-upload-wrapper{
    margin-bottom: 40px;
  }

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

  /* .image.is-128x128 {
    height: 100%;
    width: 500px;
  } */

  .list-item-container{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 15px;
    border-bottom: 1px solid grey;
    padding: 10px;
  }

  .item-title{
    width: 150px;
    word-wrap: break-word;
  }
  .update-btn{
    background-color: #00d1b2;
    color: white;
    padding: 5px 10px;
    border-radius: 30px;
  }
  .update-btn:hover{
    background-color: #3273dc;
  }


</style>
    