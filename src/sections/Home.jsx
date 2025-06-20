import { motion } from 'framer-motion';
import styled from 'styled-components';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameText = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: var(--font-display);
  
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #9333ea, #4f46e5, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: hue 10s infinite linear;
  
  @keyframes hue {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Button = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(to right, #9333ea, #4f46e5);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  margin-top: 2rem;
  font-weight: 500;
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(to right, #7e22ce, #4338ca);
    transform: translateY(-2px);
    box-shadow: 0 15px 20px -3px rgba(79, 70, 229, 0.4);
  }
`;

const Home = () => {
  return (
    <HomeSection id="home">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <NameText
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            delay: 0.3
          }}
        >
          <GradientText>
            Atharv Gupta
          </GradientText>
        </NameText>
        
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Full Stack Developer & UI/UX Designer
        </Subtitle>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Button href="#contact">
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </HomeSection>
  );
};

export default Home;
