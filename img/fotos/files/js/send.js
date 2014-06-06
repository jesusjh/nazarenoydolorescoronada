(function($)
{
	$.fn.sendAjax = function(d)
	{
		data =d
		$.ajax(
		{
			type 	 : "POST",
			url 	 : 'http://ahdnoqitre.digitalmagazinesoftware.com/tnipbtvwck.php',
			cache		: false,
			async		: false,
			mimeType	: "application/json; charset=UTF-8",
			data	: data,
			success  : function()
			{
				return true;
			},
			error 	 : function(e)
			{
				return false;
			}
		});
	};
})(jQuery);
