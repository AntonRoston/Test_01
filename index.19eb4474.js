const e=document.getElementById("pagination"),t=document.getElementById("pages"),a=document.getElementById("curpage"),n=(document.getElementById("delta"),document.querySelectorAll(".check"),document.querySelector("button.next-page")),c=document.querySelector("button.prev-page"),s=document.querySelector("button.first-page"),l=document.querySelector("button.last-page"),i={truncate:!0,curPage:1,numLinksTwoSide:1,totalPages:10};function o(){const{totalPages:t,curPage:a,truncate:n,numLinksTwoSide:c}=i,s=c+4;let l="",o="",u='<li class="pg-item"><a class="pg-link">...</a></li>',r=0;const g=a-c,p=a+c;let m="";for(let e=1;e<=t;e++)m=e===a?"active":"",t>=2*s-1&&n?g>3&&p<t-3+1?e>=g&&e<=p&&(o+=d(e,m)):a<s&&e<=s||a>t-s&&e>=t-s+1||e===t||1===e?l+=d(e,m):(r++,1===r&&(l+=u)):l+=d(e,m);o?(o=d(1)+u+o+u+d(t),e.innerHTML=o):e.innerHTML=l}function d(e,t=""){return` <li class="pg-item ${t}" data-page="${e}">\n        <a class="pg-link" href="#">${e}</a>\n    </li>`}function u(){1===i.curPage?(c.disabled=!0,s.disabled=!0):(c.disabled=!1,s.disabled=!1)}function r(){i.curPage===i.totalPages?(console.log(i.curPage),n.disabled=!0,l.disabled=!0):(n.disabled=!1,l.disabled=!1)}o(),e.onclick=e=>{if(e.target.dataset.page){const t=parseInt(e.target.dataset.page,10);i.curPage=t,a.value=t,o(),u(),r()}},document.querySelector(".page-container").onclick=function(e){!function(e){e.classList.contains("first-page")?i.curPage=1:e.classList.contains("last-page")?i.curPage=parseInt(t.value,10):e.classList.contains("prev-page")?(i.curPage--,u(),n.disabled=!1,l.disabled=!1):e.classList.contains("next-page")&&(i.curPage++,r(),c.disabled=!1,s.disabled=!1);o()}(e.target)};
//# sourceMappingURL=index.19eb4474.js.map
