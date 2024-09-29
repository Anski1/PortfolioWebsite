// components/Footer.js
import { motion } from 'framer-motion';
import { Stack, Text } from '@fluentui/react';

const Footer = () => {
  return (

      <Stack
        horizontalAlign="center"
        styles={{ root: { padding: '8px', backgroundColor: '#2b579a' } }}
      >
        <Text variant="smallPlus">&copy; 2024 My Portfolio</Text>
      </Stack>
  );
};

export default Footer;

