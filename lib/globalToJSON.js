function globalToJSON(schema) {
  // we are changing the way the mongoose schema is working
  // mongoose automatically created an _id version
  schema.set('toJSON', {
    virtuals: true,
    // we are going to use a transform method as it gives us the object before it's been converted into json and the object after it's been converted into json
    // we just want to delete the _id and the __v to clean up our resource
    transform(obj, json) {
      delete json._id;
      delete json.__v;
    }
    // this not only cleans up our resource it also makes it less obvious that we're using mongoose so people can't hack our resources!
    // we are now going to make it a global plugin for every single schema on mongoose
    // we need to plug it into the server to make sure mongoose knows about this
  });
}

module.exports = globalToJSON;
