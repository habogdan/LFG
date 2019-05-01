let j;
let k;
let mod;
let seed;
let numbers;
let answer = [];

$('#sendPair').click(function () {
    j = $("#j").val();
    k = $("#k").val();
    $(".mode").css("display", "block");
});
$('#sendMod').click(function () {
    mod = $("#mod").val();
    $(".seed").css("display", "block");
});
$('#sendSeed').click(function () {
    if($("#seed").val().length < k){
        alert("Seed must be longer than K!");
        return;
    }
    else {
        seed = $("#seed").val();
        $(".numbers").css("display", "block");
    }

});
$('#sendNumbers').click(function () {
    numbers = $("#numbers").val();
    $(".generate-answer").css("display", "block");
});


$('#generateAnswer').click(function () {

    for(let iterator = 0; iterator < numbers; iterator ++)
    {
        let jVal = parseInt(seed[j-1]);
        let kVal = parseInt(seed[k-1]);
        let out = (jVal + kVal) % mod;
        let temp = seed.substr(1, seed.length);
        temp = temp.toString();
        temp += out;
        seed = temp;
        answer[iterator] = out;

    }
    console.log(answer);

    $("#answer").append( "<p>" + answer + "</p>");
    $("#generateAnswer").css("display", "none");
    $("#reset").css("display", "block");
    $("#answer-title").css("display", "block");

});

$('#reset').click(function () {
    location.reload();
})

$("input[type='text']").on("click", function () {
    $(this).select();
});