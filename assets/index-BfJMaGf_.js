var w=Object.defineProperty;var $=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var p=(e,t,r)=>$(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const L=()=>`
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
  `,d={get(e){const t=localStorage.getItem(e);return t?JSON.parse(t):null},set(e,t){localStorage.setItem(e,JSON.stringify(t))},remove(e){localStorage.removeItem(e)}},u="user",c={getUser(){return d.get(u)},login(e){d.set(u,e)},logout(){d.remove(u)},isLoggedIn(){return this.getUser()!==null},updateUser(e){const t=this.getUser();d.set(u,{...t,...e})}},l={getUser:()=>c.getUser(),login:e=>c.login({username:e,email:"",bio:""}),logout:()=>c.logout(),isLoggedIn:()=>c.isLoggedIn(),updateUser:e=>c.updateUser(e)},f={handleNavigation(e){e.target.matches("[data-link]")&&(e.preventDefault(),m().navigate(e.target.getAttribute("href")))},handleAuth(e){e.target.matches('[data-action="logout"]')&&(e.preventDefault(),l.logout(),m().navigate("/login"))},handleFormSubmit(e){const t=m();if(e.target.id==="login-form"){e.preventDefault();const r=document.getElementById("username").value;l.login(r),t.navigate("/profile")}if(e.target.id==="profile-form"){e.preventDefault();const r=document.getElementById("username").value,i=document.getElementById("email").value,s=document.getElementById("bio").value;l.updateUser({username:r,email:i,bio:s})}}},a=class a{static getInstance(t,r){return a.instance||(a.instance=new a(t,r)),a.instance}constructor(t,r={mode:"history",base:"/"}){if(a.instance)return a.instance;this.routes=t,this.mode=r.mode,this.base=r.base,a.instance=this;const i=()=>{this.render()};this.mode==="hash"?window.addEventListener("hashchange",i):window.addEventListener("popstate",i),document.addEventListener("click",s=>{f.handleNavigation(s),f.handleAuth(s)}),document.addEventListener("submit",s=>{f.handleFormSubmit(s)})}getCurrentPath(){if(this.mode==="hash")return window.location.hash.slice(1)||"/";const r=new URLSearchParams(window.location.search).get("p");return r!=null&&r.startsWith("/")?r:window.location.pathname}navigate(t){const r=this.base+t.replace(/^\//,"");this.mode==="hash"?window.location.hash=t:window.history.pushState({},"",r),this.render()}render(){this.currentPath=this.getCurrentPath();const t=this.routes[this.currentPath]?this.routes[this.currentPath]():L();if(t&&typeof t=="object"&&t.redirect){this.navigate(t.redirect);return}const r=document.getElementById("root");r&&(r.innerHTML=t)}};p(a,"instance",null);let b=a;const o="/front_5th_chapter1-1/",v=()=>{const t=m().currentPath;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a data-link href="/" class="${t===o?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
        ${l.isLoggedIn()?`
        <li><a data-link href="/profile" class="${t===o+"profile"?"text-blue-600":"text-gray-600"}">프로필</a></li>
        <li><a id="logout" href="#" class="text-gray-600" data-action="logout">로그아웃</a></li>
      `:`<li><a data-link href="/login" class="${t===o+"login"?"text-blue-600":"text-gray-600"}">로그인</a></li>`}
      </ul>
    </nav>
  `},x=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,S=({post:e})=>`
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
`,P={posts:[{id:1,imgSrc:"https://placehold.co/40",name:"홍길동",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",createdAt:"5분 전"},{id:2,imgSrc:"https://placehold.co/40",name:"김철수",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",createdAt:"15분 전"},{id:3,imgSrc:"https://placehold.co/40",name:"이영희",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",createdAt:"30분 전"},{id:4,imgSrc:"https://placehold.co/40",name:"박민수",content:"주말에 등산 가실 분 계신가요? 함께 가요!",createdAt:"1시간 전"},{id:5,imgSrc:"https://placehold.co/40",name:"정수연",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",createdAt:"2시간 전"}]},I=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${v()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${P.posts.map(e=>S({post:e})).join("")}

        </div>
      </main>

      ${x()}
    </div>
  </div>
`,y=({text:e})=>`
  <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">${e}</button>
`,E=()=>{const e=l.getUser();return`
    <form id="profile-form">
      <div class="mb-4">
        <label
          for="username"
          class="block text-gray-700 text-sm font-bold mb-2"
          >사용자 이름</label
        >
        <input
          type="text"
          id="username"
          name="username"
          value="${e.username}"
          class="w-full p-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label
          for="email"
          class="block text-gray-700 text-sm font-bold mb-2"
          >이메일</label
        >
        <input
          type="email"
          id="email"
          name="email"
          value="${e.email}"
          class="w-full p-2 border rounded"
        />
      </div>
      <div class="mb-6">
        <label
          for="bio"
          class="block text-gray-700 text-sm font-bold mb-2"
          >자기소개</label
        >
        <textarea
          id="bio"
          name="bio"
          rows="4"
          class="w-full p-2 border rounded"
        >
          ${e.bio}
        </textarea>
      </div>
      ${y({text:"프로필 업데이트"})}
    </form>
  `},A=()=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${v()}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            ${E()}
          </div>
        </main>

        ${x()}
      </div>
    </div>
  `,U=()=>`
    <form id="login-form">
      <div class="mb-4">
        <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
      </div>
      <div class="mb-6">
        <input id="password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
      </div>
      ${y({text:"로그인"})}
    </form>
  `,N=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      ${U()}
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,j={[o]:I,[o+"profile"]:()=>l.isLoggedIn()?A():{redirect:o+"login"},[o+"login"]:()=>l.isLoggedIn()?{redirect:o}:N()};let g=null;const O=(e={mode:"history"})=>(g=b.getInstance(j,{...e,base:o}),g),m=()=>{if(!g)throw new Error("Router has not been initialized");return g};export{O as i};
