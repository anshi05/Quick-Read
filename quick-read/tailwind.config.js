/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust content paths based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode Colors
        primary: '#0a74da', // Vibrant Blue (for highlights or call-to-action buttons)
        secondary: '#e64a19', // Deep Orange (for attention-grabbing elements)
        accent: '#d32f2f', // Red (for alerts, error messages)
        background: '#121212', // Very dark gray for background
        surface: '#1e1e1e', // Dark gray for cards, modals, etc.
        onBackground: '#e0e0e0', // Light gray text on dark background
        onSurface: '#ffffff', // White text on dark surfaces
        muted: '#757575', // Muted gray for less important text
        border: '#333333', // Dark border for separation

        // Extended Dark Palette
        gray: {
          50: '#f9f9f9', // Lightest gray
          100: '#e0e0e0',
          200: '#bdbdbd',
          300: '#9e9e9e',
          400: '#757575',
          500: '#616161', // Main gray text color
          600: '#424242',
          700: '#303030',
          800: '#212121', // Dark gray background for elements
          900: '#121212', // Blackest gray (background color)
        },
        blue: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3', // Deep blue
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
        red: {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#f44336', // Bright red for alerts
          600: '#e53935',
          700: '#d32f2f',
          800: '#c62828',
          900: '#b71c1c',
        },
        green: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50', // Green for success
          600: '#43a047',
          700: '#388e3c',
          800: '#2c6d2f',
          900: '#1b5e20',
        },
        yellow: {
          50: '#fffde7',
          100: '#fff9c4',
          200: '#fff59d',
          300: '#fff176',
          400: '#ffee58',
          500: '#fdd835', // Bright yellow for highlights
          600: '#fbc02d',
          700: '#f9a825',
          800: '#f57f17',
          900: '#f4511e',
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode via class
  plugins: [],
}


