var mongoose = require('mongoose')


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://minhson123:minhson123@cluster0.v0phx.mongodb.net/test";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;
const FacultySchema = new Schema({ 
    facultyname : String,
    facultyID: String,
    deadline:String,
    deadline2:String,
  
},{
    collection : 'faculty',
    timestamps : true
});

var FacultyModel = mongoose.model('faculty', FacultySchema)
module.exports = FacultyModel