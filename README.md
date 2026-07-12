# 📇 ContactHub – Contact Management System

A full-stack Contact Management Application developed as part of the **Mavens SDE Intern Assessment**.

The project demonstrates modern full-stack web development by combining secure authentication, contact management, real-time COVID-19 analytics, and interactive maps into a single responsive application.

---

## 🌐 Live Links

### 🚀 Live Application
https://contact-management-app-nine-drab.vercel.app/

> **Note:** The backend is hosted on Render's free tier. If the application has been inactive for some time, the first request may take **30–60 seconds** while the server starts.

---

## 🎥 Demo Videos

| Platform | Link |
|----------|------|
| 💻 Desktop / Laptop Demo | https://drive.google.com/file/d/YOUR_DESKTOP_VIDEO_ID/view |
| 📱 Mobile Responsive Demo | https://drive.google.com/file/d/YOUR_MOBILE_VIDEO_ID/view |

---

# 🚀 Project Overview

ContactHub is a full-stack web application developed as part of the **Mavens SDE Intern Assessment**. The primary objective of this project was to build a secure and scalable Contact Management System while demonstrating practical knowledge of modern frontend and backend development.

The application enables authenticated users to securely manage their personal contacts through a complete set of CRUD (Create, Read, Update, Delete) operations. Beyond the core contact management functionality, the project also includes a COVID-19 analytics dashboard that presents worldwide statistics through interactive charts and maps using publicly available APIs.

Unlike a traditional CRUD application, ContactHub combines multiple technologies and architectural concepts into a single project. It demonstrates user authentication, state management, REST API integration, responsive interface design, and real-time data visualization while maintaining a clean and modular codebase.

The application follows a client-server architecture where the frontend and backend are developed as independent applications that communicate through REST APIs.

- The **frontend** is responsible for rendering the user interface, managing application state, handling routing, and consuming APIs.
- The **backend** manages authentication, validates requests, performs business logic, and securely stores user and contact information in MongoDB Atlas.
- External COVID-19 statistics are retrieved from the Disease.sh public API using TanStack React Query, allowing the application to efficiently cache and synchronize server data.

Throughout the development process, emphasis was placed on writing maintainable code by following a modular folder structure, separating concerns between UI, business logic, state management, and API communication. This makes the application easier to understand, maintain, and extend with new features in the future.

The final application provides:

- Secure user authentication using JWT
- Contact management with complete CRUD functionality
- Search functionality for quickly locating contacts
- Responsive dashboard optimized for desktop and mobile devices
- Live COVID-19 statistics displayed through charts
- Interactive world map with country-wise COVID information
- Clean and reusable project architecture suitable for real-world development

Overall, this project demonstrates the integration of modern React development practices with a secure Express.js backend while emphasizing code organization, scalability, and user experience.

# 🎯 Project Objectives

The primary goal of this project was to design and develop a secure, responsive, and maintainable Contact Management application by applying modern full-stack development practices. The project was completed as part of the **Mavens SDE Intern Assessment**, which evaluates a candidate's ability to build a complete web application using current frontend technologies while integrating with a custom backend.

Rather than focusing solely on implementing individual features, the objective was to develop an application that demonstrates how different technologies work together in a real-world environment. This includes user authentication, secure API communication, state management, responsive interface design, and integration with external data sources.

Throughout the development process, the following objectives were considered:

### Build a Secure Authentication System

Authentication is one of the most fundamental aspects of any modern web application. The application was designed to provide secure user registration and login using JSON Web Tokens (JWT). Passwords are encrypted using **bcrypt** before being stored in the database, ensuring that sensitive user information is never stored in plain text.

Authenticated users can only access protected routes after successful login, while unauthenticated users are redirected to the login page. User sessions are maintained using JWT stored in the browser, allowing users to continue working without repeatedly logging in.

---

### Implement Complete Contact Management

The Contact Management module serves as the core functionality of the application. Every authenticated user can create, view, update, delete, and search their own contacts.

Each contact stores useful information such as personal details, company information, address, and status. By separating user data through authentication, every user can securely manage only their own contacts without affecting other users' information.

---

### Demonstrate Modern Frontend Development

The frontend was developed using React and TypeScript while following component-based architecture and clean coding practices.

The application emphasizes:

- Reusable UI components
- Organized project structure
- Type-safe development with TypeScript
- Responsive layouts
- Easy navigation using React Router
- Efficient state management

Special attention was given to maintaining clean separation between presentation, business logic, and API communication to improve maintainability.

---

### Integrate External APIs

Beyond the Contact Management functionality, the project demonstrates how third-party APIs can be integrated into a web application.

The COVID-19 Dashboard retrieves live worldwide statistics from the Disease.sh API and presents the data through interactive charts and maps. This illustrates how asynchronous data can be fetched, cached, and displayed efficiently within a React application.

---

### Build a Responsive User Experience

Modern applications are expected to function consistently across different screen sizes. The interface was designed to provide a smooth user experience on desktops, tablets, and mobile devices.

Bootstrap's responsive grid system and utility classes were used to ensure that forms, navigation, tables, charts, and maps automatically adapt to different screen resolutions while maintaining usability.

---

### Follow Clean Project Architecture

A significant objective of this project was to organize the codebase using a modular architecture that separates different responsibilities into dedicated folders and components.

Examples include:

- UI components separated from application pages
- API services isolated from UI logic
- Redux Toolkit managing client-side state
- Express controllers separated from routes
- Middleware handling authentication
- Database models managing data persistence

This architecture improves readability, scalability, and long-term maintainability while making future enhancements easier to implement.

---

### Gain Practical Full-Stack Development Experience

Finally, this project provided an opportunity to combine frontend development, backend development, database management, authentication, deployment, and third-party API integration into a single application.

Instead of treating each technology independently, the project demonstrates how multiple technologies interact to build a complete production-style web application that follows modern software development practices.

# 📋 Assignment Requirements & Implementation

The project was developed according to the requirements outlined in the **Mavens SDE Intern Assessment**. The table below summarizes each requirement and explains how it was implemented within the application.

