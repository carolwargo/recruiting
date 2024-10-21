import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/signup', formData);
      alert('Signup successful!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" 
      onChange={handleChange} placeholder="Username" />
      <input type="email" name="email" 
      onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" 
      onChange={handleChange} placeholder="Password" />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
