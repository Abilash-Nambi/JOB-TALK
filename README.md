## Job Talk

Job Talk is a full-featured job portal built with the MERN stack (MongoDB, Express, React, Node.js). It provides a seamless platform for candidates to find and apply for jobs, and for employers to post job listings and review applications. The application includes an admin dashboard for managing the entire system effectively. Whether you're looking to advance your career or find the perfect candidate, Job Talk simplifies the process with its intuitive and user-friendly interface.

## Technologies

- **Frontend:**
  - React (with Vite)
  - React Router
  - React Hook Form
  - Redux for global state management
  - React CountUp
  - Custom hooks (useLoader, useToast, useLocalStorage, useRouter, useScrollToTop)

- **Backend:**
  - Express.js
  - MongoDB
  - JWT for authentication

- **Others:**
  - Cloudinary (for image uploads and management)
  - **Razorpay (for payment processing)**

## Features

### Authentication
- Sign-up, log-in, and log-out functionalities
- Forgot password: password reset secured; the user will receive the OTP via email
- Admin login and dashboard: can control and see all jobs

### Employer
- Add job, edit job, review applications, delete job
- View their posted jobs
- Activate and deactivate job postings
- **Subscribe and make a one-time payment to post jobs**
- Job Talk offers multiple subscription plans

### Job Seekers
- Apply for jobs
- View their applications
- Delete applied applications

### Admin
- Control everything in the system
- Delete job postings
- View all active and inactive jobs
- User-friendly dashboard: can access everything from there

## Custom Hooks

- **useLoader**: Manages a global loader to provide a seamless loading experience across the application, improving user experience during data fetch operations.
- **useToast**: Displays short-lived, non-intrusive messages to inform users about actions and updates in a charming and user-friendly manner.
- **useLocalStorage**: Stores and retrieves data from the browser's local storage, ensuring persistent state across sessions and improving data management.
- **useRouter**: Facilitates navigation and redirection within the application, and provides easy access to the current path and parameters, enhancing routing capabilities.
- **useScrollToTop**: Automatically scrolls the page to the top on refresh, ensuring users have a consistent and pleasant browsing experience.

These custom hooks contribute to a smoother, more efficient, and user-friendly experience on Job Talk.

## Razorpay Payment Integration

**Job Talk includes integration with Razorpay for secure and efficient payment processing. Employers can subscribe and make one-time payments to post jobs, with multiple subscription plans available to suit different needs.**

---