| Assignment Requirement | Implementation |
|------------------------|----------------|
| **User Registration** | Implemented a secure registration system where new users can create an account. Passwords are hashed using **bcrypt** before being stored in MongoDB Atlas to ensure data security. |
| **User Login** | Users can authenticate using their registered email and password. After successful authentication, the backend generates a **JSON Web Token (JWT)** that is used for subsequent authenticated requests. |
| **Protected Routes** | Routes such as Dashboard, Contacts, Charts, and Maps are accessible only to authenticated users. Unauthorized users are redirected to the login page. |
| **Session Persistence** | User sessions remain active after page refresh by securely storing the JWT in Local Storage and validating it during application initialization. |
| **Logout** | Users can securely log out, which removes the stored authentication token and redirects them back to the login page. |
| **Add Contact** | Authenticated users can create new contacts by entering personal and professional details through a validated contact form. |
| **View Contacts** | Displays all contacts belonging to the currently logged-in user in a clean and responsive layout. Contact data is retrieved from the backend API and managed through Redux Toolkit. |
| **View Contact Details** | Users can open a dedicated page to view complete information about a selected contact without editing the record. |
| **Edit Contact** | Existing contacts can be updated through a pre-filled edit form. Changes are synchronized with the backend and reflected immediately in the application. |
| **Delete Contact** | Contacts can be permanently removed from the database with a single action. The application updates the UI immediately after successful deletion. |
| **Search Contacts** | Implemented client-side search functionality to quickly filter contacts based on user input, improving usability when managing larger contact lists. |
| **Redux Toolkit** | Redux Toolkit is used to manage global application state, including authentication information and contact data, ensuring predictable state updates across components. |
| **React Query (TanStack Query)** | React Query manages server-side state by handling API requests, caching responses, background refetching, and reducing unnecessary network calls for COVID-19 data. |
| **Charts Dashboard** | Built a responsive dashboard using **Recharts** to visualize worldwide historical COVID-19 statistics fetched from the Disease.sh API. |
| **Interactive Maps** | Developed an interactive world map using **React Leaflet**, displaying country-wise COVID-19 statistics through dynamic markers and informative popups. |
| **Responsive Design** | Designed a responsive interface using **Bootstrap 5**, ensuring the application provides a consistent experience across desktop, tablet, and mobile devices. |
| **Deployment** | The frontend is deployed on **Vercel**, while the backend is hosted on **Render** with **MongoDB Atlas** serving as the cloud database. |

---

## Additional Improvements

While implementing the assignment requirements, several enhancements were incorporated to improve the overall user experience and maintainability of the application.

- Organized the project using a modular folder structure for better scalability.
- Implemented reusable layouts and shared UI components.
- Added loading indicators and graceful handling of asynchronous API requests.
- Designed responsive pages optimized for desktop, tablet, and mobile devices.
- Structured the backend using controllers, middleware, models, and route separation.
- Maintained clean code practices using TypeScript for improved type safety and code reliability.

# 🔄 Application Workflow

The application follows a simple and secure workflow that guides users from authentication to contact management and data visualization. Every protected feature is accessible only after successful authentication, ensuring that user data remains secure and isolated.

The workflow below illustrates how a user interacts with the application throughout a typical session.

```text
                User Visits Application
                          │
                          ▼
                  Registration / Login
                          │
                Credentials Validation
                          │
                          ▼
                 JWT Token Generated
                          │
             Token Stored in Local Storage
                          │
                          ▼
                Access Protected Dashboard
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
 Manage Contacts     View Charts      Explore Maps
        │                 │                 │
        ▼                 ▼                 ▼
 Create • Edit      Historical Data    Country-wise
 Delete • Search      Visualization      COVID Data
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                          ▼
                       Logout
                          │
                 Authentication Cleared
                          │
                          ▼
                     Login Page
```

---

## Step 1 – User Authentication

The application begins with either the **Registration** or **Login** page.

New users can create an account by providing their basic information. Before storing the data, the backend validates the request and securely hashes the password using **bcrypt**. Existing users can authenticate using their registered email address and password.

Once authentication is successful, the backend generates a **JSON Web Token (JWT)** which is returned to the frontend.

---

## Step 2 – Session Management

After successful login, the JWT is securely stored in the browser's Local Storage.

Whenever the application is refreshed, the stored token is used to determine whether the user is already authenticated. This allows users to continue their session without logging in repeatedly while preventing unauthorized users from accessing protected pages.

---

## Step 3 – Dashboard Access

After authentication, users are redirected to the Dashboard.

The dashboard serves as the central navigation point of the application, providing quick access to:

- Contact Management
- COVID-19 Charts Dashboard
- Interactive Maps
- User Logout

From here, users can navigate to different modules without needing to authenticate again.

---

## Step 4 – Contact Management

The Contact module is the primary feature of the application.

Users can:

- Create new contacts
- View existing contacts
- Search contacts
- Update contact information
- Delete contacts

Every request is authenticated using the stored JWT, ensuring users can only access and modify their own contact records.

All contact information is stored securely in MongoDB Atlas and synchronized with the frontend using Redux Toolkit.

---

## Step 5 – COVID-19 Analytics Dashboard

Apart from contact management, the application also includes a dashboard that displays live COVID-19 statistics.

The frontend requests historical data from the **Disease.sh API** using **TanStack React Query**.

React Query automatically handles:

- API requests
- Response caching
- Loading states
- Background refetching

The retrieved data is then visualized using **Recharts**, allowing users to understand worldwide case trends through an interactive line chart.

---

## Step 6 – Interactive World Map

The Maps module provides a geographical representation of live COVID-19 statistics.

Country-wise data is fetched from the Disease.sh API and displayed on an interactive map built using **React Leaflet**.

Each marker represents a country and displays:

- Country Name
- Active Cases
- Recovered Cases
- Total Deaths

Users can zoom, pan, and explore data from different regions directly on the map.

---

## Step 7 – Logout

When the user chooses to log out, the application securely removes the stored JWT from Local Storage.

Authentication information maintained by Redux Toolkit is also cleared, ensuring that protected routes are no longer accessible.

The user is then redirected back to the Login page, completing the application workflow.

---

### Workflow Summary

From the user's perspective, the application follows a secure and intuitive flow:

- Authenticate using Registration or Login.
- Access the protected Dashboard.
- Manage personal contacts securely.
- Explore live COVID-19 charts and maps.
- Log out safely, ending the authenticated session.

This workflow ensures a clear separation between public and protected resources while maintaining a smooth and responsive user experience.

# 🏗️ System Architecture

