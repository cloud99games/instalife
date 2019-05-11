function age() {
  currentAge++;
  document.getElementById("ageDisplay").innerHTML = currentAge +" years old";
  var newsfeed = document.getElementById("newsfeed");
  var header = document.createElement("ons-list-header");
  var t = document.createTextNode("Age: " + currentAge + " Years Old");
  header.appendChild(t);
  var item = document.createElement("ons-list-item");
  var i = document.createTextNode("life event");
  item.appendChild(i);
  header.appendChild(item);
  newsfeed.appendChild(header);

  getPaid();
  return currentAge;
}
