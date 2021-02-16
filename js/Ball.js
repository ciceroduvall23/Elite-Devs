class Ball {
  constructor(ball, parent, fallSpeed, timeToAppear, nameP) {
    this.ball = ball;
    this.nameP = nameP;
    this.parent = parent;
    this.fallSpeed = fallSpeed;
    this.timeToAppear = timeToAppear;
    this.move(this.ball, this.parent, this.fallSpeed, this.timeToAppear);
  }
  move(el, parent, fallSpeed, timeToAppear) {
    let height = 0;
    parent.childNodes.length
      ? parent.childNodes.forEach((b) => {
          height += el.offsetHeight + 5;
        })
      : 0;
    parent.innerHTML += `<p class="${this.nameP}"></p>`;
    el.style.left = parent.offsetLeft - (this.ball.offsetWidth / 2 + 15) + "px";
    let cont = el.offsetTop;
    setTimeout(() => {
      //sound of the falling ball
      let fall = new Audio("src/rolling_ball.mp3");
      fall.currentTime = 0;
      fall.play();
      //-------
      el.style.opacity = "1";
      let loop = setInterval(() => {
        if (
          el.offsetTop + el.offsetHeight + height >=
          parent.offsetTop + parent.offsetHeight
        ) {
          //sound of the falling ball canceled
          fall.pause();
          fall.currentTime = 0;
          //------------------------
          clearInterval(loop);
          //sound of the ball hitting the ground
          let down = new Audio("src/ball_down.mp3");
          down.currentTime = 0.5;
          down.play();
          //++++++++++++++++++++++++
          //height=0
        } else {
          el.style.top = cont + "px";
        }
        cont += fallSpeed;
      }, 10);
    }, timeToAppear * 1000);
  }
}
