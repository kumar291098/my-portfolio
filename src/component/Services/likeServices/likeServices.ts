// src/services/likeService.ts
import { db } from '../../../firebaseConfig';
import { doc, setDoc, getDoc, collection, query, where, getDocs, DocumentData } from 'firebase/firestore';

// Function to fetch user like status from Firestore
export const fetchUserLikeStatus = async (email: string): Promise<{ status: number }> => {
  try {
    const q = query(collection(db, 'likes'), where('email', '==', email));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const userLikeData = snapshot.docs[0].data();
      console.log(userLikeData.status)
      return { status: userLikeData.status };
    }
    return { status: 0 }; // If no data found, return default status
  } catch (error) {
    console.error('Error fetching user like status:', error);
    throw error;
  }
};

// Function to fetch the like count for a specific linkId
export const fetchLikeCount = async (linkId: string): Promise<{ like_count: number }> => {
  try {
    const q = query(collection(db, 'likes'), where('link_id', '==', linkId), where('status', '==', true));
    const snapshot = await getDocs(q);
    return { like_count: snapshot.size }; // The size of the snapshot is the like count
  } catch (error) {
    console.error('Error fetching like count:', error);
    throw error;
  }
};

// Function to update like status for the user in Firestore
export const updateLikeStatus = async (email: string, linkId: string, status: boolean): Promise<void> => {
  try {
    // Use a combination of email and linkId as the document ID to ensure unique entries
    const likeDocRef = doc(db, 'likes', `${email}_${linkId}`);
    await setDoc(likeDocRef, {
      email,
      link_id: linkId,
      status,
      created_at: new Date(), // Store the current timestamp
    }, { merge: true }); // Use { merge: true } to only update the fields specified
  } catch (error) {
    console.error('Error updating like status:', error);
    throw error;
  }
};