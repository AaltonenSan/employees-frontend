# Pipedrive Employee and Tribe Info Web Application

This web application provides information about Pipedrive's employees and tribes. It consists of two main pages: one for managing employee data and another for viewing tribe information. Users can add, update, and delete employee records on the first page, while the second page is read-only and displays details about tribes.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites:

- [Docker](https://www.docker.com/get-started) installed on your system.


### Installation

1. Clone the repository to your local machine:
2. Build and start the application using Docker. First open Docker desktop application. Then run:
 
`docker-compose build` and 
`docker-compose up`

3. This command will build both the frontend (built with React) and backend containers and start the application. The webpage should be accessible at http://localhost:3000.
If the webpage is not opened automatically, open your web browser and go to http://localhost:3000 to access the application.

## Usage
The first page of the application allows you to manage employee data, including adding, updating, and deleting employee records.
The second page provides read-only information about tribes.
