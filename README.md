MyEra Sticker Canvas
A React-based web application built for the MyEra Frontend Internship mini-task. This app allows users to place and drag stickers on a 600x400 canvas using react-konva, with features to add stickers via buttons, drag them, download the canvas as a PNG, and optionally delete stickers or snap them to a 40px grid.
Features

600x400 Canvas: A fixed-size Konva canvas for placing and arranging stickers.
Sticker Buttons: Three buttons with PNG images to add stickers at a default position.
Draggable Stickers: Stickers can be dragged anywhere on the canvas with position persistence.
Download Canvas: A button to export the canvas as a PNG file.
Bonus: Double-Click Deletion: Double-click a sticker to remove it from the canvas.
Bonus: Grid Snapping: New and dragged stickers snap to a 40x40 pixel grid for alignment.

Setup

Clone the Repository:git clone <your-repo-url>
cd myera-sticker-app


Install Dependencies:npm install


Start the Development Server:npm start


Open the App:
Visit http://localhost:3000 in your browser to use the app.



Demo
[Link to a 1-minute demo video or GIF, if included]Note: A demo video or GIF showcasing the app's functionality (adding, dragging, downloading stickers, and bonus features) can be added here if provided.
Technologies

React: For building the user interface with functional components and state management.
react-konva: A React wrapper for Konva to create an interactive canvas.
Konva: For handling canvas operations like layers, images, and drag-and-drop.
use-image: For loading sticker images in a React-friendly way.
CSS: For styling the layout (Flexbox for canvas and button arrangement).

Project Structure
myera-sticker-app/
├── public/
│   ├── index.html           # Main HTML file
│   └── stickers/            # Sticker PNGs (sticker1.png, sticker2.png, sticker3.png)
├── src/
│   ├── components/
│   │   ├── Canvas.js        # Konva canvas and sticker rendering
│   │   ├── StickerButton.js # Sticker button component
│   ├── App.js               # Main app component
│   ├── App.css              # Styles for layout
│   ├── index.js             # React entry point
├── README.md                # This file
├── package.json             # Dependencies and scripts
├── .gitignore               # Ignores node_modules, build/, etc.

Notes

Sticker images are stored in public/stickers/ and must be small (e.g., 50x50 pixels) PNGs.
The app runs entirely in the browser with no backend or data persistence.
The bonus features (double-click deletion and grid snapping) are implemented for enhanced functionality.
Git commits are organized with clear messages (e.g., "Add canvas setup," "Implement sticker dragging").

Usage

Click any of the three sticker buttons to add a sticker to the canvas.
Drag stickers to reposition them (snaps to a 40px grid if implemented).
Double-click a sticker to delete it (if implemented).
Click the "Download Canvas" button to save the canvas as a PNG file.

