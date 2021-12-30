const mongoose = require("mongoose");
const Blog = require("./models/blog");
const moment = require("moment");
mongoose
  .connect("mongodb://localhost:27017/blogApp")
  .then(() => {
    console.log("MongoDb Connection Established");
  })
  .catch((err) => {
    console.log("oh uh !! something went wrong");
    console.log(err);
  });

const prefilledData = [
  {
    title: "Blog title 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec commodo dolor. Etiam ultricies sollicitudin purus a aliquam. Nam maximus, augue id suscipit eleifend, lectus urna eleifend dui, id aliquet felis urna sed urna. Suspendisse potenti. Praesent pulvinar lacus risus, nec efficitur lacus auctor dapibus. Curabitur sodales magna justo, in malesuada eros placerat sit amet. Proin at quam nec urna blandit bibendum. In quis libero vitae libero ultricies fermentum vel quis mauris. Cras ultrices dictum gravida. In molestie lacinia scelerisque. Morbi risus lorem, tempus a aliquam eu, faucibus at metus. Ut molestie elit eu erat ultrices volutpat. Vivamus rutrum, dui id accumsan porta, neque quam suscipit tortor, sed molestie neque nunc nec ligula.",
  },
  {
    title: "Blog Title 2",
    content:
      "Vivamus lectus sapien, vestibulum lacinia imperdiet nec, sodales vel purus. Suspendisse posuere congue volutpat. Etiam eget semper dolor. Donec et augue in libero eleifend condimentum non quis nibh. Quisque auctor vulputate pulvinar. In hac habitasse platea dictumst. In elementum leo non lobortis imperdiet. Phasellus tristique pretium est, vel tristique velit. Sed hendrerit lectus a tortor dictum, eget vehicula magna bibendum. Phasellus venenatis pharetra turpis, ac rhoncus arcu hendrerit sed. Maecenas a scelerisque lectus. Fusce a nibh ut nunc tristique volutpat sit amet ut turpis. Aenean id ornare nisl, a fermentum erat. Pellentesque eget augue nunc. Praesent faucibus metus tincidunt convallis tincidunt. Vivamus aliquam, magna nec sodales efficitur, leo dui mattis ex, et dictum lacus erat et risus.",
  },
];

Blog.insertMany(prefilledData)
  .then((b) => console.log(b))
  .catch((err) => console.log(err));
