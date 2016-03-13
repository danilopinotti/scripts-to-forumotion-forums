/*
	Developed by: http://ajuda.forumeiros.com
*/
jQuery(function () {
    if (jQuery('img[alt="Este Tópico está bloqueado. Você não pode editar as mensagens ou responder."]').length) {
        t = '<div class="post row1" style=text-align:center;width:100%><div class=inner><span class=corners-top><span></span></span><br><img src=http://i47.servimg.com/u/f47/15/87/31/43/untitl24.png width="49" height="51"><div style=font-size:10px> <p><b>Esse tópico está bloqueado. <br>Se o tópico não foi devidamente respondido entre em contato com alguem da staff para que seja reaberto.</b></p> </div><br><span class=corners-bottom><span></span></span></div></div><style>.post.row1 { width: 839px !important;}</style>';
        jQuery('div.post:eq(0)').before(t);
        jQuery('#content-container td[width="100%"][valign="top"]:eq(0) table:eq(0)').after(t)
    }
});
