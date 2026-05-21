// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//     res.send("Event Management Platform Running");
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// const express = require("express");
// const path = require("path");

// const app = express();

// app.use(express.static("public"));

// app.get("/", (req,res)=>{
//     res.sendFile(path.join(__dirname,"views","index.html"));
// });

// app.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });

// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");

// const app = express();

// app.use(express.static("public"));
// app.use(express.urlencoded({extended:true}));

// // Database connection
// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Richa",
//     database:"event_platform"
// });

// db.connect((err)=>{
//     if(err) throw err;
//     console.log("MySQL Connected");
// });

// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");

// const app = express();

// // Middleware
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));

// // Database connection
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Richa",
//     database: "event_platform"
// });

// db.connect((err) => {
//     if (err) throw err;
//     console.log("MySQL Connected");
// });

// // Homepage
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// // Show Create Event Form
// app.get("/create-event", (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "create-event.html"));
// });

// // Save Event in Database
// app.post("/create-event", (req, res) => {

//     const { title, description, date, location } = req.body;

//     const sql = "INSERT INTO events (title, description, date, location) VALUES (?, ?, ?, ?)";

//     db.query(sql, [title, description, date, location], (err, result) => {
//         if (err) throw err;

//         console.log("Event Added Successfully");
//         res.send("Event Created Successfully!");
//     });
// });


// // NEW ROUTE — Show Event List Page
// app.get("/event-list", (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });


// // NEW ROUTE — Get Events From Database
// app.get("/events", (req, res) => {

//     const sql = "SELECT * FROM events";

//     db.query(sql, (err, result) => {
//         if (err) throw err;

//         res.json(result);
//     });

// });


// // Start server
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");

// const app = express();
// const PORT = 3000;

// // ================= MIDDLEWARE =================

// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// // ================= DATABASE =================

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Richa",
//     database: "event_platform"
// });

// db.connect((err) => {
//     if (err) {
//         console.log("Database connection failed:", err);
//         return;
//     }
//     console.log("MySQL Connected Successfully");
// });


// // ================= ROUTES =================

// // Homepage
// app.get("/", (req, res) => {
//     console.log("Homepage opened");
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// // Create Event Page
// app.get("/create-events", (req, res) => {
//     console.log("Create Event Page opened");
//     res.sendFile(path.join(__dirname, "views", "create-events.html"));
// });

// // Event List Page
// app.get("/event-list", (req, res) => {
//     console.log("Event List Page opened");
//     res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });


// // ================= DATABASE ROUTES =================

// // Save Event
// app.post("/create-event", (req, res) => {

//     const { title, description, date, location } = req.body;

//     const sql = "INSERT INTO events (title, description, date, location) VALUES (?, ?, ?, ?)";

//     db.query(sql, [title, description, date, location], (err, result) => {

//         if (err) {
//             console.log("Insert error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         console.log("Event Added Successfully");

//         res.redirect("/event-list");

//     });

// });


// // Get All Events API
// app.get("/events", (req, res) => {

//     console.log("Fetching events...");

//     const sql = "SELECT * FROM events";

//     db.query(sql, (err, results) => {

//         if (err) {
//             console.log("Fetch error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         res.json(results);

//     });

// });


// // ================= DEBUG ROUTE =================

// app.get("/test", (req, res) => {
//     res.send("Server working perfectly");
// });


// // ================= SERVER =================

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");

// const app = express();
// const PORT = 3000;

// // ================= MIDDLEWARE =================

// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// // ================= DATABASE =================

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Richa",
//     database: "event_platform"
// });

// db.connect((err) => {
//     if (err) {
//         console.log("Database connection failed:", err);
//         return;
//     }
//     console.log("MySQL Connected Successfully");
// });


// // ================= ROUTES =================

// // Homepage
// app.get("/", (req, res) => {
//     console.log("Homepage opened");
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// // Create Event Page
// app.get("/create-event", (req, res) => {
//     console.log("Create Event Page opened");
//     res.sendFile(path.join(__dirname, "views", "create-event.html"));
// });

// // Event List Page
// app.get("/event-list", (req, res) => {
//     console.log("Event List Page opened");
//     res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });


// // ================= DATABASE ROUTES =================

// // Save Event
// app.post("/create-event", (req, res) => {

//     const { title, description, date, location } = req.body;

//     const sql = "INSERT INTO events (title, description, date, location) VALUES (?, ?, ?, ?)";

//     db.query(sql, [title, description, date, location], (err, result) => {

//         if (err) {
//             console.log("Insert error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         console.log("Event Added Successfully");

//         res.redirect("/event-list");

//     });

// });


// // Get All Events API
// app.get("/events", (req, res) => {

//     console.log("Fetching events...");

//     const sql = "SELECT * FROM events";

//     db.query(sql, (err, results) => {

//         if (err) {
//             console.log("Fetch error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         res.json(results);

//     });

// });


// // ================= DELETE EVENT ROUTE =================

// app.delete("/delete-event/:id", (req, res) => {

//     const eventId = req.params.id;

//     const sql = "DELETE FROM events WHERE id = ?";

//     db.query(sql, [eventId], (err, result) => {

//         if (err) {
//             console.log("Delete error:", err);
//             res.status(500).send("Error deleting event");
//             return;
//         }

//         console.log("Event Deleted Successfully");

//         res.send("Event deleted");

//     });

// });


// // ================= DEBUG ROUTE =================

// app.get("/test", (req, res) => {
//     res.send("Server working perfectly");
// });


// // ================= SERVER =================

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });


// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");

// const app = express();
// const PORT = 3000;

// // ================= MIDDLEWARE =================

// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// // ================= DATABASE =================

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Richa",
//     database: "event_platform"
// });

// db.connect((err) => {
//     if (err) {
//         console.log("Database connection failed:", err);
//         return;
//     }
//     console.log("MySQL Connected Successfully");
// });


// // ================= ROUTES =================

// // Homepage
// app.get("/", (req, res) => {
//     console.log("Homepage opened");
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// // Create Event Page
// app.get("/create-event", (req, res) => {
//     console.log("Create Event Page opened");
//     res.sendFile(path.join(__dirname, "views", "create-event.html"));
// });

// // Event List Page
// app.get("/event-list", (req, res) => {
//     console.log("Event List Page opened");
//     res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });


// // ================= DATABASE ROUTES =================

// // Save Event
// app.post("/create-event", (req, res) => {

//     const { title, description, date, location } = req.body;

//     const sql = "INSERT INTO events (title, description, date, location) VALUES (?, ?, ?, ?)";

