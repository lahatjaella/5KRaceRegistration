# 5k Race Participant Registration

Welcome to the **5k Race Participant Registration** project! This web application allows race organizers to input participants' details such as their name, age, and t-shirt size, and categorize them based on their age group. The details are dynamically added to a table for easy reference.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [File Structure](#file-structure)
- [Future Enhancements](#future-enhancements)

## Introduction

The **5k Race Participant Registration** application is designed to streamline the process of collecting participant details for a race event. Using this form-based interface, organizers can quickly register participants, assign them to appropriate age categories, and display their details, including their t-shirt size, in a table.

## Features

- **Add Participant Form**: Users can input participants' first name, last name, age, and t-shirt size.
- **Dynamic Age Categories**: Automatically assigns participants to one of four age categories based on their age:
  - **Youth**: Under 18 years old
  - **Adult**: Between 18 and 29 years old
  - **Older Adult**: Between 30 and 54 years old
  - **Silver**: 55 years old and above
- **Real-time Validation**: Ensures that no fields are left empty or invalid before adding a participant.
- **Participant Table**: Displays a list of all added participants with their name, age category, and t-shirt size.

## Technologies Used

- **HTML5**: For structuring the webpage and creating form elements.
- **CSS3**: Basic styling to structure the form and the participant table.
- **Bootstrap**: For additional styling and responsive layout.
- **JavaScript**: Implements form validation, dynamic table population, and age category assignment.

## How It Works

1. **Form Input**: The user fills in the participant's first name, last name, age, and selects a t-shirt size.
2. **Form Validation**: JavaScript checks that all fields are filled and that the age is a valid number.
3. **Age Category Assignment**: Based on the participant’s age, they are categorized into one of the four predefined age groups.
4. **Table Population**: Once the details are validated and the age category is assigned, the participant’s information is added to the table dynamically.
5. **Display**: The table grows as participants are added, displaying all registered participants along with their details.

## File Structure

```
/5k-race-registration
│
├── index.html        # Main HTML file for the webpage structure
├── style.css         # Custom styles for the form and table
└── script.js         # JavaScript logic for form validation and table generation
```

### Key Components

1. **`index.html`**: Contains the form for participant data entry and a table to display the participants.
2. **`style.css`**: Handles the styling of the form and table.
3. **`script.js`**: Contains the following JavaScript functions:
   - **`addParticipant()`**: Main function triggered when the user clicks the "Add Participant" button. It collects form data, validates input, assigns an age category, and adds the participant to the table.
   - **`validateParticipant()`**: Validates the participant’s name, age, and t-shirt size before they are added to the table.
   - **`addAgeCategory()`**: Assigns an appropriate age category based on the participant’s age.
   - **`addParticipantToTable()`**: Adds the validated participant's details to the table dynamically.

## Future Enhancements

- **Edit & Delete Options**: Allow users to modify or remove participants from the table.
- **Search & Filter**: Implement functionality to search participants by name or filter by age category.
- **Data Persistence**: Store the participant data in local storage or a database for future reference.
- **Advanced Validation**: Add more detailed validation, such as checking for valid age ranges (e.g., disallow negative ages).
