const mongoose = require('mongoose');

try {
  mongoose.connect(
    `mongodb+srv://kaybee:kekekaybee@auth-blog.bmgfc.mongodb.net/auth-blog?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  );
  console.log('Connected to MongoDB');
} catch (error) {
  console.log(`Error: ${error}`);
}