//     db.query(sql, [title, description, date, location], (err, result) => {

//         if (err) {
//             console.log("Insert error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         console.log("Event Added Successfully");

//         res.redirect("/event-list");

//     });

// });


// // Get All Events API
// app.get("/events", (req, res) => {

//     console.log("Fetching events...");

//     const sql = "SELECT * FROM events";

//     db.query(sql, (err, results) => {

//         if (err) {
//             console.log("Fetch error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         res.json(results);

//     });

// });


// // ================= DELETE EVENT ROUTE =================

// app.delete("/delete-event/:id", (req, res) => {

//     const eventId = req.params.id;

//     const sql = "DELETE FROM events WHERE id = ?";

//     db.query(sql, [eventId], (err, result) => {

//         if (err) {
//             console.log("Delete error:", err);
//             res.status(500).send("Error deleting event");
//             return;
//         }

//         console.log("Event Deleted Successfully");

//         res.send("Event deleted");

//     });

// });


// // ================= EDIT EVENT ROUTES =================

// // Edit Event Page
// app.get("/edit-event/:id", (req, res) => {

//     res.sendFile(path.join(__dirname, "views", "edit-event.html"));

// });


// // Update Event
// app.put("/update-event/:id", (req, res) => {

//     const eventId = req.params.id;

//     const { title, description, date, location } = req.body;

//     const sql = "UPDATE events SET title=?, description=?, date=?, location=? WHERE id=?";

//     db.query(sql, [title, description, date, location, eventId], (err, result) => {

//         if (err) {
//             console.log("Update error:", err);
//             res.status(500).send("Error updating event");
//             return;
//         }

//         console.log("Event Updated Successfully");

//         res.send("Event Updated");

//     });

// });


// // ================= DEBUG ROUTE =================

// app.get("/test", (req, res) => {
//     res.send("Server working perfectly");
// });


// // ================= SERVER =================

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });


// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");
// const multer = require("multer");

// const app = express();
// const PORT = 3000;

// // ================= MULTER CONFIG =================

// const storage = multer.diskStorage({
// destination: function(req,file,cb){
// cb(null,"uploads/");
// },
// filename: function(req,file,cb){
// cb(null, Date.now() + "-" + file.originalname);
// }
// });

// const upload = multer({storage:storage});

// // ================= MIDDLEWARE =================

// app.use(express.static(path.join(__dirname, "public")));
// app.use("/uploads", express.static(path.join(__dirname,"uploads")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // ================= DATABASE =================

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Richa",
//     database: "event_platform"
// });

// db.connect((err) => {
//     if (err) {
//         console.log("Database connection failed:", err);
//         return;
//     }
//     console.log("MySQL Connected Successfully");
// });

// // ================= ROUTES =================

// // Homepage
// app.get("/", (req, res) => {
//     console.log("Homepage opened");
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// // Create Event Page
// app.get("/create-event", (req, res) => {
//     console.log("Create Event Page opened");
//     res.sendFile(path.join(__dirname, "views", "create-event.html"));
// });

// // Event List Page
// app.get("/event-list", (req, res) => {
//     console.log("Event List Page opened");
//     res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });

// // ================= DATABASE ROUTES =================

// // Save Event (WITH IMAGE UPLOAD)

// app.post("/create-event", upload.single("image"), (req, res) => {

//     const { title, description, date, location } = req.body;

//     const image = req.file ? req.file.filename : null;

//     const sql = "INSERT INTO events (title, description, date, location, image) VALUES (?, ?, ?, ?, ?)";

//     db.query(sql, [title, description, date, location, image], (err, result) => {

//         if (err) {
//             console.log("Insert error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         console.log("Event Added Successfully");

//         res.redirect("/event-list");

//     });

// });


// // Get All Events API
// app.get("/events", (req, res) => {

//     console.log("Fetching events...");

//     const sql = "SELECT * FROM events";

//     db.query(sql, (err, results) => {

//         if (err) {
//             console.log("Fetch error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         res.json(results);

//     });

// });


// // ================= DELETE EVENT ROUTE =================

// app.delete("/delete-event/:id", (req, res) => {

//     const eventId = req.params.id;

//     const sql = "DELETE FROM events WHERE id = ?";

//     db.query(sql, [eventId], (err, result) => {

//         if (err) {
//             console.log("Delete error:", err);
//             res.status(500).send("Error deleting event");
//             return;
//         }

//         console.log("Event Deleted Successfully");

//         res.send("Event deleted");

//     });

// });


// // ================= EDIT EVENT ROUTES =================

// // Edit Event Page
// app.get("/edit-event/:id", (req, res) => {

//     res.sendFile(path.join(__dirname, "views", "edit-event.html"));

// });


// // Update Event
// app.put("/update-event/:id", (req, res) => {

//     const eventId = req.params.id;

//     const { title, description, date, location } = req.body;

//     const sql = "UPDATE events SET title=?, description=?, date=?, location=? WHERE id=?";

//     db.query(sql, [title, description, date, location, eventId], (err, result) => {

//         if (err) {
//             console.log("Update error:", err);
//             res.status(500).send("Error updating event");
//             return;
//         }

//         console.log("Event Updated Successfully");

//         res.send("Event Updated");

//     });

// });


// // ================= DEBUG ROUTE =================

// app.get("/test", (req, res) => {
//     res.send("Server working perfectly");
// });


// // ================= SERVER =================

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");
// const multer = require("multer");

// const app = express();
// const PORT = 3000;

// // ================= MULTER CONFIG =================

// const storage = multer.diskStorage({
// destination: function(req,file,cb){
// cb(null,"uploads/");
// },
// filename: function(req,file,cb){
// cb(null, Date.now() + "-" + file.originalname);
// }
// });

// const upload = multer({storage:storage});

// // ================= MIDDLEWARE =================

// app.use(express.static(path.join(__dirname, "public")));
// app.use("/uploads", express.static(path.join(__dirname,"uploads")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // ================= DATABASE =================

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Richa",
//     database: "event_platform"
// });

// db.connect((err) => {
//     if (err) {
//         console.log("Database connection failed:", err);
//         return;
//     }
//     console.log("MySQL Connected Successfully");
// });

// // ================= ROUTES =================

// // Homepage
// app.get("/", (req, res) => {
//     console.log("Homepage opened");
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// // Create Event Page
// app.get("/create-event", (req, res) => {
//     console.log("Create Event Page opened");
//     res.sendFile(path.join(__dirname, "views", "create-event.html"));
// });

