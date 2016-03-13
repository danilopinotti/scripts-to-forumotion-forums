/*
	Código adaptado por Danilo Pinotti
	Código original de: http://ajuda.forumeiros.com
*/
jQuery(document).ready(function () {
	function novoPersonagem(nome, linkimagem, descricao){
		this.nome = nome;
		this.linkimg = linkimagem;
		this.descricao = descricao;
	}
	 var personagens = new Array();

	 personagens.push(new novoPersonagem("Rathalos", "http://i38.servimg.com/u/f38/15/87/31/43/rathal10.jpg","Rei dos céus"));
	 personagens.push(new novoPersonagem("Rathian", "http://i38.servimg.com/u/f38/15/87/31/43/rathia10.jpg","Rainha da terra"));
	 personagens.push(new novoPersonagem("Nargacuga", "http://i38.servimg.com/u/f38/15/87/31/43/nargak10.jpg","Serpe veloz"));
	 personagens.push(new novoPersonagem("White Fatalis", "http://i38.servimg.com/u/f38/15/87/31/43/fatali10.jpg","Ancestral da destruição"));
	 personagens.push(new novoPersonagem("Ukanlos", "http://i38.servimg.com/u/f38/15/87/31/43/ukanlo10.jpg","O tirano do gelo"));
	 personagens.push(new novoPersonagem("Jinouga", "http://i38.servimg.com/u/f38/15/87/31/43/jinoug10.jpg","O Monarca"));
	 personagens.push(new novoPersonagem("Deviljho", "http://i38.servimg.com/u/f38/15/87/31/43/devilj10.jpg","O grande devorador"));
	 personagens.push(new novoPersonagem("Akantor", "http://i38.servimg.com/u/f38/15/87/31/43/akanto10.jpg","Monstro supremo"));
	
	var randpers = (Math.floor((Math.random() * 100)%personagens.length));
	var e = personagens[randpers].nome;
	var t = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- Bot na página 2 --><ins class="adsbygoogle" style="display:inline-block;width:600px;height:100px" data-ad-client="ca-pub-3590039808457780" data-ad-slot="5362265106"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
	var n = personagens[randpers].linkimg;
	var r = personagens[randpers].descricao;
	
	
	if (jQuery("#wrap").length) {
		var i = '<div class="post row2" style=""> <div class="inner"> <span class="corners-top"> <span> </span> </span> <div style="position: relative; top: -30px; width: 1px;"> </div> <div class="postbody"> <ul class="profile-icons"> </ul> <h2 class="topic-title"> <img src="http://illiweb.com/fa/empty.gif" alt=""> <a href="">Re: Publicidade</a> </h2> <p class="author"> <img src="http://i59.servimg.com/u/f59/15/87/31/43/nothin10.png" alt="Mensagem" title="Mensagem"> &nbsp;por&nbsp; <span style="color:#1E1E1E"> <strong> '+e+' </strong> </span> Hoje à(s) --:-- am </p> <div class="clearfix"> </div> <div style="display:none"> </div> <div class="content clearfix"> '+t+' </div> </div> <div class="postprofile"> <dl> <dt> <img src="'+n+'" alt=""> <br> <strong style="font-size:1.2em"> <span style="color:#1E1E1E"> <strong> '+e+' </strong> </span> </strong> </dt> <!--<dd></dd>--> <dd>'+ r +'</dd> <dd> <br> </dd> <dd> <br> </dd> <dd> </dd> </dl> </div> <div class="clear"> </div> <p class="right"> <a href="#top"><img class="sprite-arrow_prosilver_up" src="http://illiweb.com/fa/empty.gif" alt="Voltar ao Topo"></a> &nbsp; <a href="#bottom"><img class="sprite-arrow_prosilver_down" src="http://illiweb.com/fa/empty.gif" alt="Ir em baixo"></a> </p> <span class="corners-bottom"> <span> </span> </span> </div></div>';
	} else {
		var i = '<div class="post online" style="margin:10px 0px 10px 0px"><div class=post-container><div class="postbody clearfix"><div class=postprofile><dl class="postprofile-details postdetails"><dt><img style="max-height: 120px;max-width: 150px;border-radius: 10px;" src="' + n + '"><br><b>' + e + "</b></dt><dd><br>" + r + '</dd></dl></div><div class="postbody-head postdetails post-header"></div><br><br><div class=post-entry>' + t + "</div></div></div></div>"
	}
	jQuery(".post:eq(1)").after(i)
});
