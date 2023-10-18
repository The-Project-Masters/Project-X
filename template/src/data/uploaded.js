let uploaded = JSON.parse(localStorage.getItem('upload')) || [];

export const addUploaded = (gifId) => {
  
  if (uploaded.find(id => id === gifId)) {
    // Gif has already been added to uploaded
    return;
  }
  uploaded.push(gifId);
  localStorage.setItem('upload', JSON.stringify(uploaded));
};

export const removeUploaded = (gifId) => {
  uploaded = uploaded.filter(id => id !== gifId);
  localStorage.setItem('upload', JSON.stringify(uploaded));
};

export const getUploaded = () => {
  console.log(uploaded);
  return [...uploaded];
}  

export const clearUploaded = () => {
  uploaded = [];
  localStorage.setItem('upload', JSON.stringify(uploaded));
};