// // Event List Page
// app.get("/event-list", (req, res) => {
//     console.log("Event List Page opened");
//     res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });


// // ⭐⭐⭐ ADD THIS ROUTE ⭐⭐⭐
// // Event Details Page
// app.get("/event/:id", (req, res) => {

//     console.log("Opening event details page");

//     res.sendFile(path.join(__dirname, "views", "event-details.html"));

// });


// // ================= DATABASE ROUTES =================

// // Save Event (WITH IMAGE UPLOAD)

// app.post("/create-event", upload.single("image"), (req, res) => {

//     const { title, description, date, location } = req.body;

//     const image = req.file ? req.file.filename : null;

//     const sql = "INSERT INTO events (title, description, date, location, image) VALUES (?, ?, ?, ?, ?)";

//     db.query(sql, [title, description, date, location, image], (err, result) => {

//         if (err) {
//             console.log("Insert error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         console.log("Event Added Successfully");

//         res.redirect("/event-list");

//     });

// });


// // Get All Events API
// app.get("/events", (req, res) => {

//     console.log("Fetching events...");

//     const sql = "SELECT * FROM events";

//     db.query(sql, (err, results) => {

//         if (err) {
//             console.log("Fetch error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         res.json(results);

//     });

// });


// // ================= DELETE EVENT ROUTE =================

// app.delete("/delete-event/:id", (req, res) => {

//     const eventId = req.params.id;

//     const sql = "DELETE FROM events WHERE id = ?";

//     db.query(sql, [eventId], (err, result) => {

//         if (err) {
//             console.log("Delete error:", err);
//             res.status(500).send("Error deleting event");
//             return;
//         }

//         console.log("Event Deleted Successfully");

//         res.send("Event deleted");

//     });

// });


// // ================= EDIT EVENT ROUTES =================

// // Edit Event Page
// app.get("/edit-event/:id", (req, res) => {

//     res.sendFile(path.join(__dirname, "views", "edit-event.html"));

// });


// // Update Event
// app.put("/update-event/:id", (req, res) => {

//     const eventId = req.params.id;

//     const { title, description, date, location } = req.body;

//     const sql = "UPDATE events SET title=?, description=?, date=?, location=? WHERE id=?";

//     db.query(sql, [title, description, date, location, eventId], (err, result) => {

//         if (err) {
//             console.log("Update error:", err);
//             res.status(500).send("Error updating event");
//             return;
//         }

//         console.log("Event Updated Successfully");

//         res.send("Event Updated");

//     });

// });


// // ================= DEBUG ROUTE =================

// app.get("/test", (req, res) => {
//     res.send("Server working perfectly");
// });


// // ================= SERVER =================

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");
// const multer = require("multer");

// const app = express();
// const PORT = 3000;

// // ================= MULTER CONFIG =================

// const storage = multer.diskStorage({
// destination: function(req,file,cb){
// cb(null,"uploads/");
// },
// filename: function(req,file,cb){
// cb(null, Date.now() + "-" + file.originalname);
// }
// });

// const upload = multer({storage:storage});

// // ================= MIDDLEWARE =================

// app.use(express.static(path.join(__dirname, "public")));
// app.use("/uploads", express.static(path.join(__dirname,"uploads")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // ================= DATABASE =================

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Richa",
//     database: "event_platform"
// });

// db.connect((err) => {
//     if (err) {
//         console.log("Database connection failed:", err);
//         return;
//     }
//     console.log("MySQL Connected Successfully");
// });

// // ================= ROUTES =================

// // Homepage
// app.get("/", (req, res) => {
//     console.log("Homepage opened");
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// // Create Event Page
// app.get("/create-event", (req, res) => {
//     console.log("Create Event Page opened");
//     res.sendFile(path.join(__dirname, "views", "create-event.html"));
// });

// // Event List Page
// app.get("/event-list", (req, res) => {
//     console.log("Event List Page opened");
//     res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });

// // Event Details Page
// app.get("/event/:id", (req, res) => {

//     console.log("Opening event details page");

//     res.sendFile(path.join(__dirname, "views", "event-details.html"));

// });


// // ================= DATABASE ROUTES =================

// // Save Event (WITH IMAGE UPLOAD)

// app.post("/create-event", upload.single("image"), (req, res) => {

//     const { title, description, date, location } = req.body;

//     const image = req.file ? req.file.filename : null;

//     const sql = "INSERT INTO events (title, description, date, location, image) VALUES (?, ?, ?, ?, ?)";

//     db.query(sql, [title, description, date, location, image], (err, result) => {

//         if (err) {
//             console.log("Insert error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         console.log("Event Added Successfully");

//         res.redirect("/event-list");

//     });

// });


// // Get All Events API
// app.get("/events", (req, res) => {

//     console.log("Fetching events...");

//     const sql = "SELECT * FROM events";

//     db.query(sql, (err, results) => {

//         if (err) {
//             console.log("Fetch error:", err);
//             res.status(500).send("Database Error");
//             return;
//         }

//         res.json(results);

//     });

// });


// // ================= DELETE EVENT ROUTE =================

// app.delete("/delete-event/:id", (req, res) => {

//     const eventId = req.params.id;

//     const sql = "DELETE FROM events WHERE id = ?";

//     db.query(sql, [eventId], (err, result) => {

//         if (err) {
//             console.log("Delete error:", err);
//             res.status(500).send("Error deleting event");
//             return;
//         }

//         console.log("Event Deleted Successfully");

//         res.send("Event deleted");

//     });

// });


// // ================= EDIT EVENT ROUTES =================

// // Edit Event Page
// app.get("/edit-event/:id", (req, res) => {

//     res.sendFile(path.join(__dirname, "views", "edit-event.html"));

// });


// // Update Event
// app.put("/update-event/:id", (req, res) => {

//     const eventId = req.params.id;

//     const { title, description, date, location } = req.body;

//     const sql = "UPDATE events SET title=?, description=?, date=?, location=? WHERE id=?";

//     db.query(sql, [title, description, date, location, eventId], (err, result) => {

//         if (err) {
//             console.log("Update error:", err);
//             res.status(500).send("Error updating event");
//             return;
//         }

//         console.log("Event Updated Successfully");

//         res.send("Event Updated");

//     });

// });


// // ================= EVENT REGISTRATION ROUTE =================

// app.post("/register-event", (req,res)=>{

// const {event_id,name,email} = req.body;

// const sql = "INSERT INTO registrations (event_id,name,email) VALUES (?,?,?)";

