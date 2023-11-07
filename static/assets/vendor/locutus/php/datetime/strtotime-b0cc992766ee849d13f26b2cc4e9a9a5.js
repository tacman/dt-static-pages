/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/locutus@2.0.16/php/datetime/strtotime.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t="[ \\t]+",e="[ \\t]*",a="(?:([ap])\\.?m\\.?([\\t ]|$))",s="(2[0-4]|[01]?[0-9])",i="([01][0-9]|2[0-4])",r="(0?[1-9]|1[0-2])",n="([0-5]?[0-9])",h="([0-5][0-9])",o="(60|[0-5]?[0-9])",c="(60|[0-5][0-9])",d="(?:\\.([0-9]+))",m="sunday|monday|tuesday|wednesday|thursday|friday|saturday",u="sun|mon|tue|wed|thu|fri|sat",l=m+"|"+u+"|weekdays?",g="first|second|third|fourth|fifth|sixth|seventh|eighth?|ninth|tenth|eleventh|twelfth",y="next|last|previous|this",f="(?:second|sec|minute|min|hour|day|fortnight|forthnight|month|year)s?|weeks|"+l,x="([0-9]{1,4})",k="([0-9]{4})",b="(1[0-2]|0?[0-9])",p="(0[0-9]|1[0-2])",w="(?:(3[01]|[0-2]?[0-9])(?:st|nd|rd|th)?)",v="(0[0-9]|[1-2][0-9]|3[01])",R="january|february|march|april|may|june|july|august|september|october|november|december",N="jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec",E="("+R+"|"+N+"|i[vx]|vi{0,3}|xi{0,2}|i{1,3})",T="((?:GMT)?([+-])"+s+":?"+n+"?)",D=E+"[ .\\t-]*"+w+"[,.stndrh\\t ]*";function S(t,e){switch(e=e&&e.toLowerCase()){case"a":t+=12===t?-12:0;break;case"p":t+=12!==t?12:0}return t}function z(t){var e=+t;return t.length<4&&e<100&&(e+=e<70?2e3:1900),e}function L(t){return{jan:0,january:0,i:0,feb:1,february:1,ii:1,mar:2,march:2,iii:2,apr:3,april:3,iv:3,may:4,v:4,jun:5,june:5,vi:5,jul:6,july:6,vii:6,aug:7,august:7,viii:7,sep:8,sept:8,september:8,ix:8,oct:9,october:9,x:9,nov:10,november:10,xi:10,dec:11,december:11,xii:11}[t.toLowerCase()]}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{mon:1,monday:1,tue:2,tuesday:2,wed:3,wednesday:3,thu:4,thursday:4,fri:5,friday:5,sat:6,saturday:6,sun:0,sunday:0}[t.toLowerCase()]||e}function M(t,e){if(!(t=t&&t.match(/(?:GMT)?([+-])(\d+)(:?)(\d{0,2})/i)))return e;var a="-"===t[1]?-1:1,s=+t[2],i=+t[4];return t[4]||t[3]||(i=Math.floor(s%100),s=Math.floor(s/100)),a*(60*s+i)*60}var C={acdt:37800,acst:34200,addt:-7200,adt:-10800,aedt:39600,aest:36e3,ahdt:-32400,ahst:-36e3,akdt:-28800,akst:-32400,amt:-13840,apt:-10800,ast:-14400,awdt:32400,awst:28800,awt:-10800,bdst:7200,bdt:-36e3,bmt:-14309,bst:3600,cast:34200,cat:7200,cddt:-14400,cdt:-18e3,cemt:10800,cest:7200,cet:3600,cmt:-15408,cpt:-18e3,cst:-21600,cwt:-18e3,chst:36e3,dmt:-1521,eat:10800,eddt:-10800,edt:-14400,eest:10800,eet:7200,emt:-26248,ept:-14400,est:-18e3,ewt:-14400,ffmt:-14660,fmt:-4056,gdt:39600,gmt:0,gst:36e3,hdt:-34200,hkst:32400,hkt:28800,hmt:-19776,hpt:-34200,hst:-36e3,hwt:-34200,iddt:14400,idt:10800,imt:25025,ist:7200,jdt:36e3,jmt:8440,jst:32400,kdt:36e3,kmt:5736,kst:30600,lst:9394,mddt:-18e3,mdst:16279,mdt:-21600,mest:7200,met:3600,mmt:9017,mpt:-21600,msd:14400,msk:10800,mst:-25200,mwt:-21600,nddt:-5400,ndt:-9052,npt:-9e3,nst:-12600,nwt:-9e3,nzdt:46800,nzmt:41400,nzst:43200,pddt:-21600,pdt:-25200,pkst:21600,pkt:18e3,plmt:25590,pmt:-13236,ppmt:-17340,ppt:-25200,pst:-28800,pwt:-25200,qmt:-18840,rmt:5794,sast:7200,sdmt:-16800,sjmt:-20173,smt:-13884,sst:-39600,tbmt:10751,tmt:12344,uct:0,utc:0,wast:7200,wat:3600,wemt:7200,west:3600,wet:0,wib:25200,wita:28800,wit:32400,wmt:5040,yddt:-25200,ydt:-28800,ypt:-28800,yst:-32400,ywt:-28800,a:3600,b:7200,c:10800,d:14400,e:18e3,f:21600,g:25200,h:28800,i:32400,k:36e3,l:39600,m:43200,n:-3600,o:-7200,p:-10800,q:-14400,r:-18e3,s:-21600,t:-25200,u:-28800,v:-32400,w:-36e3,x:-39600,y:-43200,z:0},j={yesterday:{regex:/^yesterday/i,name:"yesterday",callback:function(){return this.rd-=1,this.resetTime()}},now:{regex:/^now/i,name:"now"},noon:{regex:/^noon/i,name:"noon",callback:function(){return this.resetTime()&&this.time(12,0,0,0)}},midnightOrToday:{regex:/^(midnight|today)/i,name:"midnight | today",callback:function(){return this.resetTime()}},tomorrow:{regex:/^tomorrow/i,name:"tomorrow",callback:function(){return this.rd+=1,this.resetTime()}},timestamp:{regex:/^@(-?\d+)/i,name:"timestamp",callback:function(t,e){return this.rs+=+e,this.y=1970,this.m=0,this.d=1,this.dates=0,this.resetTime()&&this.zone(0)}},firstOrLastDay:{regex:/^(first|last) day of/i,name:"firstdayof | lastdayof",callback:function(t,e){"first"===e.toLowerCase()?this.firstOrLastDayOfMonth=1:this.firstOrLastDayOfMonth=-1}},backOrFrontOf:{regex:RegExp("^(back|front) of "+s+e+a+"?","i"),name:"backof | frontof",callback:function(t,e,a,s){var i=+a,r=15;return"back"===e.toLowerCase()||(i-=1,r=45),i=S(i,s),this.resetTime()&&this.time(i,r,0,0)}},weekdayOf:{regex:RegExp("^("+g+"|"+y+")"+t+"("+m+"|"+u+")"+t+"of","i"),name:"weekdayof"},mssqltime:{regex:RegExp("^"+r+":"+h+":"+c+"[:.]([0-9]+)"+a,"i"),name:"mssqltime",callback:function(t,e,a,s,i,r){return this.time(S(+e,r),+a,+s,+i.substr(0,3))}},timeLong12:{regex:RegExp("^"+r+"[:.]"+n+"[:.]"+c+e+a,"i"),name:"timelong12",callback:function(t,e,a,s,i){return this.time(S(+e,i),+a,+s,0)}},timeShort12:{regex:RegExp("^"+r+"[:.]"+h+e+a,"i"),name:"timeshort12",callback:function(t,e,a,s){return this.time(S(+e,s),+a,0,0)}},timeTiny12:{regex:RegExp("^"+r+e+a,"i"),name:"timetiny12",callback:function(t,e,a){return this.time(S(+e,a),0,0,0)}},soap:{regex:RegExp("^"+k+"-"+p+"-"+v+"T"+i+":"+h+":"+c+d+T+"?","i"),name:"soap",callback:function(t,e,a,s,i,r,n,h,o){return this.ymd(+e,a-1,+s)&&this.time(+i,+r,+n,+h.substr(0,3))&&this.zone(M(o))}},wddx:{regex:RegExp("^"+k+"-"+b+"-"+w+"T"+s+":"+n+":"+o),name:"wddx",callback:function(t,e,a,s,i,r,n){return this.ymd(+e,a-1,+s)&&this.time(+i,+r,+n,0)}},exif:{regex:RegExp("^"+k+":"+p+":"+v+" "+i+":"+h+":"+c,"i"),name:"exif",callback:function(t,e,a,s,i,r,n){return this.ymd(+e,a-1,+s)&&this.time(+i,+r,+n,0)}},xmlRpc:{regex:RegExp("^"+k+p+v+"T"+s+":"+h+":"+c),name:"xmlrpc",callback:function(t,e,a,s,i,r,n){return this.ymd(+e,a-1,+s)&&this.time(+i,+r,+n,0)}},xmlRpcNoColon:{regex:RegExp("^"+k+p+v+"[Tt]"+s+h+c),name:"xmlrpcnocolon",callback:function(t,e,a,s,i,r,n){return this.ymd(+e,a-1,+s)&&this.time(+i,+r,+n,0)}},clf:{regex:RegExp("^"+w+"/("+N+")/"+k+":"+i+":"+h+":"+c+t+T,"i"),name:"clf",callback:function(t,e,a,s,i,r,n,h){return this.ymd(+s,L(a),+e)&&this.time(+i,+r,+n,0)&&this.zone(M(h))}},iso8601long:{regex:RegExp("^t?"+s+"[:.]"+n+"[:.]"+o+d,"i"),name:"iso8601long",callback:function(t,e,a,s,i){return this.time(+e,+a,+s,+i.substr(0,3))}},dateTextual:{regex:RegExp("^"+E+"[ .\\t-]*"+w+"[,.stndrh\\t ]+"+x,"i"),name:"datetextual",callback:function(t,e,a,s){return this.ymd(z(s),L(e),+a)}},pointedDate4:{regex:RegExp("^"+w+"[.\\t-]"+b+"[.-]"+k),name:"pointeddate4",callback:function(t,e,a,s){return this.ymd(+s,a-1,+e)}},pointedDate2:{regex:RegExp("^"+w+"[.\\t]"+b+"\\.([0-9]{2})"),name:"pointeddate2",callback:function(t,e,a,s){return this.ymd(z(s),a-1,+e)}},timeLong24:{regex:RegExp("^t?"+s+"[:.]"+n+"[:.]"+o),name:"timelong24",callback:function(t,e,a,s){return this.time(+e,+a,+s,0)}},dateNoColon:{regex:RegExp("^"+k+p+v),name:"datenocolon",callback:function(t,e,a,s){return this.ymd(+e,a-1,+s)}},pgydotd:{regex:RegExp("^"+k+"\\.?(00[1-9]|0[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6])"),name:"pgydotd",callback:function(t,e,a){return this.ymd(+e,0,+a)}},timeShort24:{regex:RegExp("^t?"+s+"[:.]"+n,"i"),name:"timeshort24",callback:function(t,e,a){return this.time(+e,+a,0,0)}},iso8601noColon:{regex:RegExp("^t?"+i+h+c,"i"),name:"iso8601nocolon",callback:function(t,e,a,s){return this.time(+e,+a,+s,0)}},iso8601dateSlash:{regex:RegExp("^"+k+"/"+p+"/"+v+"/"),name:"iso8601dateslash",callback:function(t,e,a,s){return this.ymd(+e,a-1,+s)}},dateSlash:{regex:RegExp("^"+k+"/"+b+"/"+w),name:"dateslash",callback:function(t,e,a,s){return this.ymd(+e,a-1,+s)}},american:{regex:RegExp("^"+b+"/"+w+"/"+x),name:"american",callback:function(t,e,a,s){return this.ymd(z(s),e-1,+a)}},americanShort:{regex:RegExp("^"+b+"/"+w),name:"americanshort",callback:function(t,e,a){return this.ymd(this.y,e-1,+a)}},gnuDateShortOrIso8601date2:{regex:RegExp("^"+x+"-"+b+"-"+w),name:"gnudateshort | iso8601date2",callback:function(t,e,a,s){return this.ymd(z(e),a-1,+s)}},iso8601date4:{regex:RegExp("^([+-]?[0-9]{4})-"+p+"-"+v),name:"iso8601date4",callback:function(t,e,a,s){return this.ymd(+e,a-1,+s)}},gnuNoColon:{regex:RegExp("^t?"+i+h,"i"),name:"gnunocolon",callback:function(t,e,a){switch(this.times){case 0:return this.time(+e,+a,0,this.f);case 1:return this.y=100*e+ +a,this.times++,!0;default:return!1}}},gnuDateShorter:{regex:RegExp("^"+k+"-"+b),name:"gnudateshorter",callback:function(t,e,a){return this.ymd(+e,a-1,1)}},pgTextReverse:{regex:RegExp("^(\\d{3,4}|[4-9]\\d|3[2-9])-("+N+")-"+v,"i"),name:"pgtextreverse",callback:function(t,e,a,s){return this.ymd(z(e),L(a),+s)}},dateFull:{regex:RegExp("^"+w+"[ \\t.-]*"+E+"[ \\t.-]*"+x,"i"),name:"datefull",callback:function(t,e,a,s){return this.ymd(z(s),L(a),+e)}},dateNoDay:{regex:RegExp("^"+E+"[ .\\t-]*"+k,"i"),name:"datenoday",callback:function(t,e,a){return this.ymd(+a,L(e),1)}},dateNoDayRev:{regex:RegExp("^"+k+"[ .\\t-]*"+E,"i"),name:"datenodayrev",callback:function(t,e,a){return this.ymd(+e,L(a),1)}},pgTextShort:{regex:RegExp("^("+N+")-"+v+"-"+x,"i"),name:"pgtextshort",callback:function(t,e,a,s){return this.ymd(z(s),L(e),+a)}},dateNoYear:{regex:RegExp("^"+D,"i"),name:"datenoyear",callback:function(t,e,a){return this.ymd(this.y,L(e),+a)}},dateNoYearRev:{regex:RegExp("^"+w+"[ .\\t-]*"+E,"i"),name:"datenoyearrev",callback:function(t,e,a){return this.ymd(this.y,L(a),+e)}},isoWeekDay:{regex:RegExp("^"+k+"-?W(0[1-9]|[1-4][0-9]|5[0-3])(?:-?([0-7]))?"),name:"isoweekday | isoweek",callback:function(t,e,a,s){if(s=s?+s:1,!this.ymd(+e,0,1))return!1;var i=new Date(this.y,this.m,this.d).getDay();i=0-(i>4?i-7:i),this.rd+=i+7*(a-1)+s}},relativeText:{regex:RegExp("^("+g+"|"+y+")"+t+"("+f+")","i"),name:"relativetext",callback:function(t,e,a){var s,i={amount:{last:-1,previous:-1,this:0,first:1,next:1,second:2,third:3,fourth:4,fifth:5,sixth:6,seventh:7,eight:8,eighth:8,ninth:9,tenth:10,eleventh:11,twelfth:12}[s=e.toLowerCase()],behavior:{this:1}[s]||0}.amount;switch(a.toLowerCase()){case"sec":case"secs":case"second":case"seconds":this.rs+=i;break;case"min":case"mins":case"minute":case"minutes":this.ri+=i;break;case"hour":case"hours":this.rh+=i;break;case"day":case"days":this.rd+=i;break;case"fortnight":case"fortnights":case"forthnight":case"forthnights":this.rd+=14*i;break;case"week":case"weeks":this.rd+=7*i;break;case"month":case"months":this.rm+=i;break;case"year":case"years":this.ry+=i;break;case"mon":case"monday":case"tue":case"tuesday":case"wed":case"wednesday":case"thu":case"thursday":case"fri":case"friday":case"sat":case"saturday":case"sun":case"sunday":this.resetTime(),this.weekday=O(a,7),this.weekdayBehavior=1,this.rd+=7*(i>0?i-1:i)}}},relative:{regex:RegExp("^([+-]*)[ \\t]*(\\d+)"+e+"("+f+"|week)","i"),name:"relative",callback:function(t,e,a,s){var i=e.replace(/[^-]/g,"").length,r=+a*Math.pow(-1,i);switch(s.toLowerCase()){case"sec":case"secs":case"second":case"seconds":this.rs+=r;break;case"min":case"mins":case"minute":case"minutes":this.ri+=r;break;case"hour":case"hours":this.rh+=r;break;case"day":case"days":this.rd+=r;break;case"fortnight":case"fortnights":case"forthnight":case"forthnights":this.rd+=14*r;break;case"week":case"weeks":this.rd+=7*r;break;case"month":case"months":this.rm+=r;break;case"year":case"years":this.ry+=r;break;case"mon":case"monday":case"tue":case"tuesday":case"wed":case"wednesday":case"thu":case"thursday":case"fri":case"friday":case"sat":case"saturday":case"sun":case"sunday":this.resetTime(),this.weekday=O(s,7),this.weekdayBehavior=1,this.rd+=7*(r>0?r-1:r)}}},dayText:{regex:RegExp("^("+l+")","i"),name:"daytext",callback:function(t,e){this.resetTime(),this.weekday=O(e,0),2!==this.weekdayBehavior&&(this.weekdayBehavior=1)}},relativeTextWeek:{regex:RegExp("^("+y+")"+t+"week","i"),name:"relativetextweek",callback:function(t,e){switch(this.weekdayBehavior=2,e.toLowerCase()){case"this":this.rd+=0;break;case"next":this.rd+=7;break;case"last":case"previous":this.rd-=7}isNaN(this.weekday)&&(this.weekday=1)}},monthFullOrMonthAbbr:{regex:RegExp("^("+R+"|"+N+")","i"),name:"monthfull | monthabbr",callback:function(t,e){return this.ymd(this.y,L(e),this.d)}},tzCorrection:{regex:RegExp("^"+T,"i"),name:"tzcorrection",callback:function(t){return this.zone(M(t))}},tzAbbr:{regex:RegExp("^\\(?([a-zA-Z]{1,6})\\)?"),name:"tzabbr",callback:function(t,e){var a=C[e.toLowerCase()];return!isNaN(a)&&this.zone(a)}},ago:{regex:/^ago/i,name:"ago",callback:function(){this.ry=-this.ry,this.rm=-this.rm,this.rd=-this.rd,this.rh=-this.rh,this.ri=-this.ri,this.rs=-this.rs,this.rf=-this.rf}},year4:{regex:RegExp("^"+k),name:"year4",callback:function(t,e){return this.y=+e,!0}},whitespace:{regex:/^[ .,\t]+/,name:"whitespace"},dateShortWithTimeLong:{regex:RegExp("^"+D+"t?"+s+"[:.]"+n+"[:.]"+o,"i"),name:"dateshortwithtimelong",callback:function(t,e,a,s,i,r){return this.ymd(this.y,L(e),+a)&&this.time(+s,+i,+r,0)}},dateShortWithTimeLong12:{regex:RegExp("^"+D+r+"[:.]"+n+"[:.]"+c+e+a,"i"),name:"dateshortwithtimelong12",callback:function(t,e,a,s,i,r,n){return this.ymd(this.y,L(e),+a)&&this.time(S(+s,n),+i,+r,0)}},dateShortWithTimeShort:{regex:RegExp("^"+D+"t?"+s+"[:.]"+n,"i"),name:"dateshortwithtimeshort",callback:function(t,e,a,s,i){return this.ymd(this.y,L(e),+a)&&this.time(+s,+i,0,0)}},dateShortWithTimeShort12:{regex:RegExp("^"+D+r+"[:.]"+h+e+a,"i"),name:"dateshortwithtimeshort12",callback:function(t,e,a,s,i,r){return this.ymd(this.y,L(e),+a)&&this.time(S(+s,r),+i,0,0)}}},W={y:NaN,m:NaN,d:NaN,h:NaN,i:NaN,s:NaN,f:NaN,ry:0,rm:0,rd:0,rh:0,ri:0,rs:0,rf:0,weekday:NaN,weekdayBehavior:0,firstOrLastDayOfMonth:0,z:NaN,dates:0,times:0,zones:0,ymd:function(t,e,a){return!(this.dates>0)&&(this.dates++,this.y=t,this.m=e,this.d=a,!0)},time:function(t,e,a,s){return!(this.times>0)&&(this.times++,this.h=t,this.i=e,this.s=a,this.f=s,!0)},resetTime:function(){return this.h=0,this.i=0,this.s=0,this.f=0,this.times=0,!0},zone:function(t){return this.zones<=1&&(this.zones++,this.z=t,!0)},toDate:function(t){switch(this.dates&&!this.times&&(this.h=this.i=this.s=this.f=0),isNaN(this.y)&&(this.y=t.getFullYear()),isNaN(this.m)&&(this.m=t.getMonth()),isNaN(this.d)&&(this.d=t.getDate()),isNaN(this.h)&&(this.h=t.getHours()),isNaN(this.i)&&(this.i=t.getMinutes()),isNaN(this.s)&&(this.s=t.getSeconds()),isNaN(this.f)&&(this.f=t.getMilliseconds()),this.firstOrLastDayOfMonth){case 1:this.d=1;break;case-1:this.d=0,this.m+=1}if(!isNaN(this.weekday)){var e=new Date(t.getTime());e.setFullYear(this.y,this.m,this.d),e.setHours(this.h,this.i,this.s,this.f);var a=e.getDay();if(2===this.weekdayBehavior)0===a&&0!==this.weekday&&(this.weekday=-6),0===this.weekday&&0!==a&&(this.weekday=7),this.d-=a,this.d+=this.weekday;else{var s=this.weekday-a;(this.rd<0&&s<0||this.rd>=0&&s<=-this.weekdayBehavior)&&(s+=7),this.weekday>=0?this.d+=s:this.d-=7-(Math.abs(this.weekday)-a),this.weekday=NaN}}this.y+=this.ry,this.m+=this.rm,this.d+=this.rd,this.h+=this.rh,this.i+=this.ri,this.s+=this.rs,this.f+=this.rf,this.ry=this.rm=this.rd=0,this.rh=this.ri=this.rs=this.rf=0;var i=new Date(t.getTime());switch(i.setFullYear(this.y,this.m,this.d),i.setHours(this.h,this.i,this.s,this.f),this.firstOrLastDayOfMonth){case 1:i.setDate(1);break;case-1:i.setMonth(i.getMonth()+1,0)}return isNaN(this.z)||i.getTimezoneOffset()===this.z||(i.setUTCFullYear(i.getFullYear(),i.getMonth(),i.getDate()),i.setUTCHours(i.getHours(),i.getMinutes(),i.getSeconds()-this.z,i.getMilliseconds())),i}},F=function(t,e){null==e&&(e=Math.floor(Date.now()/1e3));for(var a=[j.yesterday,j.now,j.noon,j.midnightOrToday,j.tomorrow,j.timestamp,j.firstOrLastDay,j.backOrFrontOf,j.timeTiny12,j.timeShort12,j.timeLong12,j.mssqltime,j.timeShort24,j.timeLong24,j.iso8601long,j.gnuNoColon,j.iso8601noColon,j.americanShort,j.american,j.iso8601date4,j.iso8601dateSlash,j.dateSlash,j.gnuDateShortOrIso8601date2,j.gnuDateShorter,j.dateFull,j.pointedDate4,j.pointedDate2,j.dateNoDay,j.dateNoDayRev,j.dateTextual,j.dateNoYear,j.dateNoYearRev,j.dateNoColon,j.xmlRpc,j.xmlRpcNoColon,j.soap,j.wddx,j.exif,j.pgydotd,j.isoWeekDay,j.pgTextShort,j.pgTextReverse,j.clf,j.year4,j.ago,j.dayText,j.relativeTextWeek,j.relativeText,j.monthFullOrMonthAbbr,j.tzCorrection,j.tzAbbr,j.dateShortWithTimeShort12,j.dateShortWithTimeLong12,j.dateShortWithTimeShort,j.dateShortWithTimeLong,j.relative,j.whitespace],s=Object.create(W);t.length;){for(var i=null,r=null,n=0,h=a.length;n<h;n++){var o=a[n],c=t.match(o.regex);c&&(!i||c[0].length>i[0].length)&&(i=c,r=o)}if(!r||r.callback&&!1===r.callback.apply(s,i))return!1;t=t.substr(i[0].length),r=null,i=null}return Math.floor(s.toDate(new Date(1e3*e))/1e3)};export{F as default};