//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_674F||null!=window.HYPE_dtl_674F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-674.full.min.js":"HYPE-674.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_674"+c,"HYPE_dtl_674"+c,a,d),false==!0&&(a=a||k("HYPE_w_674","HYPE_wdtl_674","HYPE-674.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_674","HYPE-674.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"scrolly",source:"function(hypeDocument, element, event) {function throttle (func, limit) {\n  var lastFunc;\n  var lastRan;\n  return function() {\n    var context = this;\n    var args = arguments;\n    if (!lastRan) {\n      func.apply(context, args);\n      lastRan = Date.now();\n    } else {\n      clearTimeout(lastFunc);\n      lastFunc = setTimeout(function() {\n        if ((Date.now() - lastRan) >= limit) {\n          func.apply(context, args);\n          lastRan = Date.now();\n        }\n      }, limit - (Date.now() - lastRan));\n    }\n  };\n}\n\nfunction pinEntries () {\n  var offset = 0,\n      sections = document.getElementsByClassName('section');\n  for (var i = 0; i < sections.length; i++) {\n    var section = sections[i],\n        entry = section.querySelector('.entry'),\n        pages = section.querySelector('.pages'),\n        start = section.offsetTop,\n        duration = pages.offsetHeight + entry.offsetHeight;\n    //console.log(scrollY, i, start, duration, section, entry, pages);\n    if (scrollY < start - offset) {\n      entry.style.position = 'absolute';\n      entry.style.top = '0px';\n      //console.log(1);\n    } else if (scrollY < start + duration) {\n      entry.style.position = \"fixed\";\n      entry.style.top = offset + \"px\";\n      entry.style.left = \"auto\";\n      entry.style.right = \"auto\";\n      entry.style.overflow = \"hidden\";\n      //console.log(2);\n    } else {\n      entry.style.position = \"absolute\";\n      entry.style.top = duration + \"px\";\n      //console.log(3);\n    }\n  }\n}\n\n\nfunction updateStory () {\n\thypeDocument.goToTimeInTimelineNamed(scrollY * 0.006, 'animations');\n\tpinEntries();\n}\n\n\nwindow.onscroll = throttle(updateStory, 100);\n}",identifier:"14"},{name:"locationHash",source:"function(hypeDocument, element, event) {\tvar checkHash = function() { \n var hash = window.location.hash.substring(1); \n for(var i = 0; i < hypeDocument.sceneNames().length; i++) {\n if(hypeDocument.sceneNames()[i] == hash) {\n hypeDocument.showSceneNamed(hash);\n break;\n }\n }\n }; \n \n if (window.loadedHashLocation != true) { \n window.loadedHashLocation = true; \n checkHash(); \n window.onhashchange = checkHash; \n }\n \n window.location.hash = \"#\" + hypeDocument.currentSceneName();\n\t\n}",identifier:"1046"},{name:"scrollToTop",source:"function(hypeDocument, element, event) {\n\t\nwindow.scrollTo({\n  top: 0,\n  left: 0,\n  behavior: 'smooth'\n});\n\t\n}",identifier:"1048"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_674"+c](f,g,{"-2":{n:"blank.gif"},"25":{p:1,n:"toTop.svg",g:"1153",t:"image/svg+xml"},"18":{p:1,n:"End%20logo.svg",g:"1115",t:"image/svg+xml"},"10":{p:1,n:"logo%403x.png",g:"1057",t:"@1x"},"19":{p:1,n:"To%20part%201.svg",g:"1120",t:"image/svg+xml"},"11":{p:1,n:"BG_1_2x.png",g:"620",t:"@2x"},"0":{p:1,n:"Title.svg",g:"182",t:"image/svg+xml"},"12":{p:1,n:"PastedVector-1.svg",g:"1090",t:"image/svg+xml"},"1":{p:1,n:"MA_I420766_TePapa_HMNZT-SS-Tahiti-No-4_tinified.png",g:"187",o:true,t:"@1x"},"20":{p:1,n:"Diary%20page%20scan_tinified.png",g:"1128",o:true,t:"@1x"},"2":{p:1,n:"MA_I420766_TePapa_HMNZT-SS-Tahiti-No-4_tinified_2x.png",g:"187",o:true,t:"@2x"},"13":{p:1,n:"USS_Leviathan_Tinified.jpg",g:"1098",o:true,t:"@1x"},"3":{p:1,n:"diarycover.png",g:"189",o:true,t:"@1x"},"21":{p:1,n:"Diary%20page%20scan_tinified_2x.png",g:"1128",o:true,t:"@2x"},"14":{p:1,n:"USS_Leviathan_Tinified_2x.jpg",g:"1098",o:true,t:"@2x"},"4":{p:1,n:"diarycover_2x.png",g:"189",o:true,t:"@2x"},"5":{p:1,n:"MarcusHansen.jpg",g:"191",o:true,t:"@1x"},"15":{p:1,n:"Tahiti%20Postcard_tinified.png",g:"1100",o:true,t:"@1x"},"22":{p:1,n:"D.C.%20Low%403x.png",g:"1147",o:true,t:"@1x"},"6":{p:1,n:"MarcusHansen_2x.jpg",g:"191",o:true,t:"@2x"},"23":{p:1,n:"D.C.%20Low%403x_2x.png",g:"1147",o:true,t:"@2x"},"16":{p:1,n:"Tahiti%20Postcard_tinified_2x.png",g:"1100",o:true,t:"@2x"},"7":{p:1,n:"1_Wellington.jpg",g:"203",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"8":{p:1,n:"ScrollToContinue.svg",g:"245",t:"image/svg+xml"},"24":{p:2,n:"Intro_interview.mp3",g:"1152",t:"audio/mpeg"},"17":{p:1,n:"expand.svg",g:"1106",t:"image/svg+xml"},"9":{p:1,n:"PastedVector.svg",g:"178",t:"image/svg+xml"}},l,["<link href='https://fonts.googleapis.com/css?family=Spectral:200&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Spectral:200italic&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Merriweather:300&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Merriweather:300italic&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto+Slab&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:700&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto:700&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:200&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto:100italic&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto:300italic&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto:300&subset=latin' rel='stylesheet' type='text/css'>"],e,[{n:"Untitled Scene",o:"1",X:[0]}],
[{A:{a:[{p:4,h:"14"}]},o:"3",p:"600px",cA:false,Y:1366,Z:5540,c:"#0F1014",L:[],bY:1,d:1366,U:{},T:{"1004":{q:false,z:0,i:"1004",n:"Il Bacio",a:[],f:30,b:[]},"932":{q:false,z:0,i:"932",n:"Expand: Postcard",a:[],f:30,b:[]},"15":{q:false,z:23,i:"15",n:"animations",a:[{f:"c",y:0,z:3,i:"dN",e:1,s:0.55389636,o:"1172"},{f:"b",y:0,z:23,i:"d",e:768,s:10,o:"1226"},{f:"c",y:2,z:2,i:"e",e:2,s:1,o:"1175"},{y:3,i:"dN",s:1,z:0,o:"1172",f:"c"},{y:4,i:"e",s:2,z:0,o:"1175",f:"c"},{f:"c",y:19,z:4,i:"e",e:0.6,s:0.1,o:"1187"},{y:23,i:"d",s:768,z:0,o:"1226",f:"c"},{y:23,i:"e",s:0.6,z:0,o:"1187",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:1,z:1,i:"f",e:-5,s:0,o:"1179"},{f:"c",y:1,z:1,i:"b",e:129,s:307,o:"1179"},{f:"c",y:1,z:1,i:"a",e:623,s:799,o:"1179"},{f:"c",y:1,z:1,i:"f",e:5,s:0,o:"1173"},{f:"c",y:1,z:1,i:"b",e:327,s:225,o:"1173"},{f:"c",y:1,z:1,i:"a",e:736,s:736,o:"1173"},{f:"c",y:1,z:1,i:"f",e:13,s:0,o:"1174"},{f:"c",y:1,z:1,i:"b",e:185,s:298,o:"1174"},{f:"c",y:1,z:1,i:"a",e:1103,s:908,o:"1174"},{y:2,i:"f",s:-5,z:0,o:"1179",f:"c"},{y:2,i:"b",s:129,z:0,o:"1179",f:"c"},{y:2,i:"a",s:623,z:0,o:"1179",f:"c"},{y:2,i:"f",s:5,z:0,o:"1173",f:"c"},{y:2,i:"b",s:327,z:0,o:"1173",f:"c"},{y:2,i:"a",s:736,z:0,o:"1173",f:"c"},{y:2,i:"f",s:13,z:0,o:"1174",f:"c"},{y:2,i:"b",s:185,z:0,o:"1174",f:"c"},{y:2,i:"a",s:1103,z:0,o:"1174",f:"c"}],f:30,b:[]}},bZ:180,O:["1181","1180","1171","1226","1190","1179","1174","1177","1173","1178","1172","1170","1193","1188","1194","1189","1195","1191","1192","1198","1197","1196","1201","1199","1200","1187","1186","1216","1207","1217","1220","1219","1218","1208","1176","1206","1175","1214","1215","1210","1209","1212","1213","1211","1223","1222","1225","1224","1202","1204","1203","1205","1221","1183","1184","1185","1182"],n:"Untitled Layout","_":0,v:{"1216":{aU:0,G:"#F9C024",H:"none",bS:36,aV:0,r:"inline",s:"'Roboto Slab'",X:5,t:16,u:"normal",Z:"break-word",v:"normal",w:"\u201c\u2026 IT WAS FORGOTTEN.\u201d",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:53,aS:0,aT:0,a:265,F:"left",b:2099},"1209":{w:"",h:"1128",p:"no-repeat",x:"visible",a:587,q:"100% 100%",b:3242,j:"absolute",r:"inline",z:134,dB:"img",k:"div",d:331,c:554,cQ:1,e:1,cR:1},"1196":{w:"",h:"1100",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:1,bF:"1201",dB:"img",d:196,k:"div",c:350},"1189":{aU:0,G:"#CECFD1",c:359,aV:0,r:"inline",d:76,e:1,s:"Roboto",t:16,Y:28,u:"normal",Z:"break-word",v:"300",w:"<div><span style=\"word-spacing: normal;\"><font><span style=\"font-weight: 700; font-size: 15px; letter-spacing: 2px;\">HE DISEASE SPREAD</span> so efficiently around the globe largely with the help of troopships during WWI. Often packed over capacity with soldiers,</font></span></div>",bF:"1194",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:0,aT:0,a:75,b:0},"1223":{aU:8,G:"#CECFD1",c:855,bS:36,aV:8,r:"inline",d:110,s:"Merriweather",X:0,t:18,Y:38,u:"normal",Z:"break-word",v:"300",w:"In light of the ongoing COVID-19 pandemic, Marcus Hansen\u2019s family generously allowed the transcription of his historical diary to be shared publicly. The voyage of the 40th Reinforcements is what follows, beginning with his first entry on July 10, 1918 in Wellington, New Zealand.<br>",bF:"1222",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,F:"center",b:0},"1202":{x:"visible",a:404,dB:"button",b:4489,j:"absolute",aA:{a:[{p:5,j:"https://heynongman1.github.io/DeathShip/Part1",k:false}]},k:"div",cP:"hvr-grow",d:203.633,z:145,c:559,aP:"pointer",bD:"none"},"1182":{h:"178",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:52208,j:"absolute",r:"inline",z:1,bF:"1180",dB:"img",d:13055,k:"div",cQ:1,c:1570,cR:1},"1175":{aU:0,G:"#CECFD1",c:429,aV:0,r:"inline",d:420,e:1,s:"Roboto",t:16,Y:28,u:"normal",Z:"break-word",v:"300",w:"<div>Few other firsthand accounts of the tragedy on the Tahiti have surfaced since its ill-fated voyage in the summer of 1918. In&nbsp;<span style=\"word-spacing: normal;\">2012, a soldier\u2019s diary was located and transcribed by his grandson, who had discovered it while going through some of his&nbsp;</span><span style=\"word-spacing: normal;\">late father\u2019s possessions.&nbsp;</span></div><div><div><br></div><div>The diarist, private Marcus Christian Hansen, was a member of the 40th Reinforcements, the New Zealand military unit onboard the troopship from July 10 through September 10, 1918. He was 31 years old at the time of the voyage.</div></div><div><br></div><div><div>Hansen\u2019s diary delivers an unprecedented firsthand account of one the most devastating outbreaks of the 1918 pandemic \u2014 an outbreak so severe that the Tahiti became known as the \u201cdeath ship.\u201d&nbsp;</div></div><div><br></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:25,aS:0,aT:0,a:265,b:2729},"1217":{w:"",h:"1147",p:"no-repeat",x:"visible",a:774,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:146,b:2161,k:"div",d:111,c:110.66666667},"1197":{aU:0,G:"#CECFD1",c:350,cP:"page",aV:0,r:"inline",d:52,e:1,s:"Roboto",t:15,Y:28,u:"italic",Z:"break-word",v:"300",w:"<div style=\"caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-style: italic;\"></div>The USS Leviathan in New York Harbor, July 8, 1918.<br><font size=\"2\">Photograph from U.S. National Archives.</font>",j:"absolute",x:"visible",k:"div",y:"preserve",z:35,aS:0,aT:0,a:773,b:1508},"1224":{aU:0,G:"#F9C024",bS:36,aV:0,r:"inline",e:1,s:"'Roboto Slab'",X:3,t:16,Z:"break-word",v:"200",w:"TAP BELOW TO START",bF:"1222",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:0,aT:0,a:323,F:"center",b:275},"1210":{p:"no-repeat",c:390,q:"100% 100%",d:328,r:"inline",e:1,gg:"1",f:-90,h:"189",j:"absolute",x:"visible",k:"div",dB:"img",z:133,Q:13,R:"#000",S:-15,a:223,T:-12,b:3240},"1190":{w:"",h:"620",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:69,j:"absolute",r:"inline",z:4,dB:"img",k:"div",d:2305,c:1366,cQ:1,cR:1},"1183":{h:"178",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:13052,j:"absolute",r:"inline",z:4,bF:"1180",dB:"img",d:13055,k:"div",cQ:1,c:1570,cR:1},"1176":{w:"",h:"191",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"1206",r:"inline",z:1,dB:"img",d:525,k:"div",c:350,e:1},"1203":{aU:0,bB:0,G:"#F9C024",c:559,bS:36,aV:0,r:"inline",d:66,e:1,s:"Spectral",X:0,bC:0,t:64,bL:0,u:"normal",Z:"break-word",v:"200",w:"<font>A crowded ship</font>",bF:"1202",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:1,aS:0,aT:0,a:0,bA:"#000",F:"center",b:48},"1218":{aU:0,G:"#9B9C9E",c:350,cP:"page",aV:0,r:"inline",d:41,e:1,s:"Roboto",t:15,Y:20,u:"italic",Z:"break-word",v:"300",w:"<div style=\"caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-style: italic;\"></div><font size=\"2\">Archival sound recording from the RNZ collection at Ng\u0101 Taonga Sound &amp; Vision ID 244922</font>",j:"absolute",x:"visible",k:"div",y:"preserve",z:147,aS:0,aT:0,a:773,b:2291},"1198":{h:"1106",p:"no-repeat",x:"visible",a:773,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:38,b:1468,k:"div",d:30,c:30,e:1},"1225":{h:"1115",p:"no-repeat",x:"visible",a:399,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:3,bF:"1222",b:198,d:38.685,k:"div",c:74.039},"1204":{aU:0,G:"#F9C024",bS:36,aV:0,r:"inline",e:1,s:"'Roboto Slab'",t:24,Z:"break-word",v:"200",w:"Part I",bF:"1202",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:0,aT:0,a:251,F:"center",b:0},"1191":{h:"1090",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:3,bF:"1194",b:6,d:70,k:"div",c:62},"1184":{h:"178",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:26104,j:"absolute",r:"inline",z:2,bF:"1180",dB:"img",d:13055,k:"div",cQ:1,c:1570,cR:1},"1211":{aU:0,G:"#CECFD1",c:887,cP:"page",aV:0,r:"inline",d:52,e:1,s:"Roboto",t:15,Y:20,u:"italic",Z:"break-word",v:"300",w:"<div style=\"caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-style: italic;\"></div>Above, the front cover and two entries from Private Marcus Hansen\u2019s diary during his time onboard the Tahiti.<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:135,aS:0,aT:0,a:268,b:3610},"1177":{h:"182",p:"no-repeat",x:"visible",a:81,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:29,k:"div",b:206,d:380.475,c:401.066},"1170":{h:"245",p:"no-repeat",x:"visible",a:81,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:131,b:705,k:"div",d:32.779,c:152.546,cQ:1,cR:1},"1199":{h:"1106",p:"no-repeat",x:"visible",a:773,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:42,b:1699,k:"div",d:30,c:30,e:1},"1219":{b:2239,z:140,K:"None",c:222,L:"None",d:32,aS:0,M:0,cQ:1,N:0,aT:0,bS:63,O:0,cR:1,aU:0,P:0,aV:0,i:"myAudio",j:"absolute",k:"div",aI:0,aJ:0,aK:0,aL:0,A:"#F9C024",B:"#F9C024",C:"#F9C024",D:"#F9C024",w:"<audio id=\"myAudio\" controls=\"control\" preload=\"auto\">\n    <source src=\"index.hyperesources/Intro_interview.mp3\" type=\"audio/mpeg\">  \n</audio>",x:"visible",I:"None",a:901,J:"None"},"1226":{c:8,cP:"fixed",d:10,I:"None",cY:"0",J:"None",bD:"none",K:"None",g:"#FF4733",L:"None",M:0,N:0,A:"#FF4733",x:"visible",j:"absolute",B:"#FF4733",P:0,O:0,C:"#FF4733",z:136,k:"div",D:"#FF4733",a:0,b:69},"1212":{h:"1106",p:"no-repeat",x:"visible",a:265,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:137,b:3543,k:"div",d:30,c:30,e:1},"1178":{aU:0,G:"#F9C024",c:216,aV:0,r:"inline",d:258,s:"Roboto",t:18,Y:40,Z:"break-word",w:"<div>The ill-fated voyage of New Zealand\u2019s Fortieth Reinforcements and a deadly influenza outbreak amidst the 1918 pandemic</div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:28,aS:0,aT:0,a:440,b:459},"1205":{w:"",h:"1120",p:"no-repeat",x:"visible",a:255,q:"100% 100%",b:155,j:"absolute",r:"inline",bF:"1202",z:3,dB:"img",d:48.633,k:"div",F:"center",c:48.633},"1192":{aU:0,G:"#CECFD1",c:434,aV:0,r:"inline",d:386,e:1,s:"Roboto",t:16,Y:28,u:"normal",Z:"break-word",v:"300",w:"the conditions onboard a troopship at&nbsp;<span style=\"word-spacing: normal;\">sea were prime for outbreaks of the pandemic influenza.</span><br><div><span style=\"word-spacing: normal;\"><br></span></div><div><span style=\"word-spacing: normal;\">The worst outbreak experienced by a U.S. troopship happened on the SS Leviathan in early October 1918. By the time the vessel reached its destination, roughly 2,000 of the 11,000 troops and crew (18%), had been infected.</span></div><div><br></div><div>The outbreak on&nbsp;New Zealand transport SS Tahiti, however, saw far worse results.&nbsp;<span style=\"word-spacing: normal;\">When the <i>Tahiti</i> arrived at Plymouth, U.K., on September 10, 1918, &nbsp;more than 90% of its 1,217 passengers had been or still were infected. Combined with the 7% death rate, what happened on the Tahiti is likely the worst outbreak onboard a troopship during the 1918 pandemic.</span></div>",bF:"1194",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:0,aT:0,a:0,b:84},"1185":{w:"",h:"178",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:39156,j:"absolute",r:"inline",bF:"1180",z:3,dB:"img",d:13055,k:"div",cQ:1,c:1570,cR:1},"1171":{x:"visible",a:530,b:59,j:"absolute",z:27,k:"div",dC:{path:[[1,1,1,1,1,391,1,391]],closed:false},d:392,c:2,dL:"nonzero",dD:1,dE:"#F9C024"},"1220":{aU:0,G:"#F9C024",c:203,cP:"page",aV:0,r:"inline",d:52,e:1,s:"'Roboto Slab'",t:15,Y:28,u:"normal",Z:"break-word",v:"normal",w:"<div style=\"caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-style: italic;\"></div>Dr. D.C. Low on the outbreak aboard the Tahiti:<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:144,aS:0,aT:0,a:900,b:2165},"1193":{aU:0,G:"#F9C024",bS:36,aV:0,r:"inline",e:1,s:"'Roboto Slab'",t:24,Z:"break-word",v:"200",w:"Preface",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:50,aS:0,aT:0,a:265,F:"center",b:1140},"1186":{x:"hidden",a:1,b:2075,j:"absolute",r:"inline",c:1366,k:"div",z:6,d:2936,cQ:1,e:0.5,cR:1},"1213":{h:"1106",p:"no-repeat",x:"visible",a:603,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:138,b:3543,k:"div",d:30,c:30,e:1},"1179":{p:"no-repeat",c:374,q:"100% 100%",d:242,r:"inline",gg:"0",f:0,h:"187",w:"",j:"absolute",x:"visible",k:"div",dB:"img",z:15,Q:8,R:"#000",S:-4,a:799,T:-4,b:307},"1206":{k:"div",x:"hidden",c:350,d:414,z:19,a:773,j:"absolute",b:2668},"1172":{x:"visible",a:530,b:676,j:"absolute",z:26,k:"div",dC:{path:[[1,1,1,1,1,419,1,419]],closed:false},d:420,dL:"nonzero",c:2,dD:1,dN:0.55389636,dE:"#F9C024"},"1221":{aU:0,G:"#F9C024",bS:36,aV:0,r:"inline",e:1,s:"'Roboto Slab'",X:3,t:16,Z:"break-word",v:"200",w:"CREDITS &amp; ACKNOWLEDGEMENTS",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:141,aS:0,aT:0,a:511,F:"center",b:4999},"1194":{k:"div",x:"visible",c:434,d:506,z:33,a:265,j:"absolute",b:1352},"1187":{w:"",h:"203",p:"no-repeat",x:"hidden",a:0,q:"100% 100%",b:0,j:"absolute",bF:"1186",r:"inline",z:1,dB:"img",d:3085,k:"div",c:1366,e:0.1},"1214":{h:"1106",p:"no-repeat",x:"visible",a:773,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:139,b:3052,k:"div",d:30,c:30,e:1},"1207":{aU:0,G:"#CECFD1",c:418,aV:0,r:"inline",d:261,e:1,s:"Roboto",t:16,Y:28,u:"normal",Z:"break-word",v:"300",w:"<div><span style=\"word-spacing: normal;\">In 1967, a compilation of interviews with New Zealand survivors of the 1918 Spanish Flu were used by broadcaster Jim Henderson in a radio documentary titled \u201cThe Great Plague.\u201d</span><br></div><div><br></div><div>Listen at right to a clip from the documentary, between an unidentified interviewer and &nbsp;Lieutenant D.C. Low, who was one of \u0003the medical officers onboard the Tahiti at the time of the outbreak almost 50 years prior.</div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:55,aS:0,aT:0,a:265,b:2160},"1200":{aU:0,G:"#CECFD1",c:350,cP:"page",aV:0,r:"inline",d:52,e:1,s:"Roboto",t:15,Y:28,u:"italic",Z:"break-word",v:"300",w:"<div style=\"caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-style: italic;\"></div>A 1916 postcard showing the SS Tahiti in port.&nbsp;<br><font size=\"2\">Courtesy of Masterton Library and Archives</font>",j:"absolute",x:"visible",k:"div",y:"preserve",z:37,aS:0,aT:0,a:773,b:1739},"1180":{x:"visible",k:"div",c:1572,d:65338,z:73,r:"none",a:-102,j:"absolute",b:0},"1173":{h:"189",p:"no-repeat",x:"visible",R:"#000",q:"100% 100%",b:225,j:"absolute",r:"inline",a:736,T:-12,z:17,d:407,dB:"img",Q:13,S:-15,k:"div",c:484,f:0,gg:"1"},"1208":{aU:0,G:"#F9C024",H:"none",bS:36,aV:0,r:"inline",s:"'Roboto Slab'",X:5,t:16,u:"normal",Z:"break-word",v:"normal",w:"<font>A SOLDIER\u2019S DIARY</font>",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:52,aS:0,aT:0,a:265,F:"left",b:2668},"1195":{w:"",h:"1098",p:"no-repeat",x:"visible",a:773,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:34,b:1352,k:"div",d:146,c:350},"1222":{k:"div",x:"visible",c:871,d:296,z:143,a:247,j:"absolute",b:3926},"1188":{aU:0,G:"#CECFD1",c:858,bS:36,aV:0,r:"inline",d:110,s:"Merriweather",X:0,t:24,Y:48,u:"normal",Z:"break-word",v:"300",w:"The influenza virus responsible for the 1918 pandemic, commonly referred to as the \u2018Spanish Flu,\u2019 followed the paths of its human carriers.&nbsp;<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:48,aS:0,aT:0,a:265,F:"left",b:1200},"1215":{aU:0,G:"#CECFD1",c:350,cP:"page",aV:0,r:"inline",d:52,e:1,s:"Roboto",t:15,Y:28,u:"italic",Z:"break-word",v:"300",w:"<div style=\"caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-style: italic;\"></div>A portrait of Private Marcus Christian Hansen.<br><font size=\"2\">Photograph from U.S. National Archives.</font>",j:"absolute",x:"visible",k:"div",y:"preserve",z:20,aS:0,aT:0,a:773,b:3092},"1201":{k:"div",x:"hidden",c:350,d:146,z:40,a:773,j:"absolute",b:1583},"1181":{w:"",h:"178",p:"no-repeat",x:"visible",a:2,q:"100% 100%",b:0,j:"absolute",r:"inline",bF:"1180",z:5,dB:"img",d:13055,k:"div",cQ:1,c:1570,cR:1},"1174":{p:"no-repeat",c:155,q:"100% 100%",d:233,r:"inline",gg:"0",f:0,h:"191",aY:0,w:"",j:"absolute",x:"visible",k:"div",dB:"img",z:16,Q:8,R:"#000",S:-4,a:908,T:-4,b:298}}}],{},h,{},null,false,true,-1,false,false,true,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
