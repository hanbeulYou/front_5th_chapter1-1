var x=Object.defineProperty;var v=(t,e,s)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var m=(t,e,s)=>v(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const y=()=>(b(),`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `),u=()=>{const t=localStorage.getItem("user");return t?JSON.parse(t):null},w=t=>{localStorage.setItem("user",JSON.stringify(t))},$=()=>{localStorage.removeItem("user")},c=()=>u()!==null,P=t=>{const e=u();localStorage.setItem("user",JSON.stringify({...e,...t}))},a=class a{static getInstance(e,s){return a.instance||(a.instance=new a(e,s)),a.instance}constructor(e,s={mode:"history",base:"/"}){if(a.instance)return a.instance;this.routes=e,this.mode=s.mode,this.base=s.base,this.currentPath=this.getCurrentPath();const o=()=>{this.render()};this.mode==="hash"?window.addEventListener("hashchange",o):window.addEventListener("popstate",o),a.instance=this,document.addEventListener("click",r=>{r.target.matches("[data-link]")&&(r.preventDefault(),this.navigate(r.target.getAttribute("href")))}),document.addEventListener("submit",r=>{if(r.target.id==="login-form"){r.preventDefault();const n=document.getElementById("username").value;w({username:n,email:"",bio:""}),this.navigate("/profile")}if(r.target.id==="profile-form"){r.preventDefault();const n=document.getElementById("username").value,i=document.getElementById("email").value,p=document.getElementById("bio").value;P({username:n,email:i,bio:p})}}),document.addEventListener("click",r=>{r.target.matches('[data-action="logout"]')&&(r.preventDefault(),$(),this.navigate("/login"))})}getCurrentPath(){if(this.mode==="hash")return window.location.hash.slice(1)||"/";const s=new URLSearchParams(window.location.search).get("p");if(s!=null&&s.startsWith("/"))return s;const o=window.location.pathname;return o.startsWith(this.base)?o.slice(this.base.length)||"/":o}navigate(e){const s=this.base+e.replace(/^\//,"");this.mode==="hash"?window.location.hash=e:window.history.pushState({},"",s),this.currentPath=e,this.render()}render(){const e=this.routes[this.currentPath]?this.routes[this.currentPath]():y();if(e&&typeof e=="object"&&e.redirect){this.navigate(e.redirect);return}const s=document.getElementById("root");s&&(s.innerHTML=e)}};m(a,"instance",null);let d=a;const S="/front_5th_chapter1-1/",h=()=>{const e=b().currentPath;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${e==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
        ${c()?`
        <li><a href="/profile" class="${e==="/profile"?"text-blue-600":"text-gray-600"}">프로필</a></li>
        <li><a id="logout" href="#" class="text-gray-600" data-action="logout">로그아웃</a></li>
      `:`<li><a href="/login" class="${e==="/login"?"text-blue-600":"text-gray-600"}">로그인</a></li>`}
      </ul>
    </nav>
  `},f=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,E=({post:t})=>`
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
`,L={posts:[{id:1,imgSrc:"https://placehold.co/40",name:"홍길동",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",createdAt:"5분 전"},{id:2,imgSrc:"https://placehold.co/40",name:"김철수",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",createdAt:"15분 전"},{id:3,imgSrc:"https://placehold.co/40",name:"이영희",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",createdAt:"30분 전"},{id:4,imgSrc:"https://placehold.co/40",name:"박민수",content:"주말에 등산 가실 분 계신가요? 함께 가요!",createdAt:"1시간 전"},{id:5,imgSrc:"https://placehold.co/40",name:"정수연",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",createdAt:"2시간 전"}]},I=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${h()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${L.posts.map(t=>E({post:t})).join("")}

        </div>
      </main>

      ${f()}
    </div>
  </div>
`,g=({text:t})=>`
  <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">${t}</button>
`,A=()=>{const t=u();return`
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
      ${g({text:"프로필 업데이트"})}
    </form>
  `},O=()=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${h()}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            ${A()}
          </div>
        </main>

        ${f()}
      </div>
    </div>
  `,j=()=>`
    <form id="login-form">
      <div class="mb-4">
        <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
      </div>
      <div class="mb-6">
        <input id="password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
      </div>
      ${g({text:"로그인"})}
    </form>
  `,N=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      ${j()}
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,B={"/":I,"/profile":()=>c()?O():{redirect:"/login"},"/login":()=>c()?{redirect:"/"}:N()};let l=null;const k=(t={mode:"history"})=>(l=d.getInstance(B,{...t,base:S}),l),b=()=>{if(!l)throw new Error("Router has not been initialized");return l};export{k as i};
