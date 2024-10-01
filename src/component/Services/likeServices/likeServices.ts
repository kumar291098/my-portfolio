// src/services/likeService.ts

const API_BASE_URL = 'http://localhost:5000/likes';

// Fetch user like status from the database
export const fetchUserLikeStatus = async (email: string): Promise<{ status: number }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/status/${email}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user like status');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user like status:', error);
    throw error;
  }
};

// Fetch the like count for the page
export const fetchLikeCount = async (linkId: string): Promise<{ like_count: number }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/count/${linkId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch like count');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching like count:', error);
    throw error;
  }
};

// Update like status for the user
export const updateLikeStatus = async (email: string, linkId: string, status: boolean): Promise<void> => {
  try {
    await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, linkId, status }),
    });
  } catch (error) {
    console.error('Error updating like status:', error);
    throw error;
  }
};
