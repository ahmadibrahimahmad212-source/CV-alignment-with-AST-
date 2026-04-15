// alignmentService.js

const API_BASE_URL = 'https://api.yourservice.com'; // replace with your actual API endpoint

export const getAlignmentData = async (params) => {
    try {
        const response = await fetch(`${API_BASE_URL}/alignment`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch alignment data:', error);
        throw error;
    }
};

export const postAlignmentData = async (data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/alignment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Failed to post alignment data:', error);
        throw error;
    }
};

export const updateAlignmentData = async (id, data) => {
    try {
        const response = await fetch(`${API_BASE_URL}/alignment/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Failed to update alignment data:', error);
        throw error;
    }
};

export const deleteAlignmentData = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/alignment/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return true;
    } catch (error) {
        console.error('Failed to delete alignment data:', error);
        throw error;
    }
};