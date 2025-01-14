# Frontend challenge for LightIt 🌐

This repository contains the **implementation** for the **Patient Data Management** project. The application is built with **React.js**, leveraging modern tools and libraries like **React useContext**, **Custom Hooks**, **Axios**, and **SASS** to create an efficient and user-friendly interface.

---

## 🚀 Features

- **Pagination:** Efficiently display paginated data.
- **Global State Management:** Implemented with `useContext` for lightweight state handling.
- **Responsive Design:** Styled with **SASS** for modular and maintainable CSS.

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Martin-Fenocchio/light-it.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:

```bash
npm run dev
```

---

## Testing Overview

This project utilizes **Vitest** and **React Testing Library** to ensure the reliability and functionality of components and hooks. Below is a summary of the tests implemented:

### `usePatients` Hook Tests

- **Fetching Patients**: Tests that the `handleFetchPatients` function correctly fetches patient data from the API and updates the state with the received data.
- **Loading State**: Verifies that the `isLoadingList` state is set to `true` while fetching data and is set to `false` after the fetch completes.
- **Error Handling**: Ensures that the hook handles errors gracefully when the API call fails, resulting in an empty patient list and the loading state being reset.

### `PatientItem` Component Tests

- **Rendering Patient Information**: Confirms that the patient's name and description are rendered correctly in the component.
- **Image Error Handling**: Tests that the component displays the patient's initials when the avatar image fails to load.
- **Modal Functionality**: Verifies that the modal opens when the "More details" button is clicked and contains the correct patient information. It also checks that the modal closes when the "Close" button is clicked.

These tests help maintain the integrity of the application and ensure that components behave as expected under various scenarios.

## Design decisions

The patient data is visually presented through a grid-based card layout, optimizing the UI's spatial usage. Initially, I considered various approaches for the "expanded" card design to display additional details. Ultimately, I opted for a modal-based solution, ensuring the data is presented in a clear and concise manner, with an update button conveniently located within the modal.

To further demonstrate my proficiency in React, I implemented pagination and search filtering capabilities on the page. This was achieved by leveraging a combination of useContext and custom hooks, resulting in enhanced performance and code quality.

In adherence to the guidelines prohibiting the use of UI libraries, I chose to utilize SCSS for all styling needs, showcasing my expertise in CSS.

For components with complex logic, I developed custom hooks to facilitate code readability, separate concerns, and address potential testing challenges.
