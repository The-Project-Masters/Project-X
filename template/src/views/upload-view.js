import { toSingleGifView } from './gif-view.js';
export const toUploadView = (upload) => {
  return `
    <form id="upload-form"  >
      <input type="file" name="file" class="fileUpld">
      <button type="submit" id="submit-form-btn" class="uploadBtn">Submit</button> 
      <div class="loader"></div>
    </form>

    <section class="trendingHome">
    <h1>Uploaded Gifs</h1> <button class='clearUploads'>Clear</button>
    <div class="content">
      <ul class = "content-gifs">
        <li>
          ${(upload.data ? upload.data.map(toSingleGifView).join('</li><li>') : upload)}
        </li>
      </ul>
    </div>
  </section>
`;
};