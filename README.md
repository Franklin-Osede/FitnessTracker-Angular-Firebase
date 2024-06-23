# Fitness Tracker App

## Overview

The Fitness Tracker is a Single Page Application (SPA) developed using Angular, Angular Material, and Firebase. This application aims to provide users with a comprehensive platform for tracking and managing their fitness routines and progress.

## Features

- **Welcome Component**: A landing page that greets users.
- **Training Component**: This section allows users to:
  - Start new training sessions.
  - View current and past training sessions.
- **Authentication**: Users can sign up or log in to access their personalized experience.

## Project Structure

### Components

- **Welcome Component**: The initial screen that introduces users to the app.
- **Training Component**:
  - **Active Training Component**: Manage ongoing training sessions.
  - **New Training Component**: Start new training sessions.
  - **Past Training Summary Component**: Review completed training sessions.
- **Authentication**:
  - **Sign Up Component**: Allows new users to create an account.
  - **Sign In Component**: Enables existing users to log in.

### Services

- **Training Service**: Manages the data related to training sessions, interacting with Firebase to store and retrieve data.
- **Auth Service**: Handles authentication tasks, including user sign-up and sign-in processes.

### Models

- **Exercise Model**: Defines the data structure for exercises used in the training components.
- **User Model**: Describes the user data for authentication purposes.

## Quick Start

To get started with the Fitness Tracker App, follow these steps:

1. **Clone the repository**:
 
   git clone https://github.com/yourusername/fitness-tracker-app.git

   Navigate into the project directory:

cd fitness-tracker-app

Install dependencies:

npm install
Run the application:

ng serve

Open your browser and go to http://localhost:4200.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## Fork the Project 

Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.


Project Link: https://github.com/yourusername/fitness-tracker-app

### Notes:
- **Markdown Formatting**: Utilizes headers, lists, code blocks, and links to structure the README effectively.
- **Project Specific Details**: This template should be adjusted to fit the specifics of your project, such as links, project names, and specific technologies used.

This README format should provide a clear and structured overview of your project, making it accessible and understandable for potential users and contributors on GitHub.
