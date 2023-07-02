## Hostel Management System

This is a full stack MERN project that involves a **client (Student)** and an **admin (Hostel Warden)** that can interact with each other. The student can address their issues that they face in their hostel and the warden can address those issues accordingly.

![Main Screen](https://i.postimg.cc/8P028NJv/image.png)

## Tech Stack
 - **Frontend:** NextJS, ReactJS, Material UI
 - **Backend:** Node JS, Express JS, Mongoose
 - **Database:** MongoDB
 - **Authentication:** Next-Auth
 - **Deployment:** Vercel. Click [here](https://hostel-management-system-mu.vercel.app/) to visit.

## Repository Structure

The entire project has been divided into three repositories:
- **Client(Student):** (This repository)
- **Admin(Hostel Warden):** [Hostel Management System - Admin](https://github.com/mayankjain25/Hostel-Management-System-Admin)
- **Backend:** [Hostel Management System - Backend](https://github.com/mayankjain25/Hostel-Management-System-Backend)

You can click any particular repository to navigate and browse the code for that particular repository.


## Features

- **Student Management**: Keep track of hostel residents, their personal information, and room allocation details.
- **Staff Management**: Keep records of hostel staff and their duties.
- **Complaints and Feedback**: Allow students to submit complaints and feedback.
- **Authentication and Authorization**: Secure access to different endpoints using authentication and authorization mechanisms.

## Deployment

- **Frontend:** https://hostel-management-system-mu.vercel.app/
- **Backend:** https://hms-backend-89o3.onrender.com/
- **Admin:** https://hostel-management-system-admin.vercel.app/

## Running on Local Machine

If you want to run this project on your local machine, please note the following:

### Prerequisites
 - Node JS (12.x and above)
 - A Mongo DB Database along with `MONGO_URI`
  
### Clone the repository

```bash
git clone https://github.com/mayankjain25/Hostel-Management-System
cd Hostel-Management-System
```

### Install Dependencies
```bash
npm install
```

### Edit `.env` file
With the Mongo DB cluster you just created, connect to it, and copy the MONGO_URI. It usually begins with `mongodb+srv://`
```bash
touch .env
```
Inside the `.env` file, copy this statement:
```MONGODB_URI:<your MONGODB URI here>``` 

### Start the dev environment
```bash
npm run dev
```

Wait for a few seconds for the program to compile. Once done, open **http://localhost:3000/** on your machine to browse the website.

## Contributing
Contributions are welcome! If you find any bugs or want to add new features, please open an issue or submit a pull request. Make sure to follow the project's coding style and guidelines.

## License
This project is licensed under the MIT License.

## Contributors
This project has been developed by [Mayank Jain](https://mayankjain25.netlify.app)
Feel free to contact me at jainmayank2509@gmail.com

May the force be with you!
