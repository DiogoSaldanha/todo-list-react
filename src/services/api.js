import axios from "axios";

const API_URL = 'http://localhost:8080/api/tasks';

//Getting all the tasks
export const getTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error while fetching tasks: ", error);
        throw error;
    }
};

//Adding new tasks
export const addTask = async (description) => {
    try {
        await axios.post(API_URL, { description });
    } catch (error) {
        console.error("Error while adding a Task: ", error);
        throw error;
    }
};

//Deleting tasks
export const deleteTask = async (index) => {
    try {
        await axios.delete(`${API_URL}/${index}`)
    } catch (error) {
        console.error('Error while deleting a task: ', error);
        throw error;
    }
};

// Mark a task as completed
export const markTaskAsCompleted = async (index) => {
    try {
      await axios.put(`${API_URL}/${index}`);
    } catch (error) {
      console.error("Error marking task as completed:", error);
      throw error;
    }
};