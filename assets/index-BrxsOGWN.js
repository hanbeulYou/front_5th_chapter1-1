var p=Object.defineProperty;var x=(e,t,s)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var m=(e,t,s)=>x(e,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const v=()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="${b().getLinkHref("/")}" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `,u=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},w=e=>{localStorage.setItem("user",JSON.stringify(e))},y=()=>{localStorage.removeItem("user")},c=()=>u()!==null,$=e=>{const t=u();localStorage.setItem("user",JSON.stringify({...t,...e}))},i=class i{static getInstance(t,s){return i.instance||(i.instance=new i(t,s)),i.instance}constructor(t,s={mode:"history"}){if(i.instance)return i.instance;this.routes=t,this.mode=s.mode,this.baseUrl="/front_5th_chapter1-1",this.currentPath=this.mode==="hash"?window.location.hash.slice(1)||"/":window.location.pathname.replace(this.baseUrl,"")||"/",this.mode==="hash"?window.addEventListener("hashchange",()=>{this.currentPath=window.location.hash.slice(1)||"/",this.render()}):window.addEventListener("popstate",()=>{this.currentPath=window.location.pathname.replace(this.baseUrl,"")||"/",this.render()}),i.instance=this,document.addEventListener("click",n=>{n.target.matches("[data-link]")&&(n.preventDefault(),this.navigate(n.target.getAttribute("href")))}),document.addEventListener("submit",n=>{if(n.target.id==="login-form"){n.preventDefault();const r=document.getElementById("username").value;w({username:r,email:"",bio:""}),this.navigate("/profile")}if(n.target.id==="profile-form"){n.preventDefault();const r=document.getElementById("username").value,o=document.getElementById("email").value,a=document.getElementById("bio").value;$({username:r,email:o,bio:a})}}),document.addEventListener("click",n=>{n.target.matches('[data-action="logout"]')&&(n.preventDefault(),y(),this.navigate("/login"))})}getLinkHref(t){return this.mode==="hash"?`#${t}`:`${this.baseUrl}${t}`}navigate(t){this.mode==="hash"?window.location.hash=t:window.history.pushState({},"",`${this.baseUrl}${t}`),this.currentPath=t,this.render()}render(){const t=this.mode==="hash"?window.location.hash.slice(1)||"/":window.location.pathname.replace(this.baseUrl,"")||"/",s=this.routes[t]?this.routes[t]():v();if(s&&typeof s=="object"&&s.redirect){this.navigate(s.redirect);return}const n=document.getElementById("root");n&&(n.innerHTML=s)}};m(i,"instance",null);let d=i;const h=()=>{const e=b(),t=e.currentPath,s=()=>c()?`
        <li><a href="${e.getLinkHref("/profile")}" class=${t==="/profile"?"text-blue-600":"text-gray-600"}>프로필</a></li>
        <li><a id="logout" href="#" class="text-gray-600" data-action="logout">로그아웃</a></li>
      `:`<li><a href="${e.getLinkHref("/login")}" class=${t==="/login"?"text-blue-600":"text-gray-600"}>로그인</a></li>`;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="${e.getLinkHref("/")}" class="${t==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
        ${s()}
      </ul>
    </nav>
  `},f=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,L=({post:e})=>`
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
`,E={posts:[{id:1,imgSrc:"https://placehold.co/40",name:"홍길동",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",createdAt:"5분 전"},{id:2,imgSrc:"https://placehold.co/40",name:"김철수",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",createdAt:"15분 전"},{id:3,imgSrc:"https://placehold.co/40",name:"이영희",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",createdAt:"30분 전"},{id:4,imgSrc:"https://placehold.co/40",name:"박민수",content:"주말에 등산 가실 분 계신가요? 함께 가요!",createdAt:"1시간 전"},{id:5,imgSrc:"https://placehold.co/40",name:"정수연",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",createdAt:"2시간 전"}]},P=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${h()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${E.posts.map(e=>L({post:e})).join("")}

        </div>
      </main>

      ${f()}
    </div>
  </div>
`,g=({text:e})=>`
  <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">${e}</button>
`,S=()=>{const e=u();return`
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
      ${g({text:"프로필 업데이트"})}
    </form>
  `},I=()=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${h()}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            ${S()}
          </div>
        </main>

        ${f()}
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
      ${g({text:"로그인"})}
    </form>
  `,k=()=>`
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
`,O={"/":P,"/profile":()=>c()?I():{redirect:"/login"},"/login":()=>c()?{redirect:"/"}:k()};let l=null;const j=(e={mode:"history"})=>(l=d.getInstance(O,e),l),b=()=>{if(!l)throw new Error("Router has not been initialized");return l};export{j as i};
