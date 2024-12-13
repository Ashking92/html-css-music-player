import re
line="horse are taller than dog"
searchobj = re. search(r'(.*)are (.*?).*',line,re.M)
if searchobj:
    print("searchobj.group:",searchobj.group())
    print ("searchobj.group:",searchobj.group(1))
else:
    print("nothing found")







<!DOCTYPE html>
<html>
<body>
<p>Regular Expression</p>
<button onclick="myFunction()">Try it</button>
<script>
function myFunction(){
var str="All these are not possible using HTML!"; var n=str.search(/possible/i);
document.write("<br>"+n+"<br>");
var res=str.replace(/possible/i,"POSSIBLE"); 
document.write("<br>"+res+"<br>");
var patt=/e/;
document.write("<br>"+patt.test(str)+"<br>");
}
</script>
</body>
</html


# music player

A Pen created on CodePen.io. Original URL: [https://codepen.io/Ashking92/pen/oNrKYRJ](https://codepen.io/Ashking92/pen/oNrKYRJ).

Here’s a sample `README.md` for your HTML and CSS-based music player project:

---

# Music Player

A simple, responsive music player built using HTML and CSS. This project demonstrates how to create an aesthetically pleasing music player interface that can handle basic music controls, such as play, pause, and volume adjustments. No JavaScript is required, as this is primarily focused on the design aspect.

## Features

- Play/Pause music functionality
- Volume control slider
- Beautiful and modern design
- Responsive layout suitable for mobile and desktop views

## Preview

![Music Player Preview]([link-to-screenshot-or-demo](https://ibb.co/LkDKwVY))

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/music-player.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd music-player
   ```

3. Open the `index.html` file in your browser to preview the player.

## Usage

To change the music file:

1. Locate the `<audio>` tag in the `index.html` file:
   ```html
   <audio id="audioPlayer" src="your-music-file.mp3"></audio>
   ```

2. Replace `"your-music-file.mp3"` with the desired music file path.

## Technologies Used

- **HTML5**: Structure of the music player
- **CSS3**: Styling for the player, including animations and responsiveness

## Contributing

Feel free to contribute by submitting a pull request. Please ensure your code follows best practices and is well-documented.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

This is a basic template that you can modify based on your needs, including any extra features you've implemented in your music player!
