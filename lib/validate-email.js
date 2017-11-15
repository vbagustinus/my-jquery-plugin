(function ($) {
	$.fn.emailValidator = (email) => {
    return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
  }
})(jQuery)
