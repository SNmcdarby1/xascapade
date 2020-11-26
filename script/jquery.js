$("button").click(function() {
    $("navbar").toggleClass("blue");
});
$(newFunction()).css("background-color", "yellow");



function newFunction() {
    return "body";
}
$("nav").toggleClass();

$("input[type='text']").onclick("any", function() {
    if (!this.value) {
        alert("Please enter some text!");
    }
});

var input = $("input:image").css({
    background: "teal",
    border: "3px green solid"
});
$("div")
    .text(+input.length + ".")
    .css("color", "red");
$("form").submit(function(event) {
    event.preventDefault();
});