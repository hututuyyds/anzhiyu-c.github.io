"use strict";window.addEventListener("load",function(){function t(){var e=document.body.style;e.width="100%",e.overflow="hidden",anzhiyu.animateIn(document.getElementById("search-mask"),"to_show 0.5s"),anzhiyu.animateIn(document.querySelector("#algolia-search .search-dialog"),"titleScale 0.5s"),setTimeout(function(){document.querySelector("#algolia-search .ais-SearchBox-input").focus()},100),document.addEventListener("keydown",function e(t){"Escape"===t.code&&(n(),document.removeEventListener("keydown",e))})}function e(){document.querySelector("#search-button > .search").addEventListener("click",t),document.getElementById("search-mask").addEventListener("click",n),document.querySelector("#algolia-search .search-close-button").addEventListener("click",n),document.querySelector("#menu-search").addEventListener("click",function(){rm.hideRightMenu(),t();var e=document.querySelector("#algolia-search-input > div > form > input");e.value=selectTextNow,e.dispatchEvent(new Event("input")),setTimeout(function(){document.querySelector("#algolia-search-input > div > form > button.ais-SearchBox-submit").click()},64)})}function s(e){var t,n,a,i;return""===e?"":(n=(t=e.indexOf("<mark>"))+120,i=a="",(t=t-30)<=0?(t=0,n=140):a="...",n>e.length?n=e.length:i="...",a+e.substring(t,n)+i)}var n=function(){var e=document.body.style;e.width="",e.overflow="",anzhiyu.animateOut(document.querySelector("#algolia-search .search-dialog"),"search_close .5s"),anzhiyu.animateOut(document.getElementById("search-mask"),"to_hide 0.5s")},a=GLOBAL_CONFIG.algolia;if(!(a.appId&&a.apiKey&&a.indexName))return console.error("Algolia setting is invalid!");var i=instantsearch({indexName:a.indexName,searchClient:algoliasearch(a.appId,a.apiKey),searchFunction:function(e){e.state.query&&(document.getElementById("algolia-hits").innerHTML='<div class="anzhiyufont anzhiyu-icon-spinner anzhiyu-spin"></div>',e.search())}}),a=instantsearch.widgets.configure({hitsPerPage:a.hits.per_page||5}),o=instantsearch.widgets.searchBox({container:"#algolia-search-input",showReset:!1,showSubmit:!1,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder,showLoadingIndicator:!0,searchOnEnterKeyPressOnly:!0,searchAsYouType:!1}),c=instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(e){for(var t=e.permalink||GLOBAL_CONFIG.root+e.path,n=e._highlightResult,a=n.contentStripTruncate?s(n.contentStripTruncate.value):n.contentStrip?s(n.contentStrip.value):n.content?s(n.content.value):"",i=e.tags,o='\n          <div class="search-result">\n            <a href="'.concat(t,'" class="algolia-hit-item-link">\n            ').concat(n.title.value||"no-title",'\n            </a>\n            <p class="algolia-hit-item-content">').concat(a,'</p>\n            <div class="search-result-tags">\n        '),c=0;c<i.length;c++)o+='<a class="tag-list" href="/tags/'.concat(i[c],'/">#').concat(i[c],"</a>");o+="\n          </div>\n        </div>";e=document.querySelector("#algolia-hits .anzhiyufont.anzhiyu-icon-spinner.anzhiyu-spin");return e&&(e.style.display="none"),setTimeout(function(){document.querySelector("#algolia-search .ais-SearchBox-input").focus()},100),o},empty:function(e){var t=document.querySelector("#algolia-hits .fa.anzhiyu-spinner.anzhiyu-spin");return t&&(t.style.display="none"),setTimeout(function(){document.querySelector("#algolia-search .ais-SearchBox-input").focus()},100),'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,e.query)+"</div>"}}}),l=instantsearch.widgets.stats({container:"#algolia-info > .algolia-stats",templates:{text:function(e){e=GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return"".concat(e)}}}),r=instantsearch.widgets.poweredBy({container:"#algolia-info > .algolia-poweredBy"}),u=instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:5,templates:{first:'<i class="anzhiyufont anzhiyu-icon-angle-double-left"></i>',last:'<i class="anzhiyufont anzhiyu-icon-angle-double-right"></i>',previous:'<i class="anzhiyufont anzhiyu-icon-angle-left"></i>',next:'<i class="anzhiyufont anzhiyu-icon-angle-right"></i>'}});i.addWidgets([a,o,c,l,r,u]),i.start(),e(),document.getElementById("search-mask").addEventListener("click",n),document.querySelector("#algolia-search .search-close-button").addEventListener("click",n),window.addEventListener("pjax:complete",function(){"block"===getComputedStyle(document.querySelector("#algolia-search .search-dialog")).display&&n(),e()}),window.pjax&&i.on("render",function(){window.pjax.refresh(document.getElementById("algolia-hits"))})});