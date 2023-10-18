import { HOME, API_KEY, API_UPLOAD } from '../common/constants.js';
import { addUploaded, clearUploaded } from '../data/uploaded.js';
import { q } from '../events/helpers.js';
import { loadPage } from '../events/navigation-events.js';

// eslint-disable-next-line consistent-return
export const uploadingGif = async () => {
  try {
    const form = q('#upload-form');
    const formData = new FormData(form);

    formData.append('api_key', API_KEY);

    const fileInput = formData.get('file');

    if (!fileInput || fileInput.name === '') {
      alert('There is no image selected');
      return;
    }

    q('.loader').style.visibility = 'visible';

    event.preventDefault();

    const response = await fetch(API_UPLOAD, {
      method: 'POST',
      body: formData,
    });
    
    const responseJSON = await response.json();
    const uploadId = responseJSON.data.id;
    addUploaded(uploadId);
    q('.loader').style.visibility = 'hidden';
    loadPage(HOME);
    
  } catch (error) {
    console.error('Error Message:', error);
  }
};


export const clearUploads = () => {
  clearUploaded();
};