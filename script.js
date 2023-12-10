// var y = document.querySelector("#output").value;

function final() {
  var x = document.querySelector("#convert_text").value;
  console.log("this is working ");
  navigator.clipboard.writeText(x);
  alert("text copied to clipboard");
}

document
  .getElementById("click_to_record")
  .addEventListener("click", function () {
    console.log("this is working");
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener("result", (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      document.getElementById("convert_text").innerHTML = transcript;
      console.log(transcript);
    });

    if (speech == true) {
      recognition.start();
    }
  });





   