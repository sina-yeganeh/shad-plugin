'use strict';

const IDPAY = document.querySelector(".id-pay")
const DISCORD = document.querySelector(".discord")
const GITHUB = document.querySelector(".github")
const theme = document.querySelector("#theme")
const font = document.querySelector("#font")

IDPAY.addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://idpay.ir/sina-yeganeh"
  })
})

DISCORD.addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://www.google.com/"
  })
})

GITHUB.addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://github.com/sina-yeganeh"
  })
})

theme.addEventListener("change", () => {
  fetch("../data.json")
    .then(resp => resp.json())
    .then(data => {
      data.theme = theme.value
    })
})

font.addEventListener("change", () => {
  fetch("../data.json")
    .then(resp => resp.json())
    .then(data => {
      data.font = font.value
    })
})
