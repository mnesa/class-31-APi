const loadFriends = () => {
  fetch("https://randomuser.me/api/?results=10")
  .then(response=>response.json())
  .then(data => displayFriends(data))
}
loadFriends()

const displayFriends = (data) => {
  // console.log(data);
  const friends = data.results;
  const friendDiv = document.getElementById('friends');
  for (const friend of friends) {
    console.log(friend);
    const p = document.createElement('p');
    p.innerText = `Name: ${friend.name.title} ${friend.name.first} ${friend.name.last} ++ Email: ${friend.email}`
    friendDiv.appendChild(p);
  }
}