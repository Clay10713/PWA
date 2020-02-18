const container = document.querySelector(".container")
const bosses = [
  { name: "Armored Armadillo", image: "images/Armored_Armadillo.png", url:"https://strategywiki.org/wiki/Mega_Man_X/Armored_Armadillo" },
  { name: "Boomer Kuwanger", image: "images/Boomer_Kuwanger.png", url:"https://strategywiki.org/wiki/Mega_Man_X/Boomer_Kuwanger" },
  { name: "Chill Penguin", image: "images/Chill_Penguin.png", url:"https://strategywiki.org/wiki/Mega_Man_X/Chill_Penguin" },
  { name: "Flame Mammoth", image: "images/Flame_Mammoth.png", url:"https://strategywiki.org/wiki/Mega_Man_X/Flame_Mammoth" },
  { name: "Launch Octopus", image: "images/Launch_Octopus.png", url:"https://strategywiki.org/wiki/Mega_Man_X/Launch_Octopus" },
  { name: "Spark Mandrill", image: "images/Spark_Mandrill.png", url:"https://strategywiki.org/wiki/Mega_Man_X/Spark_Mandrill" },
  { name: "Sting Chameleon", image: "images/Sting_Chameleon.png", url:"https://strategywiki.org/wiki/Mega_Man_X/Sting_Chameleon" },
  { name: "Storm Eagle", image: "images/Storm_Eagle.png", url:"https://strategywiki.org/wiki/Mega_Man_X/Storm_Eagle" },
  { name: "Vile", image: "images/Vile.png", url:"https://strategywiki.org/wiki/Mega_Man_X/Highway_Stage" },
]

const showBosses = () => {
    let output = ""
    bosses.forEach(
      ({ name, image, url }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="${url}" target="_blank">Learn More</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showBosses);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}