 exports.action = function(data){

try{
var request = require('request');var cheerio = require('cheerio');

try{
	var ask=ClaraIA.reco
var rgxp = /météo (.+)/i; var match1 = ask.match(rgxp);
var ask="météo "+match1[1]
}

catch(err){ClaraIASpeech('pas de météo connus');console.log("pas de météo");return false}

function meteodujour(url){

	url=url.replace(/ sur/gi,'') ;url=url.replace(/ à/gi,'') ; url=url.replace(/ /gi,'+')
	
	request({ 'uri' : 'https://www.google.com/search?client=firefox-b-d&q='+url+'&oq=&aqs=', 'headers':{'Accept-Charset': 'windows-1252'},'encoding':'binary'  }, function(error, response, html){

			 var $ = cheerio.load(html); var resultmeteo=''
var currTemp4=$('div.kvKEAb:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').text()
var currTemp5=$('div.kvKEAb:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').text()

var valeurduspeak=currTemp4+" "+currTemp5

	if(valeurduspeak.search(new RegExp('Ensoleillé',"gi"))>-1){//météo
		valeurduspeak=valeurduspeak+"|pense à la crème solaire|pas de pluie pour l'instant|un peux de soleil fait du bien";
	}//fin if nuageux
	if(valeurduspeak.search(new RegExp('nuageux',"gi"))>-1){//météo
		valeurduspeak=valeurduspeak+"|le ciel est couvert|la pluie va peut être arriver|le temps est maussade";
	}//fin if nuageux

	if(valeurduspeak.search(new RegExp('partiellement',"gi"))>-1){//météo
		valeurduspeak=valeurduspeak+"|le temps est incertain";
	}//fin if nuageux

	if(valeurduspeak.search(new RegExp('neige',"gi"))>-1){//météo
		valeurduspeak=valeurduspeak+"|prépare la luge",'sort les skis';
	}//fin if nuageux

if(currTemp4==''){ClaraIASpeech("pas de météo, désolez, essai autrement")
	return false
}
									
ClaraIASpeech("voici mes prévision ; "+valeurduspeak)
return

  						}//fin if i==20		
)
}

var url=ask
meteodujour(url)


}catch(err){console.log(err);return false}
}//fin export
