export const validateProduct = (data) => {
    let errMsg = '';
  
    if (data.productName === '') {
      errMsg += 'Product name is required. <br/>';
    }
  
    if (data.category === '') {
      errMsg += 'Category is required. <br/>';
    }
  
    if (data.price === '') {
      errMsg += 'Price is required. <br/>';
    } else if (data.price <= 1000 || data.price > 10000000) {
      errMsg += 'Price must be between 1,000 and 10,000,000. <br/>';
    }
  
    if (data.description === '') {
      errMsg += 'Description is required. <br/>';
    }
  
    if (data.image[0] === '' || data.image[1] === '') {
        errMsg += 'At least 2 images are required. <br/>';
    }
  
    return errMsg;
  };