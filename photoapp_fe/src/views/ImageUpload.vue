<template>
  <h2 class="title is-flex is-justify-content-center">Upload your image below</h2>
  <div class="file-upload-wrapper is-flex is-justify-content-center is-align-items-center">
    <div class="file-upload-container">
      <!-- Файл для загрузки -->


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

      <!-- Выбор рамки -->
      <div v-if="frames.length" class="frame-selection">
        <p>Select a frame:</p>
        <div class="control is-flex is-flex-wrap-wrap">
          <label v-for="frame in frames" :key="frame.id" class="radio frame-radio">
            <input type="radio" :value="frame.id" v-model="selectedFrameId">
            <figure class="image is-64x64">
              <img :src="frame.frame" :alt="frame.id">
            </figure>
          </label>
        </div>
      </div>

      <!-- Кнопка загрузки -->
      <div class="buttons is-flex is-justify-content-center">
        <button class="button is-primary" @click="uploadFile"
          :disabled="!selectedFile || !selectedFrameId">Upload</button>
      </div>

      <!-- Предпросмотр изображения и кнопка для скачивания -->
      <div v-if="uploadedImageUrl" class="image-preview">
        <p class="has-text-centered">Preview the uploaded image:</p>
        <figure class="image is-128x128 is-flex is-justify-content-center">
          <img :src="uploadedImageUrl" alt="Uploaded Image">
        </figure>
        <div class="has-text-centered" style="margin-top: 10px;">
          <a :href="uploadedImageUrl" download="processed_image.png" class="button is-link">Download Image</a>
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
  name: 'ImageUpload',
  components: {
    OhVueIcon,
  },
    data() {
      return {
        selectedFile: null,
        selectedFileName: '',
        uploadedImageUrl: '',
        frames: [],  // Список рамок
        selectedFrameId: null,  // Выбранная рамка
      };
  },
  mounted() {
      this.fetchFrames();  // Получаем рамки при монтировании компонента
    },
    methods: {
      // Получение рамок с сервера
      async fetchFrames() {
        try {
          const response = await axios.get('http://localhost:8000/image/list_frames/');
          this.frames = response.data.results;  // Извлекаем массив результатов из "results"
        } catch (error) {
          console.error('Error fetching frames:', error);
        }
      },
      // Обработка выбора файла
      handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.selectedFile = file;
          this.selectedFileName = file.name;
          this.uploadedImageUrl = URL.createObjectURL(file);
        }
      },
      // Загрузка файла
      async uploadFile() {
        if (!this.selectedFile || !this.selectedFrameId) return;

        const formData = new FormData();
        formData.append('file', this.selectedFile);
        formData.append('frame_id', this.selectedFrameId);  // Добавляем выбранную рамку

        try {
          const response = await axios.post('http://localhost:8000/image/upload/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'accept': '*/*',
            },
            responseType: 'blob'
          });

          console.log('The file has been successfully uploaded:', response.data);

          this.uploadedImageUrl = URL.createObjectURL(response.data);

          // Очищаем форму
          this.selectedFile = null;
          this.selectedFileName = '';
          this.selectedFrameId = null;
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
  .frame-selection {
    margin-top: 20px;
  }
  .control {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Увеличиваем расстояние между рамками */
  }
  .frame-radio {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .frame-radio figure {
    width: 128px;  /* Увеличиваем размер контейнера */
    height: 128px;
  }
  .frame-radio img {
    max-width: 100%; /* Задаём максимальную ширину изображения, чтобы оно полностью вписывалось */
    max-height: 100%; /* Ограничиваем максимальную высоту */
    border: 2px solid #ccc;
    padding: 5px;
    border-radius: 8px;
    cursor: pointer;
    transition: border-color 0.3s ease;
  }
  .frame-radio input[type="radio"]:checked + figure img {
    border-color: #3273dc;
  }
  .file.is-boxed.has-name .file-cta{
    border-radius: 10px;
  }
  .image.is-128x128 {
      height: 100%;
      width: 500px;
  }

</style>


  