// db.query(sql,[event_id,name,email],(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.send("Registration successful");

// });

// });


// // ================= DEBUG ROUTE =================

// app.get("/test", (req, res) => {
//     res.send("Server working perfectly");
// });


// // ================= SERVER =================

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");
// const multer = require("multer");

// const app = express();
// const PORT = 3000;


// // ================= MULTER CONFIG =================

// const storage = multer.diskStorage({
// destination: function(req,file,cb){
// cb(null,"uploads/");
// },
// filename: function(req,file,cb){
// cb(null, Date.now() + "-" + file.originalname);
// }
// });

// const upload = multer({storage:storage});


// // ================= MIDDLEWARE =================

// app.use(express.static(path.join(__dirname, "public")));
// app.use("/uploads", express.static(path.join(__dirname,"uploads")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// // ================= DATABASE =================

// const db = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "Richa",
// database: "event_platform"
// });

// db.connect((err) => {
// if (err) {
// console.log("Database connection failed:", err);
// return;
// }
// console.log("MySQL Connected Successfully");
// });


// // ================= ROUTES =================

// // Homepage
// app.get("/", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "index.html"));
// });


// // Create Event Page
// app.get("/create-event", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "create-event.html"));
// });


// // Event List Page
// app.get("/event-list", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });


// // Event Details Page
// app.get("/event/:id", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "event-details.html"));
// });


// // ================= REGISTRATION PAGE =================

// app.get("/register/:id",(req,res)=>{
// res.sendFile(path.join(__dirname,"views","registration.html"));
// });


// // ================= DATABASE ROUTES =================


// // Create Event (WITH IMAGE UPLOAD)

// app.post("/create-event", upload.single("image"), (req, res) => {

// const { title, description, date, location } = req.body;

// const image = req.file ? req.file.filename : null;

// const sql = "INSERT INTO events (title, description, date, location, image) VALUES (?, ?, ?, ?, ?)";

// db.query(sql, [title, description, date, location, image], (err, result) => {

// if (err) {
// console.log("Insert error:", err);
// res.status(500).send("Database Error");
// return;
// }

// console.log("Event Added Successfully");

// res.redirect("/event-list");

// });

// });


// // ================= GET ALL EVENTS =================

// app.get("/events", (req, res) => {

// const sql = "SELECT * FROM events";

// db.query(sql, (err, results) => {

// if (err) {
// console.log("Fetch error:", err);
// res.status(500).send("Database Error");
// return;
// }

// res.json(results);

// });

// });


// // ================= EVENTS WITH REGISTRATION COUNT =================

// app.get("/events-with-count",(req,res)=>{

// const sql = `
// SELECT events.*, COUNT(registrations.id) AS registration_count
// FROM events
// LEFT JOIN registrations
// ON events.id = registrations.event_id
// GROUP BY events.id
// `;

// db.query(sql,(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result);

// });

// });


// // ================= GET SINGLE EVENT =================

// app.get("/event-details/:id",(req,res)=>{

// const eventId = req.params.id;

// const sql = "SELECT * FROM events WHERE id=?";

// db.query(sql,[eventId],(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result[0]);

// });

// });


// // ================= DELETE EVENT =================

// app.delete("/delete-event/:id", (req, res) => {

// const eventId = req.params.id;

// const sql = "DELETE FROM events WHERE id = ?";

// db.query(sql, [eventId], (err, result) => {

// if (err) {
// console.log("Delete error:", err);
// res.status(500).send("Error deleting event");
// return;
// }

// console.log("Event Deleted Successfully");

// res.send("Event deleted");

// });

// });


// // ================= EDIT EVENT PAGE =================

// app.get("/edit-event/:id", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "edit-event.html"));
// });


// // ================= UPDATE EVENT =================

// app.put("/update-event/:id", (req, res) => {

// const eventId = req.params.id;

// const { title, description, date, location } = req.body;

// const sql = "UPDATE events SET title=?, description=?, date=?, location=? WHERE id=?";

// db.query(sql, [title, description, date, location, eventId], (err, result) => {

// if (err) {
// console.log("Update error:", err);
// res.status(500).send("Error updating event");
// return;
// }

// console.log("Event Updated Successfully");

// res.send("Event Updated");

// });

// });


// // ================= EVENT REGISTRATION =================

// app.post("/register-event",(req,res)=>{

// const {event_id,name,email} = req.body;

// const sql = "INSERT INTO registrations (event_id,name,email) VALUES (?,?,?)";

// db.query(sql,[event_id,name,email],(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// console.log("User Registered");

// res.send("Registration successful");

// });

// });


// // ================= GET REGISTRATIONS =================

// app.get("/registrations/:eventId",(req,res)=>{

// const eventId = req.params.eventId;

// const sql = "SELECT * FROM registrations WHERE event_id=?";

// db.query(sql,[eventId],(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result);

// });

// });


// // ================= DEBUG =================

// app.get("/test", (req, res) => {
// res.send("Server working perfectly");
// });


// // ================= SERVER =================

// app.listen(PORT, () => {
// console.log(`Server running at http://localhost:${PORT}`);
// });

// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");
// const multer = require("multer");

// const app = express();
// const PORT = 3000;


// // ================= MULTER CONFIG =================

// const storage = multer.diskStorage({
// destination: function(req,file,cb){
// cb(null,"uploads/");
// },
// filename: function(req,file,cb){
// cb(null, Date.now() + "-" + file.originalname);
// }
// });

// const upload = multer({storage:storage});


// // ================= MIDDLEWARE =================

// app.use(express.static(path.join(__dirname, "public")));
// app.use("/uploads", express.static(path.join(__dirname,"uploads")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// // ================= DATABASE =================

// const db = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "Richa",
// database: "event_platform"
// });

// db.connect((err) => {
// if (err) {
// console.log("Database connection failed:", err);
// return;
// }
// console.log("MySQL Connected Successfully");
// });


// // ================= ROUTES =================

// // Homepage
// app.get("/", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "index.html"));
// });


// // Create Event Page
// app.get("/create-event", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "create-event.html"));
// });


// // Event List Page
// app.get("/event-list", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });


// // Event Details Page
// app.get("/event/:id", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "event-details.html"));
// });


// // ================= REGISTRATION PAGE =================

// app.get("/registrations.html",(req,res)=>{
// res.sendFile(path.join(__dirname,"views","registrations.html"));
// });


// // ================= DATABASE ROUTES =================


// // Create Event (WITH IMAGE UPLOAD)

// app.post("/create-event", upload.single("image"), (req, res) => {

