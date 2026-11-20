(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const k of d.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&s(k)}).observe(document,{childList:!0,subtree:!0});function l(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(i){if(i.ep)return;i.ep=!0;const d=l(i);fetch(i.href,d)}})();const c={conference:{name:"Indian Control Conference 2027",short:"ICC 2027",url:"https://controlsociety.org/icc/"},workshop:{title:"Robotics and Autonomous Systems",format:"Half-day workshop",date:"To be announced",dateNote:"During ICC 2027, 11–13 January",venue:"IIT Kharagpur",venueNote:"Kharagpur, West Bengal, India"},openreview:"https://openreview.net/group?id=controlsociety.org/ICC/2027/Workshop/RAS",about:["Robots and autonomous vehicles are control problems at heart: they sense, estimate, decide and act under uncertainty. This workshop brings together control theorists, roboticists and learning researchers working on how such systems are designed, analysed and deployed.","The programme is still being planned. Invited talks, tutorials and discussion sessions will be added to this page as they are confirmed."],topics:["Control and estimation for manipulators and mobile robots","Motion planning and navigation in uncertain environments","Learning-based and data-driven control","Multi-robot and distributed autonomous systems","Safety, robustness and verification","Perception and sensor fusion for autonomy"],deadlines:[],schedule:[],speakers:[],organizers:[],previous:{label:"2025 edition",url:"https://icc-ras-workshop.github.io/2025/"}},J=2.2,V=700,D=350,H=5e3,X=900,Q=240,Z=J/V;function ee(e,r,l){const s=r.getContext("2d"),i=getComputedStyle(document.documentElement),d=i.getPropertyValue("--color-signal").trim()||"#2640e8",k=i.getPropertyValue("--color-ink").trim()||"#17233f",I=matchMedia("(prefers-reduced-motion: reduce)").matches;let a=0,p=0,S=new Uint8Array(0),M=[],y=[],m=0,g=0,E=0,L=!0,j=0,z=0,O=0,q=null;const U=(o,t)=>o>=0&&t>=0&&o<a&&t<p&&S[(t|0)*a+(o|0)]===1;function N(o,t){const h=Math.cos(o),b=Math.sin(o);let u=U(m,g),v=Q,x=!1;for(let f=0;f<X;f+=2){const n=m+h*f,$=g+b*f;if(n<0||$<0||n>=a||$>=p)break;const F=S[($|0)*a+(n|0)]===1;if(u){u=F;continue}if(F){const W=Math.max(f-3,0);M.push({x:m+h*W+Math.random()-.5,y:g+b*W+Math.random()-.5,t}),v=f,x=!0;break}}y.push({ox:m,oy:g,a:o,len:v,hit:x,t})}function B(o){if(s.clearRect(0,0,a,p),!I){s.strokeStyle=d,s.lineWidth=1;for(const t of y)s.globalAlpha=(1-(o-t.t)/D)*(t.hit?.28:.1),s.beginPath(),s.moveTo(t.ox,t.oy),s.lineTo(t.ox+Math.cos(t.a)*t.len,t.oy+Math.sin(t.a)*t.len),s.stroke()}s.fillStyle=d;for(const t of M)s.globalAlpha=I?.85:Math.min(1,2*(1-(o-t.t)/H)),s.fillRect(t.x-1.4,t.y-1.4,2.8,2.8);s.globalAlpha=1,s.fillStyle=k,s.beginPath(),s.arc(m,g,6,0,Math.PI*2),s.fill(),s.strokeStyle=d,s.lineWidth=2,s.beginPath(),s.arc(m,g,11,0,Math.PI*2),s.stroke()}function _(o){requestAnimationFrame(_);const t=Math.min((o-z)/1e3,.05);if(z=o,!L||!a)return;const h=o/1e3,b=q,u=b&&o-b.at<4e3?b:null,v=u?u.x:a/2+Math.sin(h*.31)*a*.4,x=u?u.y:p/2+Math.sin(h*.47+1)*p*.38,f=1-Math.exp(-t*1.8);for(m+=(v-m)*f,g+=(x-g)*f,M=M.filter(n=>o-n.t<H),y=y.filter(n=>o-n.t<D),O+=V*t;O>=1;O-=1)E+=Z,N(E,o);B(o)}async function G(){const o=getComputedStyle(l),t=`${o.fontWeight} ${o.fontSize} ${o.fontFamily}`;if(await document.fonts.load(t).catch(()=>{}),a=e.clientWidth,p=e.clientHeight,!a||!p)return;const h=Math.min(window.devicePixelRatio||1,2);r.width=a*h,r.height=p*h,s.setTransform(h,0,0,h,0,0);const b=document.createElement("canvas");b.width=a,b.height=p;const u=b.getContext("2d",{willReadFrequently:!0});u.font=t,u.letterSpacing=o.letterSpacing;const v=u.measureText("M").fontBoundingBoxAscent,x=e.getBoundingClientRect();l.querySelectorAll(".word").forEach(n=>{const $=n.getBoundingClientRect();u.fillText(n.textContent??"",$.left-x.left,$.top-x.top+v)});const f=u.getImageData(0,0,a,p).data;S=new Uint8Array(a*p);for(let n=0;n<S.length;n++)S[n]=f[n*4+3]>60?1:0;if(M=[],y=[],m||(m=a*.8,g=p*.7),I){m=a*.8,g=p*.72;for(let n=0;n<1800;n++)N(n/1800*Math.PI*2,0);y=[],B(0)}}e.addEventListener("pointermove",o=>{const t=e.getBoundingClientRect();q={x:o.clientX-t.left,y:o.clientY-t.top,at:performance.now()}}),new IntersectionObserver(([o])=>{L=o.isIntersecting}).observe(e),new ResizeObserver(()=>{clearTimeout(j),j=window.setTimeout(G,120)}).observe(e),I||requestAnimationFrame(_)}const{conference:C,workshop:w}=c,A="underline decoration-grid underline-offset-4 hover:decoration-signal",P="inline-flex items-center rounded-md px-5 py-3 font-medium transition-colors",te=`${P} bg-signal text-white hover:bg-ink`,oe=`${P} border border-ink/30 hover:border-ink`,Y=e=>`<p class="rounded-md border border-dashed border-muted/50 px-4 py-3 text-muted">${e}</p>`,R=(e,r,l)=>`
  <section id="${e}" class="scroll-mt-14 border-t border-grid">
    <div class="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <h2 class="font-display text-4xl font-bold tracking-tight sm:text-5xl">${r}</h2>
      <div class="mt-8 space-y-5 text-lg leading-relaxed sm:mt-12">${l}</div>
    </div>
  </section>`,K=(e,r)=>e.length===0?Y(r):`<ul class="grid gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3">${e.map(l=>`<li>
            <p class="font-display text-lg font-semibold">${l.url?`<a class="${A}" href="${l.url}">${l.name}</a>`:l.name}</p>
            <p class="text-muted">${[l.role,l.affiliation].filter(Boolean).join(", ")}</p>
          </li>`).join("")}</ul>`,se=()=>c.schedule.length===0?Y("The schedule will be posted once sessions are confirmed."):`<ol class="divide-y divide-grid">${c.schedule.map(e=>`<li class="grid gap-1 py-3 sm:grid-cols-[8rem_1fr]">
            <span class="tabular-nums text-muted">${e.time}</span>
            <span><span class="font-semibold">${e.title}</span>${e.detail?`<span class="block text-muted">${e.detail}</span>`:""}</span>
          </li>`).join("")}</ol>`,ne=()=>c.deadlines.length===0?'<p class="rounded-md border border-dashed border-paper/30 px-4 py-3 text-paper/70">Submission deadlines will be posted here.</p>':`<dl class="divide-y divide-paper/20">${c.deadlines.map(e=>`<div class="flex justify-between gap-4 py-3"><dt class="text-paper/80">${e.label}</dt><dd class="font-semibold">${e.date}</dd></div>`).join("")}</dl>`,ie=()=>`
  <section id="submit" class="on-ink scroll-mt-14 bg-ink text-paper">
    <div class="mx-auto grid max-w-5xl gap-10 px-5 py-16 sm:py-24 md:grid-cols-[1fr_20rem] md:items-end md:gap-16">
      <div>
        <h2 class="font-display text-5xl font-bold tracking-tight sm:text-6xl">Submit your work</h2>
        <p class="mt-6 max-w-prose text-lg leading-relaxed text-paper/80">Student submissions are collected on OpenReview. You will need an OpenReview account to submit.</p>
        <a class="${P} mt-8 bg-paper text-ink hover:bg-grid" href="${c.openreview}" target="_blank" rel="noopener">Open the OpenReview venue</a>
      </div>
      <div>${ne()}</div>
    </div>
  </section>`,ae=[["about","About"],["submit","Submit"],["program","Program"],["speakers","Speakers"],["organizers","Organizers"]],T=(e,r,l)=>`
  <div><dt class="text-muted">${e}</dt><dd class="text-xl font-semibold">${r}</dd><dd class="text-muted">${l}</dd></div>`;document.querySelector("#app").innerHTML=`
  <header class="sticky top-0 z-10 border-b border-grid bg-paper/90 backdrop-blur">
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-2.5">
      <a href="#top" class="font-display font-bold">${C.short} RAS Workshop</a>
      <nav aria-label="Sections" class="hidden gap-6 md:flex">
        ${ae.map(([e,r])=>`<a class="text-muted hover:text-ink" href="#${e}">${r}</a>`).join("")}
      </nav>
      <a class="${P} bg-signal px-4 py-1.5 text-white hover:bg-ink" href="${c.openreview}" target="_blank" rel="noopener">Submit</a>
    </div>
  </header>

  <main>
    <section id="top" class="relative overflow-hidden">
      <canvas id="scan" aria-hidden="true" class="pointer-events-none absolute inset-0 h-full w-full"></canvas>
      <div class="relative mx-auto max-w-5xl px-5 pb-14 pt-14 sm:pb-20 sm:pt-20">
        <p class="text-lg text-muted"><a class="${A}" href="${C.url}">${C.name}</a> workshop</p>
        <h1 id="title" class="mt-3 max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl">${w.title.split(" ").map(e=>`<span class="word">${e}</span>`).join(" ")}</h1>
        <dl class="mt-10 grid gap-6 sm:grid-cols-3">
          ${T("Date",w.date,w.dateNote)}
          ${T("Venue",w.venue,w.venueNote)}
          ${T("Format",w.format,"In person")}
        </dl>
        <div class="mt-10 flex flex-wrap gap-3">
          <a class="${te}" href="${c.openreview}" target="_blank" rel="noopener">Submit on OpenReview</a>
          <a class="${oe}" href="#about">About the workshop</a>
        </div>
      </div>
    </section>

    ${R("about","About",`
      <div class="grid gap-10 md:grid-cols-2 md:gap-16">
        <div class="space-y-5">${c.about.map(e=>`<p>${e}</p>`).join("")}</div>
        <div>
          <h3 class="font-display text-lg font-semibold">Topics of interest</h3>
          <ul class="mt-3 list-disc space-y-1 pl-5 marker:text-signal">${c.topics.map(e=>`<li>${e}</li>`).join("")}</ul>
        </div>
      </div>`)}

    ${ie()}

    ${R("program","Program",se())}
    ${R("speakers","Speakers",K(c.speakers,"Invited speakers will be announced here."))}
    ${R("organizers","Organizers",K(c.organizers,"Organizers will be listed here."))}
  </main>

  <footer class="border-t border-grid">
    <div class="mx-auto flex max-w-5xl flex-wrap justify-between gap-x-8 gap-y-3 px-5 py-8 text-muted">
      <p>Contact details to follow.</p>
      <p>
        <a class="${A}" href="${C.url}">${C.short}</a>,
        <a class="${A}" href="${c.previous.url}">${c.previous.label}</a>
      </p>
    </div>
  </footer>`;ee(document.querySelector("#top"),document.querySelector("#scan"),document.querySelector("#title"));
