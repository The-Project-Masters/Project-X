let uploaded = JSON.parse(localStorage.getItem('upload')) || [];

/**
 * Add a GIF to the uploaded GIFs list.
 *
 * @param {string} gifId - The ID of the GIF to be added.
 */
export const addUploaded = (gifId) => {
  if (uploaded.find(id => id === gifId)) {
    // GIF has already been added to uploaded
    return;
  }
  uploaded.push(gifId);
  localStorage.setItem('upload', JSON.stringify(uploaded));
};

/**
 * Remove a GIF from the uploaded GIFs list.
 *
 * @param {string} gifId - The ID of the GIF to be removed.
 */
export const removeUploaded = (gifId) => {
  uploaded = uploaded.filter(id => id !== gifId);
  localStorage.setItem('upload', JSON.stringify(uploaded));
};

/**
 * Get a list of all uploaded GIFs.
 *
 * @returns {string[]} An array of uploaded GIF IDs.
 */
export const getUploaded = () => {
  console.log(uploaded);
  return [...uploaded];
}

/**
 * Clear the list of uploaded GIFs.
 */
export const clearUploaded = () => {
  uploaded = [];
  localStorage.setItem('upload', JSON.stringify(uploaded));
};