ContactHub follows a **client-server architecture**, where the frontend and backend are developed as two independent applications that communicate through RESTful APIs.

This separation of concerns keeps the application modular, easier to maintain, and scalable for future enhancements. The frontend focuses on delivering the user experience, while the backend handles authentication, business logic, and database operations.

The application also integrates an external public API to display live COVID-19 statistics without storing external data in the application's database.

---

## High-Level Architecture

```text
                        ┌──────────────────────────┐
                        │        User Browser      │
                        └─────────────┬────────────┘
                                      │
                                      │ HTTP Requests
                                      ▼
                ┌────────────────────────────────────────┐
                │      React + TypeScript Frontend       │
                │                                        │
                │  • React Router                        │
                │  • Bootstrap 5                         │
                │  • Redux Toolkit                       │
                │  • TanStack React Query                │
                │  • Axios                               │
                └───────────────┬────────────────────────┘
                                │
              ┌─────────────────┴──────────────────┐
              │                                    │
              ▼                                    ▼
   Contact Management APIs              Disease.sh Public API
              │                                    │
              ▼                                    ▼
     ┌────────────────────┐              Live COVID-19 Data
     │ Express.js Backend │
     │                    │
     │ • JWT Auth         │
     │ • Controllers      │
     │ • Middleware       │
     │ • Mongoose Models  │
     └─────────┬──────────┘
               │
               ▼
      ┌───────────────────┐
      │   MongoDB Atlas   │
      └───────────────────┘
```

---

## Architecture Overview

The application is divided into three primary layers, with each layer responsible for a specific part of the system.

### 1. Presentation Layer (Frontend)

The frontend is built using **React**, **TypeScript**, and **Bootstrap 5**.

Its responsibilities include:

- Rendering user interfaces.
- Managing client-side routing.
- Handling user interactions.
- Maintaining application state.
- Sending API requests.
- Displaying data returned from the backend.
- Visualizing COVID-19 statistics.

Instead of directly communicating with the database, every request passes through the backend API.

This approach improves security while keeping the frontend independent of database implementation details.

---

### 2. Application Layer (Backend)

The backend is developed using **Express.js** with **TypeScript**.

It acts as the central processing layer of the application and is responsible for:

- User authentication.
- Password encryption.
- JWT generation and validation.
- Contact CRUD operations.
- Request validation.
- Business logic.
- Communication with MongoDB Atlas.

Every protected request first passes through the authentication middleware before reaching the appropriate controller.

This ensures that only authenticated users can access protected resources.

---

### 3. Data Layer (Database)

MongoDB Atlas is used as the primary cloud database.

The database stores:

- User accounts
- Encrypted passwords
- Contact information

Each contact document is associated with a specific user through the User ID stored inside the contact document.

This relationship ensures complete data isolation, allowing every authenticated user to manage only their own contacts.

---

## External API Integration

Unlike authentication and contacts, COVID-19 statistics are **not stored inside MongoDB**.

Instead, the application retrieves real-time information from the public **Disease.sh API**.

This approach offers several benefits:

- Always displays current data.
- Eliminates the need for scheduled database updates.
- Reduces storage requirements.
- Demonstrates integration with third-party REST APIs.

The data is fetched using **TanStack React Query**, which automatically manages caching, background refetching, and loading states.

---

## Request Lifecycle

Every request follows a structured flow through the application.

### Authentication Request

```text
User
   │
   ▼
React Login Form
   │
Axios POST Request
   │
   ▼
Express Authentication Route
   │
Controller
   │
bcrypt Password Verification
   │
JWT Generation
   │
MongoDB Atlas
   │
   ▼
JWT Response
   │
Local Storage
```

---

### Contact Request

```text
User Action
     │
     ▼
React Component
     │
Redux Action
     │
Axios Request
     │
Express API
     │
JWT Middleware
     │
Contact Controller
     │
MongoDB Atlas
     │
Updated Response
     │
Redux Store Updated
     │
UI Automatically Re-renders
```

---

## Why This Architecture?

A layered architecture was chosen because it provides a clear separation of responsibilities.

### Benefits

- Modular and maintainable codebase.
- Independent frontend and backend development.
- Secure communication through authenticated REST APIs.
- Easy integration with external services.
- Improved scalability for future features.
- Simplified debugging and testing.
- Better organization following industry-standard development practices.

This architecture ensures that presentation logic, business logic, and data management remain independent, making the project easier to understand, extend, and maintain.

# 📁 Project Structure

The project is organized into two independent applications:

- **Frontend** – Responsible for the user interface, client-side routing, state management, and API communication.
- **Backend** – Responsible for authentication, business logic, REST APIs, and database operations.

Keeping the frontend and backend separate improves maintainability, scalability, and allows both applications to be developed and deployed independently.

---

## Overall Project Structure

```text
Contact-Management-App
│
├── frontend/
│
├── backend/
│
└── README.md
```

---

# Frontend Structure

The frontend is developed using **React**, **TypeScript**, and **Bootstrap 5** following a modular architecture. Every folder has a dedicated responsibility, making the project easier to understand and maintain.

```text
frontend/
│
├── public/
├── src/
│
├── app/
├── components/
├── layouts/
├── pages/
├── redux/
├── routes/
├── services/
├── assets/
├── hooks/
├── utils/
│
├── App.tsx
└── main.tsx
```

---

## Folder Explanation

### 📂 app/

Contains the Redux store configuration.

This folder acts as the central entry point for global application state and combines all Redux slices into a single store used throughout the application.

---

### 📂 components/

Contains reusable UI components shared across multiple pages.

Examples include:

- Navbar
- Sidebar
- Contact Cards
- Dashboard Cards
- Charts Components
- Map Components
- Loading Components

Using reusable components minimizes duplicate code and improves maintainability.

---

### 📂 layouts/

Contains shared page layouts.

Instead of repeating navigation bars and page wrappers on every page, layouts provide a consistent structure across the application.

For example:

- MainLayout
- Dashboard Layout

---

### 📂 pages/

Contains all application pages mapped through React Router.

Each page represents a complete screen within the application.

Examples include:

- Login
- Register
- Dashboard
- Contacts
- Add Contact
- Edit Contact
- Contact Details
- Charts
- Maps

---

### 📂 redux/

Contains Redux Toolkit slices responsible for global application state.

Examples:

