import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase'; // Import the auth service from the Firebase SDK

import {
  HeaderContainer,
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  HeaderRight
} from './styledHeader'; // Import styled components


const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      {/* header left */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()} // Sign out the user when the Avatar is clicked
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </HeaderLeft>


      {/* header search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderSearch>

      {/* header right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header