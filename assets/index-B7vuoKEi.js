var p=Object.defineProperty;var v=(t,e,r)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var h=(t,e,r)=>v(t,typeof e!="symbol"?e+"":e,r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const x=()=>`
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
  `,m=()=>{const t=localStorage.getItem("user");return t?JSON.parse(t):null},y=t=>{localStorage.setItem("user",JSON.stringify(t))},w=()=>{localStorage.removeItem("user")},d=()=>m()!==null,S=t=>{const e=m();localStorage.setItem("user",JSON.stringify({...e,...t}))},i=class i{static getInstance(e,r){return i.instance||(i.instance=new i(e,r)),i.instance}constructor(e,r={mode:"history",base:"/"}){if(i.instance)return i.instance;this.routes=e,this.mode=r.mode,this.base=r.base,this.initEventListeners(),i.instance=this}initializeEventListeners(){this.initializeRouteChangeListener(),this.initializeClickHandler(),this.initializeFormSubmitHandler()}initializeRouteChangeListener(){const e=()=>this.render();this.mode==="hash"?window.addEventListener("hashchange",e):window.addEventListener("popstate",e)}initializeClickHandler(){document.addEventListener("click",e=>{if(e.target.matches('[data-action="logout"]')){e.preventDefault(),w(),this.navigate("/login");return}if(e.target.matches("[data-link]")){e.preventDefault(),this.navigate(e.target.getAttribute("href"));return}})}initializeFormSubmitHandler(){document.addEventListener("submit",e=>{if(e.target.id==="login-form"){this.handleLoginSubmit(e);return}if(e.target.id==="profile-form"){this.handleProfileSubmit(e);return}})}handleLoginSubmit(e){e.preventDefault();const r=document.getElementById("username").value;y({username:r,email:"",bio:""}),this.navigate("/profile")}handleProfileSubmit(e){e.preventDefault();const r=document.getElementById("username").value,o=document.getElementById("email").value,n=document.getElementById("bio").value;S({username:r,email:o,bio:n})}getCurrentPath(){if(this.mode==="hash")return window.location.hash.slice(1)||"/";const r=new URLSearchParams(window.location.search).get("p");return r!=null&&r.startsWith("/")?r:window.location.pathname}navigate(e){const r=e.replace(/^\//,""),o=this.base+r;this.mode==="hash"?this.navigateHash(e):this.navigateHistory(o),this.render()}navigateHash(e){window.location.hash=e}navigateHistory(e){window.history.pushState({},"",e)}render(){this.currentPath=this.getCurrentPath();const e=this.routes[this.currentPath]?this.routes[this.currentPath]():x();if(e&&typeof e=="object"&&e.redirect){this.navigate(e.redirect);return}const r=document.getElementById("root");r&&(r.innerHTML=e)}};h(i,"instance",null);let u=i;const a="/front_5th_chapter1-1/",f=()=>{const e=O().currentPath;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a data-link href="/" class="${e===a?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
        ${d()?`
        <li><a data-link href="/profile" class="${e===a+"profile"?"text-blue-600":"text-gray-600"}">프로필</a></li>
        <li><a id="logout" href="#" class="text-gray-600" data-action="logout">로그아웃</a></li>
      `:`<li><a data-link href="/login" class="${e===a+"login"?"text-blue-600":"text-gray-600"}">로그인</a></li>`}
      </ul>
    </nav>
  `},g=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,L=({post:t})=>`
  <div class="bg-white rounded-lg shadow p-4 id=${t.id}">
    <div class="flex items-center mb-2">
      <img src="${t.imgSrc}" alt="프로필" class="rounded-full mr-2">
      <div>
        <p class="font-bold">${t.name}</p>
        <p class="text-sm text-gray-500">${t.createdAt}</p>
      </div>
    </div>
    <p>${t.content}</p>
    <div class="mt-2 flex justify-between text-gray-500">
      <button>좋아요</button>
      <button>댓글</button>
      <button>공유</button>
    </div>
  </div>
`,$={posts:[{id:1,imgSrc:"https://placehold.co/40",name:"홍길동",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",createdAt:"5분 전"},{id:2,imgSrc:"https://placehold.co/40",name:"김철수",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",createdAt:"15분 전"},{id:3,imgSrc:"https://placehold.co/40",name:"이영희",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",createdAt:"30분 전"},{id:4,imgSrc:"https://placehold.co/40",name:"박민수",content:"주말에 등산 가실 분 계신가요? 함께 가요!",createdAt:"1시간 전"},{id:5,imgSrc:"https://placehold.co/40",name:"정수연",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",createdAt:"2시간 전"}]},P=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${f()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${$.posts.map(t=>L({post:t})).join("")}

        </div>
      </main>

      ${g()}
    </div>
  </div>
`,b=({text:t})=>`
  <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">${t}</button>
`,E=()=>{const t=m();return`
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
          value="${t.username}"
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
          value="${t.email}"
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
          ${t.bio}
        </textarea>
      </div>
      ${b({text:"프로필 업데이트"})}
    </form>
  `},I=()=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${f()}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            ${E()}
          </div>
        </main>

        ${g()}
      </div>
    </div>
  `,A=()=>`
    <form id="login-form">
      <div class="mb-4">
        <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
      </div>
      <div class="mb-6">
        <input id="password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
      </div>
      ${b({text:"로그인"})}
    </form>
  `,H=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      ${A()}
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,k={[a]:P,[a+"profile"]:()=>d()?I():{redirect:a+"login"},[a+"login"]:()=>d()?{redirect:a}:H()};let l=null;const z=(t={mode:"history"})=>(l=u.getInstance(k,{...t,base:a}),l),O=()=>{if(!l)throw new Error("Router has not been initialized");return l};export{z as i};
