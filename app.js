
const ejs = require('ejs'); //Embedded JavaScript templating.
const express = require('express'); //framework for Node.js
const fileUpload = require('express-fileupload'); // Simple express middleware for uploading files.
const bodyParser = require('body-parser'); // Node.js body parsing middleware.
const mysql = require('mysql'); // Open-source relational database management system.
const path = require('path'); // Node.js Path Module.
const app = express();

const {getHomePage} = require('./routes/index');
const {addStudentPage, addStudent, deleteStudent, editStudent, editStudentPage} = require('./routes/student');

const port = 5000;

// Create connection to database
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_crud'
});

// Connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// Configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// Routes for the app
app.get('/', getHomePage);
app.get('/add', addStudentPage);
app.get('/edit/:id', editStudentPage);

app.post('/delete/:id', deleteStudent);
app.post('/add', addStudent);
app.post('/edit/:id', editStudent);

// Set the app to listen on the port
app.listen(port, () => {
    console.log('Server running on port:'+port);
});
