// Create hamburger menu when screen is less than 776px or else return to original values
const listData = []
for (var i=0; i<=4; i++){
  listData.push($(`.li-${i}`).text())
}

if ($(window).width() < 776){
  $('.unordered').html('<i class="fa-solid fa-bars mt-2 dropdown"></i>').css("paddingLeft", "0px")
} else {
  for (var x=0; x<=4; x++){
    $('.unordered').append($(`.li-${x}`).text(listData[x]))
  }
}