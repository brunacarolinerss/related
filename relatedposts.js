/* Related Post Widget for Blogger by Taufik Nurrohman => http://gplus.to/tovic */
var randomRelatedIndex,showRelatedPost;!function(e,t,a){var l={widgetTitle:"<h4>Artikel Terkait:</h4>",widgetStyle:1,homePage:"http://www.dte.web.id",numPosts:7,summaryLength:370,titleLength:"auto",thumbnailSize:72,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:!1,moreText:"Baca Selengkapnya",callBack:function(){}};for(var i in relatedPostConfig)l[i]="undefined"==relatedPostConfig[i]?l[i]:relatedPostConfig[i];var s=function(e){var l=t.createElement("script");l.type="text/javascript",l.src=e,a.appendChild(l)},r=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},n=function(e){var t,a,l=e.length;if(0===l)return!1;for(;--l;)t=Math.floor(Math.random()*(l+1)),a=e[l],e[l]=e[t],e[t]=a;return e},m="object"==typeof labelArray&&labelArray.length>0?"/-/"+n(labelArray)[0]:"",o=function(e){var t=e.feed.openSearch$totalResults.$t-l.numPosts,a=r(1,t>0?t:1);s(l.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+m+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+l.numPosts+"&callback=showRelatedPost")},d=function(e){var t,a,i,s,r,m=document.getElementById(l.containerId),o=n(e.feed.entry),d=l.widgetStyle,h=l.widgetTitle+'<ul class="related-post-yt-style">',c=l.newTabLink?' target="_blank"':"",p='<span style="display:block;clear:both;"></span>';if(m){for(var u=0;u<l.numPosts&&u!=o.length;u++){a=o[u].title.$t,i="auto"!==l.titleLength&&l.titleLength<a.length?a.substring(0,l.titleLength)+"&hellip;":a,s="media$thumbnail"in o[u]&&l.thumbnailSize!==!1?o[u].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/,"/s"+l.thumbnailSize):l.noImage,r="summary"in o[u]&&l.summaryLength>0?o[u].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,l.summaryLength)+"&hellip;":"";for(var g=0,b=o[u].link.length;b>g;g++)t="alternate"==o[u].link[g].rel?o[u].link[g].href:"#";h+=2==d?'<li><img alt="" class="related-post-item-thumbnail" src="'+s+'" width="'+l.thumbnailSize+'" height="'+l.thumbnailSize+'"><a class="related-post-item-title" title="'+a+'" href="'+t+'"'+c+">"+i+'</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+r+'</span> <a href="'+t+'" class="related-post-item-more"'+c+">"+l.moreText+"</a></span>"+p+"</li>":3==d||4==d?'<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="'+t+'"'+c+'><img alt="" class="related-post-item-thumbnail" src="'+s+'" width="'+l.thumbnailSize+'" height="'+l.thumbnailSize+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="'+a+'" href="'+t+'"'+c+">"+i+"</a></div>"+p+"</li>":5==d?'<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="'+t+'" title="'+a+'"'+c+'><img alt="" class="related-post-item-thumbnail" src="'+s+'" width="'+l.thumbnailSize+'" height="'+l.thumbnailSize+'"><span class="related-post-item-tooltip">'+i+"</span></a>"+p+"</li>":6==d?'<li><a class="related-post-item-title" title="'+a+'" href="'+t+'"'+c+">"+i+'</a><div class="related-post-item-tooltip"><img alt="" class="related-post-item-thumbnail" src="'+s+'" width="'+l.thumbnailSize+'" height="'+l.thumbnailSize+'"><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+r+"</span></span>"+p+"</div></li>":'<li><a title="'+a+'" href="'+t+'"'+c+">"+i+"</a></li>"}m.innerHTML=h+="</ul>"+p,l.callBack()}};randomRelatedIndex=o,showRelatedPost=d,s(l.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+m+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")}(window,document,document.getElementsByTagName("head")[0]);