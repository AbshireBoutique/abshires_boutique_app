const fs = require('fs');
const firebase = require('firebase-admin');

// Initialize Firebase with your Firebase config
firebase.initializeApp({
  credential: firebase.credential.cert(require('./firebase-service-account.json')), // Path to Firebase service account JSON
  databaseURL: 'https://your-firebase-project.firebaseio.com',
});

const db = firebase.firestore();
const products = JSON.parse(fs.readFileSync('products.json', 'utf8'));

// Function to upload products
async function uploadProducts() {
  for (const product of products) {
    await db.collection('products').add({
      name: product.name,
      description: product.description,
      price: product.price,
      image_url: product.image_url,
    });
  }
  console.log('Products uploaded successfully!');
}

uploadProducts().catch(console.error);
