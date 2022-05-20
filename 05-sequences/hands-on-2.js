let file=prompt('enter a file name: ');
let extension=file.slice(-3);
if (extension=="png"||extension=="jpg"){
    console.log("it is an image file");
}
else{
    console.log("it is not an image file");
}