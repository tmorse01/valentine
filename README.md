# Be My Valentine App

## Overview

The "Be My Valentine" app is a charming web application designed to create personalized Valentine's Day proposals. By leveraging dynamic routing, users can craft a unique invitation asking someone to be their Valentine, with the name of the loved one embedded directly in the URL.

## Features

- **Personalized Valentine's Question:** Generates a custom Valentine's Day proposal using the name provided in the URL.
- **Responsive Design:** Ensures a great user experience across all devices.
- **Interactive UI:** Engage with fun, colorful confetti animations upon accepting the Valentine's proposal.
- **Comical No Responses:**
  In addition to the personalized Valentine's Day proposals, the app also provides comical responses if the recipient clicks "No" to the proposal. These responses are designed to add a touch of humor to the experience and lighten the mood.

## Getting Started

### Prerequisites

- Node.js installed on your system
- Basic knowledge of React.js
- Basic vite knowledge

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/tmorse01/valentine.git
   ```
2. Navigate into the project directory:
   ```bash
   cd valentine
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Your app should now be running on [http://localhost:5173](http://localhost:5173).

## Usage

### Creating a Personalized Valentine's Proposal

The app uses dynamic routing to personalize the Valentine's Day question. Simply include the name of your loved one as the first parameter in the URL path:

```
http://localhost:5173/:name
```

For example, to create a Valentine's question for Taylor, navigate to:

```
http://localhost:5173/Taylor
```

The app will display a special message: "Hey Taylor, will you be my Valentine?", accompanied by interactive options for the recipient to respond.

## Routing Details

This project utilizes React Router for dynamic routing:

- **Route Configuration:** The main route is configured to accept a `:name` parameter, which dynamically renders the Valentine's question with the provided name.

- **Path Example:** `/Taylor` would render a personalized question for Taylor.

- **NotFound Route:** A fallback route is provided to handle any non-existent routes, guiding users back to the main page.

## Contributing

Contributions to the "Be My Valentine" app are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b new-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
