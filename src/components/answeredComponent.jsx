import React, { useState } from 'react';
import { Box, Typography, IconButton, Collapse, Chip } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const ComplaintsAndInquiries = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const data = [
    { question: 'Complaint 1', answer: 'Answer 1', level: 'Level 1' },
    { question: 'Complaint 2', answer: 'Answer 2', level: 'Level 2' },
    // Add more complaints, answers, and levels as needed
  ];

  const handleExpandClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box>
      {data.map((item, index) => (
        <Box key={index} marginBottom={2} border={1} padding={2}>
          <Typography variant="h6">{item.question}</Typography>
          <Chip label={`Answered at ${item.level}`} color="primary" style={{ marginBottom: '8px' }} />
          <IconButton
            onClick={() => handleExpandClick(index)}
            aria-expanded={expandedIndex === index}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <Collapse in={expandedIndex === index}>
            <Typography variant="body1">{item.answer}</Typography>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default ComplaintsAndInquiries;
