import React from 'react';
import {SidebarContainer, 
        Icon, 
        CloseIcon, 
        SidebarWrapper,
        SidebarMenu, 
        SidebarLink,
        SidebarWrap,
        SidebarRouter} from './SidebarElements';

function Sidebar() {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to ="About"> About </SidebarLink>
                <SidebarLink to ="Education"> Education </SidebarLink>
                <SidebarLink to ="Skill"> Skill </SidebarLink>
                <SidebarLink to ="Contact"> Contact </SidebarLink>
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