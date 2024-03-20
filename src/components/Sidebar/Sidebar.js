import React from 'react'
import { SidebarContainer, SidebarHeader, SidebarInfo, } from './styledSidebar'
import SidebarOption from './SidebarOption'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import CreateIcon from '@mui/icons-material/Create'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import AppsIcon from '@mui/icons-material/Apps'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'

import { useCollection } from 'react-firebase-hooks/firestore';
import { app, } from '../../firebase'
import { collection, getFirestore } from "firebase/firestore"; 


const Sidebar = () => {

    const [channels, loading, error] = useCollection(
        collection(getFirestore(app), 'rooms'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );

  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
            <h2>Slack Clone</h2>
            <h3>
                <FiberManualRecordIcon />
                Leo Garza
            </h3>
            </SidebarInfo>
            <CreateIcon />
        </SidebarHeader>
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
        <SidebarOption Icon={DraftsIcon} title="Saved Items" />
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
        <SidebarOption Icon={AppsIcon} title="Apps" />
        <SidebarOption Icon={FileCopyIcon} title="File browser" />
        <SidebarOption Icon={ExpandLessIcon} title="Show less" />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
        <hr />
        <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption={true} />

        {
            channels?.docs.map(doc => (
                <SidebarOption
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />
            ))
        }

    </SidebarContainer>
  )
}

export default Sidebar