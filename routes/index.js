module.exports = {
    getHomePage: (req, res) => {
        // Query to get all the Student from database
        let query = "SELECT * FROM students ORDER BY id ASC"; 
        // Execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index', {
                title: "Welcome to Simple CRUD Application",
                students: result
            });
        });
    },
};