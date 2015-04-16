$.getJSON(ytapiurl, function(data) {
      $.each(data.feed.entry, function(i, item) {                                
        var title    = item['title']['$t'];
        var videoid  = item['id']['$t'];
      
        var pubdate  = item['published']['$t'];
        var fulldate = new Date(pubdate).toLocaleDateString();
      
        var thumbimg = item['media$group']['media$thumbnail'][0]['url'];
        var tinyimg1 = item['media$group']['media$thumbnail'][1]['url'];
        var tinyimg2 = item['media$group']['media$thumbnail'][2]['url'];
        var tinyimg3 = item['media$group']['media$thumbnail'][3]['url'];
      
        var vlink    = item['media$group']['media$content'][0]['url'];
        var ytlink   = item['media$group']['media$player'][0]['url'];
        var numviews = item['yt$statistics']['viewCount'];
        var numcomms = item['gd$comments']['gd$feedLink']['countHint'];
      
        htmlString +='<li class="clearfix"><h2>' + title + '</h2>';
        htmlString +='<div class="videothumb"><a href="' + ytlink + '" target="_blank"><img src="' + thumbimg + '" width="480" height="360"></a></div>';
        htmlString +='<div class="meta"><p>Published on <strong>' + fulldate + '</strong></p><p>Total views: <strong>' + commafy(numviews) + '</strong></p><p>Total comments: <strong>'+ numcomms +'</strong></p><p><a href="'+ ytlink +'" class="external" target="_blank">View on YouTube</a></p><p><a href="'+ vlink +'" class="external" target="_blank">View in Fullscreen</a></p><p><strong>Alternate Thumbnails</strong>:<br><img src="'+ tinyimg1 +'"> <img src="' + tinyimg2 + '"> <img src="'+ tinyimg3 +'"></p></div></li>';
      }); // end each loop
    
      $('#videos').html(htmlString + "</ul>");
    }); // end json parsing