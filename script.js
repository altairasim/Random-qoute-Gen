const button = document.getElementById("btn");
const headding = document.getElementById("headding");
var quote;
const quotes = [
  "“When you forgive you win.”",
  "“Forgiveness is the power to choose how things affect you.”",
  "“Forgiveness is choosing to be happy.”",
  "“Forgiveness is simply freeing ourselves from wanting to punish.”",
  "“We experience what we intend for others.”",
  "“Fear is wisdom as a child.”",
  "“Forgiveness is always possible, but reconciliation is not always possible.”",
  "“Forgiveness gives us the freedom to stay and the freedom to walk away.”",
  "“Forgiveness is an act of willingness not an act of will.”",
  "“Practising forgiveness on the small things makes it easier to forgive the big things.”",
  "“The truth is not a stick with which to beat yourself.”",
  "“Cynicism is the ability to create a better world—stuck in reverse.”",
  "“Cynicism is a bad tempered guard dog, which keeps biting its owner.”",
  "“Every wound offers us a gift.”",
  "“Forgiveness is something we are rather than something we do.”",
];

button.addEventListener("click", () => {
  quote = Math.floor(Math.random() * quotes.length);
  headding.innerHTML = quotes[quote];
});
