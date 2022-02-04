const mongoose = require('mongoose');

connectDB()
  .then(() => {
    console.log('Successfully connect to DB');
  })
  .catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect('mongodb://localhost:27017/mernProject', {
    useNewUrlParser: true,
  });
}
