import React, { useState } from 'react';
import styles from '../styles/ScoreForm.module.css';

interface ScoreFormProps {
  addScore: (username: string, time: string) => void;
}

const ScoreForm: React.FC<ScoreFormProps> = ({ addScore }) => {
  const [username, setUsername] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addScore(username, time);
    setUsername('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add Score</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Time (MM:SS:MS)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ScoreForm;
