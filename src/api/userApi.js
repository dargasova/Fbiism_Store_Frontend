// src/api/userApi.js

export const getUsers = async () => {
    const response = await fetch('http://localhost:8080/users'); // адрес вашего Spring Boot API
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};
