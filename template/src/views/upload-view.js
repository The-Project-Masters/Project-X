import { toSingleGifView } from './gif-view.js';
export const toUploadView = (upload) => {
  return `
  <div id="gif-upload-form" class="container">
  <h5 class="page-section-heading text-center text-uppercase text-secondary mb-5">Upload your GIF</h5>
  <form id="upload-form"  >
  <input type="file" name="file" class="fileUpld">
  <button type="submit" id="submit-form-btn" class="uploadBtn btn btn-primary">Submit</button> 
  <div class="loader"></div>
    </form>
  </div>

    <section class="trendingHome">
    <div class="container">
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">My Uploads</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <div class="row justify-content-left">
        ${(upload.data ? upload.data.map(toSingleGifView).join('') : upload)}
      </div>

      <button class='btn btn-primary btn-lg clearUploads mt-5'>Clear uploads</button>
    </div>
  </section>
`;
};