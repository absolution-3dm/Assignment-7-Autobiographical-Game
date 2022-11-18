/**
 * randomply match elements from target array to source array (no repetition)
 * @param {array} SourceArray input knowledge box array
 * @param {array} TargetArray Grid to fit to (has to be longer than source array)
 * @return {array} remaped array of target array (in the size of source array)
 */
function Remap(SourceArray, TargetArray) {
    var IndexRemap = [];
    var picked = [];

    for (var j = 0; j < TargetArray.length; j++) {
        picked.push(false);
    }

    if (SourceArray.length < TargetArray.length) {
        for (var i = 0; i < SourceArray.length; i++) {

            var Randi = floor(random(TargetArray.length)); // randomly pick one index position from the points
            while (picked[Randi] === true) {
                Randi = floor(random(TargetArray.length)); // regenerate a random position if the position is occupied
            }
            IndexRemap.push(TargetArray[Randi]);

        }
    }

    return IndexRemap;
}
