import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 16.666667%;
  background-color: var(--color-dark-bg);
  z-index: 30;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.3);
  flex-direction: column;
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  border-bottom: 1px solid #333;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  
  span {
    color: var(--color-accent);
  }
`;

const SidebarNav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0 1rem;
  space-y: 1.5rem;
`;

const NavItem = styled.li`
  margin-bottom: 1.5rem;
`;

const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-dark-surface);
  }
  
  ${props => props.active && `
    background-color: rgba(139, 92, 246, 0.2);
  `}
`;

const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  background-color: ${props => props.active ? 'var(--color-accent)' : 'var(--color-dark-surface)'};
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.4)'};
  transition: all 0.3s ease;
  
  ${NavLink}:hover & {
    color: white;
  }
`;

const NavLabel = styled.span`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${props => props.active ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.4)'};
  transition: all 0.3s ease;
  
  ${NavLink}:hover & {
    color: white;
  }
`;

const SidebarFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid #333;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
`;

const MobileToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  background-color: var(--color-dark-bg);
  padding: 0.5rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  display: block;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(15, 15, 15, 0.95);
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const MobileNavLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  margin: 0.75rem 0;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  color: ${props => props.active ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.4)'};
  background-color: ${props => props.active ? 'rgba(139, 92, 246, 0.1)' : 'transparent'};
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    color: white;
  }
`;

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'skills', 'contact'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (!section) continue;
        
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };
  
  const navigationItems = [
    { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'education', label: 'Education', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222' },
    { id: 'projects', label: 'Projects', icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' },
    { id: 'skills', label: 'Skills', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { id: 'contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <MobileToggle onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </MobileToggle>
      
      {/* Mobile Menu */}
      <MobileMenu 
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        <MobileNav>
          {navigationItems.map((item) => (
            <MobileNavLink
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              active={activeSection === item.id}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.label}
            </MobileNavLink>
          ))}
        </MobileNav>
      </MobileMenu>
      
      {/* Desktop Sidebar */}
      <SidebarContainer>
        <SidebarHeader>
          <Logo href="#home">
            <span>A</span>G
          </Logo>
        </SidebarHeader>
        
        <SidebarNav>
          <NavList>
            {navigationItems.map((item) => (
              <NavItem key={item.id}>
                <NavLink
                  href={`#${item.id}`}
                  active={activeSection === item.id}
                >
                  <IconWrapper active={activeSection === item.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </IconWrapper>
                  <NavLabel active={activeSection === item.id}>
                    {item.label}
                  </NavLabel>
                  
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeIndicator"
                      style={{
                        position: 'absolute',
                        right: 0,
                        width: '4px',
                        height: '3rem',
                        backgroundColor: 'var(--color-accent)',
                        borderTopLeftRadius: '9999px',
                        borderBottomLeftRadius: '9999px'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </SidebarNav>
        
        <SidebarFooter>
          <Copyright>
            &copy; {new Date().getFullYear()} AG
          </Copyright>
        </SidebarFooter>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