- Authentication State
- Contact State

Redux ensures data remains synchronized across multiple components without excessive prop drilling.

---

### 📂 routes/

Contains route configuration and protected route handling.

Responsibilities include:

- Public Routes
- Protected Routes
- Route Authentication
- Navigation Control

This ensures that unauthorized users cannot access restricted pages.

---

### 📂 services/

Contains all API communication logic.

Instead of writing Axios requests inside React components, every API request is organized into dedicated service files.

Examples include:

- Authentication APIs
- Contact APIs
- COVID APIs

This keeps UI components clean and separates presentation from business logic.

---

### 📂 assets/

Stores static resources used by the application.

Examples include:

- Images
- Icons
- Logos
- Other media assets

---

### 📂 hooks/

Contains custom React hooks used to share reusable logic between components.

Although only a few hooks are currently required, maintaining a dedicated folder allows the project to scale cleanly as additional functionality is introduced.

---

### 📂 utils/

Contains helper functions and reusable utility methods that simplify common operations across the application.

Examples may include:

- Data formatting
- Validation helpers
- Common utility functions

---

### App.tsx

Acts as the root application component.

It defines the application's routing structure and serves as the main entry point for rendering pages.

---

### main.tsx

Initializes the React application.

Responsibilities include:

- Rendering React
- Configuring Redux Provider
- Configuring React Query Provider
- Loading global styles

---

# Backend Structure

The backend is developed using **Express.js** and **TypeScript** while following a layered architecture. Each folder has a clearly defined responsibility, ensuring business logic remains organized and easy to maintain.

```text
backend/
│
├── src/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
│
├── app.ts
└── server.ts
```

---

## Folder Explanation

### 📂 config/

Contains configuration files required by the application.

For example:

- MongoDB database connection
- Environment configuration

Keeping configuration separate improves maintainability and simplifies deployment.

---

### 📂 controllers/

Contains the application's business logic.

Controllers process incoming requests, interact with database models, and return appropriate responses.

Examples include:

- Authentication Controller
- Contact Controller

---

### 📂 middleware/

Contains middleware functions executed before requests reach the controllers.

Responsibilities include:

- JWT Authentication
- Request Validation
- Authorization

Middleware improves code reusability while keeping controllers focused on business logic.

---

### 📂 models/

Contains Mongoose models representing database collections.

Examples include:

- User Model
- Contact Model

These models define the schema and validation rules for data stored in MongoDB Atlas.

---

### 📂 routes/

Defines all REST API endpoints exposed by the backend.

Examples include:

- Authentication Routes
- Contact Routes

Routes connect incoming requests to their corresponding controllers.

---

### 📂 utils/

Contains reusable helper functions used throughout the backend.

Examples include:

- JWT Token Generation
- Common helper methods

---

### app.ts

Initializes the Express application.

Responsibilities include:

- Registering middleware
- Configuring routes
- Parsing JSON requests
- Enabling CORS

---

### server.ts

Acts as the application's entry point.

It starts the Express server and establishes the MongoDB database connection before accepting incoming requests.

---

## Project Organization Principles

While developing this application, emphasis was placed on maintaining a clean and scalable project structure.

The project follows several important software engineering principles:

- Separation of Concerns
- Modular Architecture
- Reusable Components
- Clear Folder Organization
- Centralized API Communication
- Maintainable State Management
- Scalable Backend Design

Following these principles makes the codebase easier to navigate, simplifies future feature development, and improves long-term maintainability.


# 🛠️ Technology Stack

The project was developed using a modern full-stack technology stack, with each technology selected based on its role in building a secure, scalable, and maintainable web application.

Rather than relying on a single framework, the application combines multiple technologies that work together to provide authentication, state management, API communication, data visualization, and cloud deployment.

---

## Frontend Technologies

| Technology | Purpose | Why It Was Chosen |
|------------|---------|-------------------|
| **React 19** | Building the user interface | React's component-based architecture makes the application modular, reusable, and easy to maintain. |
| **TypeScript** | Type-safe development | Improves code quality by providing static type checking, reducing runtime errors, and making the codebase easier to maintain. |
| **Bootstrap 5** | Responsive UI Design | Used to create a clean, responsive, and mobile-friendly interface quickly with a consistent design system. |
| **React Router DOM** | Client-side Routing | Handles navigation between pages while protecting authenticated routes without reloading the application. |
| **Redux Toolkit** | Global State Management | Manages application-wide state such as user authentication and contact information, ensuring consistency across components. |
| **TanStack React Query** | Server State Management | Fetches and caches COVID-19 data efficiently while automatically managing loading states, caching, and background updates. |
| **Axios** | HTTP Client | Simplifies communication between the frontend and backend through REST API requests. |
| **Recharts** | Data Visualization | Displays historical COVID-19 statistics using responsive and interactive charts. |
| **React Leaflet** | Interactive Maps | Visualizes country-wise COVID-19 statistics on an interactive world map using map markers and popups. |
| **Lucide React** | Icons | Provides lightweight and consistent icons throughout the application interface. |

---

## Backend Technologies

| Technology | Purpose | Why It Was Chosen |
|------------|---------|-------------------|
| **Node.js** | JavaScript Runtime | Provides a fast and scalable runtime environment for building the backend application. |
| **Express.js** | REST API Framework | Simplifies API development with lightweight routing, middleware support, and modular architecture. |
| **TypeScript** | Backend Development | Ensures type safety and improves maintainability across backend modules. |
| **MongoDB Atlas** | Cloud Database | Stores user accounts and contact information securely while providing a fully managed cloud database. |
| **Mongoose** | Object Data Modeling (ODM) | Simplifies interactions with MongoDB by defining schemas, validation rules, and database models. |
| **JSON Web Token (JWT)** | Authentication | Secures protected routes by generating and validating authentication tokens after successful login. |
| **bcrypt** | Password Security | Encrypts user passwords before storing them in the database, ensuring sensitive data remains secure. |

---

## External APIs

The application integrates with the **Disease.sh API** to display real-time COVID-19 statistics.

| API Endpoint | Purpose |
|--------------|---------|
| **/v3/covid-19/all** | Retrieves worldwide COVID-19 statistics. |
| **/v3/covid-19/countries** | Retrieves country-wise COVID-19 data for the interactive map. |
| **/v3/covid-19/historical/all** | Retrieves historical case data used to generate the line chart. |

