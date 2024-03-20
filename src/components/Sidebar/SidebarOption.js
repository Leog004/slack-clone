import React from 'react'
import { useDispatch } from 'react-redux'
import { SidebarOptionContainer, SidebarOptionChannel, } from './styledSidebar'
import { collection, addDoc } from "firebase/firestore"; 
import { db, } from '../../firebase'
import { enterRoom } from '../../features/appSlice';

const SidebarOption = ({
    Icon,
    title,
    addChannelOption = false,
    id,
}) => {

    const dispatch = useDispatch();

    const addChannel = async () => {
        const channelName = prompt('Please enter the channel name');
        if (channelName) {
            try {
                await addDoc(collection(db, 'rooms'), {
                    name: channelName,
                });
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
    };

    const selectChannel = () => {
        // database stuff
        if (id) {
            dispatch(enterRoom({
                roomId: id,
                title: title,
            }));
        }
    }

  return (
    <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
    >
        { Icon && <Icon fontSize="small" style={{ padding: 10 }} /> }
        { Icon ? (
            <h3>{title}</h3>
        ) : (
            <SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel>
        )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption