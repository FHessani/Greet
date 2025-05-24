function greetUser() {
      const name = document.getElementById("nameInput").value;
      const greetingText = "Hello, " + name + "!";
      document.getElementById("greeting").innerText = greetingText;
    }

    function chbg() {
        const red = [Math.round(Math.random() * 256)];
        const green = [Math.round(Math.random() * 256)];
        const blue = [Math.round(Math.random() * 256)];
        const random = ("rgb(" + red + "," + green + "," + blue + ")");
        document.body.style.backgroundColor = random;
    }