Using a live public API ensures that users always view the latest available COVID-19 statistics without requiring the application to store or manually update this data.

---

## Development Tools

| Tool | Purpose |
|------|---------|
| **Visual Studio Code** | Primary code editor used during development. |
| **Git & GitHub** | Version control and source code management. |
| **Postman** | Testing and validating backend REST APIs. |
| **MongoDB Atlas** | Cloud-hosted database service. |
| **Vercel** | Frontend deployment platform. |
| **Render** | Backend deployment platform. |

---

## Technology Selection

Each technology was selected to solve a specific problem within the application rather than simply adding additional libraries.

- **React** provides a modular component-based architecture for building reusable user interfaces.
- **TypeScript** improves code reliability and maintainability by introducing static typing.
- **Redux Toolkit** centralizes application state, making authentication and contact management predictable.
- **React Query** efficiently handles asynchronous server data, reducing unnecessary API requests through intelligent caching.
- **Express.js** provides a lightweight and flexible backend framework for implementing RESTful APIs.
- **MongoDB Atlas** offers a scalable cloud database solution for storing application data.
- **JWT** secures protected routes by enabling stateless authentication.
- **Bootstrap 5** ensures a responsive and consistent user experience across desktop, tablet, and mobile devices.

Together, these technologies form a complete full-stack ecosystem that demonstrates modern web development practices while maintaining scalability, security, and code maintainability.

# 🗄️ Database Design

The application uses **MongoDB Atlas** as its primary database to securely store user accounts and contact information.

MongoDB was chosen because of its flexible document-based structure, easy integration with Mongoose, and scalability for modern web applications. Instead of storing data in multiple relational tables, MongoDB stores information as JSON-like documents, making it well suited for applications developed with JavaScript and TypeScript.

The database consists of two primary collections:

- **Users**
- **Contacts**

Every contact belongs to a specific authenticated user, ensuring complete data isolation and security.

---

# Database Relationship

```text
             ┌─────────────────────┐
             │       Users         │
             ├─────────────────────┤
             │ _id                 │
             │ name                │
             │ email               │
             │ password (hashed)   │
             │ createdAt           │
             │ updatedAt           │
             └─────────┬───────────┘
                       │
                 One User
                       │
                       │
                       ▼
              Many Contacts
                       │
             ┌─────────────────────┐
             │      Contacts       │
             ├─────────────────────┤
             │ _id                 │
             │ firstName           │
             │ lastName            │
             │ email               │
             │ phone               │
             │ company             │
             │ address             │
             │ status              │
             │ user (ObjectId)     │
             │ createdAt           │
             │ updatedAt           │
             └─────────────────────┘
```

---

## User Collection

The **Users** collection stores authentication-related information for every registered user.

Each document represents a unique account within the application.

### User Schema

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Unique identifier generated by MongoDB. |
| `name` | String | Full name of the registered user. |
| `email` | String | Unique email address used for authentication. |
| `password` | String | Password encrypted using **bcrypt** before storage. |
| `createdAt` | Date | Automatically records when the account was created. |
| `updatedAt` | Date | Tracks the latest modification time. |

---

## Contact Collection

The **Contacts** collection stores personal and professional contact information created by authenticated users.

Every contact document contains a reference to the owner using the **user** field.

### Contact Schema

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Unique identifier for the contact. |
| `firstName` | String | Contact's first name. |
| `lastName` | String | Contact's last name. |
| `email` | String | Contact's email address. |
| `phone` | String | Contact's phone number. |
| `company` | String | Organization or company name. |
| `address` | String | Residential or office address. |
| `status` | String | Indicates whether the contact is Active or Inactive. |
| `user` | ObjectId | Reference to the authenticated user who owns the contact. |
| `createdAt` | Date | Timestamp when the contact was created. |
| `updatedAt` | Date | Timestamp of the latest update. |

---

## Relationship Between Users and Contacts

The application follows a **One-to-Many (1:N)** relationship.

- One registered user can create multiple contacts.
- Every contact belongs to exactly one authenticated user.
- Contact ownership is maintained using the `user` ObjectId reference.
- Backend APIs automatically filter contacts based on the logged-in user's ID, ensuring users can only access and manage their own records.

This relationship provides complete data isolation and prevents unauthorized access to another user's contacts.

---

## Data Security

Several security measures are implemented to protect user data:

- User passwords are encrypted using **bcrypt** before being stored in MongoDB.
- Authentication is handled using **JSON Web Tokens (JWT)**.
- Protected API endpoints require a valid JWT before processing requests.
- Contact operations are restricted to the authenticated user's records.
- Sensitive information such as passwords is never returned in API responses.

---

## Why MongoDB Atlas?

MongoDB Atlas was selected because it provides a fully managed cloud database with excellent integration for Node.js applications.

Some advantages include:

- Flexible document-based storage.
- Easy integration with Mongoose.
- Automatic scalability.
- Cloud-hosted database with minimal setup.
- Secure connection using environment variables.
- Suitable for handling structured and semi-structured data.

Using MongoDB Atlas allowed the project to focus on application development without managing database infrastructure while maintaining a secure and scalable backend.

# 🔐 Authentication & Authorization Workflow

Authentication is the foundation of the ContactHub application. Every protected feature—including contact management, dashboard access, and user-specific data—is accessible only after successful user authentication.

The application uses **JSON Web Tokens (JWT)** to implement stateless authentication. Once a user successfully logs in, the backend generates a signed JWT, which is securely stored in the browser's Local Storage. This token is automatically included in every protected API request, allowing the server to verify the user's identity before processing the request.

Passwords are never stored in plain text. Before saving user credentials, the backend encrypts passwords using **bcrypt**, ensuring that sensitive information remains protected even if the database is compromised.

---

# Authentication Lifecycle

The following diagram illustrates the complete authentication process from user registration to logout.

