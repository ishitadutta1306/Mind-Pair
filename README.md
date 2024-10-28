# Mind Pair
Mind Pair is a card-matching memory game created with React. The goal of the game is to find all the matching pairs of cards with as few moves as possible.

## Features
- Memory card matching game with a set of themed images.
- Tracks the number of moves taken by the player.
- Provides visual feedback for matched and unmatched cards.
- Option to start a new game at any time.

## Demo 
Play the game here: [Mind Pair](https://ishitadutta1306.github.io/Mind-Pair/)

## Installation
1. **Clone the repository:**
```bash
git clone https://github.com/ishitadutta1306/Mind-Pair.git
```
2. **Navigate to the project directory:**
```bash
cd mind-pair
```
3. **Install dependencies:**
```bash
npm install
```

## Usage
1. **Run the app locally:**
```bash
npm start
```
The app will be accessible at http://localhost:3000.

2. **Play the game:**
- Click on a card to flip it.
- Try to find a matching card by remembering the positions.
- The game tracks the number of moves you take to find all pairs.

## Technologies
- **React**
- **JavaScript**
- **CSS**

## Folder Structure
```bash
mind-pair/
├── public/
│   ├── index.html            # Main HTML file
│   ├── card-flip.png         # Favicon
├── src/
│   ├── Components/
│   │   └── Card.jsx          # Card component
│   ├── images/
│   │   ├── crystal.png       # Card images
│   │   ├── fairy-wings.png
│   │   ├── key.png
│   │   ├── potion.png
│   │   ├── ring.png
│   │   ├── wizard-hat.png
│   ├── App.js                # Main application file
│   ├── App.css               # Main CSS file
│   └── index.js              # Entry point
└── README.md
```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature (git checkout -b feature-name).
3. Commit your changes (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-name).
5. Open a pull request.
