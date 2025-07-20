BlogApp – React Router Based Application

Overview

BlogApp is a single-page React application built using React Router. It simulates a multi-page experience by navigating between components without reloading the browser. The application demonstrates dynamic routing, nested routes, data fetching using loader hooks, error handling, and interaction with a mock backend using JSON Server.

Live Demo

GitHub Pages: (https://tuhin2222001.github.io/BlogApp/#/)

Repository

GitHub Repo: (https://github.com/Tuhin2222001/BlogApp)

Key Concepts Implemented: 

1. React Router Integration

The application uses React Router to manage routes and navigation within the SPA. It enables a seamless experience where the browser URL updates and appropriate components are rendered without full page reloads.

2. Navigation

Link and NavLink components are used in the navigation bar. NavLink is specifically used to apply active styling to the currently selected page, improving user feedback and usability.

3. Programmatic Navigation

4. useNavigate hook is used to navigate programmatically between routes. For instance, in the Contact or About page, the user can be navigated back to the Home page using navigation buttons or actions.

5. Nested Routing

Nested routes are implemented inside the Contact component. Two subcomponents, Contact Info and Contact Form, are loaded dynamically based on the nested route paths such as /contact/info and /contact/form. This provides a clear structure and modular routing hierarchy.

6. Loader Hook Usage

Instead of manually fetching data using useParams and useEffect, the application uses loader hooks for the Jobs page. This allows the app to preload job data during route resolution, offering a better user experience and simplifying data management.

7. Error Handling

Error boundaries are implemented for both general routes (such as Contacts, About, Products) and dynamic routes (such as Jobs). If an invalid job ID is accessed (e.g., ID outside 1 to 5 or an invalid string like 'xyz'), the application gracefully displays an error message instead of crashing.

8. Mock Backend with JSON Server

A mock backend is created using JSON Server. The data resides in the /data folder and acts as a fake API. This simulates a real-world backend connection. Data fetching is enabled only when the local server is running.

**Command to Start Server**

npx json-server --watch data.json --port 5000

Only when this server is running, the application can fetch and display job-related data. On GitHub Pages, since there's no backend running, the Jobs data will not be visible.

**Conclusion**

This BlogApp project showcases a solid understanding of client-side routing with React Router, including advanced patterns like nested routing and route-based data loading. It also demonstrates good error handling practices and mimics backend integration using a local server setup. This structure makes it scalable and adaptable for future API integrations or larger projects.

