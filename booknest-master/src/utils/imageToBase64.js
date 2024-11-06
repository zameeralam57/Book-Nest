/**
 * Converts an image file to a Base64 string.
 * @param {File} file - The image file to be converted.
 * @returns {Promise<string>} - A promise that resolves to the Base64 string of the image.
 */
export const imageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};