# Life in Weeks Project Documentation

## Overview

Life in Weeks is a personal timeline visualization project that displays each week of a person's life as a small box, with meaningful events marked and annotated. The project is built using React and Vite, with a focus on creating an interactive and visually appealing life timeline.

## Project Structure

### Core Components

1. **Main Application**
- Entry point: `src/main.jsx`
- Root component: `App.jsx`
- Core layout: `BodyContent.jsx`

2. **Data Sources**
- Event data: `data/eventData.json` - Contains life events organized by decades
- Description data: `data/description.json` - Contains project description and external links
- Life in weeks data: `data/life-in-weeks.yml` - YAML format of life events

3. **UI Components**
- Tooltip component for event details
- Header component
- Description component
- TimeContentContainer for timeline visualization

## Technical Stack

### Core Technologies
- **Vite**: Build tool for fast development and optimized production builds
- **React**: Frontend library for UI components
- **TailwindCSS**: Utility-first CSS framework
- **Radix UI**: For accessible UI components like tooltips

### Development Tools
- TypeScript for type safety
- ESLint for code quality
- GitHub Actions for CI/CD

## Configuration

### Vite Configuration
The project uses a custom Vite configuration (`vite.config.js`) with the following key features:

1. **Metadata Plugin**: Automatically injects metadata into the HTML head
2. **Build Configuration**: Optimizes build output for GitHub Pages deployment

### Metadata Configuration
The metadata is stored in `src/config/metadata.json` and is used to populate the HTML head with SEO-friendly information.

### GitHub Actions
The project uses GitHub Actions for CI/CD. The workflow is defined in `.github/workflows/deploy.yml`.

## Deployment

1. **Installation**

```bash
npm install
```

2. **Development**

```bash
npm run dev
```

3. **Build**

```bash
npm run build
```

4. **Deploy**

```bash
npm run deploy
```

5. **Deploy to GitHub Pages**

```bash
npm run deploy
```

## Contributing

Contributions are welcome! Please create a pull request or open an issue for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.