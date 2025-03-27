var E=Object.defineProperty;var O=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var v=(e,t,r)=>O(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const P=()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a data-link href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `,u={get(e){const t=localStorage.getItem(e);return t?JSON.parse(t):null},set(e,t){localStorage.setItem(e,JSON.stringify(t))},remove(e){localStorage.removeItem(e)}},m="user",d={getUser(){return u.get(m)},login(e){u.set(m,e)},logout(){u.remove(m)},isLoggedIn(){return this.getUser()!==null},updateUser(e){const t=this.getUser();u.set(m,{...t,...e})}},l={getUser:()=>d.getUser(),login:e=>d.login({username:e,email:"",bio:""}),logout:()=>d.logout(),isLoggedIn:()=>d.isLoggedIn(),updateUser:e=>d.updateUser(e)},h={getFormData(e){const t=document.getElementById(e);if(!t)return null;const r={},i=t.elements;for(let s of i)s.id&&(r[s.id]=s.value.trim());return r},validateLoginForm(e){if(!(e!=null&&e.username))throw new Error("사용자 이름을 입력해주세요");return!0},validateProfileForm(e){if(!(e!=null&&e.username))throw new Error("사용자 이름을 입력해주세요");return!0}},b={handleNavigation(e){e.target.matches("[data-link]")&&(e.preventDefault(),g().navigate(e.target.getAttribute("href")))},handleAuth(e){e.target.matches('[data-action="logout"]')&&(e.preventDefault(),l.logout(),g().navigate("/login"))},handleFormSubmit(e){const t=g();if(e.target.id==="login-form"){e.preventDefault();try{const r=h.getFormData("login-form");h.validateLoginForm(r),l.login(r.username),t.navigate("/profile")}catch(r){alert(r.message)}}if(e.target.id==="profile-form"){e.preventDefault();try{const r=h.getFormData("profile-form");h.validateProfileForm(r),l.updateUser(r),alert("프로필이 업데이트되었습니다")}catch(r){alert(r.message)}}}},o=class o{static getInstance(t,r){return o.instance||(o.instance=new o(t,r)),o.instance}constructor(t,r={mode:"history",base:"/"}){if(o.instance)return o.instance;this.routes=t,this.mode=r.mode,this.base=r.base,o.instance=this;const i=()=>{this.render()};this.mode==="hash"?window.addEventListener("hashchange",i):window.addEventListener("popstate",i),document.addEventListener("click",s=>{b.handleNavigation(s),b.handleAuth(s)}),document.addEventListener("submit",s=>{b.handleFormSubmit(s)})}getCurrentPath(){if(this.mode==="hash")return window.location.hash.slice(1)||"/";const r=new URLSearchParams(window.location.search).get("p");return r!=null&&r.startsWith("/")?r:window.location.pathname}navigate(t){const r=t.startsWith(this.base)?t:this.base+t.replace(/^\//,"");this.mode==="hash"?window.location.hash=t:window.history.pushState({},"",r),this.render()}render(){this.currentPath=this.getCurrentPath();const t=this.routes[this.currentPath]?this.routes[this.currentPath]():P();if(t&&typeof t=="object"&&t.redirect){this.navigate(t.redirect);return}const r=document.getElementById("root");r&&(r.innerHTML=t)}};v(o,"instance",null);let x=o;const c="/front_5th_chapter1-1/",n={HOME:{path:"/",text:"홈"},PROFILE:{path:"/profile",text:"프로필"},LOGIN:{path:"/login",text:"로그인"},LOGOUT:{path:"#",text:"로그아웃"}},y=()=>{const t=g().currentPath,r=s=>t===c+s.replace(/^\//,"")?"text-blue-600 font-bold":"text-gray-600";return`
    <header>
      <div class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </div>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          ${l.isLoggedIn()?`
        <li><a data-link href="${n.HOME.path}" class="${r(n.HOME.path)}">${n.HOME.text}</a></li>
        <li><a data-link href="${n.PROFILE.path}" class="${r(n.PROFILE.path)}">${n.PROFILE.text}</a></li>
        <li><a id="logout" href="${n.LOGOUT.path}" class="text-gray-600" data-action="logout">${n.LOGOUT.text}</a></li>
      `:`
      <li><a data-link href="${n.HOME.path}" class="${r(n.HOME.path)}">${n.HOME.text}</a></li>
      <li><a data-link href="${n.LOGIN.path}" class="${r(n.LOGIN.path)}">${n.LOGIN.text}</a></li>
    `}
        </ul>
      </nav>
    </header>
  `},$=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,I=({post:e})=>`
  <div class="bg-white rounded-lg shadow p-4 id=${e.id}">
    <div class="flex items-center mb-2">
      <img src="${e.imgSrc}" alt="프로필" class="rounded-full mr-2">
      <div>
        <p class="font-bold">${e.name}</p>
        <p class="text-sm text-gray-500">${e.createdAt}</p>
      </div>
    </div>
    <p>${e.content}</p>
    <div class="mt-2 flex justify-between text-gray-500">
      <button>좋아요</button>
      <button>댓글</button>
      <button>공유</button>
    </div>
  </div>
`,F={posts:[{id:1,imgSrc:"https://placehold.co/40",name:"홍길동",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",createdAt:"5분 전"},{id:2,imgSrc:"https://placehold.co/40",name:"김철수",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",createdAt:"15분 전"},{id:3,imgSrc:"https://placehold.co/40",name:"이영희",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",createdAt:"30분 전"},{id:4,imgSrc:"https://placehold.co/40",name:"박민수",content:"주말에 등산 가실 분 계신가요? 함께 가요!",createdAt:"1시간 전"},{id:5,imgSrc:"https://placehold.co/40",name:"정수연",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",createdAt:"2시간 전"}]},S=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${y()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${F.posts.map(e=>I({post:e})).join("")}

        </div>
      </main>

      ${$()}
    </div>
  </div>
`,L=({text:e})=>`
  <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">${e}</button>
`,A=[{id:"username",label:"사용자 이름",type:"text"},{id:"email",label:"이메일",type:"email"},{id:"bio",label:"자기소개",type:"textarea",rows:4}],U=[{id:"username",placeholder:"사용자 이름",type:"text"},{id:"password",placeholder:"비밀번호",type:"password"}],N=(e,t)=>{const r="w-full p-2 border rounded";return`
    <div class="mb-4">
      <label for="${e.id}" class="block text-gray-700 text-sm font-bold mb-2">${e.label}</label>
      ${e.type==="textarea"?`<textarea
            id="${e.id}"
            name="${e.id}"
            rows="${e.rows}"
            class="${r}"
          >${t}</textarea>`:`<input
            type="${e.type}"
            id="${e.id}"
            name="${e.id}"
            value="${t}"
            class="${r}"
          />`}
    </div>
  `},D=()=>{const e=l.getUser();return`
    <form id="profile-form">
      ${A.map(t=>N(t,e[t.id])).join("")}
      ${L({text:"프로필 업데이트"})}
    </form>
  `},M=()=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${y()}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            ${D()}
          </div>
        </main>

        ${$()}
      </div>
    </div>
  `,k=e=>`
    <div class="mb-4">
      <input id="${e.id}" type="${e.type}" placeholder="${e.placeholder}" class="w-full p-2 border rounded">
    </div>
  `,R=()=>`
    <form id="login-form">
      ${U.map(e=>k(e)).join("")}
      ${L({text:"로그인"})}
    </form>
  `,j=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      ${R()}
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,w={checkProfileAccess(){return l.isLoggedIn()?null:{redirect:c+"login"}},checkLoginAccess(){return l.isLoggedIn()?{redirect:c}:null}},H={[c]:S,[c+"profile"]:()=>{const e=w.checkProfileAccess();return e||M()},[c+"login"]:()=>{const e=w.checkLoginAccess();return e||j()}};let p=null;const T=(e={mode:"history"})=>(p=x.getInstance(H,{...e,base:c}),p),g=()=>{if(!p)throw new Error("Router has not been initialized");return p};export{T as i};
