#  EventHub — Full-Stack Event Management Platform

A full-stack web application built with **Node.js, Express.js, and MySQL** that enables users to explore, host, create, manage, and delete events through a secure, interactive web interface. Built during an internship at **50 Hertz Limited**.

---

##  Features

- **User Authentication** — Secure Signup, Login, Logout with bcrypt password hashing and session management
- **Role-Based Access Control** — Separate protected routes for authenticated users; unauthorized access redirects to login
- **Event Management (CRUD)** — Create, view, edit, and delete events with title, description, date, location, and image upload
- **Event Registration** — Users can register for events; registration details (name, email) stored in real-time MySQL database
- **Responsive Event Dashboard** — Displays event date, venue, total registered candidates, ticket IDs, and participant details
- **Image Upload** — Event banner/image upload handled via Multer with local disk storage
- **Registration Count** — Events fetched with live registration count using MySQL JOIN queries
- **Session-Protected Routes** — Create, edit, and view event pages accessible only after login

---

##  Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Database | MySQL, mysql2 |
| Authentication | bcryptjs, express-session |
| File Upload | Multer |
| Frontend | HTML5, CSS3, JavaScript |
| Templating | Static HTML views served via Express |

---

##  Project Structure

```
EventHub/
│
├── server.js                  # Main server — all routes & logic
├── package.json
│
├── public/
│   └── css/
│       └── style.css          # Global styles
│
├── views/                     # HTML pages
│   ├── index.html             # Homepage
│   ├── login.html             # Login page
│   ├── signup.html            # Signup page
│   ├── event-list.html        # All events listing
│   ├── event-details.html     # Single event details
│   ├── create-event.html      # Create new event form
│   ├── edit-event.html        # Edit existing event
│   └── registrations.html     # View registrations for an event
│
└── uploads/                   # Uploaded event images (auto-generated)
```

---

##  Database Schema

### `users` table
| Column | Type | Description |
|---|---|---|
| id | INT (PK) | Auto-increment |
| name | VARCHAR | User's full name |
| email | VARCHAR (UNIQUE) | User email |
| password | VARCHAR | Bcrypt hashed password |

### `events` table
| Column | Type | Description |
|---|---|---|
| id | INT (PK) | Auto-increment |
| title | VARCHAR | Event title |
| description | TEXT | Event description |
| date | DATE | Event date |
| location | VARCHAR | Event venue/location |
| image | VARCHAR | Uploaded image filename |

### `registrations` table
| Column | Type | Description |
|---|---|---|
| id | INT (PK) | Auto-increment |
| event_id | INT (FK) | References events.id |
| name | VARCHAR | Registrant's name |
| email | VARCHAR | Registrant's email |

---

##  API Routes

### Auth Routes
| Method | Route | Description |
|---|---|---|
| GET | `/signup` | Signup page |
| POST | `/signup` | Create new user (password hashed with bcrypt) |
| GET | `/login` | Login page |
| POST | `/login` | Authenticate user, create session |
| GET | `/logout` | Destroy session, redirect to login |

### Event Routes (Protected)
| Method | Route | Description |
|---|---|---|
| GET | `/event-list` | View all events (login required) |
| GET | `/create-event` | Create event form (login required) |
| POST | `/create-event` | Save event with image upload |
| GET | `/event/:id` | Event details page |
| GET | `/event-details/:id` | Fetch single event data (JSON) |
| GET | `/events` | Fetch all events (JSON) |
| GET | `/events-with-count` | Fetch events with registration count (JOIN query) |
| PUT | `/update-event/:id` | Update event details |
| DELETE | `/delete-event/:id` | Delete an event |
| GET | `/edit-event/:id` | Edit event page (login required) |

### Registration Routes
| Method | Route | Description |
|---|---|---|
| POST | `/register-event` | Register user for an event |
| GET | `/registrations/:eventId` | Fetch all registrations for an event |

---

##  Getting Started

### Prerequisites
- Node.js (v16+)
- MySQL (local)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/EventHub.git
cd EventHub
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup MySQL Database

Open MySQL and run:
```sql
CREATE DATABASE event_platform;

USE event_platform;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  date DATE,
  location VARCHAR(255),
  image VARCHAR(255)
);

CREATE TABLE registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  event_id INT,
  name VARCHAR(100),
  email VARCHAR(100),
  FOREIGN KEY (event_id) REFERENCES events(id)
);
```

### 4. Configure Database Connection

In `server.js`, update your MySQL credentials:
```javascript
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",   // ← update this
  database: "event_platform"
});
```

### 5. Run the Server
```bash
node server.js
```

Visit: **http://localhost:3000**

---

## Screens Overview
<img width="1920" height="1080" alt="A" src="https://github.com/user-attachments/assets/e5c73ac5-e100-41dc-8e7a-c1126f194527" />
<img width="1920" height="1080" alt="B" src="https://github.com/user-attachments/assets/1c06f6d7-1ced-4e24-ae0c-70ae5d4b1d46" />
<img width="1920" height="1080" alt="C" src="https://github.com/user-attachments/assets/134e219c-d5ef-4d3b-b574-719dc159e759" />
<img width="1920" height="1080" alt="D" src="https://github.com/user-attachments/assets/e6b38a46-ab61-43ab-8537-c4bb5eb1c1f2" />
