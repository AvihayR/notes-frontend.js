import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";


export const getNotes = async () => {
    try {
        const response = await axios.get(`${API_URL}/notes`)
        return response.data
    } catch (error) {
        console.error("There was an error fetching the data:", error)
        throw error
    }
}