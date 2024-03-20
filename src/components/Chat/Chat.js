import React, { useRef, useEffect } from 'react'
import { ChatContainer, Header, HeaderRight, HeaderLeft, ChatMessages, ChatBottom } from './styledChat'
import ChatInput from './ChatInput'
import Message from './Message'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';
import { doc, collection, query, orderBy } from "firebase/firestore";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { db } from '../../firebase'; // Make sure this is your initialized Firestore instance

const Chat = () => {
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);

    // For roomDetails
    const roomDetailsQuery = roomId ? doc(db, 'rooms', roomId) : null;
    const [roomDetails] = useDocument(roomDetailsQuery);

    // For roomMessages
    const roomMessagesQuery = roomId
        ? query(collection(db, 'rooms', roomId, 'messages'), orderBy('timestamp', 'asc'))
        : null;

    const [roomMessages, loading] = useCollection(roomMessagesQuery);

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth',
        });
    }, [roomId, loading]);

    return (
        <ChatContainer>
            {
                roomDetails && roomMessages && (
                    <>
                        <Header>
                            <HeaderLeft>
                                <h4>
                                    <strong>#{roomDetails?.data().name}</strong>
                                    <StarBorderOutlinedIcon />
                                </h4>
                            </HeaderLeft>
                            <HeaderRight>
                                <p>
                                    <InfoOutlinedIcon /> Details
                                </p>
                            </HeaderRight>
                        </Header><ChatMessages>
                            {/* List out the messages */}
                            {roomMessages?.docs.map(doc => {
                                const { message, timestamp, user, userImage } = doc.data();
                                return (
                                    <Message
                                        key={doc.id}
                                        message={message}
                                        timestamp={timestamp}
                                        user={user}
                                        userImage={userImage} />
                                );
                            })}
                        </ChatMessages><ChatInput
                            chatRef={chatRef}
                            channelName={roomDetails?.data().name}
                            channelId={roomId} /><ChatBottom ref={chatRef} />
                    </>
                )
            }

        </ChatContainer>
    )
}

export default Chat