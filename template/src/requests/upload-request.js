import { HOME, API_KEY, API_UPLOAD } from '../common/constants.js';
import { addUploaded, clearUploaded } from '../data/uploaded.js';
import { q } from '../events/helpers.js';
import { loadPage } from '../events/navigation-events.js';

// eslint-disable-next-line consistent-return

// Function to check if the URL is valid format.
function isGifUrl(url) {
    return (
        url.endsWith('.gif') ||
        url.endsWith('.mp4') ||
        url.endsWith('.mov') ||
        url.endsWith('.webm')
    );
}

/**
 * Uploads a GIF to the server and adds it to the user's uploaded GIFs if successful.
 * Handles file upload via the '#upload-form' element on the webpage.
 *
 * @returns {Promise} - A promise representing the outcome of the upload operation.
 */
export const uploadingGif = async () => {
    try {
        // Get the form and its data
        const form = q('#upload-form');
        const formData = new FormData(form);

        // Append the API key to the form data
        formData.append('api_key', API_KEY);

        // Get the file input
        const fileInput = formData.get('file');

        // Check if a file has been selected
        if (!fileInput || fileInput.name === '') {
            alert('There is no image selected');
            return;
        }

        if (!isGifUrl(fileInput.name)) {
            // Check if the selected file has a valid GIF format
            alert('Invalid GIF format');
            return;
        }

        // Show a loading indicator
        q('.loader').style.visibility = 'visible';

        // Prevent the default form submission
        event.preventDefault();

        // Send the form data to the server for upload
        const response = await fetch(API_UPLOAD, {
            method: 'POST',
            body: formData,
        });

        // Parse the response as JSON
        const responseJSON = await response.json();

        // Get the uploaded GIF's ID and add it to the user's uploaded GIFs
        const uploadId = responseJSON.data.id;
        addUploaded(uploadId);

        // Hide the loading indicator and load the home page
        q('.loader').style.visibility = 'hidden';
        loadPage(HOME);
    } catch (error) {
        console.error('Error Message:', error);
    }
};

/**
 * Clears the user's uploaded GIFs.
 */
export const clearUploads = () => {
    clearUploaded();
};