```text
                    User Opens Application
                              │
                              ▼
                 Register or Login Page
                              │
                 User Enters Credentials
                              │
                              ▼
                  Backend Validation
                              │
          ┌───────────────────┴───────────────────┐
          │                                       │
          ▼                                       ▼
   Registration Flow                        Login Flow
          │                                       │
 Hash Password (bcrypt)              Verify Password (bcrypt)
          │                                       │
          ▼                                       ▼
     Save User                          Generate JWT Token
          │                                       │
          └───────────────────┬───────────────────┘
                              │
                              ▼
                  Return JWT to Frontend
                              │
                              ▼
              Store Token in Local Storage
                              │
                              ▼
               Access Protected Application
                              │
                 Attach JWT with API Requests
                              │
                              ▼
          JWT Middleware Verifies the Token
                              │
          ┌───────────────────┴───────────────────┐
          │                                       │
          ▼                                       ▼
     Token Valid                         Token Invalid
          │                                       │
          ▼                                       ▼
 Continue Request                    Return 401 Unauthorized
                              │
                              ▼
                           Logout
                              │
                    Remove Stored Token
                              │
                              ▼
                    Redirect to Login Page
```

---

# Registration Flow

When a new user registers, the application performs several validation and security checks before creating an account.

### Step 1 – User Submission

The user enters:

- Full Name
- Email Address
- Password

The frontend validates the input before sending the request to the backend.

---

### Step 2 – Backend Validation

The backend verifies:

- Required fields are present.
- Email address is unique.
- Request data is valid.

If validation fails, an appropriate error message is returned to the frontend.

---

### Step 3 – Password Encryption

Before storing the account, the password is encrypted using **bcrypt**.

Instead of saving the original password, only the hashed version is stored inside MongoDB Atlas.

This significantly improves security by preventing passwords from being exposed even if database records are compromised.

---

### Step 4 – Store User Information

After successful encryption, the user document is created in MongoDB Atlas.

The stored information includes:

- Name
- Email
- Encrypted Password
- Created Timestamp
- Updated Timestamp

The account is now ready for authentication.

---

# Login Flow

After registration, users can authenticate using their registered email and password.

### Step 1 – Credential Verification

The frontend sends the login request to the backend.

The backend retrieves the corresponding user from MongoDB Atlas and compares the submitted password with the stored bcrypt hash.

If the credentials are incorrect, authentication is rejected.

---

### Step 2 – JWT Generation

Once authentication succeeds, the backend generates a signed **JSON Web Token (JWT)**.

The token contains the authenticated user's unique identifier, allowing future requests to identify the user without repeatedly checking login credentials.

The backend returns:

- JWT Token
- User Information

to the frontend.

---

### Step 3 – Session Persistence

The frontend stores the JWT in **Local Storage**.

Whenever the application is refreshed, the stored token is reused to maintain the user's authenticated session.

This allows users to continue using the application without logging in again after every page refresh.

---

# Authorization of Protected Routes

Authentication alone is not sufficient. The application also verifies whether users are authorized to access protected resources.

Whenever a protected API endpoint is accessed:

1. The frontend automatically includes the JWT in the `Authorization` header.
2. The backend authentication middleware extracts the token.
3. The token signature is verified.
4. The authenticated user's ID is attached to the request.
5. Controllers use this user ID to retrieve or modify only the authenticated user's data.

This ensures complete isolation between user accounts.

For example:

- User A cannot view User B's contacts.
- User A cannot edit User B's contacts.
- User A cannot delete User B's contacts.

Every operation is performed only on resources owned by the authenticated user.

---

# Logout Process

Logging out securely ends the authenticated session.

The application performs the following steps:

- Removes the stored JWT from Local Storage.
- Clears authentication data maintained by Redux Toolkit.
- Redirects the user to the Login page.
- Prevents access to protected routes until the user logs in again.

This guarantees that previously authenticated sessions cannot continue after logout.

---

# Security Considerations

Several security practices were followed while implementing authentication:

- Passwords are encrypted using **bcrypt** before being stored.
- JWT is used for stateless authentication.
- Protected APIs require a valid authentication token.
- User-specific resources are filtered using the authenticated user's ID.
- Passwords are never included in API responses.
- Authentication logic is separated into dedicated middleware, keeping controllers clean and maintainable.

---

## Authentication Summary

The authentication system was designed to provide a secure and seamless user experience while following common backend development practices.

By combining **bcrypt**, **JWT**, protected middleware, and user-specific authorization, the application ensures that authentication remains secure, scalable, and easy to maintain as the project grows.

# 📞 Contact Management Module

The Contact Management module is the core functionality of the ContactHub application. It enables authenticated users to securely create, organize, update, search, and delete their personal contacts.

The module was designed following the principles of **secure data ownership**, **state consistency**, and **responsive user interaction**. Every contact operation is performed only after successful authentication, ensuring that users can access and manage only their own data.

The frontend and backend communicate through REST APIs, while Redux Toolkit manages the application's contact state to provide a smooth and responsive user experience.

---

# Contact Lifecycle

Every contact follows a simple lifecycle within the application.

```text
                  User Login
                      │
                      ▼
             Contacts Dashboard
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
  Add Contact   View Contacts   Search Contacts
        │             │
        ▼             ▼
 MongoDB Atlas   Select Contact
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
    Edit Contact          Delete Contact
          │                       │
          └───────────┬───────────┘
                      ▼
              Updated Contact List
```

---

# Contact Information

Each contact represents an individual record that stores both personal and professional information.

The application currently maintains the following details for every contact:

| Field | Description |
|--------|-------------|
| First Name | Contact's first name |
| Last Name | Contact's last name |
| Email | Email address |
| Phone | Mobile or telephone number |
| Company | Organization or company name |
| Address | Residential or office address |
| Status | Active / Inactive |

This information provides a structured way to organize contacts while remaining flexible enough for future enhancements.

---

# Create Contact

Users can add a new contact through a dedicated form available after authentication.

When the user submits the form:

1. The frontend validates the entered information.
2. The request is sent to the backend using Axios.
3. JWT middleware verifies the user's identity.
4. The backend creates the contact in MongoDB Atlas.
5. Redux Toolkit updates the application state.
6. The updated contact list is displayed immediately.

This process ensures that newly created contacts become available without requiring a page refresh.

---

# View Contacts

After successful authentication, the Contacts page retrieves all contacts associated with the logged-in user.

The backend filters contact records using the authenticated user's ID, ensuring complete separation between different user accounts.

The frontend presents the data in a clean, responsive layout that allows users to quickly browse and manage their contacts.

---

# View Contact Details

Each contact can be viewed individually through a dedicated details page.

Instead of displaying all information within the contact list, detailed information is shown on a separate screen, making the interface cleaner and easier to navigate.

