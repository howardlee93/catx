//change to ts




// let image =(document.getElementById("cat-image").src) as HTMLImageElement; 
let imgArr: string[] = ['assets/images/grumpy.jpg', 'assets/images/smudge.jpg',"assets/images/merp.jpg",'assets/images/omh.jpg','assets/images/laze.jpg' ]

console.log(imgArr);
function randCats(){
    let randNum: number = Math.floor(Math.random() *imgArr.length);
    (document.getElementById("cat-image") as HTMLImageElement).src = imgArr[randNum];

}
