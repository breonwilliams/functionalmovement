'use strict';

(function ($) {
    $.fn.jqinstapics = function (options) {

        // Defaults
        var defaults = {
            "user_id": null,
            "access_token": null,
            "count": 6
        };

        var o = $.extend(defaults, options);

        return this.each(function () {

            // Vars
            var elem = $(this),
                url = "https://api.instagram.com/v1/users/" + o.user_id + "/media/recent?access_token=" + o.access_token + "&count=" + o.count + "&callback=?";

            // Get the images
            $.getJSON(url, function(data){
                $.each(data.data, function (i, val) {
                    var li = $("<li/>", {"class": "col-md-4 col-sm-6 col-xs-6 marginbot-30"}).appendTo(elem),
                        a = $("<a/>", {"href": val.link, "target": "_blank"}).appendTo(li),
                        img = $("<img/>", {"src": val.images.standard_resolution.url}).appendTo(a);

                    if (val.caption){
                        a.attr("title", val.caption.text);
                    }
                });
            });

            if(o.user_id == null || o.access_token == null){
                elem.append("<li>Please specify a User ID and Access Token, as outlined in the docs.</li>");
            }

        });
    };
})(jQuery);

$("#instagram").jqinstapics({
    "user_id": "1553721524",
    "access_token": "1553721524.1677ed0.8c5297d2e475465893c7d352d8e49f3e",
    "count": 6
});