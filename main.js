// GO!

// <-------------#1------------>
var vanishButton = document.querySelector("button")
var navBar = document.querySelector(".nav-menu")


var navBarShowing = true



var vanisher = function(){
if (navBarShowing) {
	navBar.style.opacity = 0
	navBarShowing = false
	vanishButton.textContent = "show nav"

}
else {
	navBar.style.opacity = 1
	navBarShowing = true
	vanishButton.textContent = "hide nav"
}
}
vanishButton.addEventListener("click", vanisher)

// <-------------#2------------>

var inputEl = document.querySelector('input[type="text"]')

var guestListUl = document.querySelector(".guest-list")

var addGuest = function(keyEvent) {

  var inputEl = keyEvent.srcElement
  if (keyEvent.keyCode === 13) {
      var userInput = inputEl.value
      var newLi = document.createElement('li')
      newLi.className = "guest"
      newLi.textContent = userInput
      guestListUl.appendChild(newLi)
      inputEl.value = ''
  }  
}
inputEl.addEventListener('keydown',addGuest)
// BONUS 



var inputBonusEl = document.querySelector('input[type="text-bonus"]')

var guestListBonusUl = document.querySelector(".guest-list-bonus")



var addGuestBonus = function(keyEvent) {
	console.log(keyEvent)
	var inputBonusEl = keyEvent.srcElement
	if (keyEvent.keyCode === 13) {

		var userBonusInput = inputBonusEl.value
		var newBonusLi = document.createElement('li') 
		var newBonusCheckBox = document.createElement("BUTTON")
		newBonusCheckBox.textContent = "X"
		newBonusLi.className += "guest"
		newBonusLi.textContent = userBonusInput
		guestListBonusUl.appendChild(newBonusLi)
		newBonusLi.appendChild(newBonusCheckBox)
		newBonusCheckBox.addEventListener('click',function(){
		guestListBonusUl.removeChild(newBonusLi)
})
		inputBonusEl.value = ''	

	}


}



inputBonusEl.addEventListener('keydown',addGuestBonus)





