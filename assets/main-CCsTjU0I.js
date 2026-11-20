(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&h(p)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const s={conference:{name:"Indian Control Conference 2027",short:"ICC 2027",url:"https://controlsociety.org/icc/"},workshop:{title:"Robotics and Autonomous Systems",format:"Half-day workshop",date:"To be announced",dateNote:"During ICC 2027, 11–13 January",venue:"IIT Kharagpur",venueNote:"Kharagpur, West Bengal, India"},openreview:"https://openreview.net/group?id=controlsociety.org/ICC/2027/Workshop/RAS",about:["Robots and autonomous vehicles are control problems at heart: they sense, estimate, decide and act under uncertainty. This workshop brings together control theorists, roboticists and learning researchers working on how such systems are designed, analysed and deployed.","The programme is still being planned. Invited talks, tutorials and discussion sessions will be added to this page as they are confirmed."],topics:["Control and estimation for manipulators and mobile robots","Motion planning and navigation in uncertain environments","Learning-based and data-driven control","Multi-robot and distributed autonomous systems","Safety, robustness and verification","Perception and sensor fusion for autonomy"],deadlines:[],schedule:[],speakers:[],organizers:[],previous:{label:"2025 edition",url:"https://icc-ras-workshop.github.io/2025/"}},{conference:d,workshop:l}=s,f="underline decoration-grid underline-offset-4 hover:decoration-signal",x="inline-flex items-center rounded-md px-5 py-3 font-medium transition-colors",w=`${x} bg-signal text-white hover:bg-ink`,L=`${x} border border-ink/30 hover:border-ink`,y=e=>`<p class="rounded-md border border-dashed border-muted/50 px-4 py-3 text-muted">${e}</p>`,c=(e,a,o)=>`
  <section id="${e}" class="scroll-mt-14 border-t border-grid">
    <div class="mx-auto grid max-w-5xl gap-6 px-5 py-14 md:grid-cols-[12rem_1fr] md:gap-12">
      <h2 class="font-display text-2xl font-semibold tracking-tight">${a}</h2>
      <div class="max-w-prose space-y-5 text-lg leading-relaxed">${o}</div>
    </div>
  </section>`,k=(e,a)=>e.length===0?y(a):`<ul class="grid gap-x-8 gap-y-6 sm:grid-cols-2">${e.map(o=>`<li>
            <p class="font-display text-lg font-semibold">${o.url?`<a class="${f}" href="${o.url}">${o.name}</a>`:o.name}</p>
            <p class="text-muted">${[o.role,o.affiliation].filter(Boolean).join(", ")}</p>
          </li>`).join("")}</ul>`,S=()=>s.schedule.length===0?y("The schedule will be posted once sessions are confirmed."):`<ol class="divide-y divide-grid">${s.schedule.map(e=>`<li class="grid gap-1 py-3 sm:grid-cols-[8rem_1fr]">
            <span class="tabular-nums text-muted">${e.time}</span>
            <span><span class="font-semibold">${e.title}</span>${e.detail?`<span class="block text-muted">${e.detail}</span>`:""}</span>
          </li>`).join("")}</ol>`,R=()=>s.deadlines.length===0?y("Submission deadlines will be posted here."):`<dl class="divide-y divide-grid">${s.deadlines.map(e=>`<div class="flex justify-between gap-4 py-3"><dt>${e.label}</dt><dd class="font-semibold">${e.date}</dd></div>`).join("")}</dl>`;function M(){const u=Math.sqrt(.9516),g=n=>1-Math.exp(-.22*n)*(Math.cos(u*n)+.22/u*Math.sin(u*n)),$=n=>36+n/22*668,i=n=>244-n/1.6*224,z=Array.from({length:221},(n,v)=>`${$(v/10).toFixed(1)},${i(g(v/10)).toFixed(1)}`),m=Math.PI/u;return`
  <svg viewBox="0 0 800 280" class="mt-10 block w-full" role="img"
       aria-label="Step response of a second-order system: it rises, overshoots the reference, then settles.">
    <line x1="36" y1="20" x2="36" y2="244" class="stroke-muted" stroke-width="1.5" />
    <line x1="36" y1="244" x2="734" y2="244" class="stroke-muted" stroke-width="1.5" />
    <line x1="36" y1="${i(1)}" x2="714" y2="${i(1)}" class="stroke-muted" stroke-width="1.5" stroke-dasharray="6 6" />
    <text x="720" y="${i(1)+5}" class="fill-muted" font-size="15">reference</text>
    <text x="738" y="249" class="fill-muted" font-size="15">time</text>
    <path d="M${z.join(" L")}" pathLength="1" class="curve stroke-signal" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="${$(m)}" cy="${i(g(m))}" r="6" class="fill-peak" />
    <text x="${$(m)+14}" y="${i(g(m))+5}" class="fill-ink" font-size="15">overshoot</text>
  </svg>`}const O=[["about","About"],["submit","Submit"],["program","Program"],["speakers","Speakers"],["organizers","Organizers"]],b=(e,a,o)=>`
  <div><dt class="text-muted">${e}</dt><dd class="text-xl font-semibold">${a}</dd><dd class="text-muted">${o}</dd></div>`;document.querySelector("#app").innerHTML=`
  <header class="sticky top-0 z-10 border-b border-grid bg-paper/90 backdrop-blur">
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-2.5">
      <a href="#top" class="font-display font-bold">${d.short} RAS Workshop</a>
      <nav aria-label="Sections" class="hidden gap-6 md:flex">
        ${O.map(([e,a])=>`<a class="text-muted hover:text-ink" href="#${e}">${a}</a>`).join("")}
      </nav>
      <a class="${x} bg-signal px-4 py-1.5 text-white hover:bg-ink" href="${s.openreview}" target="_blank" rel="noopener">Submit</a>
    </div>
  </header>

  <main>
    <section id="top" class="graph-paper">
      <div class="mx-auto max-w-5xl px-5 pt-14 sm:pt-20">
        <p class="text-lg text-muted"><a class="${f}" href="${d.url}">${d.name}</a> workshop</p>
        <h1 class="mt-3 max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl">${l.title}</h1>
        <dl class="mt-10 grid gap-6 sm:grid-cols-3">
          ${b("Date",l.date,l.dateNote)}
          ${b("Venue",l.venue,l.venueNote)}
          ${b("Format",l.format,"In person")}
        </dl>
        <div class="mt-10 flex flex-wrap gap-3">
          <a class="${w}" href="${s.openreview}" target="_blank" rel="noopener">Submit on OpenReview</a>
          <a class="${L}" href="#about">About the workshop</a>
        </div>
        ${M()}
      </div>
    </section>

    ${c("about","About",`
      ${s.about.map(e=>`<p>${e}</p>`).join("")}
      <h3 class="pt-2 font-display text-lg font-semibold">Topics of interest</h3>
      <ul class="list-disc space-y-1 pl-5 marker:text-signal">${s.topics.map(e=>`<li>${e}</li>`).join("")}</ul>`)}

    ${c("submit","Submit",`
      <p>Student submissions are collected on OpenReview. You will need an OpenReview account to submit.</p>
      ${R()}
      <p><a class="${w}" href="${s.openreview}" target="_blank" rel="noopener">Open the OpenReview venue</a></p>`)}

    ${c("program","Program",S())}
    ${c("speakers","Speakers",k(s.speakers,"Invited speakers will be announced here."))}
    ${c("organizers","Organizers",k(s.organizers,"Organizers will be listed here."))}
  </main>

  <footer class="border-t border-grid">
    <div class="mx-auto flex max-w-5xl flex-wrap justify-between gap-x-8 gap-y-3 px-5 py-8 text-muted">
      <p>Contact details to follow.</p>
      <p>
        <a class="${f}" href="${d.url}">${d.short}</a>,
        <a class="${f}" href="${s.previous.url}">${s.previous.label}</a>
      </p>
    </div>
  </footer>`;
