//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_670F||null!=window.HYPE_dtl_670F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-670.full.min.js":"HYPE-670.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_670"+c,"HYPE_dtl_670"+c,a,d),true==!0&&(a=a||k("HYPE_w_670","HYPE_wdtl_670","HYPE-670.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_670","HYPE-670.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"July10",source:"function(hypeDocument, element, event) {\t\n\tvar elToFixed = hypeDocument.getElementById('targetEl');\n\tvar elReadOut = hypeDocument.getElementById('elementReadout');\n\t\n\twindow.onscroll = function() {\t\n\t\n\t\t\n\telReadOut.innerHTML = scrollY;\n\tif (scrollY < 1010) {\n\t    elToFixed.style.position = \"absolute\";\n\t    elToFixed.style.top = \"1100px\";\n\t  \t} \n\t  \t\n\t  \telse if (scrollY > 1010 && scrollY < 2800) {\n\t  \telToFixed.style.position = \"fixed\";\n\t  \telToFixed.style.top = \"100px\";\n\t  \telToFixed.style.left = \"auto\";\n\t  \telToFixed.style.right = \"auto\"\t\n\t\t} \n\t\t\n\t\telse if (scrollY > 2800) {\n\t\telToFixed.style.position = \"absolute\";\n\t    elToFixed.style.top = \"2900px\";\n\t\t}\n\t\t\n\n\t\n\t\n\t\n\t}\n\t\n\n\t\n}",identifier:"47"},{name:"wavesurfer",source:"function(hypeDocument, element, event) {\t\n\t\n\twindow.wavesurfer = WaveSurfer.create({\n  container: '#waveform',\n  waveColor: 'blue',\n  progressColor: 'black'\n});\n \n\nwindow.wavesurfer.load(window.wav );\n\n\n}",identifier:"197"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_670"+c](f,g,{"3":{p:2,n:"dark.mp3",g:"211",t:"audio/mpeg"},"1":{p:2,n:"audio.ogg",g:"86",t:"audio/ogg"},"-2":{n:"blank.gif"},"-1":{n:"PIE.htc"},"2":{p:1,n:"PastedVector.svg",g:"135",t:"image/svg+xml"},"0":{p:2,n:"audio-1.mp3",g:"86",t:"audio/mpeg"}},l,["<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:300&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto+Mono:700&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto+Mono:200&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto+Mono:300&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto+Mono&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Spectral&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Spectral:200&subset=latin' rel='stylesheet' type='text/css'>"],e,[{n:"Begin",o:"131",X:[0]},{n:"Intro",o:"141",X:[1]},{n:"Untitled Scene",o:"1",X:[2,3]}],
[{o:"133",p:"600px",cA:false,Y:1240,Z:800,L:[],c:"#101010",bY:1,d:1240,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"241"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{d:1.1,p:1,g:1,e:"1"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"243"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"242"},{y:1,i:"e",s:1,z:0,o:"243",f:"c"},{y:1,i:"e",s:1,z:0,o:"242",f:"c"},{y:1,i:"e",s:1,z:0,o:"241",f:"c"}],f:30,b:[]}},bZ:180,O:["242","241","243"],n:"Untitled Layout","_":0,v:{"241":{aU:0,G:"#D6D6D6",aV:0,r:"inline",e:0,s:"Roboto",t:16,Y:31,Z:"break-word",w:"<font>This presentation has sound. <br><span style=\"font-family: Roboto; white-space: nowrap;\">Headphones are recommended.</span></font>",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:0,aT:0,a:506,F:"center",b:360},"242":{h:"135",p:"no-repeat",x:"visible",a:603,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:3,b:300,k:"div",d:36,c:34,e:0},"243":{b:453,z:5,K:"Solid",c:136,cP:"hvr-grow",d:20,gg:"1",L:"Solid",e:0,M:1,N:1,aS:6,dB:"button",O:1,aT:6,aU:6,P:1,Q:0,aV:4,R:"rgba(0, 0, 0, 0.095)",j:"absolute",S:0,k:"div",aI:20,T:0,aJ:20,aK:20,aL:20,A:"#D6D6D6",B:"#D6D6D6",C:"#D6D6D6",s:"Roboto",D:"#D6D6D6",t:14,F:"center",aA:{a:[{d:0.3,p:1,g:2,f:1}]},v:"normal",G:"#FFF",aP:"pointer",w:"Begin",x:"visible",I:"Solid",a:545,J:"Solid"}}},{A:{a:[{p:12,o:"86",q:false}]},o:"146",p:"600px",cA:false,Y:1240,Z:800,c:"#101010",L:[],bY:1,d:1240,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:56,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:24,i:"cY",e:"0",s:"1",o:"246"},{y:0,i:"e",s:1,z:0,o:"244",f:"c"},{f:"c",y:0,z:24,i:"cY",e:"1",s:"0",o:"248"},{f:"c",y:0,z:24,i:"cY",e:"0",s:"1",o:"244"},{f:"c",y:0,z:14.16,i:"cY",e:"0",s:"1",o:"251"},{f:"c",y:0,z:14.16,i:"cY",e:"1",s:"0",o:"250"},{f:"c",y:0,z:42,i:"cY",e:"0",s:"1",o:"249"},{f:"c",y:0,z:56,i:"cY",e:"0",s:"1",o:"245"},{f:"c",y:1.15,z:1,i:"e",e:1,s:0,o:"248"},{f:"c",y:2.15,z:1,i:"e",e:1,s:0,o:"250"},{y:2.15,i:"e",s:1,z:0,o:"248",f:"c"},{y:3.15,i:"e",s:1,z:0,o:"250",f:"c"},{f:"c",y:14.16,z:9.14,i:"cY",e:"1",s:"0",o:"251"},{y:14.16,i:"cY",s:"1",z:0,o:"250",f:"c"},{y:24,i:"cY",s:"1",z:0,o:"248",f:"c"},{y:24,i:"cY",s:"0",z:0,o:"244",f:"c"},{f:"c",y:24,z:18,i:"cY",e:"1",s:"0",o:"246"},{y:24,i:"cY",s:"1",z:0,o:"251",f:"c"},{f:"c",y:42,z:14,i:"cY",e:"1",s:"0",o:"249"},{y:42,i:"cY",s:"1",z:0,o:"246",f:"c"},{y:56,i:"cY",s:"0",z:0,o:"245",f:"c"},{y:56,i:"cY",s:"1",z:0,o:"249",f:"c"}],f:30,b:[]}},bZ:180,O:["247","244","248","245","249","246","251","250"],n:"Untitled Layout","_":1,v:{"245":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"1",d:161,s:"'Roboto Mono'",X:0,e:1,t:24,Y:37,u:"normal",Z:"break-word",v:"normal",w:"<div><div><div>\"But shortly after that the epidemic struck New Zealand and of course the disaster in this country minimised the other one, and forgotten.\"</div></div></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:8,aS:0,aT:0,a:320,F:"left",b:336},"248":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"0",d:38,s:"'Roboto Mono'",e:0,t:18,Y:35,u:"normal",Z:"break-word",v:"300",w:"Unidentified male interviewer:<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:0,aT:0,a:320,F:"left",b:257},"251":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"1",d:203,s:"'Roboto Mono'",X:0,e:1,t:24,Y:37,u:"normal",Z:"break-word",v:"normal",w:"<div>\"Now, during that voyage, Dr. Low, when you were assistant medical officer, you had an outbreak of influenza, a quite serious one. I wonder if you'd tell me the story?\"</div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:0,aT:0,a:320,F:"left",b:336},"244":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"1",d:38,s:"'Roboto Mono'",e:1,t:18,Y:35,u:"normal",Z:"break-word",v:"300",w:"<div>Lieut. David Collingwood Low:</div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:0,aT:0,a:320,F:"left",b:257},"247":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",d:38,e:1,s:"'Roboto Mono'",X:0,t:18,Y:35,u:"normal",Z:"break-word",v:"300",w:"<div><font>New Zealand, 1967</font></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:0,aT:0,a:320,b:219},"250":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"0",d:161,s:"'Roboto Mono'",X:0,e:0,t:24,Y:37,u:"normal",Z:"break-word",v:"normal",w:"\"Lieutenant D. C. Low, who was assistant medical officer on board the New Zealand transport, Tahiti. Tahiti left Wellington on the 10 of July, 1918.\"",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:0,aT:0,a:320,F:"left",b:336},"246":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"1",d:203,s:"'Roboto Mono'",X:0,e:1,t:24,Y:37,u:"normal",Z:"break-word",v:"normal",w:"<div>\"Yes, well, this started just after we left Freetown. In all, I should think we must have had more than 1,000 cases of influenza on this ship, out of troops in complement probably of about 1,500.\"</div><div><br></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:0,aT:0,a:320,F:"left",b:336},"249":{aU:0,G:"#EBEBEB",c:600,aV:0,r:"inline",cY:"1",d:203,s:"'Roboto Mono'",X:0,e:1,t:24,Y:37,u:"normal",Z:"break-word",v:"normal",w:"<div><div>\"There were questions asked in Parliament about the sickness on this ship. Why? Were the medical officers efficient? Were the stores sufficient? Were there sufficient drugs onboard?\"&nbsp;</div></div><div><br></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:0,aT:0,a:320,F:"left",b:336}}},{A:{a:[{p:4,h:"47"}]},o:"239",p:"600px",cA:false,Y:320,Z:1068,c:"#101010",L:[],bY:1,d:320,U:{},T:{"238":{q:false,z:0.15,i:"238",n:"July10",a:[{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"274"},{y:0.15,i:"e",s:1,z:0,o:"274",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"cY",s:"0",z:0,o:"276",f:"c"},{f:"c",y:0,z:1,i:"cY",e:"0",s:"1",o:"274"},{y:0,i:"cY",s:"1",z:0,o:"275",f:"c"},{y:1,i:"cY",s:"0",z:0,o:"274",f:"c"}],f:30,b:[]}},bZ:180,O:["267","255","252","263","268","272","274","276","275","273","277","258","265","266","261","253","254","264","260","270","259","262","257","271","256","269"],n:"iPhone","_":2,v:{"275":{aU:30,G:"#FFF",b:0,c:540,bS:36,aV:30,r:"inline",cY:"1",d:542,s:"Spectral",X:0,e:1,t:18,Y:28,g:"#212121",u:"normal",cQ:1,Z:"break-word",v:"200",w:"<div>Wednesday, July 10, 1918:</div><div><br></div><div>Embarked on the S.S. \u201cTahiti\u201d for England with the 40th Specs at about 10am. We left the wharf at 1:55 p.m. and finally set sail at 5 p.m. Started off in fine weather and all well.&nbsp;</div><div><br></div><div>There were 4 companies of infantry, A B C &amp; E, and one coy of artillery and our own coy, the 40th Specs on board in this trip &amp; no doubt the total number will be about 1,200, truly a large number to be packed on this vessel, which I hear is about 7,000 tons, and where I am domiciled, we are packed in like sardines in the bows of the ship \u2018tween decks.&nbsp;</div><div><br></div><div>Our bunks consist of hammocks strung to the ceiling and we are packed right across the ship long ways &amp; sideways &amp; every inch of space is utilised, for underneath are our mess tables which are also our writing tables etc, &amp; we have to live down here in rough weather.</div><div><br></div><div>The food is very good and plenty of it. We have a band aboard &amp; I joined same. Played some tunes before we finally sailed.</div>",bF:"273",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:30,tX:0.5,aT:30,a:0,tY:0.5},"267":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:1,k:"div",D:"#101010",a:0,b:0},"259":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:11,k:"div",D:"#101010",a:0,b:2980},"271":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:14,k:"div",D:"#101010",a:0,b:3870},"263":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:2,k:"div",D:"#101010",a:0,b:300},"255":{x:"visible",k:"div",c:1240,d:4462,z:1,a:0,j:"absolute",bF:"252",b:0},"276":{aU:30,G:"#FFF",b:0,c:540,bS:36,aV:30,r:"inline",cY:"0",d:542,s:"Spectral",X:0,e:1,t:18,Y:28,g:"#212121",u:"normal",cQ:1,Z:"break-word",v:"200",w:"<div>Wednesday, July 10, 1918:</div><div><br></div><div>Embarked on the S.S. \u201cTahiti\u201d for England with the 40th Specs at about 10am. We left the wharf at 1:55 p.m. and finally set sail at 5 p.m. Started off in fine weather and all well.&nbsp;</div><div><br></div><div>There were 4 companies of infantry, A B C &amp; E, and one coy of artillery and our own coy, the 40th Specs on board in this trip &amp; no doubt the total number will be about 1,200, truly a large number to be packed on this vessel, which I hear is about 7,000 tons, and where I am domiciled, we are packed in like sardines in the bows of the ship \u2018tween decks.&nbsp;</div><div><br></div><div>Our bunks consist of hammocks strung to the ceiling and we are packed right across the ship long ways &amp; sideways &amp; every inch of space is utilised, for underneath are our mess tables which are also our writing tables etc, &amp; we have to live down here in rough weather.</div><div><br></div><div>The food is very good and plenty of it. We have a band aboard &amp; I joined same. Played some tunes before we finally sailed.</div>",bF:"273",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:30,tX:0.5,aT:30,a:0,tY:0.5},"268":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:3,k:"div",D:"#101010",a:0,b:600},"272":{x:"visible",k:"div",c:1240,d:602,z:3,a:0,bS:36,j:"absolute",b:800},"264":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:8,k:"div",D:"#101010",a:0,b:2090},"256":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:15,k:"div",D:"#101010",a:0,b:4170},"277":{c:100,d:100,I:"Solid",J:"Solid",K:"Solid",g:"rgba(0, 0, 0, 0.244)",L:"Solid",M:1,N:1,A:"#D6D6D6",x:"visible",j:"absolute",B:"#D6D6D6",P:1,O:1,C:"#D6D6D6",z:19,k:"div",D:"#D6D6D6",a:109,cW:{a:[{p:12,o:"211",q:false}]},b:863},"269":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:16,k:"div",D:"#101010",a:0,b:4460},"260":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:9,k:"div",D:"#101010",a:0,b:2390},"252":{x:"visible",k:"div",c:1240,d:4462,z:6,r:"inline",a:434,bS:55,j:"absolute",b:0},"273":{x:"visible",bF:"272",k:"div",c:600,d:602,z:2,a:320,bS:36,j:"absolute",b:0},"265":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:5,k:"div",D:"#101010",a:0,b:1200},"257":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:13,k:"div",D:"#101010",a:0,b:3570},"261":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:7,k:"div",D:"#101010",a:0,b:1790},"253":{x:"visible",k:"div",cW:{a:[{b:"238",p:3,z:false,symbolOid:"2"},{p:12,o:"211",q:false}]},c:393,d:416,z:18,cX:{a:[{b:"238",p:8,z:true,symbolOid:"2",J:false}]},a:630,j:"absolute",bF:"252",b:1792},"274":{aU:30,G:"#FFF",b:0,c:540,bS:36,aV:30,r:"inline",cY:"1",d:542,s:"Spectral",X:0,e:0,t:18,Y:28,g:"#212121",u:"normal",cQ:1,Z:"break-word",v:"200",w:"<div>Wednesday, July 10, 1918:</div><div><br></div><div>Embarked on the S.S. \u201cTahiti\u201d for England with the 40th Specs at about 10am. We left the wharf at 1:55 p.m. and finally set sail at 5 p.m. Started off in fine weather and all well.&nbsp;</div><div><br></div><div><font color=\"#fffc79\">There were 4 companies of infantry, A B C &amp; E, and one coy of artillery and our own coy, the 40th Specs on board in this trip &amp; no doubt the total number will be about 1,200, truly a large number to be packed on this vessel, which I hear is about 7,000 tons, and where I am domiciled, we are packed in like sardines in the bows of the ship \u2018tween decks.&nbsp;</font></div><div><br></div><div>Our bunks consist of hammocks strung to the ceiling and we are packed right across the ship long ways &amp; sideways &amp; every inch of space is utilised, for underneath are our mess tables which are also our writing tables etc, &amp; we have to live down here in rough weather.</div><div><br></div><div>The food is very good and plenty of it. We have a band aboard &amp; I joined same. Played some tunes before we finally sailed.</div>",bF:"273",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:30,tX:0.5,aT:30,a:0,tY:0.5},"266":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:6,k:"div",D:"#101010",a:0,b:1500},"258":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:4,k:"div",D:"#101010",a:0,b:900},"270":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:10,k:"div",D:"#101010",a:0,b:2680},"262":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"255",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:12,k:"div",D:"#101010",a:0,b:3280},"254":{aU:27,G:"#000",b:184,c:339,bS:45,aV:27,r:"inline",d:178,e:1,s:"Roboto",t:18,Y:31,g:"#D6D6D6",u:"normal",Z:"break-word",v:"normal",w:"<font>Marcus (Mark) was born on 18th April, 1887, Masterton in the Wairarapa. His parents, Hans and Marguerita (Margaret), had seven children, of whom Marcus was their 2nd to youngest and their youngest son.</font>",bF:"253",j:"absolute",x:"visible",A:"#D6D6D6",B:"#D6D6D6",y:"preserve",k:"div",C:"#D6D6D6",z:1,aS:27,D:"#D6D6D6",tX:0.5,aT:27,a:0,tY:0.5}}},{A:{a:[{p:4,h:"47"}]},o:"3",p:"600px",cA:false,Y:1240,Z:4800,c:"#101010",L:[],bY:1,d:1240,U:{},T:{"48":{q:false,z:0.15,i:"48",n:"July10",a:[{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"282"},{y:0.15,i:"e",s:1,z:0,o:"282",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"cY",s:"0",z:0,o:"281",f:"c"},{f:"c",y:0,z:1,i:"cY",e:"0",s:"1",o:"282"},{y:0,i:"cY",s:"1",z:0,o:"280",f:"c"},{y:1,i:"cY",s:"0",z:0,o:"282",f:"c"}],f:30,b:[]}},bZ:180,O:["297","286","283","296","300","278","282","281","280","279","295","299","302","288","284","285","290","292","294","298","301","287","289","291","293"],n:"Untitled Layout","_":3,v:{"302":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:6,k:"div",D:"#101010",a:0,b:1500},"296":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:2,k:"div",D:"#101010",a:0,b:300},"288":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:7,k:"div",D:"#101010",a:0,b:1790},"292":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:9,k:"div",D:"#101010",a:0,b:2390},"284":{x:"visible",k:"div",cW:{a:[{b:"48",p:3,z:false,symbolOid:"2"},{p:12,o:"211",q:false}]},c:393,d:416,z:18,cX:{a:[{b:"48",p:8,z:true,symbolOid:"2",J:false}]},a:630,j:"absolute",bF:"283",b:1792},"297":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:1,k:"div",D:"#101010",a:0,b:0},"289":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:14,k:"div",D:"#101010",a:0,b:3870},"280":{aU:30,G:"#FFF",b:0,c:540,bS:36,aV:30,r:"inline",cY:"1",d:542,s:"Spectral",X:0,e:1,t:18,Y:28,g:"#212121",u:"normal",cQ:1,Z:"break-word",v:"200",i:"elementReadout",w:"<div>Wednesday, July 10, 1918:</div><div><br></div><div>Embarked on the S.S. \u201cTahiti\u201d for England with the 40th Specs at about 10am. We left the wharf at 1:55 p.m. and finally set sail at 5 p.m. Started off in fine weather and all well.&nbsp;</div><div><br></div><div>There were 4 companies of infantry, A B C &amp; E, and one coy of artillery and our own coy, the 40th Specs on board in this trip &amp; no doubt the total number will be about 1,200, truly a large number to be packed on this vessel, which I hear is about 7,000 tons, and where I am domiciled, we are packed in like sardines in the bows of the ship \u2018tween decks.&nbsp;</div><div><br></div><div>Our bunks consist of hammocks strung to the ceiling and we are packed right across the ship long ways &amp; sideways &amp; every inch of space is utilised, for underneath are our mess tables which are also our writing tables etc, &amp; we have to live down here in rough weather.</div><div><br></div><div>The food is very good and plenty of it. We have a band aboard &amp; I joined same. Played some tunes before we finally sailed.</div>",bF:"279",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:30,tX:0.5,aT:30,a:0,tY:0.5},"293":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:16,k:"div",D:"#101010",a:0,b:4460},"285":{aU:27,G:"#000",b:184,c:339,bS:45,aV:27,r:"inline",d:178,e:1,s:"Roboto",t:18,Y:31,g:"#D6D6D6",u:"normal",Z:"break-word",v:"normal",w:"<font>Marcus (Mark) was born on 18th April, 1887, Masterton in the Wairarapa. His parents, Hans and Marguerita (Margaret), had seven children, of whom Marcus was their 2nd to youngest and their youngest son.</font>",bF:"284",j:"absolute",x:"visible",A:"#D6D6D6",B:"#D6D6D6",y:"preserve",k:"div",C:"#D6D6D6",z:1,aS:27,D:"#D6D6D6",tX:0.5,aT:27,a:0,tY:0.5},"298":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:11,k:"div",D:"#101010",a:0,b:2980},"281":{aU:30,G:"#FFF",b:0,c:540,bS:36,aV:30,r:"inline",cY:"0",d:542,s:"Spectral",X:0,e:1,t:18,Y:28,g:"#212121",u:"normal",cQ:1,Z:"break-word",v:"200",w:"<div>Wednesday, July 10, 1918:</div><div><br></div><div>Embarked on the S.S. \u201cTahiti\u201d for England with the 40th Specs at about 10am. We left the wharf at 1:55 p.m. and finally set sail at 5 p.m. Started off in fine weather and all well.&nbsp;</div><div><br></div><div>There were 4 companies of infantry, A B C &amp; E, and one coy of artillery and our own coy, the 40th Specs on board in this trip &amp; no doubt the total number will be about 1,200, truly a large number to be packed on this vessel, which I hear is about 7,000 tons, and where I am domiciled, we are packed in like sardines in the bows of the ship \u2018tween decks.&nbsp;</div><div><br></div><div>Our bunks consist of hammocks strung to the ceiling and we are packed right across the ship long ways &amp; sideways &amp; every inch of space is utilised, for underneath are our mess tables which are also our writing tables etc, &amp; we have to live down here in rough weather.</div><div><br></div><div>The food is very good and plenty of it. We have a band aboard &amp; I joined same. Played some tunes before we finally sailed.</div>",bF:"279",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:30,tX:0.5,aT:30,a:0,tY:0.5},"300":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:3,k:"div",D:"#101010",a:0,b:600},"294":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:10,k:"div",D:"#101010",a:0,b:2680},"286":{x:"visible",k:"div",c:1240,d:4462,z:1,a:0,j:"absolute",bF:"283",b:0},"278":{x:"visible",k:"div",c:1240,d:602,z:3,i:"targetEl",a:0,bS:36,j:"absolute",b:800},"299":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:5,k:"div",D:"#101010",a:0,b:1200},"290":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:8,k:"div",D:"#101010",a:0,b:2090},"282":{aU:30,G:"#FFF",b:0,c:540,bS:36,aV:30,r:"inline",cY:"1",d:542,s:"Spectral",X:0,e:0,t:18,Y:28,g:"#212121",u:"normal",cQ:1,Z:"break-word",v:"200",w:"<div>Wednesday, July 10, 1918:</div><div><br></div><div>Embarked on the S.S. \u201cTahiti\u201d for England with the 40th Specs at about 10am. We left the wharf at 1:55 p.m. and finally set sail at 5 p.m. Started off in fine weather and all well.&nbsp;</div><div><br></div><div><font color=\"#fffc79\">There were 4 companies of infantry, A B C &amp; E, and one coy of artillery and our own coy, the 40th Specs on board in this trip &amp; no doubt the total number will be about 1,200, truly a large number to be packed on this vessel, which I hear is about 7,000 tons, and where I am domiciled, we are packed in like sardines in the bows of the ship \u2018tween decks.&nbsp;</font></div><div><br></div><div>Our bunks consist of hammocks strung to the ceiling and we are packed right across the ship long ways &amp; sideways &amp; every inch of space is utilised, for underneath are our mess tables which are also our writing tables etc, &amp; we have to live down here in rough weather.</div><div><br></div><div>The food is very good and plenty of it. We have a band aboard &amp; I joined same. Played some tunes before we finally sailed.</div>",bF:"279",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:30,tX:0.5,aT:30,a:0,tY:0.5},"301":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:12,k:"div",D:"#101010",a:0,b:3280},"295":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:4,k:"div",D:"#101010",a:0,b:900},"287":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:13,k:"div",D:"#101010",a:0,b:3570},"279":{x:"visible",bF:"278",k:"div",c:600,d:602,z:2,a:320,bS:36,j:"absolute",b:0},"291":{c:1240,d:2,r:"inline",I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,bF:"286",N:0,A:"#101010",x:"visible",j:"absolute",B:"#101010",P:0,O:0,C:"#101010",z:15,k:"div",D:"#101010",a:0,b:4170},"283":{x:"visible",k:"div",c:1240,d:4462,z:6,r:"inline",a:0,bS:55,j:"absolute",b:0}}}],{},h,{},null,false,true,-1,true,true,true,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
