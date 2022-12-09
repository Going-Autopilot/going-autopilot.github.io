var images = ""
var newImages = ""
var energy = ""
var hunger = ""
var money = ""
var time_of_day = ""
var locations = ""
var dijon = ""
var newDijon = ""
var hazel = ""
var newHazel = ""
var hazelThere = false
var dijonThere = false
var ryloThere = false

async function initialWait() {
  $("title").addClass("fadeIn")
  await new Promise(resolve => setTimeout(resolve, 3000));
  $('tw-link').click(function(){
    $("title").addClass("fadeOut")
    checkForChange()
  })
}

async function checkForChange() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  checkForChange()
  try{ 
    energy = $("[name=energy]")[0].textContent
  } catch{
    energy = ""
  }
  try{
    newImages = $("[name=images]")[0].textContent
  } catch{}
  try{
    newDijon = $("[name=dijon_chemistry]")[0].textContent
  } catch{
    newDijon = ""
  }
  try {
    newHazel = $("[name=hazel_chemistry]")[0].textContent
  } catch{
    newHazel = ""
  }

  if (newImages !== images){
    fadeScene()
    images = newImages
  }
  if (newHazel === ""){
    fadeCharacter("hazel", "out")
    hazel = newHazel
    hazelThere = false
  } else{
    if (!hazelThere){
      fadeCharacter("hazel", "in")
    }
    hazelThere = true
  }
  if (newDijon === ""){
    fadeCharacter("dijon", "out")
    dijon = newDijon
    dijonThere = false
  } else{
    if (!dijonThere){
      fadeCharacter("dijon", "in")
    }
    dijonThere = true
  }
  if (newRylo === ""){
    fadeCharacter("rylo", "out")
    rylo = newRylo
    ryloThere = false
  } else{
    if (!ryloThere){
      fadeCharacter("rylo", "in")
    }
    ryloThere = true
  }
}

async function fadeCharacter(character, type) {
  console.log(type)
  if (type === "in"){
    $("#"+character).removeClass("fadeOut").addClass("fadeIn")
  } else {
    $("#"+character).removeClass("fadeIn").addClass("fadeOut")
    await new Promise(resolve => setTimeout(resolve, 300));
  }
}

async function fadeScene() {
  $("#scene").addClass("fadeOut")
  await new Promise(resolve => setTimeout(resolve, 300));
  $("#scene").attr('src', 'images/'+images+'.png').removeClass("fadeOut").addClass("fadeIn")
  await new Promise(resolve => setTimeout(resolve, 300));
  $("#scene").removeClass("fadeIn")
}

initialWait();