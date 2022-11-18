function ScoreUI(x, y) {
    push();
    rectMode(CORNER);
    fill(255, 255, 255, 200);
    noStroke();
    rect(x, y, 60, 40);

    fill("black");
    text("Score=" + Score, x, y + 10);
    text("Time: " + CountDown, x, y + 30);
    pop();
}
