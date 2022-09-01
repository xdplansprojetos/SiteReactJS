// src/lib/commerce.js

import Commerce from '@chec/commerce.js';

//const checAPIKey = process.env.REACT_APP_CHEC_PUBLIC_KEY;
const checAPIKey = 'pk_45772b7f168e8dec2d817d8a71b9e3729eb64c1b53e59'
const devEnvironment = process.env.NODE_ENV === 'development';

const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-09-29',
    },
  },
};

if (devEnvironment && !checAPIKey) {
  throw Error('Your public API key must be provided as an environment variable named NEXT_PUBLIC_CHEC_PUBLIC_KEY. Obtain your Chec public key by logging into your Chec account and navigate to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami');
}

export default new Commerce(
  checAPIKey,
  devEnvironment,
  commerceConfig,
);