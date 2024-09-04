var myDiv = document.getElementById('myDiv');

myDiv.addEventListener('click', () => {
  var clone = myDiv.cloneNode(true);
  var randomColor = getRandomColor();
  clone.style.background = randomColor;
  document.body.appendChild(clone);
});
myDiv.style.display="inline-block";

function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}