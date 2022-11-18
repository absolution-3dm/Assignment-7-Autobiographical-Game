function CollisionDetection(obj1, obj2) {
    /**
     * [Detect collition between two input objects] */
    var distance = dist(obj1.x, obj1.y, obj2.x, obj2.y);
    if (distance < 20) {
        return true;
    } else {
        return false;
    }
}