The details page displays the complete information associated with the selected contact.

---

# Update Contact

Existing contacts can be modified whenever information changes.

When editing a contact:

- The existing data is retrieved from the backend.
- The edit form is automatically populated.
- Users update only the required fields.
- The modified information is sent back to the backend.
- MongoDB updates the document.
- Redux synchronizes the latest data with the user interface.

This ensures that changes are immediately reflected throughout the application.

---

# Delete Contact

Contacts that are no longer required can be permanently removed.

The deletion process follows these steps:

1. User selects the delete option.
2. Backend verifies ownership of the contact.
3. Contact is removed from MongoDB.
4. Redux updates the contact list.
5. The user interface refreshes automatically.

This prevents deleted contacts from remaining visible without requiring manual refresh.

---

# Search Functionality

As the number of contacts grows, locating a specific contact becomes increasingly important.

To improve usability, the application includes a search feature that filters contacts based on user input.

Users can quickly search contacts using relevant information such as names or email addresses, allowing faster access without scrolling through the entire list.

The search updates dynamically as the user types, creating a smooth and responsive experience.

---

# Contact Data Flow

The following diagram illustrates how contact information moves through the application.

```text
             User Interaction
                    │
                    ▼
          React Contact Component
                    │
                    ▼
             Redux Toolkit Store
                    │
                    ▼
             Axios HTTP Request
                    │
                    ▼
             Express REST API
                    │
                    ▼
        JWT Authentication Middleware
                    │
                    ▼
           Contact Controller
                    │
                    ▼
             MongoDB Atlas
                    │
                    ▼
          Updated Contact Data
                    │
                    ▼
              Redux Store
                    │
                    ▼
          User Interface Updates
```

---

# State Management

Redux Toolkit is responsible for maintaining the application's contact state.

Instead of repeatedly requesting data from the backend after every operation, Redux stores contact information centrally and updates the interface whenever changes occur.

This approach provides several advantages:

- Predictable state updates
- Reduced unnecessary API calls
- Faster user interactions
- Simplified data sharing between components
- Improved application scalability

---

# Security Considerations

Since contacts contain user-specific information, several security measures have been implemented.

- Every contact is linked to its owner through the authenticated user's ID.
- JWT middleware protects all contact-related endpoints.
- Users can only create, update, or delete their own contacts.
- Unauthorized requests are rejected before reaching the controller.
- Sensitive operations are handled entirely on the backend.

These measures ensure data privacy while maintaining a secure user experience.

---

# Module Summary

The Contact Management module forms the foundation of the ContactHub application.

By combining secure authentication, RESTful APIs, Redux Toolkit, and MongoDB Atlas, the module provides a complete solution for managing personal contacts while maintaining clean architecture, predictable state management, and secure data access.

# 📊 COVID-19 Analytics Module

In addition to contact management, the application includes a **COVID-19 Analytics Dashboard** that visualizes real-time and historical pandemic data. This module demonstrates the integration of external REST APIs with modern frontend technologies to transform raw data into meaningful insights.

Unlike the Contact Management module, which retrieves user-specific data from the application's backend, this dashboard consumes public data from the **Disease.sh API**. Since the data is dynamic and frequently updated, it is fetched directly from the external API instead of being stored in MongoDB.

The dashboard provides users with a visual representation of worldwide COVID-19 trends through interactive charts, making complex datasets easier to understand.

---

# Module Objectives

The COVID-19 Analytics module was designed with the following objectives:

- Display live worldwide COVID-19 statistics.
- Visualize historical case trends over time.
- Integrate a third-party REST API.
- Demonstrate asynchronous data fetching.
- Provide responsive and interactive data visualization.
- Showcase efficient server-state management using React Query.

---

# Data Source

All COVID-19 statistics are retrieved from the **Disease.sh API**, a public REST API that provides real-time pandemic data.

The application consumes multiple endpoints depending on the information being displayed.

| Endpoint | Purpose |
|----------|---------|
| `/v3/covid-19/all` | Retrieves worldwide COVID-19 statistics. |
| `/v3/covid-19/historical/all` | Retrieves historical worldwide case data used for chart visualization. |

Since the data is maintained by the API provider, the application always displays the latest available statistics without requiring manual updates.

---

# Data Fetching Process

The application uses **TanStack React Query** to manage communication with the Disease.sh API.

Instead of manually managing loading states and caching using React state, React Query provides a more efficient and scalable solution for handling asynchronous server data.

The overall data fetching process is illustrated below.

```text
Disease.sh API
        │
        ▼
React Query
        │
Automatic Caching
        │
Loading & Error Handling
        │
        ▼
Processed Chart Data
        │
        ▼
Recharts Components
        │
        ▼
Interactive Dashboard
```

---

# Why React Query?

The COVID-19 statistics are external data that frequently change over time.

For this reason, React Query was selected instead of Redux Toolkit.

React Query provides several built-in capabilities that simplify working with server-side data:

- Automatic caching of API responses.
- Background data synchronization.
- Built-in loading state management.
- Error handling for failed requests.
- Reduced unnecessary API calls.
- Cleaner and more maintainable code.

Using React Query allows the application to focus on displaying data while the library manages the complexity of fetching and synchronizing server state.

---

# Data Visualization

Once the API response is received, the historical case data is transformed into a format compatible with **Recharts**.

The processed dataset is then rendered as an interactive line chart, allowing users to observe changes in worldwide COVID-19 cases over time.

The chart is fully responsive and automatically adjusts to different screen sizes, ensuring a consistent experience across desktop, tablet, and mobile devices.

The chart includes:

- Historical case trends.
- Responsive layout.
- Interactive tooltips.
- Clearly labeled axes.
- Smooth line visualization.

These visual elements help users understand data trends more effectively than viewing raw numerical values.

---

# Component Workflow

The following diagram illustrates how data flows through the analytics module.

```text
Disease.sh API
        │
        ▼
React Query
        │
Axios Service
        │
        ▼
Process API Response
        │
        ▼
Transform Data
        │
        ▼
Recharts Line Chart
        │
        ▼
Display Analytics Dashboard
```

---

# User Experience

The dashboard was designed to provide a simple and intuitive experience.

When users navigate to the Charts page:

