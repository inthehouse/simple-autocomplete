# AutoComplete React Project

## Overview

This project implements an **AutoComplete** feature in **React**, designed to provide dynamic user suggestions as you type. The application uses **TypeScript** for type safety and includes a basic **routing system** built with **React Router**. The data for user suggestions is fetched from an API, and the app is styled with basic custom CSS.

### Features:
- **Dynamic Suggestions**: As the user types, suggestions are fetched and displayed.
- **Debounced Input**: Input is debounced to reduce the number of API calls and improve performance.
- **Lazy Loading**: Routing is implemented with lazy loading for efficient page rendering.
- **API Integration**: User data is fetched from an external API to populate the autocomplete suggestions.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/inthehouse/deel.git
cd autocomplete-react
```
### 2. Install and run
```
npm install
npm start
```
### 3. Test
```
npm test
```

## Limitations

1. **Limited Test Coverage**: The project currently has limited test coverage, focusing primarily on the AutoComplete component..
2. **Pages & views**: Right now the project only consists of components.
3. **Styling**: The project uses basic CSS for styling. In future updates, the UI will be enhanced with better CSS solutions or CSS frameworks to improve design and responsiveness.
   
## Future Improvements

- **Test Coverage**: Improved test cases to cover more scenarios, including edge cases and integration tests for API interactions and routing.
- **Styling Enhancements**: Implement a more robust styling solution, like CSS Modules, Styled Components, for improved visuals and responsiveness.
- **Performance Optimizations**: Further optimize performance for handling large datasets with techniques such as virtualization using ```react-window``` or ```react-virtualized``` or pagination.