// const { title, description, date, location } = req.body;

// const image = req.file ? req.file.filename : null;

// const sql = "INSERT INTO events (title, description, date, location, image) VALUES (?, ?, ?, ?, ?)";

// db.query(sql, [title, description, date, location, image], (err, result) => {

// if (err) {
// console.log("Insert error:", err);
// res.status(500).send("Database Error");
// return;
// }

// console.log("Event Added Successfully");

// res.redirect("/event-list");

// });

// });


// // ================= GET ALL EVENTS =================

// app.get("/events", (req, res) => {

// const sql = "SELECT * FROM events";

// db.query(sql, (err, results) => {

// if (err) {
// console.log("Fetch error:", err);
// res.status(500).send("Database Error");
// return;
// }

// res.json(results);

// });

// });


// // ================= EVENTS WITH REGISTRATION COUNT =================

// app.get("/events-with-count",(req,res)=>{

// const sql = `
// SELECT events.*, COUNT(registrations.id) AS registration_count
// FROM events
// LEFT JOIN registrations
// ON events.id = registrations.event_id
// GROUP BY events.id
// `;

// db.query(sql,(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result);

// });

// });


// // ================= GET SINGLE EVENT =================

// app.get("/event-details/:id",(req,res)=>{

// const eventId = req.params.id;

// const sql = "SELECT * FROM events WHERE id=?";

// db.query(sql,[eventId],(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result[0]);

// });

// });


// // ================= DELETE EVENT =================

// app.delete("/delete-event/:id", (req, res) => {

// const eventId = req.params.id;

// const sql = "DELETE FROM events WHERE id = ?";

// db.query(sql, [eventId], (err, result) => {

// if (err) {
// console.log("Delete error:", err);
// res.status(500).send("Error deleting event");
// return;
// }

// console.log("Event Deleted Successfully");

// res.send("Event deleted");

// });

// });


// // ================= EDIT EVENT PAGE =================

// app.get("/edit-event/:id", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "edit-event.html"));
// });


// // ================= UPDATE EVENT =================

// app.put("/update-event/:id", (req, res) => {

// const eventId = req.params.id;

// const { title, description, date, location } = req.body;

// const sql = "UPDATE events SET title=?, description=?, date=?, location=? WHERE id=?";

// db.query(sql, [title, description, date, location, eventId], (err, result) => {

// if (err) {
// console.log("Update error:", err);
// res.status(500).send("Error updating event");
// return;
// }

// console.log("Event Updated Successfully");

// res.send("Event Updated");

// });

// });


// // ================= EVENT REGISTRATION =================

// app.post("/register-event",(req,res)=>{

// const {event_id,name,email} = req.body;

// const sql = "INSERT INTO registrations (event_id,name,email) VALUES (?,?,?)";

// db.query(sql,[event_id,name,email],(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// console.log("User Registered");

// res.send("Registration successful");

// });

// });


// // ================= GET REGISTRATIONS =================

// app.get("/registrations/:eventId",(req,res)=>{

// const eventId = req.params.eventId;

// const sql = "SELECT name,email FROM registrations WHERE event_id=?";

// db.query(sql,[eventId],(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result);

// });

// });


// // ================= DEBUG =================

// app.get("/test", (req, res) => {
// res.send("Server working perfectly");
// });


// // ================= SERVER =================

// app.listen(PORT, () => {
// console.log(`Server running at http://localhost:${PORT}`);
// });


// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");
// const multer = require("multer");

// // ✅ NEW (Authentication)
// const bcrypt = require("bcryptjs");
// const session = require("express-session");

// const app = express();
// const PORT = 3000;


// // ================= MULTER CONFIG =================

// const storage = multer.diskStorage({
// destination: function(req,file,cb){
// cb(null,"uploads/");
// },
// filename: function(req,file,cb){
// cb(null, Date.now() + "-" + file.originalname);
// }
// });

// const upload = multer({storage:storage});


// // ================= MIDDLEWARE =================

// app.use(express.static(path.join(__dirname, "public")));
// app.use("/uploads", express.static(path.join(__dirname,"uploads")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // ✅ NEW (Session Middleware)
// app.use(session({
//   secret: "secret-key",
//   resave: false,
//   saveUninitialized: true
// }));


// // ================= DATABASE =================

// const db = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "Richa",
// database: "event_platform"
// });

// db.connect((err) => {
// if (err) {
// console.log("Database connection failed:", err);
// return;
// }
// console.log("MySQL Connected Successfully");
// });


// // ================= ROUTES =================

// // Homepage
// app.get("/", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "index.html"));
// });


// // Create Event Page
// app.get("/create-event", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "create-event.html"));
// });


// // Event List Page
// app.get("/event-list", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });


// // Event Details Page
// app.get("/event/:id", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "event-details.html"));
// });


// // ================= REGISTRATION PAGE =================

// app.get("/registrations.html",(req,res)=>{
// res.sendFile(path.join(__dirname,"views","registrations.html"));
// });


// // ================= DATABASE ROUTES =================


// // Create Event (WITH IMAGE UPLOAD)

// app.post("/create-event", upload.single("image"), (req, res) => {

// const { title, description, date, location } = req.body;

// const image = req.file ? req.file.filename : null;

// const sql = "INSERT INTO events (title, description, date, location, image) VALUES (?, ?, ?, ?, ?)";

// db.query(sql, [title, description, date, location, image], (err, result) => {

// if (err) {
// console.log("Insert error:", err);
// res.status(500).send("Database Error");
// return;
// }

// console.log("Event Added Successfully");

// res.redirect("/event-list");

// });

// });


// // ================= GET ALL EVENTS =================

// app.get("/events", (req, res) => {

// const sql = "SELECT * FROM events";

// db.query(sql, (err, results) => {

// if (err) {
// console.log("Fetch error:", err);
// res.status(500).send("Database Error");
// return;
// }

// res.json(results);

// });

// });


// // ================= EVENTS WITH REGISTRATION COUNT =================

// app.get("/events-with-count",(req,res)=>{

// const sql = `
// SELECT events.*, COUNT(registrations.id) AS registration_count
// FROM events
// LEFT JOIN registrations
// ON events.id = registrations.event_id
// GROUP BY events.id
// `;

// db.query(sql,(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result);

// });

// });


// // ================= GET SINGLE EVENT =================

// app.get("/event-details/:id",(req,res)=>{

// const eventId = req.params.id;

// const sql = "SELECT * FROM events WHERE id=?";

// db.query(sql,[eventId],(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result[0]);

// });

// });


