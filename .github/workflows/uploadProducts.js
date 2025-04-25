const fs = require('fs');
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const products = JSON.parse(fs.readFileSync('products.json', 'utf8'));

async function uploadProducts() {
  const batch = db.batch();
  const productsRef = db.collection('products');

  products.forEach((product) => {
    const docRef = productsRef.doc();
    batch.set(docRef, product);
  });

  await batch.commit();
  console.log('Products uploaded successfully!');
}

uploadProducts().catch(console.error);