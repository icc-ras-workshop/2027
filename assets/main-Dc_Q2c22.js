(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))S(u);new MutationObserver(u=>{for(const y of u)if(y.type==="childList")for(const v of y.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&S(v)}).observe(document,{childList:!0,subtree:!0});function m(u){const y={};return u.integrity&&(y.integrity=u.integrity),u.referrerPolicy&&(y.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?y.credentials="include":u.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function S(u){if(u.ep)return;u.ep=!0;const y=m(u);fetch(u.href,y)}})();const g={conference:{name:"Indian Control Conference 2027",short:"ICC 2027",url:"https://controlsociety.org/icc/"},workshop:{title:"Robotics and Autonomous Systems",format:"Half-day workshop",date:"To be announced",dateNote:"During ICC 2027, 11–13 January",venue:"IIT Kharagpur",venueNote:"Kharagpur, West Bengal, India"},openreview:"https://openreview.net/group?id=controlsociety.org/ICC/2027/Workshop/RAS",about:["Robots and autonomous vehicles are control problems at heart: they sense, estimate, decide and act under uncertainty. This workshop brings together control theorists, roboticists and learning researchers working on how such systems are designed, analysed and deployed.","The programme is still being planned. Invited talks, tutorials and discussion sessions will be added to this page as they are confirmed."],topics:["Control and estimation for manipulators and mobile robots","Motion planning and navigation in uncertain environments","Learning-based and data-driven control","Multi-robot and distributed autonomous systems","Safety, robustness and verification","Perception and sensor fusion for autonomy"],deadlines:[],schedule:[],speakers:[],organizers:[],previous:{label:"2025 edition",url:"https://icc-ras-workshop.github.io/2025/"}},ye=2.2,se=700,ae=350,z=280,k=4,ie=18e3,xe=160,le=2e3,re=8,be=90,ve=2.5,Me=300,ce=2.5,N=22,$e=120,ke=600,C=15,we=1500,Se=1500,Pe="main :is(h1, h2, h3, p, li, dl > div, a.inline-flex)";function Ae(c){const e=c.getContext("2d"),m=getComputedStyle(document.documentElement),S=m.getPropertyValue("--color-lidar").trim()||"#f26b1d",u=m.getPropertyValue("--color-ink").trim()||"#1f2328",y=m.getPropertyValue("--color-paper").trim()||"#f3f3f1",v=matchMedia("(prefers-reduced-motion: reduce)").matches;let d=0,x=0,M=0,D=0,q=new Uint8Array(0),H=new Uint8Array(0),L=new Map,A=[],w=[],f=null,Q=0,Z=0,_=0,ee=0;const ue=(t,s)=>t<0||s<0||t>=d||s>=M||q[(s|0)*d+(t|0)]===1,F=(t,s)=>t<C||s<0||t>=d-C||s>=M||H[(s|0)*d+(t|0)]===1,te=(t,s)=>t>s&&t<s+x;function U(t,s,r,o){const n=Math.hypot(r-t,o-s)/4;for(let l=1;l<=n;l++)if(F(t+(r-t)*l/n,s+(o-s)*l/n))return!1;return!0}function B(t,s,r=0){let o=null;for(let n=0;n<60;n++){const l=d*(.04+Math.random()*.92),a=t+x*(.1+Math.random()*.8);if(!F(l,a)){if(!s||Math.hypot(l-s.x,a-s.y)>r)return{x:l,y:a};o??={x:l,y:a}}}return o}function fe(t,s,r){const o=B(s,t,Math.min(d,x)*.5),n=Math.max(0,Math.min(t.y,s)-N),l=Math.min(M,Math.max(t.y,s+x)+N);f=o&&{nx:[t.x],ny:[t.y],np:[-1],goal:o,route:null,at:0,born:r,i:1,y0:n,y1:l}}function me(t,s){const r=t.y<s;for(let o=0;o<20;o++){const n=r?s-C-4-o*8:s+x+C+4+o*8;for(let l=0;l<d;l+=8)for(const a of[t.x-l,t.x+l])if(!F(a,n))return{x:a,y:n}}return null}function pe(t,s,r){for(let o=0;o<s&&!t.route;o++){const n=Math.random()<.1,l=n?t.goal.x:Math.random()*d,a=n?t.goal.y:t.y0+Math.random()*(t.y1-t.y0);let i=0,h=1/0;for(let p=0;p<t.nx.length;p++){const O=(t.nx[p]-l)**2+(t.ny[p]-a)**2;O<h&&(h=O,i=p)}const b=Math.sqrt(h)||1,E=Math.min(1,N/b),T=t.nx[i]+(l-t.nx[i])*E,P=t.ny[i]+(a-t.ny[i])*E;if(U(t.nx[i],t.ny[i],T,P)&&(t.nx.push(T),t.ny.push(P),t.np.push(i),Math.hypot(t.goal.x-T,t.goal.y-P)<N&&U(T,P,t.goal.x,t.goal.y))){const p=[t.goal];for(let $=t.nx.length-1;$>=0;$=t.np[$])p.unshift({x:t.nx[$],y:t.ny[$]});const O=[p[0]];for(let $=0;$<p.length-1;){let R=p.length-1;for(;R>$+1&&!U(p[$].x,p[$].y,p[R].x,p[R].y);)R--;O.push(p[R]),$=R}t.route=O,t.at=r}}!t.route&&t.nx.length>we&&(f=null)}function oe(t,s,r){const o=Math.cos(s),n=Math.sin(s);let l=z;for(let a=0;a<z;a+=2){const i=t.x+o*a,h=t.y+n*a;if(ue(i,h)){const b=Math.max(a-3,0);i>=0&&h>=0&&i<d&&h<M&&L.set(((t.y+n*b)/k|0)*D+((t.x+o*b)/k|0),r),l=a;break}}A.push({ox:t.x,oy:t.y,a:s,len:l,t:r})}function K(t){const s=scrollY;e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,c.width,c.height);const r=c.width/d;if(e.setTransform(r,0,0,r,0,-s*r),e.strokeStyle=S,e.lineWidth=1,!v){e.globalAlpha=.08,e.setLineDash([3,5]);for(const n of w)e.beginPath(),e.arc(n.x,n.y,z,0,Math.PI*2),e.stroke();e.setLineDash([])}if(!v)for(const n of A)e.globalAlpha=(1-(t-n.t)/ae)*.22*(1-.7*n.len/z),e.beginPath(),e.moveTo(n.ox,n.oy),e.lineTo(n.ox+Math.cos(n.a)*n.len,n.oy+Math.sin(n.a)*n.len),e.stroke();e.fillStyle=S;for(const[n,l]of L){const a=n%D*k,i=(n/D|0)*k,h=t-l;i<s-k||i>s+x||(!v&&h<xe?(e.globalAlpha=1,e.fillRect(a-1,i-1,k+1,k+1)):(e.globalAlpha=v?.8:Math.min(.85,2*(1-h/ie)),e.fillRect(a,i,k-1,k-1)))}if(v)return;const o=f;if(o){const n=o.route?1-(t-o.at)/Se:1;if(n>0){e.strokeStyle=u,e.lineWidth=1,e.globalAlpha=.18*n,e.beginPath();for(let i=1;i<o.nx.length;i++)e.moveTo(o.nx[i],o.ny[i]),e.lineTo(o.nx[o.np[i]],o.ny[o.np[i]]);e.stroke()}if(e.strokeStyle=u,e.lineWidth=1.5,e.globalAlpha=.5,o.route){e.setLineDash([5,5]),e.beginPath(),e.moveTo(w[0].x,w[0].y);for(let i=o.i;i<o.route.length;i++)e.lineTo(o.route[i].x,o.route[i].y);e.stroke(),e.setLineDash([])}const{x:l,y:a}=o.goal;e.strokeStyle=S,e.lineWidth=2;for(const i of[0,300]){const h=(t-o.born-i)/900;h<=0||h>=1||(e.globalAlpha=.6*(1-h),e.beginPath(),e.arc(l,a,8+28*h,0,Math.PI*2),e.stroke())}e.globalAlpha=1,e.beginPath(),e.arc(l,a,8,0,Math.PI*2),e.moveTo(l-5,a),e.lineTo(l+5,a),e.moveTo(l,a-5),e.lineTo(l,a+5),e.stroke()}for(const n of w){e.strokeStyle=u,e.lineWidth=2;for(let l=1;l<n.path.length;l++){const a=n.path[l-1],i=n.path[l];e.globalAlpha=.25*(1-(t-i.t)/le),e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(i.x,i.y),e.stroke()}e.globalAlpha=1,e.save(),e.translate(n.x,n.y),e.rotate(n.h),e.fillStyle=u,e.fillRect(-6,-11,12,4),e.fillRect(-6,7,12,4),e.fillStyle=y,e.lineWidth=1.5,e.beginPath(),e.roundRect(-10,-7,20,14,[2,6,6,2]),e.fill(),e.stroke(),e.restore(),e.fillStyle=S,e.beginPath(),e.arc(n.x,n.y,3.5,0,Math.PI*2),e.fill(),e.strokeStyle=S,e.beginPath(),e.moveTo(n.x+Math.cos(n.a)*4,n.y+Math.sin(n.a)*4),e.lineTo(n.x+Math.cos(n.a)*14,n.y+Math.sin(n.a)*14),e.stroke()}e.globalAlpha=1}function ne(t){requestAnimationFrame(ne);const s=Math.min((t-Z)/1e3,.05);if(Z=t,!d)return;const r=scrollY,o=w[0];if(t-ee>Me){if(f&&!te(f.goal.y,r)&&(f=null),o.y<r-x||o.y>r+2*x){const a=me(o,r);a&&(o.x=a.x,o.y=a.y,o.h=o.y<r?Math.PI/2:-Math.PI/2,o.path=[],f=null)}f||fe(o,r,t)}f&&!f.route&&pe(f,Math.ceil($e*s),t);const n=f?.route;if(f&&n&&t-f.at>ke){const a=n[f.i].x,i=n[f.i].y,h=f.i===n.length-1,b=Math.hypot(a-o.x,i-o.y);if(b<(h?4:10))h?f=null:f.i++;else{const E=Math.atan2(Math.sin(Math.atan2(i-o.y,a-o.x)-o.h),Math.cos(Math.atan2(i-o.y,a-o.x)-o.h));o.h+=Math.max(-ce*s,Math.min(ce*s,E*4*s));const T=be*(te(o.y,r)?1:ve),P=Math.min(T,(h?b:b+60)*1.5)*Math.max(0,Math.cos(E))**8;o.x+=Math.cos(o.h)*P*s,o.y+=Math.sin(o.h)*P*s}}const l=o.path[o.path.length-1];(!l||t-l.t>60)&&o.path.push({x:o.x,y:o.y,t}),o.path=o.path.filter(a=>t-a.t<le);for(const[a,i]of L)t-i>ie&&L.delete(a);for(A=A.filter(a=>t-a.t<ae),_+=se*s;_>=1;_-=1)o.a+=ye/se,oe(o,o.a,t);K(t)}function ge(){if(d=document.documentElement.clientWidth,x=innerHeight,M=document.documentElement.scrollHeight,!d||!M)return;D=Math.ceil(d/k);const t=Math.min(window.devicePixelRatio||1,2);c.width=d*t,c.height=x*t,q=new Uint8Array(d*M),H=new Uint8Array(d*M);const s=(r,o,n)=>{const l=Math.max(0,o.left-n|0),a=Math.min(d,Math.ceil(o.right+n)),i=Math.max(0,o.top+scrollY-n|0),h=Math.min(M,Math.ceil(o.bottom+scrollY+n));for(let b=i;b<h;b++)r.fill(1,b*d+l,b*d+a)};for(const r of document.querySelectorAll(Pe)){const o=r.getBoundingClientRect();!o.width||!o.height||(s(q,o,re),s(H,o,re+C))}if(L=new Map,A=[],v){w=[];for(let r=0;r<M;r+=x){const o=B(Math.min(r,M-x));o&&w.push({...o,h:0,a:0,path:[]})}for(const r of w)for(let o=0;o<1800;o++)oe(r,o/1800*Math.PI*2,0);A=[],K(0);return}f=null,w=[{...B(scrollY)??{x:d/2,y:scrollY+x/2},h:Math.random()*Math.PI*2,a:0,path:[]}]}const V=()=>{clearTimeout(Q),Q=window.setTimeout(ge,120)};addEventListener("resize",V),new ResizeObserver(V).observe(document.body),document.fonts.ready.then(V),addEventListener("scroll",()=>{ee=performance.now(),v&&K(0)},{passive:!0}),!v&&requestAnimationFrame(ne)}const{conference:j,workshop:I}=g,Y="underline decoration-grid underline-offset-4 hover:decoration-signal",J="inline-flex items-center rounded-md px-5 py-3 font-medium transition-colors",he=`${J} bg-signal text-white hover:bg-ink`,Te=`${J} border border-ink/30 hover:border-ink`,X=c=>`<p class="rounded-md border border-dashed border-muted/50 px-4 py-3 text-muted">${c}</p>`,W=(c,e,m)=>`
  <section id="${c}" class="scroll-mt-14 border-t border-grid">
    <div class="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <h2 class="font-display text-4xl font-bold tracking-tight sm:text-5xl">${e}</h2>
      <div class="mt-8 space-y-5 text-lg leading-relaxed sm:mt-12">${m}</div>
    </div>
  </section>`,de=(c,e)=>c.length===0?X(e):`<ul class="grid gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3">${c.map(m=>`<li>
            <p class="font-display text-lg font-semibold">${m.url?`<a class="${Y}" href="${m.url}">${m.name}</a>`:m.name}</p>
            <p class="text-muted">${[m.role,m.affiliation].filter(Boolean).join(", ")}</p>
          </li>`).join("")}</ul>`,Re=()=>g.schedule.length===0?X("The schedule will be posted once sessions are confirmed."):`<ol class="divide-y divide-grid">${g.schedule.map(c=>`<li class="grid gap-1 py-3 sm:grid-cols-[8rem_1fr]">
            <span class="tabular-nums text-muted">${c.time}</span>
            <span><span class="font-semibold">${c.title}</span>${c.detail?`<span class="block text-muted">${c.detail}</span>`:""}</span>
          </li>`).join("")}</ol>`,Ie=()=>g.deadlines.length===0?X("Submission deadlines will be posted here."):`<dl class="divide-y divide-grid">${g.deadlines.map(c=>`<div class="flex justify-between gap-4 py-3"><dt class="text-muted">${c.label}</dt><dd class="font-semibold">${c.date}</dd></div>`).join("")}</dl>`,Le=()=>`
  <section id="submit" class="scroll-mt-14 border-t border-grid">
    <div class="mx-auto grid max-w-5xl gap-10 px-5 py-16 sm:py-24 md:grid-cols-[1fr_20rem] md:items-end md:gap-16">
      <div>
        <h2 class="font-display text-5xl font-bold tracking-tight sm:text-6xl">Submit your work</h2>
        <p class="mt-6 max-w-prose text-lg leading-relaxed text-muted">Student submissions are collected on OpenReview. You will need an OpenReview account to submit.</p>
        <a class="${he} mt-8" href="${g.openreview}" target="_blank" rel="noopener">Open the OpenReview venue</a>
      </div>
      <div>${Ie()}</div>
    </div>
  </section>`,Ee=[["about","About"],["submit","Submit"],["program","Program"],["speakers","Speakers"],["organizers","Organizers"]],G=(c,e,m)=>`
  <div><dt class="text-muted">${c}</dt><dd class="text-xl font-semibold">${e}</dd><dd class="text-muted">${m}</dd></div>`;document.querySelector("#app").innerHTML=`
  <canvas id="scan" aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 h-full w-full"></canvas>
  <header class="sticky top-0 z-10 border-b border-grid bg-paper/90 backdrop-blur">
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-2.5">
      <a href="#top" class="font-display font-bold">${j.short} RAS Workshop</a>
      <nav aria-label="Sections" class="hidden gap-6 md:flex">
        ${Ee.map(([c,e])=>`<a class="text-muted hover:text-ink" href="#${c}">${e}</a>`).join("")}
      </nav>
      <a class="${J} bg-signal px-4 py-1.5 text-white hover:bg-ink" href="${g.openreview}" target="_blank" rel="noopener">Submit</a>
    </div>
  </header>

  <main>
    <section id="top" class="relative overflow-hidden">
      <div class="relative mx-auto max-w-5xl px-5 pb-14 pt-14 sm:pb-20 sm:pt-20">
        <p class="text-lg text-muted"><a class="${Y}" href="${j.url}">${j.name}</a> workshop</p>
        <h1 id="title" class="mt-3 max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl">${I.title}</h1>
        <dl class="mt-10 grid gap-6 sm:grid-cols-3">
          ${G("Date",I.date,I.dateNote)}
          ${G("Venue",I.venue,I.venueNote)}
          ${G("Format",I.format,"In person")}
        </dl>
        <div class="mt-10 flex flex-wrap gap-3">
          <a class="${he}" href="${g.openreview}" target="_blank" rel="noopener">Submit on OpenReview</a>
          <a class="${Te}" href="#about">About the workshop</a>
        </div>
      </div>
    </section>

    ${W("about","About",`
      <div class="grid gap-10 md:grid-cols-2 md:gap-16">
        <div class="space-y-5">${g.about.map(c=>`<p>${c}</p>`).join("")}</div>
        <div>
          <h3 class="font-display text-lg font-semibold">Topics of interest</h3>
          <ul class="mt-3 list-disc space-y-1 pl-5 marker:text-signal">${g.topics.map(c=>`<li>${c}</li>`).join("")}</ul>
        </div>
      </div>`)}

    ${Le()}

    ${W("program","Program",Re())}
    ${W("speakers","Speakers",de(g.speakers,"Invited speakers will be announced here."))}
    ${W("organizers","Organizers",de(g.organizers,"Organizers will be listed here."))}
  </main>

  <footer class="border-t border-grid">
    <div class="mx-auto flex max-w-5xl flex-wrap justify-between gap-x-8 gap-y-3 px-5 py-8 text-muted">
      <p>Contact details to follow.</p>
      <p>
        <a class="${Y}" href="${j.url}">${j.short}</a>,
        <a class="${Y}" href="${g.previous.url}">${g.previous.label}</a>
      </p>
    </div>
  </footer>`;Ae(document.querySelector("#scan"));
