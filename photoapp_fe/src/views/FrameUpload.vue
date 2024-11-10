<template>
    <div class="file-upload-wrapper is-flex is-justify-content-center is-align-items-center">
      <div class="file-upload-container">
        <div class="file has-name is-boxed">
          <label class="file-label">
            <input class="file-input" type="file" @change="handleFileChange" accept="image/*">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Select a file...
              </span>
            </span>
            <span class="file-name" v-if="selectedFileName">{{ selectedFileName }}</span>
          </label>
        </div>
    
        <div class="buttons is-flex is-justify-content-center">
          <button class="button is-primary" @click="uploadFile" :disabled="!selectedFile">Upload</button>
        </div>
    
        <div v-if="uploadedImageUrl" class="image-preview">
          <p class="has-text-centered">Preview the uploaded image:</p>
          <figure class="image is-128x128 is-flex is-justify-content-center">
            <img :src="uploadedImageUrl" alt="Uploaded Image">
          </figure>
        </div>
      </div>
    </div>
  </template>
    
  <script>
    import axios from 'axios';
    
    export default {
      name: 'FrameUpload',
      data() {
        return {
          selectedFile: null,
          selectedFileName: '',
          uploadedImageUrl: ''
        };
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
        async uploadFile() {
          if (!this.selectedFile) return;
    
          const formData = new FormData();
          formData.append('file', this.selectedFile);
          
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
    .file-upload-container {
      margin-top: 20px;
    }
    .image-preview {
      margin-top: 20px;
    }
  </style>
    