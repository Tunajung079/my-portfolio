import React from 'react';
import {SidebarContainer, 
        Icon, 
        CloseIcon, 
        SidebarWrapper,
        SidebarMenu, 
        SidebarLink,
        SidebarWrap,
        SidebarRouter} from './SidebarElements';

function Sidebar({ isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to ="About"  onClick={toggle}> About </SidebarLink>
                <SidebarLink to ="Education"  onClick={toggle}> Education </SidebarLink>
                <SidebarLink to ="Skill"  onClick={toggle}> Skill </SidebarLink>
                <SidebarLink to ="Contact"  onClick={toggle}> Contact </SidebarLink>
            </SidebarMenu>
            {/* <SidebarWrap>
              <SidebarRouter>
                Sign In
              </SidebarRouter>
            </SidebarWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;