/**
 * portal the protagonist to another scene
 * @param {number} x x coordinate of portal
 * @param {number} y y coordinate of portal
 * @param {object} protagonist protagonist to teleport
 */
function Portal(x, y, protagonist) {
    // draw the portal
    push();
    fill(0, 0, 0);

    stroke("Cyan");
    strokeWeight(3);
    ellipse(x, y, 30, 60);
    pop();

    // switch scene if protagonist overlaps with portal
    if (dist(x, y, protagonist.x, protagonist.y) < 10) {
        Scene2Setup();
    }
}
