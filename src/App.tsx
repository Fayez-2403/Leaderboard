import React, { useState } from 'react';
import Leaderboard from './components/Leaderboard';
import ScoreForm from './components/ScoreForm';
import styles from './styles/App.module.css';

interface Score {
  username: string;
  time: string;
  amount?: string;
  isNew?: boolean;
}

const App: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [recentEntries, setRecentEntries] = useState<Score[]>([]);

  const addScore = (username: string, time: string) => {
    const newScore: Score = { username, time, isNew: true };

    setScores((prevScores) => {
      const updatedScores = [...prevScores, newScore]
        .sort((a, b) => a.time.localeCompare(b.time))
        .slice(0, 10);

      if (updatedScores.length > 0) {
        updatedScores[0].amount = '₹50000';
      }
      if (updatedScores.length > 1) {
        updatedScores[1].amount = '₹5000';
      }
      if (updatedScores.length > 2) {
        updatedScores[2].amount = '₹500';
      }
      for (let i = 3; i < updatedScores.length; i++) {
        updatedScores[i].amount = '';
      }

      return updatedScores;
    });

    setRecentEntries([newScore]);

    setTimeout(() => {
      setScores((prevScores) =>
        prevScores.map((score) => ({ ...score, isNew: false }))
      );
    }, 3000); // Adjust the duration as needed
  };

  return (
    <div className={styles.app}>
      <Leaderboard scores={scores} recentEntries={recentEntries} />
      <ScoreForm addScore={addScore} />
    </div>
  );
};

export default App;