1. React Query automatically requests the required data.
2. A loading state is displayed while data is being fetched.
3. The API response is processed and formatted.
4. The chart is rendered dynamically.
5. Users can hover over individual points to view detailed information for specific dates.

This process happens seamlessly without requiring manual page refreshes.

---

# Error Handling

To improve reliability, the module includes basic error handling during API communication.

If the external API is temporarily unavailable or the network request fails:

- Loading indicators prevent blank screens.
- Errors are handled gracefully.
- The application remains stable without crashing.

This ensures a better user experience even under unexpected network conditions.

---

# Why Recharts?

Recharts was selected because it integrates naturally with React and provides responsive chart components with minimal configuration.

Its advantages include:

- Declarative React components.
- Responsive containers.
- Interactive tooltips.
- Clean visual appearance.
- Lightweight implementation.
- Easy customization.

These features make Recharts well suited for building dashboards that remain responsive across different devices.

---

# Module Summary

The COVID-19 Analytics module demonstrates how modern React applications can integrate with third-party APIs to present real-time information in a meaningful and interactive way.

By combining **React Query**, **Axios**, and **Recharts**, the application efficiently retrieves, manages, and visualizes live COVID-19 data while maintaining a responsive and user-friendly experience.

# 🔌 API Layer & Communication

The ContactHub application follows a **RESTful API architecture**, where the frontend and backend operate as separate applications and communicate using HTTP requests. This separation allows the user interface and server-side logic to evolve independently while maintaining a clean and scalable architecture.

The frontend communicates with the backend using **Axios**, while the backend exposes REST endpoints built with **Express.js**. All protected endpoints require a valid **JSON Web Token (JWT)** to ensure that only authenticated users can access or modify their data.

For COVID-19 analytics, the application communicates directly with the **Disease.sh API**, as the data is public and does not require authentication.

---

## API Architecture

```text
                  React Frontend
                         │
                         │
                 Axios HTTP Requests
                         │
        ┌────────────────┴────────────────┐
        │                                 │
        ▼                                 ▼
 Express Backend API              Disease.sh API
        │                                 │
 JWT Authentication               Public COVID Data
        │
        ▼
 MongoDB Atlas
```

---

## Backend API Endpoints

The backend provides RESTful APIs for authentication and contact management.

### Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user. |
| POST | `/api/auth/login` | Authenticate user and generate JWT. |

---

### Contact APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/contacts` | Retrieve all contacts belonging to the authenticated user. |
| GET | `/api/contacts/:id` | Retrieve details of a specific contact. |
| POST | `/api/contacts` | Create a new contact. |
| PUT | `/api/contacts/:id` | Update an existing contact. |
| DELETE | `/api/contacts/:id` | Delete a contact. |

---

## API Request Lifecycle

Every request follows a consistent lifecycle to ensure security and maintainability.

```text
User Action
      │
      ▼
React Component
      │
      ▼
Axios Service
      │
      ▼
Express Route
      │
      ▼
Authentication Middleware
      │
      ▼
Controller
      │
      ▼
MongoDB Atlas
      │
      ▼
JSON Response
      │
      ▼
Redux / React Query
      │
      ▼
Updated User Interface
```

---

## Service Layer

Rather than calling APIs directly from React components, all HTTP requests are organized inside dedicated **service files**.

Examples include:

- `authService.ts`
- `contactService.ts`
- `covidService.ts`

This approach provides several advantages:

- Keeps components clean and focused on UI.
- Centralizes API logic in one place.
- Makes endpoints easier to maintain.
- Reduces duplicate code.
- Simplifies future API modifications.

---

## Authentication in API Requests

After a successful login, the backend returns a JWT.

For every protected request, the frontend automatically includes the token in the `Authorization` header.

```http
Authorization: Bearer <JWT_TOKEN>
```

The backend verifies the token before allowing access to protected resources.

If the token is missing or invalid, the server responds with **401 Unauthorized**, preventing unauthorized access.

---

## Error Handling

The application handles API errors gracefully to provide a better user experience.

Examples include:

- Invalid login credentials.
- Unauthorized requests.
- Validation errors.
- Server-side errors.
- Network failures.

Appropriate error messages are displayed to users while preventing application crashes.

---

## Why REST APIs?

REST architecture was selected because it provides:

- Clear separation between frontend and backend.
- Stateless communication using HTTP.
- Easy integration with third-party services.
- Scalable application design.
- Standardized request and response formats.

This architecture allows both the frontend and backend to be developed, tested, and deployed independently while maintaining reliable communication through well-defined API endpoints.

---

## API Layer Summary

The API layer acts as the communication bridge between the user interface, backend services, database, and external APIs.

By organizing API requests into dedicated service files and securing protected endpoints using JWT authentication, the application maintains a clean architecture that is easy to understand, extend, and maintain.

# 🚧 Challenges Faced

Developing ContactHub involved several practical challenges that required careful planning and problem-solving. These challenges provided valuable experience in building and deploying a full-stack application.

### Secure Authentication

Implementing JWT-based authentication required careful handling of user sessions, protected routes, and authorization. Ensuring that only authenticated users could access protected resources while maintaining session persistence across page refreshes was one of the key challenges.

---

### Synchronizing Client and Server Data

Managing contact data efficiently required synchronization between the frontend and backend. Redux Toolkit was used to keep the user interface consistent after creating, updating, or deleting contacts without requiring unnecessary page reloads.

---

### Integrating External APIs

The COVID-19 dashboard consumes live data from the Disease.sh API. Handling asynchronous requests, loading states, and potential API failures while maintaining a responsive user experience required careful implementation.

---

### Interactive Map Rendering

Displaying country-wise COVID-19 statistics on an interactive world map involved dynamically generating markers from API data. Managing a large number of markers while maintaining smooth performance required efficient rendering.

---

### Responsive User Interface

Designing a user interface that worked consistently across desktop, tablet, and mobile devices required thoughtful use of Bootstrap's responsive grid system and layout utilities.

---

### Deployment

Deploying the frontend and backend as separate applications introduced challenges related to API communication, CORS configuration, environment variables, and backend startup delays associated with Render's free hosting tier.

---

Each of these challenges contributed to a better understanding of modern full-stack application development and reinforced the importance of writing modular, maintainable, and scalable code.

# 👨‍💻 Author

**Manish Kashyap**

B.Tech – Computer Science Engineering (AI & ML)  
Parul University
