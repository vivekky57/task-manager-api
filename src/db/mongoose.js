const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  //   useCreateIndex: true,
});

// const me = new User({
//   name: "Vivek",
//   email: "MYEMAIL@MEAD.IO",
//   age: 6,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// const task = new Task({
//   description: "Learn Mongoose Library",
//   completed: false,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
