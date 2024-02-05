import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { getSavedData, saveData } from '../utils/utility';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleLogin = () => {
    // For simplicity, let's assume the user is always authenticated
    const superAdminUsername = 'admin';
    const superAdminPassword = 'adminpass';

    if (username && password) {
      // save login to storage
      let formData = {
        username: username,
        password: password,
      };

      // Check if the user is a super admin
      if (
        username.toLowerCase() === superAdminUsername.toLowerCase() &&
        password.toLowerCase() === superAdminPassword.toLowerCase()
      ) {
        saveData('loginData', formData);
        // Navigate to super admin dashboard
        navigate('/admin-dashboard');
      } else {
        saveData('loginData', formData);
        // Navigate to normal user dashboard
        navigate('/dashboard');
      }
    } else {
      alert('please fill in credentials');
    }
  };

  useEffect(() => {
    let data = getSavedData('loginData');
    if (data) {
      setUsername(data.username);
      setPassword(data.password);
    }
  }, []);

  return (
    <Container maxWidth="sm" style={{ height: '800px' }}>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
        margin
        style={{ textAlign: 'center', marginTop: 100 }}>
        User
      </Typography>

      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        style={{ margin: 'auto', marginTop: '5vh', padding: '2rem' }}>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          variant="outlined"
          value={username}
          color="secondary"
          fullWidth
          required
          style={{ padding: '6px', marginTop: '20px', marginBottom: '16px' }}
        />

        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          // Toggle between text and password type
          type={isVisible ? 'text' : 'password'}
          variant="outlined"
          value={password}
          color="secondary"
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {isVisible ? (
                  <FaEyeSlash
                    onClick={() => setIsVisible(false)}
                    className="cursor-pointer"
                  />
                ) : (
                  <FaEye
                    className="cursor-pointer"
                    onClick={() => setIsVisible(true)}
                  />
                )}
              </InputAdornment>
            ),
          }}
          style={{ padding: '6px', marginTop: '20px', marginBottom: '16px' }}
        />

        <Button
          type="submit"
          variant="contained"
          onClick={handleLogin}
          style={{
            marginTop: '16px',
            marginBottom: '5px',
            backgroundColor: 'orange',
          }}>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
