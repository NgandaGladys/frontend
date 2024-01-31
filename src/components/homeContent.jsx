import React from 'react';
import {
  Box,
  Typography,
  CardContent,
  Card,
  LinearProgress,
} from '@mui/material';


function HomeContent() {
  return (
    <Box>
      {/* First Row */}
      <div style={{ display: 'flex', marginBottom: 16 }}>
        <Card style={{ marginRight: 16, height:100, width:250 }}>
          <CardContent>
            <Typography variant="h5" component="div" fontSize={18}>
              Total Complaints
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              106
            </Typography>
          </CardContent>
        </Card>

        <Card style={{height:100, width:250}}>
          <CardContent>
            <Typography variant="h5" component="div" fontSize={18}>
              Team Inbox
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              10 Unread
            </Typography>
          </CardContent>
        </Card>

      <Card style={{marginBottom: 16, marginLeft:200, width:250}}>
        <CardContent>
          <Typography variant="h5" component="div" fontSize={18}>
            Performance
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            80%                 
          </Typography>
          <LinearProgress variant="determinate" value={80} />
        </CardContent>
      </Card>
      </div>

      <div style={{display:'flex', }}>

      <Card style={{marginBottom:16, width:650}}>
        <CardContent>
          <Typography variant="h5" component="div" fontSize={18}>
            Incoming Complaints
          </Typography>
          <Typography color="text.secondary" gutterBottom>
          variations
          </Typography>



          
        </CardContent>
      </Card>

      <div style={{display:'flex', flexDirection:'column',marginLeft:70}}>

      <Card style={{marginBottom:16, width:250}}>
        <CardContent>
          <Typography variant="h5" component="div" fontSize={18}>
            Customer Satisfaction
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            65%        
          </Typography>
          <LinearProgress variant="determinate" value={65} />
        </CardContent>
      </Card>
  
     
      <Card style={{ marginBottom:16,width:250, }}>
        <CardContent>
          <Typography variant="h5" component="div" fontSize={18}>
            Customer Rating
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            75%
          </Typography>
          <LinearProgress variant="determinate" value={75} />
        </CardContent>
      </Card>
      </div>
      </div>


      <Card style={{marginTop:20, marginRight:5,width:'100%', height:300}}>
        <CardContent>
          <Typography variant="h5" component="div" fontSize={18}>
            Teammates
          </Typography>
          <Typography color="text.secondary" gutterBottom>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1, marginRight: 10 }}>
            <Typography variant="body1" color="text.secondary">
              Name
            </Typography>
            <ul>
              <li>John Bosco</li>
              <li>Doreen Asiimwe</li>
              <li>Baguma Mark</li>
              <li>Namuli Prossy</li>
              
            </ul>
          </div>
          
          

          <div style={{ flex: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Level
            </Typography>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>4</li>
              <li>3</li>
            
            </ul>
          </div>
          </div>
          </Typography>
          
        </CardContent>
      </Card>



    </Box>
  );
}

export default HomeContent;
