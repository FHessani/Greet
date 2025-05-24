function greetUser() {
      var name = document.getElementById("nameInput").value;
      var greetingText = "Hello, " + name + "!";
      document.getElementById("greeting").innerText = greetingText;
    }

    function chbg() {
        var red = [Math.round(Math.random() * 256)];
        var green = [Math.round(Math.random() * 256)];
        var blue = [Math.round(Math.random() * 256)];
        var random = ("rgb(" + red + "," + green + "," + blue + ")");
        document.body.style.backgroundColor = random;
    }