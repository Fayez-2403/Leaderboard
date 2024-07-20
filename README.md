Here's the README documentation in markdown format:

```markdown
# Leaderboard Web App

## Overview
This is a responsive and interactive leaderboard web application built with React and TypeScript. It allows users to add scores and displays the top scores dynamically. The application features animations, a recent entry section, and attractive styling.

## Features
- Add new scores and display them in the leaderboard.
- Display the top 10 scores by default, with scrolling functionality for additional scores.
- Highlight top 3 scores with different colors.
- Show recent entries with their respective ranks.
- Attractive and responsive header section.
- Animations for new entries.

## Project Structure
```
/leaderboard-app
|-- /public
|   |-- index.html
|   |-- ...
|-- /src
|   |-- /components
|   |   |-- HeaderSection.tsx
|   |   |-- Leaderboard.tsx
|   |   |-- ScoreForm.tsx
|   |-- /styles
|   |   |-- App.module.css
|   |   |-- HeaderSection.module.css
|   |   |-- Leaderboard.module.css
|   |-- App.tsx
|   |-- index.tsx
|-- package.json
|-- README.md
|-- ...
```

WebApp View- Responsiveness

Window Tab View-
![Desktop view](https://github.com/user-attachments/assets/df887857-ec48-4a50-82fe-1b2ae41bb191)


Phone View-
![phone view](https://github.com/user-attachments/assets/1acd4bb3-8ff5-4752-9bf0-5c07c3b547cd)


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/leaderboard-app.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd leaderboard-app
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the application:**
   ```bash
   npm start
   ```

## Components

### `App.tsx`
Main component that holds the state and renders the `Leaderboard` and `ScoreForm` components.

### `Leaderboard.tsx`
Displays the scores and recent entries. Shows only the top 10 scores by default and provides a scrollable list for additional scores.

### `ScoreForm.tsx`
Form for adding new scores to the leaderboard.

### `HeaderSection.tsx`
Displays the header with a responsive design and animations.

## Styles
Styles are organized in the `/styles` directory. Each component has its own CSS module for scoped styles.

### `App.module.css`
Main styles for the application.

### `HeaderSection.module.css`
Styles for the header section, including responsive design and animations.

### `Leaderboard.module.css`
Styles for the leaderboard, including top score highlighting, new entry animations, and scrollable list.

## Adding Scores
- Enter a username and time in the `ScoreForm`.
- The leaderboard will automatically update and sort the scores.
- The recent entry section will display the latest entry with its respective rank.

## Responsiveness
The application is designed to be responsive, ensuring a good user experience across different devices.

## Contributions
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License.

## Contact
For any questions or issues, please open an issue in the repository or contact the maintainer.
```

You can save this text in a file named `README.md` in your project directory.