// // ================= DELETE EVENT =================

// app.delete("/delete-event/:id", (req, res) => {

// const eventId = req.params.id;

// const sql = "DELETE FROM events WHERE id = ?";

// db.query(sql, [eventId], (err, result) => {

// if (err) {
// console.log("Delete error:", err);
// res.status(500).send("Error deleting event");
// return;
// }

// console.log("Event Deleted Successfully");

// res.send("Event deleted");

// });

// });


// // ================= EDIT EVENT PAGE =================

// app.get("/edit-event/:id", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "edit-event.html"));
// });


// // ================= UPDATE EVENT =================

// app.put("/update-event/:id", (req, res) => {

// const eventId = req.params.id;

// const { title, description, date, location } = req.body;

// const sql = "UPDATE events SET title=?, description=?, date=?, location=? WHERE id=?";

// db.query(sql, [title, description, date, location, eventId], (err, result) => {

// if (err) {
// console.log("Update error:", err);
// res.status(500).send("Error updating event");
// return;
// }

// console.log("Event Updated Successfully");

// res.send("Event Updated");

// });

// });


// // ================= EVENT REGISTRATION =================

// app.post("/register-event",(req,res)=>{

// const {event_id,name,email} = req.body;

// const sql = "INSERT INTO registrations (event_id,name,email) VALUES (?,?,?)";

// db.query(sql,[event_id,name,email],(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// console.log("User Registered");

// res.send("Registration successful");

// });

// });


// // ================= GET REGISTRATIONS =================

// app.get("/registrations/:eventId",(req,res)=>{

// const eventId = req.params.eventId;

// const sql = "SELECT name,email FROM registrations WHERE event_id=?";

// db.query(sql,[eventId],(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result);

// });

// });


// // ================= DEBUG =================

// app.get("/test", (req, res) => {
// res.send("Server working perfectly");
// });




// // =============== SERVER =================

// app.listen(PORT, () => {
// console.log(`Server running at http://localhost:${PORT}`);
// });

// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");
// const multer = require("multer");

// // ✅ AUTH
// const bcrypt = require("bcryptjs");
// const session = require("express-session");

// const app = express();
// const PORT = 3000;


// // ================= MULTER CONFIG =================

// const storage = multer.diskStorage({
// destination: function(req,file,cb){
// cb(null,"uploads/");
// },
// filename: function(req,file,cb){
// cb(null, Date.now() + "-" + file.originalname);
// }
// });

// const upload = multer({storage:storage});


// // ================= MIDDLEWARE =================

// app.use(express.static(path.join(__dirname, "public")));
// app.use("/uploads", express.static(path.join(__dirname,"uploads")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(session({
//   secret: "secret-key",
//   resave: false,
//   saveUninitialized: true
// }));


// // ================= DATABASE =================

// const db = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "Richa",
// database: "event_platform"
// });

// db.connect((err) => {
// if (err) {
// console.log("Database connection failed:", err);
// return;
// }
// console.log("MySQL Connected Successfully");
// });


// // ================= ROUTES =================

// // Homepage
// app.get("/", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// // Create Event Page
// app.get("/create-event", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "create-event.html"));
// });

// // Event List Page
// app.get("/event-list", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });

// // Event Details Page
// app.get("/event/:id", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "event-details.html"));
// });


// // ================= AUTH ROUTES =================

// // Signup Page
// app.get("/signup", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "signup.html"));
// });

// // Signup API
// app.post("/signup", async (req, res) => {

// const { name, email, password } = req.body;

// const hashedPassword = await bcrypt.hash(password, 10);

// const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

// db.query(sql, [name, email, hashedPassword], (err, result) => {

// if (err) {
// console.log(err);
// res.send("User already exists");
// return;
// }

// res.redirect("/login");
// });
// });


// // Login Page
// app.get("/login", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "login.html"));
// });

// // Login API
// app.post("/login", (req, res) => {

// const { email, password } = req.body;

// const sql = "SELECT * FROM users WHERE email=?";

// db.query(sql, [email], async (err, result) => {

// if (err) {
// console.log(err);
// res.send("Database error");
// return;
// }

// if (result.length === 0) {
// res.send("User not found");
// return;
// }

// const user = result[0];

// const isMatch = await bcrypt.compare(password, user.password);

// if (!isMatch) {
// res.send("Wrong password");
// return;
// }

// req.session.userId = user.id;

// res.redirect("/event-list");

// });
// });


// // ================= REGISTRATION PAGE =================

// app.get("/registrations.html",(req,res)=>{
// res.sendFile(path.join(__dirname,"views","registrations.html"));
// });


// // ================= DATABASE ROUTES =================

// // Create Event
// app.post("/create-event", upload.single("image"), (req, res) => {

// const { title, description, date, location } = req.body;
// const image = req.file ? req.file.filename : null;

// const sql = "INSERT INTO events (title, description, date, location, image) VALUES (?, ?, ?, ?, ?)";

// db.query(sql, [title, description, date, location, image], (err, result) => {

// if (err) {
// console.log("Insert error:", err);
// res.status(500).send("Database Error");
// return;
// }

// res.redirect("/event-list");

// });
// });


// // Get All Events
// app.get("/events", (req, res) => {

// db.query("SELECT * FROM events", (err, results) => {

// if (err) {
// console.log(err);
// res.status(500).send("Database Error");
// return;
// }

// res.json(results);

// });
// });


// // Events with Registration Count
// app.get("/events-with-count",(req,res)=>{

// const sql = `
// SELECT events.*, COUNT(registrations.id) AS registration_count
// FROM events
// LEFT JOIN registrations
// ON events.id = registrations.event_id
// GROUP BY events.id
// `;

// db.query(sql,(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result);

// });
// });


// // Get Single Event
// app.get("/event-details/:id",(req,res)=>{

// const eventId = req.params.id;

// db.query("SELECT * FROM events WHERE id=?", [eventId], (err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result[0]);

// });
// });


// // Delete Event
// app.delete("/delete-event/:id", (req, res) => {

// db.query("DELETE FROM events WHERE id=?", [req.params.id], (err) => {

// if (err) {
// console.log(err);
// res.status(500).send("Error deleting event");
// return;
// }

// res.send("Event deleted");

// });
// });


// // Edit Page
// app.get("/edit-event/:id", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "edit-event.html"));
// });


// // Update Event
// app.put("/update-event/:id", (req, res) => {

// const { title, description, date, location } = req.body;

// const sql = "UPDATE events SET title=?, description=?, date=?, location=? WHERE id=?";

