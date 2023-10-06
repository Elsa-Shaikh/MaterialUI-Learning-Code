// const getCroppedImg = async (imageSrc, crop) => {
//   const image = new Image();
//   image.src = imageSrc;

//   const canvas = document.createElement('canvas');
//   const ctx = canvas.getContext('2d');

//   if (!ctx) {
//     return null
//   }

//   canvas.width = crop.width;
//   canvas.height = crop.height;

//   ctx.drawImage(
//     image,
//     crop.x,
//     crop.y,
//     crop.width,
//     crop.height,
//     0,
//     0,
//     crop.width,
//     crop.height
//   );

//   return new Promise((resolve, reject) => {
//     canvas.toBlob(blob => {
//       if (!blob) {
//         console.error('Canvas is empty');
//         reject(new Error('Canvas is empty'));
//         return;
//       }

//       const reader = new FileReader();
//       reader.onload = function (e) {
//         const dataUrl = e.target.result;
//         console.log('dataUrl:', dataUrl);
//         resolve(dataUrl);
//       };

//       reader.readAsDataURL(blob);
//     }, 'image/jpeg'); // Change to 'image/png' if needed
//   });
// };

// export default getCroppedImg;

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') 
    image.src = url
  })

  const getCroppedImg = async (imageSrc,pixelCrop) => {

  const image = await createImage(imageSrc)
  
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return null
  }

  
  const croppedCanvas = document.createElement('canvas')

  const croppedCtx = croppedCanvas.getContext('2d')

  if (!croppedCtx) {
    return null
  }

  // Set the size of the cropped canvas
  croppedCanvas.width = pixelCrop.width
  croppedCanvas.height = pixelCrop.height

  // Draw the cropped image onto the new canvas
  croppedCtx.drawImage(
    // canvas,
   image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  // As Base64 string
  // return croppedCanvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    croppedCanvas.toBlob((file) => {
      resolve(URL.createObjectURL(file))
    }, 'image/jpeg')
  })
}

export default getCroppedImg;



