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
                    var li = $("<li/>").appendTo(elem),
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
    "user_id": "15449758",
    "access_token": "15449758.1677ed0.a7db06d68a1e41b192d11140515d2d60",
    "count": 6
});