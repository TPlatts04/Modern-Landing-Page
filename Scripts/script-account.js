$('.sign-up-text').on("click", function() {
  $('.login-main').removeClass('login-animation-on')
  $('.signup-main').removeClass('signup-animation-off')
  $('.login-main').addClass('login-animation-off')
  $('.signup-main').addClass('signup-animation-on')
})

$('.login-text').on("click", function() {
  $('.login-main').removeClass('login-animation-off')
  $('.signup-main').removeClass('signup-animation-on')
  $('.login-main').addClass('login-animation-on')
  $('.signup-main').addClass('signup-animation-off')
})