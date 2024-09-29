function addParticipantToTable(participant) {
  // Get the participant table by its ID
  let table = document.getElementById("participant-table");
  // Insert a new row at the end of the table
  let row = table.insertRow(-1);

  // Create and fill cells with participant details
  let cell;

  cell = row.insertCell(0);
  cell.textContent = participant.fullName; // Full name

  cell = row.insertCell(1);
  cell.textContent = participant.category; // Age category

  cell = row.insertCell(2);
  cell.textContent = participant.size; // Shirt size
}

function validateParticipant(participant) {
  let isValidInput = true;
  // Check if first name is provided
  if (participant.firstName === "") {
    console.log("First name is empty");
    isValidInput = false;
  }
  // Check if last name is provided
  if (participant.lastName === "") {
    console.log("Last name is empty");
    isValidInput = false;
  }
  // Check if age is provided
  if (participant.age === 0 || isNaN(participant.age)) {
    console.log("Age is invalid or empty");
    isValidInput = false;
  }
  // Check if shirt size is provided
  if (participant.size === "") {
    console.log("Shirt size is empty");
    isValidInput = false;
  }
  return isValidInput;
}

function addAgeCategory(participant) {
  // Determine age category based on age
  if (participant.age < 18) {
    participant.category = "Youth";
  } else if (participant.age < 30) {
    participant.category = "Adult";
  } else if (participant.age < 55) {
    participant.category = "Older Adult";
  } else {
    participant.category = "Silver";
  }
}

function addParticipant() {
  // Initialize a new participant object
  let participant = {};

  // Collect participant details from the form
  participant.firstName = document.getElementById("first-name").value.trim();
  participant.lastName = document.getElementById("last-name").value.trim();
  participant.fullName = participant.firstName + " " + participant.lastName;

  // Ensure the age is parsed correctly as a number
  participant.age = Number(document.getElementById("age").value);

  participant.size = document.getElementById("shirt-size").value.trim();

  // Validate participant details
  if (!validateParticipant(participant)) {
    console.log("Not adding participant due to validation errors");
    return;
  }

  // Assign an age category
  addAgeCategory(participant);

  // Log the participant object for debugging
  console.log(participant);

  // Add participant to the table if validation passes
  addParticipantToTable(participant)
}
