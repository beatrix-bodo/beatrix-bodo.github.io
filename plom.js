var main = function() {
  $("h1").html(
    function() {
      var quotes = [
        "When you are stuck, walk away from the computer and draw. It will teach you how to see.<br>Gerard Huerta",
        "Stop downloading. Start uploading.<br>Jay Bradner",
        "Simplicity is not the goal. It is the by-product of a good idea and modest expectations.<br>Paul Rand",
        "If everyone likes your design, it’s banal.<br>Jeffrey Zeldman",
        "I love deadlines. I like the whooshing sound they make as they go by.<br>Douglas Adams",
        "Of course design is about problem solving, but I cannot resist adding something personal.<br>Wim Crouwel",
        "A well-defined problem is half solved.<br>Michael Osborne",
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
  );

};

$(document).ready(main);
