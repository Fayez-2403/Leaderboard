import React from 'react';
import styles from '../styles/Leaderboard.module.css';

interface Score {
  username: string;
  time: string;
  amount?: string;
  isNew?: boolean;
}

interface LeaderboardProps {
  scores: Score[];
  recentEntries: Score[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores, recentEntries }) => {
  return (
    <div className={styles.leaderboard}>
      <div className={styles.header}>
        <h1>FASTEST OF TODAY</h1>
      </div>
      <ul className={styles.scoreList}>
        <li className={styles.headerRow}>
          <span className={styles.rank}></span>
          <span className={styles.name}>Name</span>
          <span className={styles.amount}>Prize</span>
          <span className={styles.time}>Time</span>
        </li>
        {scores.map((score, index) => (
          <li
            key={index}
            className={`${styles.scoreItem} ${
              index < 3 ? styles[`topScore${index + 1}`] : ''
            } ${score.isNew ? styles.newEntry : ''} ${
              index === 2 ? styles.thirdPlace : ''
            }`}
          >
            <span className={styles.rank}>{index + 1}</span>
            <span className={styles.name}>{score.username}</span>
            <span className={styles.amount}>{score.amount}</span>
            <span className={styles.time}>{score.time}</span>
          </li>
        ))}
      </ul>
      <div className={styles.recentEntry}>
        <h2>RECENT ENTRY</h2>
        {recentEntries.map((entry, index) => (
          <div key={index} className={styles.recentEntryItem}>
            <span>{entry.username}</span>
            <span>{entry.time}</span>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <p>Footer: Disclaimers/ Announcements/ etc</p>
      </div>
    </div>
  );
};

export default Leaderboard;














