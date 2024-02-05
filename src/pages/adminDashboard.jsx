import * as React from 'react';
import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MdOutlineWavingHand } from 'react-icons/md';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import { MdHomeFilled } from 'react-icons/md';
import { MdInbox } from 'react-icons/md';
import { MdSignalCellularAlt } from 'react-icons/md';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { MdSettings } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout'

const drawerWidth = 240;

function AdminDashboard(props) {
  const [customerList, setCustomerList] = useState([]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);


  useEffect(() => {
    // Retrieve customer data from localStorage
    const storedData = localStorage.getItem('customerData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCustomerList(parsedData);
    }
  }, []);

  let sideBarItems = [
    {
      icon: <MdHomeFilled className="text-lime-600 size-6" />,
      text: 'Dashboard',
      route: '/admin-dashboard',
    },

    {
      icon: <MdPerson className="text-lime-600 hover:text-lime-500 size-6" />,
      text: 'Users',
      route: '/admin-dashboard/users',
    },

    {
      icon: <MdInbox className="text-lime-600 hover:text-lime-500 size-6" />,
      text: 'Complaints',
      route: '/admin-dashboard/complaints',
    },

    {
      icon: <MdPerson className="text-lime-600 hover:text-lime-500 size-6" />,
      text: 'Customers',
      route: '/admin-dashboard/customers',
    },

    {
      icon: (
        <MdSignalCellularAlt className="text-lime-600 hover:text-lime-500 size-6" />
      ),
      text: 'Levels',
      route: '/admin-dashboard/levels',
    },

    {
      icon: <MdSettings className="text-lime-600 hover:text-lime-500 size-6" />,
      text: 'Settings',
      route: '/admin-dashboard/levels',
    },

    {
      icon: <LogoutIcon className="text-lime-600 hover:text-lime-500 size-6" />,
      text: 'LogOut',
      route: '/dashboard/logout',
    },
  ];

  let AccordionItems = [
    {
      icon: (
        <QuestionAnswerIcon className="text-lime-600 hover:text-lime-500 size-6" />
      ),
      text: 'Answered',
      route: '/admin-dashboard/answered',
    },

    {
      icon: (
        <PendingActionsIcon className="text-lime-600 hover:text-lime-500 size-6" />
      ),
      text: 'Pending',
      route: '/admin-dashboard/pending',
    },
  ];

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // const drawer = (
  //   <div>
  //     <img src="/public/img/logo.png" alt="Zimba Logo" />
  //     <List>
  //       {sideBarItems.map((item) => (
  //         <ListItem key={item.text} disablePadding>
  //           <ListItemButton component={Link} to={item.route}>
  //             <ListItemIcon>{item.icon}</ListItemIcon>
  //             <ListItemText primary={item.text} sx={{ fontSize: '1.5rem' }} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );
  const drawer = (
    <div>
      <img src="/public/img/logo.png" alt="Zimba Logo" />
      <List>
        {sideBarItems.map((item) => {
          if (item.text === 'Complaints') {
            return (
              <Accordion key={item.text} elevation={0} style={{ padding: 0 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header">
                  <ListItem disablePadding>
                    <ListItemButton sx={{ padding: 0 }}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        sx={{ fontSize: '1.5rem' }}
                      />
                    </ListItemButton>
                  </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                  {AccordionItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton component={Link} to={item.route}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                          primary={item.text}
                          sx={{ fontSize: '1.5rem' }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </AccordionDetails>
              </Accordion>
            );
          } else {
            return (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.route}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ fontSize: '1.5rem' }}
                  />
                </ListItemButton>
              </ListItem>
            );
          }
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: '#5F7D09' }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MdOutlineWavingHand />
            Welcome Gladys
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        {/* The Dynamic View */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default AdminDashboard;
