//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_670F||null!=window.HYPE_dtl_670F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-670.full.min.js":"HYPE-670.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_670"+c,"HYPE_dtl_670"+c,a,d),true==!0&&(a=a||k("HYPE_w_670","HYPE_wdtl_670","HYPE-670.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_670","HYPE-670.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"scrolly",source:"function(hypeDocument, element, event) {\nvar elToFixed = hypeDocument.getElementById('targetEl');\nvar elReadOut = hypeDocument.getElementById('elementReadout');\n\nvar offset = parseInt(elToFixed.getAttribute('offset')),\n\tstart = parseInt(elToFixed.getAttribute('start')),\n    duration = parseInt(elToFixed.getAttribute('duration'));\n\nwindow.onscroll = function() {\n    elReadOut.innerHTML = scrollY;\n  \n    if (scrollY < start - offset) {\n        elToFixed.style.position = \"absolute\";\n        elToFixed.style.top = start + \"px\";\n  \n      \n    } else if (scrollY < start + duration) {\n          elToFixed.style.position = \"fixed\";\n          elToFixed.style.top = offset + \"px\";\n          elToFixed.style.left = \"auto\";\n          elToFixed.style.right = \"auto\";\n\n    } else {\n        elToFixed.style.position = \"absolute\";\n        elToFixed.style.top = (offset + start + duration) + \"px\";\n    }\n}}",identifier:"47"},{name:"scroll",source:"function(hypeDocument, element, event) {\nwindow.onscroll = function() {myFunction()};\n\nfunction myFunction() {\n  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;\n  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n  var scrolled = (winScroll / height) * 100;\n  hypeDocument.getElementById(\"myBar\").style.height = scrolled + \"%\";\n} \n\t\n}",identifier:"364"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_670"+c](f,g,{"3":{p:1,n:"PastedVector.svg",g:"385",t:"image/svg+xml"},"-2":{n:"blank.gif"},"4":{p:1,n:"PastedVector-1.svg",g:"387",t:"image/svg+xml"},"0":{p:2,n:"audio-1.mp3",g:"86",t:"audio/mpeg"},"5":{p:1,n:"PastedVector-3.svg",g:"391",t:"image/svg+xml"},"1":{p:2,n:"audio.ogg",g:"86",t:"audio/ogg"},"-1":{n:"PIE.htc"},"2":{p:2,n:"dark.mp3",g:"211",t:"audio/mpeg"}},l,["<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:300&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto+Mono:700&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto+Mono:200&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto+Mono:300&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto+Mono&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Spectral&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Spectral:200&subset=latin' rel='stylesheet' type='text/css'>"],e,[{n:"Untitled Scene",o:"1",X:[0]},{n:"Intro",o:"141",X:[1]}],
[{A:{a:[{p:4,h:"47"}]},o:"3",p:"600px",cA:false,Y:1240,Z:17800,c:"#191919",L:[],bY:1,d:1240,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"cY",s:"1",z:0,o:"481",f:"c"},{y:0,i:"cY",s:"0",z:0,o:"482",f:"c"}],f:30,b:[]}},bZ:180,O:["483","479","482","481","486","480","484","485"],n:"Untitled Layout","_":0,v:{"486":{x:"visible",i:"targetEl",dY:[["offset","100"],["start","800"],["duration","3200"]],a:320,bS:37,j:"absolute",c:600,k:"div",cP:"entry",d:602,z:6,b:905},"479":{h:"387",p:"no-repeat",x:"visible",a:48,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:18,b:31,k:"div",d:744,c:1163,cQ:1,cR:1},"482":{aU:30,G:"#FFF",b:0,c:540,bS:36,aV:30,r:"inline",cY:"0",d:542,s:"Spectral",X:0,e:1,t:16,Y:28,g:"#212121",u:"normal",cQ:1,Z:"break-word",v:"200",w:"<div>Wednesday, July 10, 1918:</div><div><br></div><div>Embarked on the S.S. \u201cTahiti\u201d for England with the 40th Specs at about 10am. We left the wharf at 1:55 p.m. and finally set sail at 5 p.m. Started off in fine weather and all well.&nbsp;</div><div><br></div><div>There were 4 companies of infantry, A B C &amp; E, and one coy of artillery and our own coy, the 40th Specs on board in this trip &amp; no doubt the total number will be about 1,200, truly a large number to be packed on this vessel, which I hear is about 7,000 tons, and where I am domiciled, we are packed in like sardines in the bows of the ship \u2018tween decks.&nbsp;</div><div><br></div><div>Our bunks consist of hammocks strung to the ceiling and we are packed right across the ship long ways &amp; sideways &amp; every inch of space is utilised, for underneath are our mess tables which are also our writing tables etc, &amp; we have to live down here in rough weather.</div><div><br></div><div>The food is very good and plenty of it. We have a band aboard &amp; I joined same. Played some tunes before we finally sailed.</div>",bF:"486",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:30,tX:0.5,aT:30,a:0,tY:0.5},"485":{h:"391",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"484",b:198,d:265.138,k:"div",c:393.333},"481":{aU:30,G:"#FFF",b:0,c:540,bS:36,aV:30,r:"inline",cY:"1",d:542,s:"Spectral",X:0,e:1,t:16,Y:28,g:"#212121",u:"normal",cQ:1,Z:"break-word",v:"200",i:"elementReadout",w:"<div>Wednesday, July 10, 1918:</div><div><br></div><div>Embarked on the S.S. \u201cTahiti\u201d for England with the 40th Specs at about 10am. We left the wharf at 1:55 p.m. and finally set sail at 5 p.m. Started off in fine weather and all well.&nbsp;</div><div><br></div><div>There were 4 companies of infantry, A B C &amp; E, and one coy of artillery and our own coy, the 40th Specs on board in this trip &amp; no doubt the total number will be about 1,200, truly a large number to be packed on this vessel, which I hear is about 7,000 tons, and where I am domiciled, we are packed in like sardines in the bows of the ship \u2018tween decks.&nbsp;</div><div><br></div><div>Our bunks consist of hammocks strung to the ceiling and we are packed right across the ship long ways &amp; sideways &amp; every inch of space is utilised, for underneath are our mess tables which are also our writing tables etc, &amp; we have to live down here in rough weather.</div><div><br></div><div>The food is very good and plenty of it. We have a band aboard &amp; I joined same. Played some tunes before we finally sailed.</div>",bF:"486",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:30,tX:0.5,aT:30,a:0,tY:0.5},"484":{x:"visible",k:"div",cW:{a:[{b:"48",p:3,z:false,symbolOid:"2"}]},c:394,d:461,z:19,cX:{a:[{b:"48",p:8,z:true,symbolOid:"2",J:false}]},a:423,j:"absolute",b:2423},"480":{c:1240,d:87,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:0,N:0,A:"#941100",x:"visible",j:"absolute",B:"#941100",P:0,k:"div",C:"#941100",z:22,O:0,D:"#941100",a:0,cW:{a:[{i:0,b:"434",p:9,symbolOid:"2"},{b:"434",p:8,z:false,symbolOid:"2",J:false}]},b:2407},"483":{w:"",h:"385",p:"no-repeat",x:"visible",a:-216,q:"100% 100%",b:0,j:"absolute",r:"inline",z:14,dB:"img",k:"div",d:15207,c:1672,cQ:1,cR:1}}},{A:{a:[{p:12,o:"86",q:false}]},o:"146",p:"600px",cA:false,Y:1240,Z:800,c:"#191919",L:[],bY:1,d:1240,U:{"416":{V:{"Main Timeline":"495"},W:"495",n:"Symbol"}},T:{"495":{b:[],c:"416",q:false,z:0,i:"495",n:"Main Timeline",a:[],s:"416",f:30},kTimelineDefaultIdentifier:{q:false,z:56,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:24,i:"cY",e:"0",s:"1",o:"489"},{y:0,i:"e",s:1,z:0,o:"487",f:"c"},{f:"c",y:0,z:24,i:"cY",e:"1",s:"0",o:"491"},{f:"c",y:0,z:24,i:"cY",e:"0",s:"1",o:"487"},{f:"c",y:0,z:14.16,i:"cY",e:"0",s:"1",o:"493"},{f:"c",y:0,z:14.16,i:"cY",e:"1",s:"0",o:"494"},{f:"c",y:0,z:42,i:"cY",e:"0",s:"1",o:"492"},{f:"c",y:0,z:56,i:"cY",e:"0",s:"1",o:"488"},{f:"c",y:1.15,z:1,i:"e",e:1,s:0,o:"491"},{f:"c",y:2.15,z:1,i:"e",e:1,s:0,o:"494"},{y:2.15,i:"e",s:1,z:0,o:"491",f:"c"},{y:3.15,i:"e",s:1,z:0,o:"494",f:"c"},{f:"c",y:14.16,z:9.14,i:"cY",e:"1",s:"0",o:"493"},{y:14.16,i:"cY",s:"1",z:0,o:"494",f:"c"},{y:24,i:"cY",s:"1",z:0,o:"491",f:"c"},{y:24,i:"cY",s:"0",z:0,o:"487",f:"c"},{f:"c",y:24,z:18,i:"cY",e:"1",s:"0",o:"489"},{y:24,i:"cY",s:"1",z:0,o:"493",f:"c"},{f:"c",y:42,z:14,i:"cY",e:"1",s:"0",o:"492"},{y:42,i:"cY",s:"1",z:0,o:"489",f:"c"},{y:56,i:"cY",s:"0",z:0,o:"488",f:"c"},{y:56,i:"cY",s:"1",z:0,o:"492",f:"c"}],f:30,b:[]}},bZ:180,O:["490","487","491","488","492","489","493","494","416"],n:"Untitled Layout","_":1,v:{"489":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"1",d:203,s:"'Roboto Mono'",X:0,e:1,t:24,Y:37,u:"normal",Z:"break-word",v:"normal",w:"<div>\"Yes, well, this started just after we left Freetown. In all, I should think we must have had more than 1,000 cases of influenza on this ship, out of troops in complement probably of about 1,500.\"</div><div><br></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:0,aT:0,a:320,F:"left",b:336},"492":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"1",d:203,s:"'Roboto Mono'",X:0,e:1,t:24,Y:37,u:"normal",Z:"break-word",v:"normal",w:"<div><div>\"There were questions asked in Parliament about the sickness on this ship. Why? Were the medical officers efficient? Were the stores sufficient? Were there sufficient drugs onboard?\"&nbsp;</div></div><div><br></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:0,aT:0,a:320,F:"left",b:336},"488":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"1",d:161,s:"'Roboto Mono'",X:0,e:1,t:24,Y:37,u:"normal",Z:"break-word",v:"normal",w:"<div><div><div>\"But shortly after that the epidemic struck New Zealand and of course the disaster in this country minimised the other one, and forgotten.\"</div></div></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:8,aS:0,aT:0,a:320,F:"left",b:336},"491":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"0",d:38,s:"'Roboto Mono'",e:0,t:18,Y:35,u:"normal",Z:"break-word",v:"300",w:"Unidentified male interviewer:<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:0,aT:0,a:320,F:"left",b:257},"494":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"0",d:161,s:"'Roboto Mono'",X:0,e:0,t:24,Y:37,u:"normal",Z:"break-word",v:"normal",w:"\"Lieutenant D. C. Low, who was assistant medical officer on board the New Zealand transport, Tahiti. Tahiti left Wellington on the 10 of July, 1918.\"",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:0,aT:0,a:320,F:"left",b:336},"416":{cS:true,x:"visible",a:465,cA:false,b:1112,j:"absolute",bX:false,c:310,k:"div",z:9,cL:"416",d:200,bY:1,cK:{a:[{b:"495",p:3,z:false}]},bZ:180,cM:true,cV:[]},"487":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"1",d:38,s:"'Roboto Mono'",e:1,t:18,Y:35,u:"normal",Z:"break-word",v:"300",w:"<div>Lieut. David Collingwood Low:</div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:0,aT:0,a:320,F:"left",b:257},"490":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",d:38,e:1,s:"'Roboto Mono'",X:0,t:18,Y:35,u:"normal",Z:"break-word",v:"300",w:"<div><font>New Zealand, 1967</font></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:0,aT:0,a:320,b:219},"493":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"1",d:203,s:"'Roboto Mono'",X:0,e:1,t:24,Y:37,u:"normal",Z:"break-word",v:"normal",w:"<div>\"Now, during that voyage, Dr. Low, when you were assistant medical officer, you had an outbreak of influenza, a quite serious one. I wonder if you'd tell me the story?\"</div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:0,aT:0,a:320,F:"left",b:336}}}],{"416":[]},h,{},null,false,true,-1,true,true,true,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
