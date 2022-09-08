/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from '@keystone-6/core';

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema';

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from './auth';
require('dotenv').config();
export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      provider: 'postgresql',
      url: process.env.DB,
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },

    lists,
    session,
    storage: {
      // The key here will be what is referenced in the image field
      my_local_images: {
        // Images that use this store will be stored on the local machine
        kind: 'local',
        // This store is used for the image field type
        type: 'image',
        // The URL that is returned in the Keystone GraphQL API
        generateUrl: path => `${baseUrl}/images${path}`,
        // The route that will be created in Keystone's backend to serve the images
        serverRoute: {
          path: '/images',
        },
        storagePath: 'public/images',
      },
      // The key here will be what is referenced in the file field
      my_s3_files: {
        // Files that use this store will be stored in an s3 bucket
        kind: 's3',
        // This store is used for the file field type
        type: 'image',
        // The S3 bucket name pulled from the S3_BUCKET_NAME environment variable above
        bucketName : process.env.BUCET_NAME,
        // The S3 bucket region pulled from the S3_REGION environment variable above
        region : process.env.AWS_REGION,
        // The S3 Access Key ID pulled from the S3_ACCESS_KEY_ID environment variable above
        accessKeyId : process.env.S3_ACCESS_KEY_ID,
        // The S3 Secret pulled from the S3_SECRET_ACCESS_KEY environment variable above
        secretAccessKey : process.env.S3_SECRET_ACCESS_KEY,
        // The S3 links will be signed so they remain private
        signed: { expiry: 5000 },
      },
    },
    server: {
      cors: { origin: ['http://localhost:3001'], credentials: true },
    },
    graphql: {
      debug: process.env.NODE_ENV !== 'production',
      queryLimits: { maxTotalResults: 100 },
      path: '/api/graphql',
      apolloConfig: {
        debug: true,
        /* ... */
      },
    },
  })
);
