$(document).ready(function () {
    $("button").click(runLoops);
});

function runLoops() {
    // Clear out all existing images from divs
    $("div.imageHolder").empty();

    // Get the number from the box
    let num = parseInt($("input#numPics").val());

    // Print the desired number of images for each loop
    $("span#while-num").text(num + 1);
    $("span#do-while-num").text(num - 1);
    $("span#for-num").text(num);


    /*
     Create a while loop that runs "num + 1" times.

     The body of the loop should contain the statement:

        addImageToDiv("#while-loop");
    */

    let index = 0;
    while (index<= num){
        addImageToDiv("#while-loop");
        index ++;
    }



    /*
     Create a do-while loop that runs "num - 1" times.

     The body of the loop should contain the statement:

        addImageToDiv("#do-while-loop");
    */

    index = 1;
    do {
        addImageToDiv("#do-while-loop");
        index ++;
    }
    while (index < num)




    /*
     Create a for loop that runs exactly "num" times.

     The body of the loop should contain the statement:

        addImageToDiv("#for-loop");
    */
    for (index = 1; index <= num; index++) {
        addImageToDiv("#for-loop");
    }




}

function addImageToDiv(divId) {
    let fileName = $(":radio[name='pictureSelect']:checked").val();
    // Create a new image element
    let imageElement = $("<img>");
    // Set its source attribute
    imageElement.attr("src", `img/${fileName}`);
    // Add it as a child of another element
    $(divId).append(imageElement);
}