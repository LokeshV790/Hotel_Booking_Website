# Generic Hotel Booking Backend

This project serves as the backend implementation for a generic hotel booking website. It's developed using Node.js, Express.js, and MongoDB, providing a robust foundation for building hotel booking applications.

## Features

- **JWT Authentication**: Secure your endpoints with JSON Web Token (JWT) authentication for user authorization.
- **Express.js Framework**: Utilize the powerful Express.js framework for building scalable and efficient web applications.
- **MongoDB Integration**: Leverage MongoDB for data storage, ensuring flexibility and scalability for your application.
- **RESTful API**: Provides a RESTful API architecture for seamless communication between the frontend and backend components.
- **Modular Architecture**: The project is structured with modularity in mind, allowing for easy customization and extension of functionalities.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/LokeshV790/generic_hotel_booking_backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd generic_hotel_booking_backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Configure environment variables:

    - Create a `.env` file in the root directory.
    - Define environment variables such as `PORT`, `MONGODB_URI`, `JWT_SECRET`, etc.

5. Run the application:

    ```bash
    npm start
    ```

## Usage

- Ensure the backend server is running.
- Integrate the provided API endpoints with your frontend application to enable functionalities such as user authentication, hotel listing, booking management, etc.
- Utilize appropriate HTTP methods (GET, POST, PUT, DELETE) to interact with the API endpoints.

## API Endpoints

- **Authentication**:
  - `POST /api/auth/login`: User login with email and password.
  - `POST /api/auth/register`: User registration with email and password.
  
- **Hotels**:
  - `GET /api/hotels`: Retrieve list of hotels.
  - `POST /api/hotels`: Create a new hotel.
  - `GET /api/hotels/:id`: Retrieve details of a specific hotel.
  - `PUT /api/hotels/:id`: Update details of a specific hotel.
  - `DELETE /api/hotels/:id`: Delete a specific hotel.
  
- **Bookings**:
  - `GET /api/bookings`: Retrieve list of bookings.
  - `POST /api/bookings`: Make a new booking.
  - `GET /api/bookings/:id`: Retrieve details of a specific booking.
  - `PUT /api/bookings/:id`: Update details of a specific booking.
  - `DELETE /api/bookings/:id`: Cancel a specific booking.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the Node.js and MongoDB communities for providing excellent tools and resources.
- Inspiration drawn from various online tutorials, articles, and open-source projects.
