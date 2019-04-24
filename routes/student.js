const fs = require('fs'); //Node.js file system module

module.exports = {
    addStudentPage: (req, res) => {
        res.render('add-student.ejs', {
            title: "Welcome to Simple CRUD Application | Add a New",
            message: ''
        });
    },
    addStudent: (req, res) => {
        if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        }
        let message = '';
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let number = req.body.number;
        let uploadedFile = req.files.image;
        let image_name = uploadedFile.name;
        let fileExtension = uploadedFile.mimetype.split('/')[1];
        image_name = number +'-'+last_name + '.' + fileExtension;

        // check the filetype before uploading it
        if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif') {
            // upload the file to the /public/assets/img directory
            uploadedFile.mv('public/images/'+image_name, (err ) => {
                if (err) {
                    return res.status(500).send(err);
                }
                // send the player's details to the database
                let query = "INSERT INTO students (first_name, last_name, number, image) VALUES ('" + first_name + "', '" + last_name + "', '" + number + "', '" + image_name + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            });
        } else {
            message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
            res.render('add-student.ejs', {
                message,
                title:"Welcome to Simple CRUD Application"
            });
        }
            
    },
    editStudentPage: (req, res) => {
        let studentId = req.params.id;
        let query = "SELECT * FROM students WHERE id = '" + studentId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-student.ejs', {
                title: "Edit Student",
                student: result[0],
                message: ''
            });
        });
    },
    editStudent: (req, res) => {
        let studentId = req.params.id;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let number = req.body.number;
        let query = "UPDATE students SET first_name = '" + first_name + "', last_name = '" + last_name + "', number = '" + number + "' WHERE id = '" + studentId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deleteStudent: (req, res) => {

        let studeId = req.params.id;
        let getImageQuery = 'SELECT *FROM students WHERE id = "' + studeId + '"';
        let deleteQuery = 'DELETE *FROM students WHERE id = "' + studeId + '"';

        db.query(getImageQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            let image = result[0].image;

            fs.unlink('./public/assets/img/'+image, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
                db.query(deleteQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            });
        });
    }

};