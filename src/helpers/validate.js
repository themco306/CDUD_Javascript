export const validateProduct = (data) => {
    let errMsg = '';
  
    if (data.productName === '') {
      errMsg += 'Product name is required. ';
    }
  
    if (data.category === '') {
      errMsg += 'Category is required. ';
    }
  
    if (data.price === '') {
      errMsg += 'Price is required. ';
    } else if (data.price < 1000 || data.price > 10000000) {
      errMsg += 'Price must be between 1,000 and 10,000,000. ';
    }
  
    if (data.description === '') {
      errMsg += 'Description is required. ';
    }
  
    if (data.image[0] === '' || data.image[1] === '') {
        errMsg += 'At least 2 images are required. ';
    }
  
    return errMsg;
  };