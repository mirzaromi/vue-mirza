import{r as d,o as _,a as h,u as a,b as l,c as p,d as u,e as c,t as m,F as y,f,g}from"./vendor.29ad0390.js";const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};k();const b={props:["delay"],emits:["end"],setup(r,{emit:e}){const o=r,s=d({showBlock:!1,timer:null,reactionTime:0});_(()=>{setTimeout(()=>{s.showBlock=!0,t()},o.delay)}),h(()=>{});function t(){s.timer=setInterval(()=>{s.reactionTime+=10},10)}function n(){clearInterval(s.timer),e("end",s.reactionTime),console.log(s.reactionTime)}return(i,x)=>a(s).showBlock?(l(),p("div",{key:0,class:"block",onClick:n},"click me")):u("",!0)}};const v={class:"reaction"},R={class:"rank"},T={props:["score"],setup(r){const e=r,o=d({rank:null});return _(()=>{e.score<250?o.rank="Super sekaliii, anda dapat merespon sesuatu yang bahkan belum terjadi":e.score<400?o.rank="boleh juga responnya, dengan respon secepat ini anda bisa menepuk lalat sebelum bergerak":o.rank="Respon anda lambat, gak heran kalo doi sudah hilang"}),(s,t)=>(l(),p(y,null,[c("p",v,"Reaction Time = "+m(r.score)+" ms",1),c("p",R,m(a(o).rank),1)],64))}};const w=c("h1",null,"Mirza Reaction Timer",-1),B=["disabled"],P={setup(r){const e=d({isPlaying:!1,delay:null,score:null,showResult:!1});function o(){e.isPlaying=!0,e.delay=2e3+Math.random()*5e3,e.showResult=!1,console.log(e.delay)}function s(t){e.score=t,e.isPlaying=!1,e.showResult=!0}return(t,n)=>(l(),p(y,null,[w,c("button",{onClick:o,disabled:a(e).isPlaying},"play",8,B),a(e).isPlaying?(l(),f(b,{key:0,delay:a(e).delay,onEnd:s},null,8,["delay"])):u("",!0),a(e).showResult?(l(),f(T,{key:1,score:a(e).score},null,8,["score"])):u("",!0)],64))}};g(P).mount("#app");
