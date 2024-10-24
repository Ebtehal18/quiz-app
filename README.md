# Quiz App 🧠🎯

## Overview

This **Quiz App** allows users to test their knowledge by selecting various quiz options. The app is built using **Object-Oriented Programming (OOP)** principles in JavaScript, making it modular, reusable, and scalable.

Users can select the **category**, **difficulty level**, and the **number of questions** they want to answer. The app fetches trivia questions from the [Open Trivia Database API](https://opentdb.com/), and after each question, feedback is given for correct or incorrect answers. At the end of the quiz, the user is presented with their total score and a final feedback message.

---

## Features

- **Form Options**: 
  - Select from a variety of **categories** (e.g., General Knowledge, Science, History, etc.).
  - Choose the **difficulty level** (Easy, Medium, Hard).
  - Set the **number of questions** for the quiz.
  
- **Dynamic Feedback**: 
  - Each answer is validated, and visual feedback is provided:
    - **Correct Answer**: Displays a green background and a bounce animation.
    - **Incorrect Answer**: Displays a red background with a shake animation.
  
- **Score Tracking**: 
  - The app tracks your score and shows it dynamically as you progress through the quiz.
  
- **End of Quiz Summary**: 
  - Once the quiz is completed, users receive feedback on how many questions they answered correctly.

---

## How It Works

1. **Select Quiz Settings**: 
   - The user chooses the quiz category, difficulty level, and number of questions via a form.
   
2. **Question Display**: 
   - Questions are fetched from the Open Trivia Database API and displayed one at a time.
   - Users click on their selected answer.

3. **Answer Feedback**: 
   - Correct answers are highlighted with a green color.
   - Incorrect answers are highlighted with a red color.

4. **Score Update**: 
   - The user's score is updated in real time, and it is displayed at the bottom of the quiz area.

5. **End of Quiz**: 
   - After answering all questions, the user receives feedback on their performance.
   - The app provides a message with the total score and a **Try Again** option.

---

## Code Structure

### Classes
- **`Quiz` Class**: 
  - Handles fetching questions from the API, tracking the score, and providing the final feedback to the user.

- **`Question` Class**: 
  - Manages the individual question logic, including displaying the question, answers, and checking if the user's answer is correct or wrong.

---

## Live Version

Check out the live version of the Quiz App here: [https://ebtehal18.github.io/quiz-app/]  