// db.query(sql, [title, description, date, location, req.params.id], (err) => {

// if (err) {
// console.log(err);
// res.status(500).send("Error updating event");
// return;
// }

// res.send("Event Updated");

// });
// });


// // Register Event
// app.post("/register-event",(req,res)=>{

// const {event_id,name,email} = req.body;

// const sql = "INSERT INTO registrations (event_id,name,email) VALUES (?,?,?)";

// db.query(sql,[event_id,name,email],(err)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.send("Registration successful");

// });
// });


// // Get Registrations
// app.get("/registrations/:eventId",(req,res)=>{

// db.query(
// "SELECT name,email FROM registrations WHERE event_id=?",
// [req.params.eventId],
// (err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result);

// });
// });


// // Debug
// app.get("/test", (req, res) => {
// res.send("Server working perfectly");
// });


// // ================= SERVER =================

// app.listen(PORT, () => {
// console.log(`Server running at http://localhost:${PORT}`);
// });

// const express = require("express");
// const path = require("path");
// const mysql = require("mysql2");
// const multer = require("multer");

// // ✅ AUTH
// const bcrypt = require("bcryptjs");
// const session = require("express-session");

// const app = express();
// const PORT = 3000;


// // ================= MULTER CONFIG =================

// const storage = multer.diskStorage({
// destination: function(req,file,cb){
// cb(null,"uploads/");
// },
// filename: function(req,file,cb){
// cb(null, Date.now() + "-" + file.originalname);
// }
// });

// const upload = multer({storage:storage});


// // ================= MIDDLEWARE =================

// app.use(express.static(path.join(__dirname, "public")));
// app.use("/uploads", express.static(path.join(__dirname,"uploads")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(session({
//   secret: "secret-key",
//   resave: false,
//   saveUninitialized: true
// }));


// // ================= DATABASE =================

// const db = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "Richa",
// database: "event_platform"
// });

// db.connect((err) => {
// if (err) {
// console.log("Database connection failed:", err);
// return;
// }
// console.log("MySQL Connected Successfully");
// });


// // ================= AUTH MIDDLEWARE =================

// function isLoggedIn(req, res, next) {
//   if (req.session.userId) {
//     next();
//   } else {
//     res.redirect("/login");
//   }
// }


// // ================= ROUTES =================

// // Homepage
// app.get("/", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// // 🔒 Protected Routes

// app.get("/create-event", isLoggedIn, (req, res) => {
// res.sendFile(path.join(__dirname, "views", "create-event.html"));
// });

// app.get("/event-list", isLoggedIn, (req, res) => {
// res.sendFile(path.join(__dirname, "views", "event-list.html"));
// });

// app.get("/event/:id", isLoggedIn, (req, res) => {
// res.sendFile(path.join(__dirname, "views", "event-details.html"));
// });

// app.get("/registrations.html", isLoggedIn,(req,res)=>{
// res.sendFile(path.join(__dirname,"views","registrations.html"));
// });


// // ================= AUTH ROUTES =================

// // Signup Page
// app.get("/signup", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "signup.html"));
// });

// // Signup API
// app.post("/signup", async (req, res) => {

// const { name, email, password } = req.body;

// const hashedPassword = await bcrypt.hash(password, 10);

// const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

// db.query(sql, [name, email, hashedPassword], (err, result) => {

// if (err) {
// console.log(err);
// res.send("User already exists");
// return;
// }

// res.redirect("/login");
// });
// });


// // Login Page
// app.get("/login", (req, res) => {
// res.sendFile(path.join(__dirname, "views", "login.html"));
// });

// // Login API
// app.post("/login", (req, res) => {

// const { email, password } = req.body;

// const sql = "SELECT * FROM users WHERE email=?";

// db.query(sql, [email], async (err, result) => {

// if (err) {
// console.log(err);
// res.send("Database error");
// return;
// }

// if (result.length === 0) {
// res.send("User not found");
// return;
// }

// const user = result[0];

// const isMatch = await bcrypt.compare(password, user.password);

// if (!isMatch) {
// res.send("Wrong password");
// return;
// }

// req.session.userId = user.id;

// res.redirect("/event-list");

// });
// });


// // ✅ LOGOUT
// app.get("/logout", (req, res) => {
//   req.session.destroy(() => {
//     res.redirect("/login");
//   });
// });


// // ================= DATABASE ROUTES =================

// // Create Event
// app.post("/create-event", upload.single("image"), (req, res) => {

// const { title, description, date, location } = req.body;
// const image = req.file ? req.file.filename : null;

// const sql = "INSERT INTO events (title, description, date, location, image) VALUES (?, ?, ?, ?, ?)";

// db.query(sql, [title, description, date, location, image], (err, result) => {

// if (err) {
// console.log("Insert error:", err);
// res.status(500).send("Database Error");
// return;
// }

// res.redirect("/event-list");

// });
// });


// // Get All Events
// app.get("/events", (req, res) => {

// db.query("SELECT * FROM events", (err, results) => {

// if (err) {
// console.log(err);
// res.status(500).send("Database Error");
// return;
// }

// res.json(results);

// });
// });


// // Events with Registration Count
// app.get("/events-with-count",(req,res)=>{

// const sql = `
// SELECT events.*, COUNT(registrations.id) AS registration_count
// FROM events
// LEFT JOIN registrations
// ON events.id = registrations.event_id
// GROUP BY events.id
// `;

// db.query(sql,(err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result);

// });
// });


// // Get Single Event
// app.get("/event-details/:id",(req,res)=>{

// db.query("SELECT * FROM events WHERE id=?", [req.params.id], (err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result[0]);

// });
// });


// // Delete Event
// app.delete("/delete-event/:id", (req, res) => {

// db.query("DELETE FROM events WHERE id=?", [req.params.id], (err) => {

// if (err) {
// console.log(err);
// res.status(500).send("Error deleting event");
// return;
// }

// res.send("Event deleted");

// });
// });


// // Edit Page
// app.get("/edit-event/:id", isLoggedIn, (req, res) => {
// res.sendFile(path.join(__dirname, "views", "edit-event.html"));
// });


// // Update Event
// app.put("/update-event/:id", (req, res) => {

// const { title, description, date, location } = req.body;

// const sql = "UPDATE events SET title=?, description=?, date=?, location=? WHERE id=?";

// db.query(sql, [title, description, date, location, req.params.id], (err) => {

// if (err) {
// console.log(err);
// res.status(500).send("Error updating event");
// return;
// }

// res.send("Event Updated");

