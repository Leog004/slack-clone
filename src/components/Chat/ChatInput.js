import React, { useRef } from 'react'
import { ChatInputContainer } from './styledChat'
import { Button } from '@mui/material'
import { db, auth } from '../../firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { useAuthState } from 'react-firebase-hooks/auth';


const ChatInput = ({channelName, channelId, chatRef}) => {

    const [user] = useAuthState(auth);
    const inputRef = useRef(null);

    const addMessage = async (channelId, inputRef) => {
        try {
          // Reference to the messages sub-collection
          const messagesRef = collection(db, 'rooms', channelId, 'messages');
          
          // Adding a new document to the collection
          await addDoc(messagesRef, {
            message: inputRef.current.value, // Assuming inputRef is a ref to your input element
            timestamp: serverTimestamp(), // Use Firebase server timestamp
            user: user?.displayName, // Replace with the user's name
            userImage: user?.photoURL,
          });

          chatRef.current.scrollIntoView({
            behavior: 'smooth',
          });

          inputRef.current.value = '';
      
          console.log("Message successfully added!");
        } catch (error) {
          console.error("Error adding message: ", error);
        }
      };

    const sendMessage = (e) => {
        e.preventDefault(); // Prevents the page from refreshing

        if (!channelId) {
            return false;
        }

        addMessage(channelId, inputRef);
    }

  return (
    <ChatInputContainer>
        <form>
            <input ref={inputRef} placeholder={`Message #${channelName}`} />
            <Button onClick={sendMessage} hidden type="submit">
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput