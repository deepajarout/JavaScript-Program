// Image changer

var myImage = document.querySelector('img');

myImage.onclick= function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/thruskills-node-js.jpg') {
      myImage.setAttribute ('src','images/thruskills-mean-stack.jpg');
    } else {
      myImage.setAttribute ('src','images/thruskills-node-js.jpg');
    }
}