// });
// });


// // Register Event
// app.post("/register-event",(req,res)=>{

// const {event_id,name,email} = req.body;

// const sql = "INSERT INTO registrations (event_id,name,email) VALUES (?,?,?)";

// db.query(sql,[event_id,name,email],(err)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.send("Registration successful");

// });
// });


// // Get Registrations
// app.get("/registrations/:eventId",(req,res)=>{

// db.query(
// "SELECT name,email FROM registrations WHERE event_id=?",
// [req.params.eventId],
// (err,result)=>{

// if(err){
// console.log(err);
// res.status(500).send("Database error");
// return;
// }

// res.json(result);

// });
// });


// // Debug
// app.get("/test", (req, res) => {
// res.send("Server working perfectly");
// });


// // ================= SERVER =================

// app.listen(PORT, () => {
// console.log(`Server running at http://localhost:${PORT}`);
// });


const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const multer = require("multer");

// ✅ AUTH
const bcrypt = require("bcryptjs");
const session = require("express-session");

const app = express();
const PORT = 3000;


// ================= MULTER CONFIG =================

const storage = multer.diskStorage({
destination: function(req,file,cb){
cb(null,"uploads/");
},
filename: function(req,file,cb){
cb(null, Date.now() + "-" + file.originalname);
}
});

const upload = multer({storage:storage});


// ================= MIDDLEWARE =================

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname,"uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: true
}));


// ================= DATABASE =================

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Richa",
database: "event_platform"
});

db.connect((err) => {
if (err) {
console.log("Database connection failed:", err);
return;
}
console.log("MySQL Connected Successfully");
});


// ================= AUTH MIDDLEWARE =================

function isLoggedIn(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect("/login");
  }
}


// ================= ROUTES =================

// Homepage
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "views", "index.html"));
});

// 🔒 Protected Routes

app.get("/create-event", isLoggedIn, (req, res) => {
res.sendFile(path.join(__dirname, "views", "create-event.html"));
});

app.get("/event-list", isLoggedIn, (req, res) => {
res.sendFile(path.join(__dirname, "views", "event-list.html"));
});

app.get("/event/:id", isLoggedIn, (req, res) => {
res.sendFile(path.join(__dirname, "views", "event-details.html"));
});

app.get("/registrations.html", isLoggedIn,(req,res)=>{
res.sendFile(path.join(__dirname,"views","registrations.html"));
});


// ================= AUTH ROUTES =================

// Signup Page
app.get("/signup", (req, res) => {
res.sendFile(path.join(__dirname, "views", "signup.html"));
});

// Signup API
app.post("/signup", async (req, res) => {

const { name, email, password } = req.body;

const hashedPassword = await bcrypt.hash(password, 10);

const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

db.query(sql, [name, email, hashedPassword], (err, result) => {

if (err) {
console.log(err);
res.send("User already exists");
return;
}

res.redirect("/login");
});
});


// Login Page
app.get("/login", (req, res) => {
res.sendFile(path.join(__dirname, "views", "login.html"));
});

// Login API
app.post("/login", (req, res) => {

const { email, password } = req.body;

const sql = "SELECT * FROM users WHERE email=?";

db.query(sql, [email], async (err, result) => {

if (err) {
console.log(err);
res.send("Database error");
return;
}

if (result.length === 0) {
res.send("User not found");
return;
}

const user = result[0];

const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
res.send("Wrong password");
return;
}

req.session.userId = user.id;

res.redirect("/event-list");

});
});


// ✅ LOGOUT
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});


// ================= DATABASE ROUTES =================

// Create Event
app.post("/create-event", upload.single("image"), (req, res) => {

const { title, description, date, location } = req.body;
const image = req.file ? req.file.filename : null;

const sql = "INSERT INTO events (title, description, date, location, image) VALUES (?, ?, ?, ?, ?)";

db.query(sql, [title, description, date, location, image], (err, result) => {

if (err) {
console.log("Insert error:", err);
res.status(500).send("Database Error");
return;
}

res.redirect("/event-list");

});
});


// Get All Events
app.get("/events", (req, res) => {

db.query("SELECT * FROM events", (err, results) => {

if (err) {
console.log(err);
res.status(500).send("Database Error");
return;
}

res.json(results);

});
});


// Events with Registration Count
app.get("/events-with-count",(req,res)=>{

const sql = `
SELECT events.*, COUNT(registrations.id) AS registration_count
FROM events
LEFT JOIN registrations
ON events.id = registrations.event_id
GROUP BY events.id
`;

db.query(sql,(err,result)=>{

if(err){
console.log(err);
res.status(500).send("Database error");
return;
}

res.json(result);

});
});


// Get Single Event
app.get("/event-details/:id",(req,res)=>{

db.query("SELECT * FROM events WHERE id=?", [req.params.id], (err,result)=>{

if(err){
console.log(err);
res.status(500).send("Database error");
return;
}

res.json(result[0]);

});
});


// Delete Event
app.delete("/delete-event/:id", (req, res) => {

db.query("DELETE FROM events WHERE id=?", [req.params.id], (err) => {

if (err) {
console.log(err);
res.status(500).send("Error deleting event");
return;
}

res.send("Event deleted");

});
});


// Edit Page
app.get("/edit-event/:id", isLoggedIn, (req, res) => {
res.sendFile(path.join(__dirname, "views", "edit-event.html"));
});


// Update Event
app.put("/update-event/:id", (req, res) => {

const { title, description, date, location } = req.body;

const sql = "UPDATE events SET title=?, description=?, date=?, location=? WHERE id=?";

db.query(sql, [title, description, date, location, req.params.id], (err) => {

if (err) {
console.log(err);
res.status(500).send("Error updating event");
return;
}

res.send("Event Updated");

});
});


// Register Event
app.post("/register-event",(req,res)=>{

const {event_id,name,email} = req.body;

const sql = "INSERT INTO registrations (event_id,name,email) VALUES (?,?,?)";

db.query(sql,[event_id,name,email],(err)=>{

if(err){
console.log(err);
res.status(500).send("Database error");
return;
}

res.send("Registration successful");

});
});


// Get Registrations
app.get("/registrations/:eventId",(req,res)=>{

db.query(
"SELECT name,email FROM registrations WHERE event_id=?",
[req.params.eventId],
(err,result)=>{

if(err){
console.log(err);
res.status(500).send("Database error");
return;
}

res.json(result);

});
});


// Debug
app.get("/test", (req, res) => {
res.send("Server working perfectly");
});


// ================= SERVER =================

app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});