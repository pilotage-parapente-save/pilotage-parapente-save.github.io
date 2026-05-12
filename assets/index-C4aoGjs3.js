(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.2
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Tc(n,e){const t=new Set(n.split(","));return r=>t.has(r)}const Pe={},Dr=[],Kt=()=>{},Om=()=>!1,Eo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ic=n=>n.startsWith("onUpdate:"),Ye=Object.assign,wc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Vm=Object.prototype.hasOwnProperty,Re=(n,e)=>Vm.call(n,e),le=Array.isArray,Rs=n=>To(n)==="[object Map]",xm=n=>To(n)==="[object Set]",ue=n=>typeof n=="function",Ke=n=>typeof n=="string",Xr=n=>typeof n=="symbol",Le=n=>n!==null&&typeof n=="object",$f=n=>(Le(n)||ue(n))&&ue(n.then)&&ue(n.catch),Mm=Object.prototype.toString,To=n=>Mm.call(n),Lm=n=>To(n).slice(8,-1),Fm=n=>To(n)==="[object Object]",Ac=n=>Ke(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ss=Tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Io=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Um=/-(\w)/g,hr=Io(n=>n.replace(Um,(e,t)=>t?t.toUpperCase():"")),Bm=/\B([A-Z])/g,_r=Io(n=>n.replace(Bm,"-$1").toLowerCase()),qf=Io(n=>n.charAt(0).toUpperCase()+n.slice(1)),oa=Io(n=>n?`on${qf(n)}`:""),Un=(n,e)=>!Object.is(n,e),aa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Hf=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},jm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Iu;const zf=()=>Iu||(Iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rc(n){if(le(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ke(r)?zm(r):Rc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(n)||Le(n))return n}const $m=/;(?![^(]*\))/g,qm=/:([^]+)/,Hm=/\/\*[^]*?\*\//g;function zm(n){const e={};return n.replace(Hm,"").split($m).forEach(t=>{if(t){const r=t.split(qm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Sc(n){let e="";if(Ke(n))e=n;else if(le(n))for(let t=0;t<n.length;t++){const r=Sc(n[t]);r&&(e+=r+" ")}else if(Le(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Km="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gm=Tc(Km);function Kf(n){return!!n||n===""}/**
* @vue/reactivity v3.5.2
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class Wm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=wt;try{return wt=this,e()}finally{wt=t}}}on(){wt=this}off(){wt=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Qm(){return wt}let Ce;const ca=new WeakSet;class Gf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&wt.active&&wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ca.has(this)&&(ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=bs,bs=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wu(this),Qf(this);const e=Ce,t=Vt;Ce=this,Vt=!0;try{return this.fn()}finally{Jf(this),Ce=e,Vt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pc(e);this.deps=this.depsTail=void 0,wu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oa(this)&&this.run()}get dirty(){return Oa(this)}}let Wf=0,bs;function bc(){Wf++}function Cc(){if(--Wf>0)return;let n;for(;bs;){let e=bs;for(bs=void 0;e;){const t=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Qf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jf(n){let e,t=n.depsTail;for(let r=t;r;r=r.prevDep)r.version===-1?(r===t&&(t=r.prevDep),Pc(r),Jm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0;n.deps=e,n.depsTail=t}function Oa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&Yf(e.dep.computed)===!1||e.dep.version!==e.version)return!0;return!!n._dirty}function Yf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===js))return;n.globalVersion=js;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&!Oa(n)){n.flags&=-3;return}const t=Ce,r=Vt;Ce=n,Vt=!0;try{Qf(n);const s=n.fn(n._value);(e.version===0||Un(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ce=t,Vt=r,Jf(n),n.flags&=-3}}function Pc(n){const{dep:e,prevSub:t,nextSub:r}=n;if(t&&(t.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=t,n.nextSub=void 0),e.subs===n&&(e.subs=t),!e.subs&&e.computed){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)Pc(s)}}function Jm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Vt=!0;const Xf=[];function Kn(){Xf.push(Vt),Vt=!1}function Gn(){const n=Xf.pop();Vt=n===void 0?!0:n}function wu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ce;Ce=void 0;try{e()}finally{Ce=t}}}let js=0;class kc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!Ce||!Vt||Ce===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ce)t=this.activeLink={dep:this,sub:Ce,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},Ce.deps?(t.prevDep=Ce.depsTail,Ce.depsTail.nextDep=t,Ce.depsTail=t):Ce.deps=Ce.depsTail=t,Ce.flags&4&&Zf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ce.depsTail,t.nextDep=void 0,Ce.depsTail.nextDep=t,Ce.depsTail=t,Ce.deps===t&&(Ce.deps=r)}return t}trigger(e){this.version++,js++,this.notify(e)}notify(e){bc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()}finally{Cc()}}}function Zf(n){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Zf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}const Va=new WeakMap,ir=Symbol(""),xa=Symbol(""),$s=Symbol("");function at(n,e,t){if(Vt&&Ce){let r=Va.get(n);r||Va.set(n,r=new Map);let s=r.get(t);s||r.set(t,s=new kc),s.track()}}function ln(n,e,t,r,s,i){const a=Va.get(n);if(!a){js++;return}let c=[];if(e==="clear")c=[...a.values()];else{const l=le(n),h=l&&Ac(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===$s||!Xr(m)&&m>=d)&&c.push(p)})}else{const d=p=>p&&c.push(p);switch(t!==void 0&&d(a.get(t)),h&&d(a.get($s)),e){case"add":l?h&&d(a.get("length")):(d(a.get(ir)),Rs(n)&&d(a.get(xa)));break;case"delete":l||(d(a.get(ir)),Rs(n)&&d(a.get(xa)));break;case"set":Rs(n)&&d(a.get(ir));break}}}bc();for(const l of c)l.trigger();Cc()}function Rr(n){const e=Ae(n);return e===n?e:(at(e,"iterate",$s),xt(n)?e:e.map(dt))}function Nc(n){return at(n=Ae(n),"iterate",$s),n}const Ym={__proto__:null,[Symbol.iterator](){return la(this,Symbol.iterator,dt)},concat(...n){return Rr(this).concat(...n.map(e=>le(e)?Rr(e):e))},entries(){return la(this,"entries",n=>(n[1]=dt(n[1]),n))},every(n,e){return tn(this,"every",n,e,void 0,arguments)},filter(n,e){return tn(this,"filter",n,e,t=>t.map(dt),arguments)},find(n,e){return tn(this,"find",n,e,dt,arguments)},findIndex(n,e){return tn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return tn(this,"findLast",n,e,dt,arguments)},findLastIndex(n,e){return tn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return tn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ua(this,"includes",n)},indexOf(...n){return ua(this,"indexOf",n)},join(n){return Rr(this).join(n)},lastIndexOf(...n){return ua(this,"lastIndexOf",n)},map(n,e){return tn(this,"map",n,e,void 0,arguments)},pop(){return _s(this,"pop")},push(...n){return _s(this,"push",n)},reduce(n,...e){return Au(this,"reduce",n,e)},reduceRight(n,...e){return Au(this,"reduceRight",n,e)},shift(){return _s(this,"shift")},some(n,e){return tn(this,"some",n,e,void 0,arguments)},splice(...n){return _s(this,"splice",n)},toReversed(){return Rr(this).toReversed()},toSorted(n){return Rr(this).toSorted(n)},toSpliced(...n){return Rr(this).toSpliced(...n)},unshift(...n){return _s(this,"unshift",n)},values(){return la(this,"values",dt)}};function la(n,e,t){const r=Nc(n),s=r[e]();return r!==n&&!xt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const Xm=Array.prototype;function tn(n,e,t,r,s,i){const a=Nc(n),c=a!==n&&!xt(n),l=a[e];if(l!==Xm[e]){const p=l.apply(n,i);return c?dt(p):p}let h=t;a!==n&&(c?h=function(p,m){return t.call(this,dt(p),m,n)}:t.length>2&&(h=function(p,m){return t.call(this,p,m,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function Au(n,e,t,r){const s=Nc(n);let i=t;return s!==n&&(xt(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,dt(c),l,n)}),s[e](i,...r)}function ua(n,e,t){const r=Ae(n);at(r,"iterate",$s);const s=r[e](...t);return(s===-1||s===!1)&&xc(t[0])?(t[0]=Ae(t[0]),r[e](...t)):s}function _s(n,e,t=[]){Kn(),bc();const r=Ae(n)[e].apply(n,t);return Cc(),Gn(),r}const Zm=Tc("__proto__,__v_isRef,__isVue"),ed=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xr));function e_(n){Xr(n)||(n=String(n));const e=Ae(this);return at(e,"has",n),e.hasOwnProperty(n)}class td{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?d_:id:i?sd:rd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=le(e);if(!s){let l;if(a&&(l=Ym[t]))return l;if(t==="hasOwnProperty")return e_}const c=Reflect.get(e,t,ot(e)?e:r);return(Xr(t)?ed.has(t):Zm(t))||(s||at(e,"get",t),i)?c:ot(c)?a&&Ac(t)?c:c.value:Le(c)?s?ad(c):Ao(c):c}}class nd extends td{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const l=fr(i);if(!xt(r)&&!fr(r)&&(i=Ae(i),r=Ae(r)),!le(e)&&ot(i)&&!ot(r))return l?!1:(i.value=r,!0)}const a=le(e)&&Ac(t)?Number(t)<e.length:Re(e,t),c=Reflect.set(e,t,r,ot(e)?e:s);return e===Ae(s)&&(a?Un(r,i)&&ln(e,"set",t,r):ln(e,"add",t,r)),c}deleteProperty(e,t){const r=Re(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&ln(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Xr(t)||!ed.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",le(e)?"length":ir),Reflect.ownKeys(e)}}class t_ extends td{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const n_=new nd,r_=new t_,s_=new nd(!0);const Dc=n=>n,wo=n=>Reflect.getPrototypeOf(n);function Pi(n,e,t=!1,r=!1){n=n.__v_raw;const s=Ae(n),i=Ae(e);t||(Un(e,i)&&at(s,"get",e),at(s,"get",i));const{has:a}=wo(s),c=r?Dc:t?Mc:dt;if(a.call(s,e))return c(n.get(e));if(a.call(s,i))return c(n.get(i));n!==s&&n.get(e)}function ki(n,e=!1){const t=this.__v_raw,r=Ae(t),s=Ae(n);return e||(Un(n,s)&&at(r,"has",n),at(r,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Ni(n,e=!1){return n=n.__v_raw,!e&&at(Ae(n),"iterate",ir),Reflect.get(n,"size",n)}function Ru(n,e=!1){!e&&!xt(n)&&!fr(n)&&(n=Ae(n));const t=Ae(this);return wo(t).has.call(t,n)||(t.add(n),ln(t,"add",n,n)),this}function Su(n,e,t=!1){!t&&!xt(e)&&!fr(e)&&(e=Ae(e));const r=Ae(this),{has:s,get:i}=wo(r);let a=s.call(r,n);a||(n=Ae(n),a=s.call(r,n));const c=i.call(r,n);return r.set(n,e),a?Un(e,c)&&ln(r,"set",n,e):ln(r,"add",n,e),this}function bu(n){const e=Ae(this),{has:t,get:r}=wo(e);let s=t.call(e,n);s||(n=Ae(n),s=t.call(e,n)),r&&r.call(e,n);const i=e.delete(n);return s&&ln(e,"delete",n,void 0),i}function Cu(){const n=Ae(this),e=n.size!==0,t=n.clear();return e&&ln(n,"clear",void 0,void 0),t}function Di(n,e){return function(r,s){const i=this,a=i.__v_raw,c=Ae(a),l=e?Dc:n?Mc:dt;return!n&&at(c,"iterate",ir),a.forEach((h,d)=>r.call(s,l(h),l(d),i))}}function Oi(n,e,t){return function(...r){const s=this.__v_raw,i=Ae(s),a=Rs(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?Dc:e?Mc:dt;return!e&&at(i,"iterate",l?xa:ir),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Tn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function i_(){const n={get(i){return Pi(this,i)},get size(){return Ni(this)},has:ki,add:Ru,set:Su,delete:bu,clear:Cu,forEach:Di(!1,!1)},e={get(i){return Pi(this,i,!1,!0)},get size(){return Ni(this)},has:ki,add(i){return Ru.call(this,i,!0)},set(i,a){return Su.call(this,i,a,!0)},delete:bu,clear:Cu,forEach:Di(!1,!0)},t={get(i){return Pi(this,i,!0)},get size(){return Ni(this,!0)},has(i){return ki.call(this,i,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Di(!0,!1)},r={get(i){return Pi(this,i,!0,!0)},get size(){return Ni(this,!0)},has(i){return ki.call(this,i,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Di(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Oi(i,!1,!1),t[i]=Oi(i,!0,!1),e[i]=Oi(i,!1,!0),r[i]=Oi(i,!0,!0)}),[n,t,e,r]}const[o_,a_,c_,l_]=i_();function Oc(n,e){const t=e?n?l_:c_:n?a_:o_;return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Re(t,s)&&s in r?t:r,s,i)}const u_={get:Oc(!1,!1)},h_={get:Oc(!1,!0)},f_={get:Oc(!0,!1)};const rd=new WeakMap,sd=new WeakMap,id=new WeakMap,d_=new WeakMap;function p_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function g_(n){return n.__v_skip||!Object.isExtensible(n)?0:p_(Lm(n))}function Ao(n){return fr(n)?n:Vc(n,!1,n_,u_,rd)}function od(n){return Vc(n,!1,s_,h_,sd)}function ad(n){return Vc(n,!0,r_,f_,id)}function Vc(n,e,t,r,s){if(!Le(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const a=g_(n);if(a===0)return n;const c=new Proxy(n,a===2?r:t);return s.set(n,c),c}function Cs(n){return fr(n)?Cs(n.__v_raw):!!(n&&n.__v_isReactive)}function fr(n){return!!(n&&n.__v_isReadonly)}function xt(n){return!!(n&&n.__v_isShallow)}function xc(n){return n?!!n.__v_raw:!1}function Ae(n){const e=n&&n.__v_raw;return e?Ae(e):n}function m_(n){return Object.isExtensible(n)&&Hf(n,"__v_skip",!0),n}const dt=n=>Le(n)?Ao(n):n,Mc=n=>Le(n)?ad(n):n;function ot(n){return n?n.__v_isRef===!0:!1}function __(n){return cd(n,!1)}function y_(n){return cd(n,!0)}function cd(n,e){return ot(n)?n:new v_(n,e)}class v_{constructor(e,t){this.dep=new kc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ae(e),this._value=t?e:dt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||xt(e)||fr(e);e=r?e:Ae(e),Un(e,t)&&(this._rawValue=e,this._value=r?e:dt(e),this.dep.trigger())}}function or(n){return ot(n)?n.value:n}const E_={get:(n,e,t)=>e==="__v_raw"?n:or(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ot(s)&&!ot(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function ld(n){return Cs(n)?n:new Proxy(n,E_)}class T_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new kc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){this.flags|=16,Ce!==this&&this.dep.notify()}get value(){const e=this.dep.track();return Yf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function I_(n,e,t=!1){let r,s;return ue(n)?r=n:(r=n.get,s=n.set),new T_(r,s,t)}const Vi={},eo=new WeakMap;let tr;function w_(n,e=!1,t=tr){if(t){let r=eo.get(t);r||eo.set(t,r=[]),r.push(n)}}function A_(n,e,t=Pe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=H=>s?H:xt(H)||s===!1||s===0?bn(H,1):bn(H);let d,p,m,I,k=!1,O=!1;if(ot(n)?(p=()=>n.value,k=xt(n)):Cs(n)?(p=()=>h(n),k=!0):le(n)?(O=!0,k=n.some(H=>Cs(H)||xt(H)),p=()=>n.map(H=>{if(ot(H))return H.value;if(Cs(H))return h(H);if(ue(H))return l?l(H,2):H()})):ue(n)?e?p=l?()=>l(n,2):n:p=()=>{if(m){Kn();try{m()}finally{Gn()}}const H=tr;tr=d;try{return l?l(n,3,[I]):n(I)}finally{tr=H}}:p=Kt,e&&s){const H=p,oe=s===!0?1/0:s;p=()=>bn(H(),oe)}const x=Qm(),W=()=>{d.stop(),x&&wc(x.effects,d)};if(i)if(e){const H=e;e=(...oe)=>{H(...oe),W()}}else{const H=p;p=()=>{H(),W()}}let U=O?new Array(n.length).fill(Vi):Vi;const z=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const oe=d.run();if(s||k||(O?oe.some((he,w)=>Un(he,U[w])):Un(oe,U))){m&&m();const he=tr;tr=d;try{const w=[oe,U===Vi?void 0:O&&U[0]===Vi?[]:U,I];l?l(e,3,w):e(...w),U=oe}finally{tr=he}}}else d.run()};return c&&c(z),d=new Gf(p),d.scheduler=a?()=>a(z,!1):z,I=H=>w_(H,!1,d),m=d.onStop=()=>{const H=eo.get(d);if(H){if(l)l(H,4);else for(const oe of H)oe();eo.delete(d)}},e?r?z(!0):U=d.run():a?a(z.bind(null,!0),!0):d.run(),W.pause=d.pause.bind(d),W.resume=d.resume.bind(d),W.stop=W,W}function bn(n,e=1/0,t){if(e<=0||!Le(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,ot(n))bn(n.value,e,t);else if(le(n))for(let r=0;r<n.length;r++)bn(n[r],e,t);else if(xm(n)||Rs(n))n.forEach(r=>{bn(r,e,t)});else if(Fm(n)){for(const r in n)bn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&bn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.2
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ni(n,e,t,r){try{return r?n(...r):n()}catch(s){Ro(s,e,t)}}function Qt(n,e,t,r){if(ue(n)){const s=ni(n,e,t,r);return s&&$f(s)&&s.catch(i=>{Ro(i,e,t)}),s}if(le(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Qt(n[i],e,t,r));return s}}function Ro(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Pe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){Kn(),ni(i,null,10,[n,l,h]),Gn();return}}R_(n,t,s,r,a)}function R_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}let qs=!1,Ma=!1;const pt=[];let Bt=0;const Or=[];let An=null,Sr=0;const ud=Promise.resolve();let Lc=null;function hd(n){const e=Lc||ud;return n?e.then(this?n.bind(this):n):e}function S_(n){let e=qs?Bt+1:0,t=pt.length;for(;e<t;){const r=e+t>>>1,s=pt[r],i=Hs(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Fc(n){if(!(n.flags&1)){const e=Hs(n),t=pt[pt.length-1];!t||!(n.flags&2)&&e>=Hs(t)?pt.push(n):pt.splice(S_(e),0,n),n.flags|=1,fd()}}function fd(){!qs&&!Ma&&(Ma=!0,Lc=ud.then(pd))}function b_(n){le(n)?Or.push(...n):An&&n.id===-1?An.splice(Sr+1,0,n):n.flags&1||(Or.push(n),n.flags|=1),fd()}function Pu(n,e,t=qs?Bt+1:0){for(;t<pt.length;t++){const r=pt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;pt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&=-2}}}function dd(n){if(Or.length){const e=[...new Set(Or)].sort((t,r)=>Hs(t)-Hs(r));if(Or.length=0,An){An.push(...e);return}for(An=e,Sr=0;Sr<An.length;Sr++){const t=An[Sr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}An=null,Sr=0}}const Hs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function pd(n){Ma=!1,qs=!0;try{for(Bt=0;Bt<pt.length;Bt++){const e=pt[Bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ni(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;Bt<pt.length;Bt++){const e=pt[Bt];e&&(e.flags&=-2)}Bt=0,pt.length=0,dd(),qs=!1,Lc=null,(pt.length||Or.length)&&pd()}}let zt=null,gd=null;function to(n){const e=zt;return zt=n,gd=n&&n.type.__scopeId||null,e}function C_(n,e=zt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Lu(-1);const i=to(e);let a;try{a=n(...s)}finally{to(i),r._d&&Lu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Zn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(Kn(),Qt(l,t,8,[n.el,c,n,e]),Gn())}}const P_=Symbol("_vte"),k_=n=>n.__isTeleport;function md(n,e){n.shapeFlag&6&&n.component?md(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Uc(n,e){return ue(n)?Ye({name:n.name},e,{setup:n}):n}function _d(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function La(n,e,t,r,s=!1){if(le(n)){n.forEach((k,O)=>La(k,e&&(le(e)?e[O]:e),t,r,s));return}if(Ps(r)&&!s)return;const i=r.shapeFlag&4?Hc(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===Pe?c.refs={}:c.refs,p=c.setupState,m=Ae(p),I=p===Pe?()=>!1:k=>Re(m,k);if(h!=null&&h!==l&&(Ke(h)?(d[h]=null,I(h)&&(p[h]=null)):ot(h)&&(h.value=null)),ue(l))ni(l,c,12,[a,d]);else{const k=Ke(l),O=ot(l);if(k||O){const x=()=>{if(n.f){const W=k?I(l)?p[l]:d[l]:l.value;s?le(W)&&wc(W,i):le(W)?W.includes(i)||W.push(i):k?(d[l]=[i],I(l)&&(p[l]=d[l])):(l.value=[i],n.k&&(d[n.k]=l.value))}else k?(d[l]=a,I(l)&&(p[l]=a)):O&&(l.value=a,n.k&&(d[n.k]=a))};a?(x.id=-1,It(x,t)):x()}}}const Ps=n=>!!n.type.__asyncLoader,yd=n=>n.type.__isKeepAlive;function N_(n,e){vd(n,"a",e)}function D_(n,e){vd(n,"da",e)}function vd(n,e,t=gt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(So(e,r,t),t){let s=t.parent;for(;s&&s.parent;)yd(s.parent.vnode)&&O_(r,e,t,s),s=s.parent}}function O_(n,e,t,r){const s=So(e,n,r,!0);Ed(()=>{wc(r[e],s)},t)}function So(n,e,t=gt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{Kn();const c=ri(t),l=Qt(e,t,n,a);return c(),Gn(),l});return r?s.unshift(i):s.push(i),i}}const pn=n=>(e,t=gt)=>{(!Po||n==="sp")&&So(n,(...r)=>e(...r),t)},V_=pn("bm"),x_=pn("m"),M_=pn("bu"),L_=pn("u"),F_=pn("bum"),Ed=pn("um"),U_=pn("sp"),B_=pn("rtg"),j_=pn("rtc");function $_(n,e=gt){So("ec",n,e)}const q_=Symbol.for("v-ndc"),Fa=n=>n?$d(n)?Hc(n):Fa(n.parent):null,ks=Ye(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Fa(n.parent),$root:n=>Fa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Bc(n),$forceUpdate:n=>n.f||(n.f=()=>{Fc(n.update)}),$nextTick:n=>n.n||(n.n=hd.bind(n.proxy)),$watch:n=>uy.bind(n)}),ha=(n,e)=>n!==Pe&&!n.__isScriptSetup&&Re(n,e),H_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;let h;if(e[0]!=="$"){const I=a[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(ha(r,e))return a[e]=1,r[e];if(s!==Pe&&Re(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&Re(h,e))return a[e]=3,i[e];if(t!==Pe&&Re(t,e))return a[e]=4,t[e];Ua&&(a[e]=0)}}const d=ks[e];let p,m;if(d)return e==="$attrs"&&at(n.attrs,"get",""),d(n);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==Pe&&Re(t,e))return a[e]=4,t[e];if(m=l.config.globalProperties,Re(m,e))return m[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return ha(s,e)?(s[e]=t,!0):r!==Pe&&Re(r,e)?(r[e]=t,!0):Re(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!t[a]||n!==Pe&&Re(n,a)||ha(e,a)||(c=i[0])&&Re(c,a)||Re(r,a)||Re(ks,a)||Re(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Re(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ku(n){return le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ua=!0;function z_(n){const e=Bc(n),t=n.proxy,r=n.ctx;Ua=!1,e.beforeCreate&&Nu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:I,updated:k,activated:O,deactivated:x,beforeDestroy:W,beforeUnmount:U,destroyed:z,unmounted:H,render:oe,renderTracked:he,renderTriggered:w,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:R,components:S,directives:E,filters:lt}=e;if(h&&K_(h,r,null),a)for(const ge in a){const fe=a[ge];ue(fe)&&(r[ge]=fe.bind(t))}if(s){const ge=s.call(t,t);Le(ge)&&(n.data=Ao(ge))}if(Ua=!0,i)for(const ge in i){const fe=i[ge],Et=ue(fe)?fe.bind(t,t):ue(fe.get)?fe.get.bind(t,t):Kt,Pt=!ue(fe)&&ue(fe.set)?fe.set.bind(t):Kt,St=Nt({get:Et,set:Pt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>St.value,set:Ne=>St.value=Ne})}if(c)for(const ge in c)Td(c[ge],r,t,ge);if(l){const ge=ue(l)?l.call(t):l;Reflect.ownKeys(ge).forEach(fe=>{ji(fe,ge[fe])})}d&&Nu(d,n,"c");function Ue(ge,fe){le(fe)?fe.forEach(Et=>ge(Et.bind(t))):fe&&ge(fe.bind(t))}if(Ue(V_,p),Ue(x_,m),Ue(M_,I),Ue(L_,k),Ue(N_,O),Ue(D_,x),Ue($_,y),Ue(j_,he),Ue(B_,w),Ue(F_,U),Ue(Ed,H),Ue(U_,T),le(A))if(A.length){const ge=n.exposed||(n.exposed={});A.forEach(fe=>{Object.defineProperty(ge,fe,{get:()=>t[fe],set:Et=>t[fe]=Et})})}else n.exposed||(n.exposed={});oe&&n.render===Kt&&(n.render=oe),R!=null&&(n.inheritAttrs=R),S&&(n.components=S),E&&(n.directives=E),T&&_d(n)}function K_(n,e,t=Kt){le(n)&&(n=Ba(n));for(const r in n){const s=n[r];let i;Le(s)?"default"in s?i=un(s.from||r,s.default,!0):i=un(s.from||r):i=un(s),ot(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Nu(n,e,t){Qt(le(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Td(n,e,t,r){let s=r.includes(".")?xd(t,r):()=>t[r];if(Ke(n)){const i=e[n];ue(i)&&$i(s,i)}else if(ue(n))$i(s,n.bind(t));else if(Le(n))if(le(n))n.forEach(i=>Td(i,e,t,r));else{const i=ue(n.handler)?n.handler.bind(t):e[n.handler];ue(i)&&$i(s,i,n)}}function Bc(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>no(l,h,a,!0)),no(l,e,a)),Le(e)&&i.set(e,l),l}function no(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&no(n,i,t,!0),s&&s.forEach(a=>no(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=G_[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const G_={data:Du,props:Ou,emits:Ou,methods:Es,computed:Es,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Es,directives:Es,watch:Q_,provide:Du,inject:W_};function Du(n,e){return e?n?function(){return Ye(ue(n)?n.call(this,this):n,ue(e)?e.call(this,this):e)}:e:n}function W_(n,e){return Es(Ba(n),Ba(e))}function Ba(n){if(le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ft(n,e){return n?[...new Set([].concat(n,e))]:e}function Es(n,e){return n?Ye(Object.create(null),n,e):e}function Ou(n,e){return n?le(n)&&le(e)?[...new Set([...n,...e])]:Ye(Object.create(null),ku(n),ku(e??{})):e}function Q_(n,e){if(!n)return e;if(!e)return n;const t=Ye(Object.create(null),n);for(const r in e)t[r]=ft(n[r],e[r]);return t}function Id(){return{app:null,config:{isNativeTag:Om,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let J_=0;function Y_(n,e){return function(r,s=null){ue(r)||(r=Ye({},r)),s!=null&&!Le(s)&&(s=null);const i=Id(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:J_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Dy,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ue(d.install)?(a.add(d),d.install(h,...p)):ue(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!l){const I=h._ceVNode||Ct(r,s);return I.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(I,d):n(I,d,m),l=!0,h._container=d,d.__vue_app__=h,Hc(I.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Qt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Vr;Vr=h;try{return d()}finally{Vr=p}}};return h}}let Vr=null;function ji(n,e){if(gt){let t=gt.provides;const r=gt.parent&&gt.parent.provides;r===t&&(t=gt.provides=Object.create(r)),t[n]=e}}function un(n,e,t=!1){const r=gt||zt;if(r||Vr){const s=Vr?Vr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ue(e)?e.call(r&&r.proxy):e}}const wd={},Ad=()=>Object.create(wd),Rd=n=>Object.getPrototypeOf(n)===wd;function X_(n,e,t,r=!1){const s={},i=Ad();n.propsDefaults=Object.create(null),Sd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:od(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Z_(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=Ae(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(bo(n.emitsOptions,m))continue;const I=e[m];if(l)if(Re(i,m))I!==i[m]&&(i[m]=I,h=!0);else{const k=hr(m);s[k]=ja(l,c,k,I,n,!1)}else I!==i[m]&&(i[m]=I,h=!0)}}}else{Sd(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Re(e,p)&&((d=_r(p))===p||!Re(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=ja(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&ln(n.attrs,"set","")}function Sd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(Ss(l))continue;const h=e[l];let d;s&&Re(s,d=hr(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:bo(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=Ae(t),h=c||Pe;for(let d=0;d<i.length;d++){const p=i[d];t[p]=ja(s,l,p,h[p],n,!Re(h,p))}}return a}function ja(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Re(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ue(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=ri(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===_r(t))&&(r=!0))}return r}const ey=new WeakMap;function bd(n,e,t=!1){const r=t?ey:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!ue(n)){const d=p=>{l=!0;const[m,I]=bd(p,e,!0);Ye(a,m),I&&c.push(...I)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Le(n)&&r.set(n,Dr),Dr;if(le(i))for(let d=0;d<i.length;d++){const p=hr(i[d]);Vu(p)&&(a[p]=Pe)}else if(i)for(const d in i){const p=hr(d);if(Vu(p)){const m=i[d],I=a[p]=le(m)||ue(m)?{type:m}:Ye({},m),k=I.type;let O=!1,x=!0;if(le(k))for(let W=0;W<k.length;++W){const U=k[W],z=ue(U)&&U.name;if(z==="Boolean"){O=!0;break}else z==="String"&&(x=!1)}else O=ue(k)&&k.name==="Boolean";I[0]=O,I[1]=x,(O||Re(I,"default"))&&c.push(p)}}const h=[a,c];return Le(n)&&r.set(n,h),h}function Vu(n){return n[0]!=="$"&&!Ss(n)}const Cd=n=>n[0]==="_"||n==="$stable",jc=n=>le(n)?n.map($t):[$t(n)],ty=(n,e,t)=>{if(e._n)return e;const r=C_((...s)=>jc(e(...s)),t);return r._c=!1,r},Pd=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Cd(s))continue;const i=n[s];if(ue(i))e[s]=ty(s,i,r);else if(i!=null){const a=jc(i);e[s]=()=>a}}},kd=(n,e)=>{const t=jc(e);n.slots.default=()=>t},Nd=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},ny=(n,e,t)=>{const r=n.slots=Ad();if(n.vnode.shapeFlag&32){const s=e._;s?(Nd(r,e,t),t&&Hf(r,"_",s,!0)):Pd(e,r)}else e&&kd(n,e)},ry=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Pe;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:Nd(s,e,t):(i=!e.$stable,Pd(e,s)),a=e}else e&&(kd(n,e),a={default:1});if(i)for(const c in s)!Cd(c)&&a[c]==null&&delete s[c]},It=_y;function sy(n){return iy(n)}function iy(n,e){const t=zf();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:I=Kt,insertStaticContent:k}=n,O=(_,v,C,M=null,N=null,L=null,K=void 0,j=null,B=!!v.dynamicChildren)=>{if(_===v)return;_&&!ys(_,v)&&(M=D(_),Ne(_,N,L,!0),_=null),v.patchFlag===-2&&(B=!1,v.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:Q}=v;switch(F){case Co:x(_,v,C,M);break;case zs:W(_,v,C,M);break;case pa:_==null&&U(v,C,M,K);break;case sn:S(_,v,C,M,N,L,K,j,B);break;default:Q&1?oe(_,v,C,M,N,L,K,j,B):Q&6?E(_,v,C,M,N,L,K,j,B):(Q&64||Q&128)&&F.process(_,v,C,M,N,L,K,j,B,X)}ne!=null&&N&&La(ne,_&&_.ref,L,v||_,!v)},x=(_,v,C,M)=>{if(_==null)r(v.el=c(v.children),C,M);else{const N=v.el=_.el;v.children!==_.children&&h(N,v.children)}},W=(_,v,C,M)=>{_==null?r(v.el=l(v.children||""),C,M):v.el=_.el},U=(_,v,C,M)=>{[_.el,_.anchor]=k(_.children,v,C,M,_.el,_.anchor)},z=({el:_,anchor:v},C,M)=>{let N;for(;_&&_!==v;)N=m(_),r(_,C,M),_=N;r(v,C,M)},H=({el:_,anchor:v})=>{let C;for(;_&&_!==v;)C=m(_),s(_),_=C;s(v)},oe=(_,v,C,M,N,L,K,j,B)=>{v.type==="svg"?K="svg":v.type==="math"&&(K="mathml"),_==null?he(v,C,M,N,L,K,j,B):T(_,v,N,L,K,j,B)},he=(_,v,C,M,N,L,K,j)=>{let B,F;const{props:ne,shapeFlag:Q,transition:ee,dirs:Z}=_;if(B=_.el=a(_.type,L,ne&&ne.is,ne),Q&8?d(B,_.children):Q&16&&y(_.children,B,null,M,N,fa(_,L),K,j),Z&&Zn(_,null,M,"created"),w(B,_,_.scopeId,K,M),ne){for(const Ie in ne)Ie!=="value"&&!Ss(Ie)&&i(B,Ie,null,ne[Ie],L,M);"value"in ne&&i(B,"value",null,ne.value,L),(F=ne.onVnodeBeforeMount)&&Ut(F,M,_)}Z&&Zn(_,null,M,"beforeMount");const se=oy(N,ee);se&&ee.beforeEnter(B),r(B,v,C),((F=ne&&ne.onVnodeMounted)||se||Z)&&It(()=>{F&&Ut(F,M,_),se&&ee.enter(B),Z&&Zn(_,null,M,"mounted")},N)},w=(_,v,C,M,N)=>{if(C&&I(_,C),M)for(let L=0;L<M.length;L++)I(_,M[L]);if(N){let L=N.subTree;if(v===L||Ld(L.type)&&(L.ssContent===v||L.ssFallback===v)){const K=N.vnode;w(_,K,K.scopeId,K.slotScopeIds,N.parent)}}},y=(_,v,C,M,N,L,K,j,B=0)=>{for(let F=B;F<_.length;F++){const ne=_[F]=j?Rn(_[F]):$t(_[F]);O(null,ne,v,C,M,N,L,K,j)}},T=(_,v,C,M,N,L,K)=>{const j=v.el=_.el;let{patchFlag:B,dynamicChildren:F,dirs:ne}=v;B|=_.patchFlag&16;const Q=_.props||Pe,ee=v.props||Pe;let Z;if(C&&er(C,!1),(Z=ee.onVnodeBeforeUpdate)&&Ut(Z,C,v,_),ne&&Zn(v,_,C,"beforeUpdate"),C&&er(C,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&d(j,""),F?A(_.dynamicChildren,F,j,C,M,fa(v,N),L):K||fe(_,v,j,null,C,M,fa(v,N),L,!1),B>0){if(B&16)R(j,Q,ee,C,N);else if(B&2&&Q.class!==ee.class&&i(j,"class",null,ee.class,N),B&4&&i(j,"style",Q.style,ee.style,N),B&8){const se=v.dynamicProps;for(let Ie=0;Ie<se.length;Ie++){const Ee=se[Ie],Ze=Q[Ee],Ge=ee[Ee];(Ge!==Ze||Ee==="value")&&i(j,Ee,Ze,Ge,N,C)}}B&1&&_.children!==v.children&&d(j,v.children)}else!K&&F==null&&R(j,Q,ee,C,N);((Z=ee.onVnodeUpdated)||ne)&&It(()=>{Z&&Ut(Z,C,v,_),ne&&Zn(v,_,C,"updated")},M)},A=(_,v,C,M,N,L,K)=>{for(let j=0;j<v.length;j++){const B=_[j],F=v[j],ne=B.el&&(B.type===sn||!ys(B,F)||B.shapeFlag&70)?p(B.el):C;O(B,F,ne,null,M,N,L,K,!0)}},R=(_,v,C,M,N)=>{if(v!==C){if(v!==Pe)for(const L in v)!Ss(L)&&!(L in C)&&i(_,L,v[L],null,N,M);for(const L in C){if(Ss(L))continue;const K=C[L],j=v[L];K!==j&&L!=="value"&&i(_,L,j,K,N,M)}"value"in C&&i(_,"value",v.value,C.value,N)}},S=(_,v,C,M,N,L,K,j,B)=>{const F=v.el=_?_.el:c(""),ne=v.anchor=_?_.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:Z}=v;Z&&(j=j?j.concat(Z):Z),_==null?(r(F,C,M),r(ne,C,M),y(v.children||[],C,ne,N,L,K,j,B)):Q>0&&Q&64&&ee&&_.dynamicChildren?(A(_.dynamicChildren,ee,C,N,L,K,j),(v.key!=null||N&&v===N.subTree)&&Dd(_,v,!0)):fe(_,v,C,ne,N,L,K,j,B)},E=(_,v,C,M,N,L,K,j,B)=>{v.slotScopeIds=j,_==null?v.shapeFlag&512?N.ctx.activate(v,C,M,K,B):lt(v,C,M,N,L,K,B):Rt(_,v,B)},lt=(_,v,C,M,N,L,K)=>{const j=_.component=Sy(_,M,N);if(yd(_)&&(j.ctx.renderer=X),by(j,!1,K),j.asyncDep){if(N&&N.registerDep(j,Ue,K),!_.el){const B=j.subTree=Ct(zs);W(null,B,v,C)}}else Ue(j,_,v,C,N,L,K)},Rt=(_,v,C)=>{const M=v.component=_.component;if(gy(_,v,C))if(M.asyncDep&&!M.asyncResolved){ge(M,v,C);return}else M.next=v,M.update();else v.el=_.el,M.vnode=v},Ue=(_,v,C,M,N,L,K)=>{const j=()=>{if(_.isMounted){let{next:Q,bu:ee,u:Z,parent:se,vnode:Ie}=_;{const et=Od(_);if(et){Q&&(Q.el=Ie.el,ge(_,Q,K)),et.asyncDep.then(()=>{_.isUnmounted||j()});return}}let Ee=Q,Ze;er(_,!1),Q?(Q.el=Ie.el,ge(_,Q,K)):Q=Ie,ee&&aa(ee),(Ze=Q.props&&Q.props.onVnodeBeforeUpdate)&&Ut(Ze,se,Q,Ie),er(_,!0);const Ge=da(_),We=_.subTree;_.subTree=Ge,O(We,Ge,p(We.el),D(We),_,N,L),Q.el=Ge.el,Ee===null&&my(_,Ge.el),Z&&It(Z,N),(Ze=Q.props&&Q.props.onVnodeUpdated)&&It(()=>Ut(Ze,se,Q,Ie),N)}else{let Q;const{el:ee,props:Z}=v,{bm:se,m:Ie,parent:Ee,root:Ze,type:Ge}=_,We=Ps(v);if(er(_,!1),se&&aa(se),!We&&(Q=Z&&Z.onVnodeBeforeMount)&&Ut(Q,Ee,v),er(_,!0),ee&&Se){const et=()=>{_.subTree=da(_),Se(ee,_.subTree,_,N,null)};We?Ge.__asyncHydrate(ee,_,et):et()}else{Ze.ce&&Ze.ce._injectChildStyle(Ge);const et=_.subTree=da(_);O(null,et,C,M,_,N,L),v.el=et.el}if(Ie&&It(Ie,N),!We&&(Q=Z&&Z.onVnodeMounted)){const et=v;It(()=>Ut(Q,Ee,et),N)}(v.shapeFlag&256||Ee&&Ps(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&_.a&&It(_.a,N),_.isMounted=!0,v=C=M=null}};_.scope.on();const B=_.effect=new Gf(j);_.scope.off();const F=_.update=B.run.bind(B),ne=_.job=B.runIfDirty.bind(B);ne.i=_,ne.id=_.uid,B.scheduler=()=>Fc(ne),er(_,!0),F()},ge=(_,v,C)=>{v.component=_;const M=_.vnode.props;_.vnode=v,_.next=null,Z_(_,v.props,M,C),ry(_,v.children,C),Kn(),Pu(_),Gn()},fe=(_,v,C,M,N,L,K,j,B=!1)=>{const F=_&&_.children,ne=_?_.shapeFlag:0,Q=v.children,{patchFlag:ee,shapeFlag:Z}=v;if(ee>0){if(ee&128){Pt(F,Q,C,M,N,L,K,j,B);return}else if(ee&256){Et(F,Q,C,M,N,L,K,j,B);return}}Z&8?(ne&16&&yt(F,N,L),Q!==F&&d(C,Q)):ne&16?Z&16?Pt(F,Q,C,M,N,L,K,j,B):yt(F,N,L,!0):(ne&8&&d(C,""),Z&16&&y(Q,C,M,N,L,K,j,B))},Et=(_,v,C,M,N,L,K,j,B)=>{_=_||Dr,v=v||Dr;const F=_.length,ne=v.length,Q=Math.min(F,ne);let ee;for(ee=0;ee<Q;ee++){const Z=v[ee]=B?Rn(v[ee]):$t(v[ee]);O(_[ee],Z,C,null,N,L,K,j,B)}F>ne?yt(_,N,L,!0,!1,Q):y(v,C,M,N,L,K,j,B,Q)},Pt=(_,v,C,M,N,L,K,j,B)=>{let F=0;const ne=v.length;let Q=_.length-1,ee=ne-1;for(;F<=Q&&F<=ee;){const Z=_[F],se=v[F]=B?Rn(v[F]):$t(v[F]);if(ys(Z,se))O(Z,se,C,null,N,L,K,j,B);else break;F++}for(;F<=Q&&F<=ee;){const Z=_[Q],se=v[ee]=B?Rn(v[ee]):$t(v[ee]);if(ys(Z,se))O(Z,se,C,null,N,L,K,j,B);else break;Q--,ee--}if(F>Q){if(F<=ee){const Z=ee+1,se=Z<ne?v[Z].el:M;for(;F<=ee;)O(null,v[F]=B?Rn(v[F]):$t(v[F]),C,se,N,L,K,j,B),F++}}else if(F>ee)for(;F<=Q;)Ne(_[F],N,L,!0),F++;else{const Z=F,se=F,Ie=new Map;for(F=se;F<=ee;F++){const ut=v[F]=B?Rn(v[F]):$t(v[F]);ut.key!=null&&Ie.set(ut.key,F)}let Ee,Ze=0;const Ge=ee-se+1;let We=!1,et=0;const _n=new Array(Ge);for(F=0;F<Ge;F++)_n[F]=0;for(F=Z;F<=Q;F++){const ut=_[F];if(Ze>=Ge){Ne(ut,N,L,!0);continue}let bt;if(ut.key!=null)bt=Ie.get(ut.key);else for(Ee=se;Ee<=ee;Ee++)if(_n[Ee-se]===0&&ys(ut,v[Ee])){bt=Ee;break}bt===void 0?Ne(ut,N,L,!0):(_n[bt-se]=F+1,bt>=et?et=bt:We=!0,O(ut,v[bt],C,null,N,L,K,j,B),Ze++)}const vr=We?ay(_n):Dr;for(Ee=vr.length-1,F=Ge-1;F>=0;F--){const ut=se+F,bt=v[ut],Er=ut+1<ne?v[ut+1].el:M;_n[F]===0?O(null,bt,C,Er,N,L,K,j,B):We&&(Ee<0||F!==vr[Ee]?St(bt,C,Er,2):Ee--)}}},St=(_,v,C,M,N=null)=>{const{el:L,type:K,transition:j,children:B,shapeFlag:F}=_;if(F&6){St(_.component.subTree,v,C,M);return}if(F&128){_.suspense.move(v,C,M);return}if(F&64){K.move(_,v,C,X);return}if(K===sn){r(L,v,C);for(let Q=0;Q<B.length;Q++)St(B[Q],v,C,M);r(_.anchor,v,C);return}if(K===pa){z(_,v,C);return}if(M!==2&&F&1&&j)if(M===0)j.beforeEnter(L),r(L,v,C),It(()=>j.enter(L),N);else{const{leave:Q,delayLeave:ee,afterLeave:Z}=j,se=()=>r(L,v,C),Ie=()=>{Q(L,()=>{se(),Z&&Z()})};ee?ee(L,se,Ie):Ie()}else r(L,v,C)},Ne=(_,v,C,M=!1,N=!1)=>{const{type:L,props:K,ref:j,children:B,dynamicChildren:F,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:Z}=_;if(Q===-2&&(N=!1),j!=null&&La(j,null,C,_,!0),Z!=null&&(v.renderCache[Z]=void 0),ne&256){v.ctx.deactivate(_);return}const se=ne&1&&ee,Ie=!Ps(_);let Ee;if(Ie&&(Ee=K&&K.onVnodeBeforeUnmount)&&Ut(Ee,v,_),ne&6)Ft(_.component,C,M);else{if(ne&128){_.suspense.unmount(C,M);return}se&&Zn(_,null,v,"beforeUnmount"),ne&64?_.type.remove(_,v,C,X,M):F&&!F.hasOnce&&(L!==sn||Q>0&&Q&64)?yt(F,v,C,!1,!0):(L===sn&&Q&384||!N&&ne&16)&&yt(B,v,C),M&&De(_)}(Ie&&(Ee=K&&K.onVnodeUnmounted)||se)&&It(()=>{Ee&&Ut(Ee,v,_),se&&Zn(_,null,v,"unmounted")},C)},De=_=>{const{type:v,el:C,anchor:M,transition:N}=_;if(v===sn){mn(C,M);return}if(v===pa){H(_);return}const L=()=>{s(C),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(_.shapeFlag&1&&N&&!N.persisted){const{leave:K,delayLeave:j}=N,B=()=>K(C,L);j?j(_.el,L,B):B()}else L()},mn=(_,v)=>{let C;for(;_!==v;)C=m(_),s(_),_=C;s(v)},Ft=(_,v,C)=>{const{bum:M,scope:N,job:L,subTree:K,um:j,m:B,a:F}=_;xu(B),xu(F),M&&aa(M),N.stop(),L&&(L.flags|=8,Ne(K,_,v,C)),j&&It(j,v),It(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},yt=(_,v,C,M=!1,N=!1,L=0)=>{for(let K=L;K<_.length;K++)Ne(_[K],v,C,M,N)},D=_=>{if(_.shapeFlag&6)return D(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=m(_.anchor||_.el),C=v&&v[P_];return C?m(C):v};let J=!1;const G=(_,v,C)=>{_==null?v._vnode&&Ne(v._vnode,null,null,!0):O(v._vnode||null,_,v,null,null,null,C),v._vnode=_,J||(J=!0,Pu(),dd(),J=!1)},X={p:O,um:Ne,m:St,r:De,mt:lt,mc:y,pc:fe,pbc:A,n:D,o:n};let me,Se;return{render:G,hydrate:me,createApp:Y_(G,me)}}function fa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function er({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function oy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Dd(n,e,t=!1){const r=n.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Rn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&Dd(a,c)),c.type===Co&&(c.el=a.el)}}function ay(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Od(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Od(e)}function xu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const cy=Symbol.for("v-scx"),ly=()=>un(cy);function $i(n,e,t){return Vd(n,e,t)}function Vd(n,e,t=Pe){const{immediate:r,deep:s,flush:i,once:a}=t,c=Ye({},t);let l;if(Po)if(i==="sync"){const m=ly();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!e||r)c.once=!0;else return{stop:Kt,resume:Kt,pause:Kt};const h=gt;c.call=(m,I,k)=>Qt(m,h,I,k);let d=!1;i==="post"?c.scheduler=m=>{It(m,h&&h.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(m,I)=>{I?m():Fc(m)}),c.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=A_(n,e,c);return l&&l.push(p),p}function uy(n,e,t){const r=this.proxy,s=Ke(n)?n.includes(".")?xd(r,n):()=>r[n]:n.bind(r,r);let i;ue(e)?i=e:(i=e.handler,t=e);const a=ri(this),c=Vd(s,i.bind(r),t);return a(),c}function xd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const hy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${hr(e)}Modifiers`]||n[`${_r(e)}Modifiers`];function fy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Pe;let s=t;const i=e.startsWith("update:"),a=i&&hy(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Ke(d)?d.trim():d)),a.number&&(s=t.map(jm)));let c,l=r[c=oa(e)]||r[c=oa(hr(e))];!l&&i&&(l=r[c=oa(_r(e))]),l&&Qt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Qt(h,n,6,s)}}function Md(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!ue(n)){const l=h=>{const d=Md(h,e,!0);d&&(c=!0,Ye(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Le(n)&&r.set(n,null),null):(le(i)?i.forEach(l=>a[l]=null):Ye(a,i),Le(n)&&r.set(n,a),a)}function bo(n,e){return!n||!Eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(n,e[0].toLowerCase()+e.slice(1))||Re(n,_r(e))||Re(n,e))}function da(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:I,ctx:k,inheritAttrs:O,isMounted:x}=n,W=to(n);let U,z;try{if(t.shapeFlag&4){const oe=s||r,he=oe;U=$t(h.call(he,oe,d,p,I,m,k)),z=c}else{const oe=e;U=$t(oe.length>1?oe(p,{attrs:c,slots:a,emit:l}):oe(p,null)),z=e.props?c:dy(c)}}catch(oe){Ns.length=0,Ro(oe,n,1),U=Ct(zs)}let H=U;if(z&&O!==!1){const oe=Object.keys(z),{shapeFlag:he}=H;oe.length&&he&7&&(i&&oe.some(Ic)&&(z=py(z,i)),H=Br(H,z,!1,!0))}return t.dirs&&(H=Br(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(t.dirs):t.dirs),t.transition&&(H.transition=x?t.component.subTree.transition:t.transition),U=H,to(W),U}const dy=n=>{let e;for(const t in n)(t==="class"||t==="style"||Eo(t))&&((e||(e={}))[t]=n[t]);return e},py=(n,e)=>{const t={};for(const r in n)(!Ic(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function gy(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Mu(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!bo(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Mu(r,a,h):!0:!!a;return!1}function Mu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!bo(t,i))return!0}return!1}function my({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ld=n=>n.__isSuspense;function _y(n,e){e&&e.pendingBranch?le(n)?e.effects.push(...n):e.effects.push(n):b_(n)}const sn=Symbol.for("v-fgt"),Co=Symbol.for("v-txt"),zs=Symbol.for("v-cmt"),pa=Symbol.for("v-stc"),Ns=[];let At=null;function $c(n=!1){Ns.push(At=n?null:[])}function yy(){Ns.pop(),At=Ns[Ns.length-1]||null}let Ks=1;function Lu(n){Ks+=n,n<0&&At&&(At.hasOnce=!0)}function Fd(n){return n.dynamicChildren=Ks>0?At||Dr:null,yy(),Ks>0&&At&&At.push(n),n}function Ud(n,e,t,r,s,i){return Fd(jd(n,e,t,r,s,i,!0))}function vy(n,e,t,r,s){return Fd(Ct(n,e,t,r,s,!0))}function $a(n){return n?n.__v_isVNode===!0:!1}function ys(n,e){return n.type===e.type&&n.key===e.key}const Bd=({key:n})=>n??null,qi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ke(n)||ot(n)||ue(n)?{i:zt,r:n,k:e,f:!!t}:n:null);function jd(n,e=null,t=null,r=0,s=null,i=n===sn?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bd(e),ref:e&&qi(e),scopeId:gd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:zt};return c?(qc(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=Ke(t)?8:16),Ks>0&&!a&&At&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&At.push(l),l}const Ct=Ey;function Ey(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===q_)&&(n=zs),$a(n)){const c=Br(n,e,!0);return t&&qc(c,t),Ks>0&&!i&&At&&(c.shapeFlag&6?At[At.indexOf(n)]=c:At.push(c)),c.patchFlag=-2,c}if(Ny(n)&&(n=n.__vccOpts),e){e=Ty(e);let{class:c,style:l}=e;c&&!Ke(c)&&(e.class=Sc(c)),Le(l)&&(xc(l)&&!le(l)&&(l=Ye({},l)),e.style=Rc(l))}const a=Ke(n)?1:Ld(n)?128:k_(n)?64:Le(n)?4:ue(n)?2:0;return jd(n,e,t,r,s,a,i,!0)}function Ty(n){return n?xc(n)||Rd(n)?Ye({},n):n:null}function Br(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?wy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Bd(h),ref:e&&e.ref?t&&i?le(i)?i.concat(qi(e)):[i,qi(e)]:qi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==sn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Br(n.ssContent),ssFallback:n.ssFallback&&Br(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&md(d,l.clone(d)),d}function Iy(n=" ",e=0){return Ct(Co,null,n,e)}function $t(n){return n==null||typeof n=="boolean"?Ct(zs):le(n)?Ct(sn,null,n.slice()):typeof n=="object"?Rn(n):Ct(Co,null,String(n))}function Rn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Br(n)}function qc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(le(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),qc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Rd(e)?e._ctx=zt:s===3&&zt&&(zt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:zt},t=32):(e=String(e),r&64?(t=16,e=[Iy(e)]):t=8);n.children=e,n.shapeFlag|=t}function wy(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Sc([e.class,r.class]));else if(s==="style")e.style=Rc([e.style,r.style]);else if(Eo(s)){const i=e[s],a=r[s];a&&i!==a&&!(le(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ut(n,e,t,r=null){Qt(n,e,7,[t,r])}const Ay=Id();let Ry=0;function Sy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Ay,i={uid:Ry++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bd(r,s),emitsOptions:Md(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=fy.bind(null,i),n.ce&&n.ce(i),i}let gt=null,ro,qa;{const n=zf(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ro=e("__VUE_INSTANCE_SETTERS__",t=>gt=t),qa=e("__VUE_SSR_SETTERS__",t=>Po=t)}const ri=n=>{const e=gt;return ro(n),n.scope.on(),()=>{n.scope.off(),ro(e)}},Fu=()=>{gt&&gt.scope.off(),ro(null)};function $d(n){return n.vnode.shapeFlag&4}let Po=!1;function by(n,e=!1,t=!1){e&&qa(e);const{props:r,children:s}=n.vnode,i=$d(n);X_(n,r,i,e),ny(n,s,t);const a=i?Cy(n,e):void 0;return e&&qa(!1),a}function Cy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,H_);const{setup:r}=t;if(r){const s=n.setupContext=r.length>1?ky(n):null,i=ri(n);Kn();const a=ni(r,n,0,[n.props,s]);if(Gn(),i(),$f(a)){if(Ps(n)||_d(n),a.then(Fu,Fu),e)return a.then(c=>{Uu(n,c,e)}).catch(c=>{Ro(c,n,0)});n.asyncDep=a}else Uu(n,a,e)}else qd(n,e)}function Uu(n,e,t){ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Le(e)&&(n.setupState=ld(e)),qd(n,t)}let Bu;function qd(n,e,t){const r=n.type;if(!n.render){if(!e&&Bu&&!r.render){const s=r.template||Bc(n).template;if(s){const{isCustomElement:i,compilerOptions:a}=n.appContext.config,{delimiters:c,compilerOptions:l}=r,h=Ye(Ye({isCustomElement:i,delimiters:c},a),l);r.render=Bu(s,h)}}n.render=r.render||Kt}{const s=ri(n);Kn();try{z_(n)}finally{Gn(),s()}}}const Py={get(n,e){return at(n,"get",""),n[e]}};function ky(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Py),slots:n.slots,emit:n.emit,expose:e}}function Hc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ld(m_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ks)return ks[t](n)},has(e,t){return t in e||t in ks}})):n.proxy}function Ny(n){return ue(n)&&"__vccOpts"in n}const Nt=(n,e)=>I_(n,e,Po);function Hd(n,e,t){const r=arguments.length;return r===2?Le(e)&&!le(e)?$a(e)?Ct(n,null,[e]):Ct(n,e):Ct(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&$a(t)&&(t=[t]),Ct(n,e,t))}const Dy="3.5.2";/**
* @vue/runtime-dom v3.5.2
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ha;const ju=typeof window<"u"&&window.trustedTypes;if(ju)try{Ha=ju.createPolicy("vue",{createHTML:n=>n})}catch{}const zd=Ha?n=>Ha.createHTML(n):n=>n,Oy="http://www.w3.org/2000/svg",Vy="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,$u=rn&&rn.createElement("template"),xy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?rn.createElementNS(Oy,n):e==="mathml"?rn.createElementNS(Vy,n):t?rn.createElement(n,{is:t}):rn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>rn.createTextNode(n),createComment:n=>rn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>rn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{$u.innerHTML=zd(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=$u.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},My=Symbol("_vtc");function Ly(n,e,t){const r=n[My];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const qu=Symbol("_vod"),Fy=Symbol("_vsh"),Uy=Symbol(""),By=/(^|;)\s*display\s*:/;function jy(n,e,t){const r=n.style,s=Ke(t);let i=!1;if(t&&!s){if(e)if(Ke(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&Hi(r,c,"")}else for(const a in e)t[a]==null&&Hi(r,a,"");for(const a in t)a==="display"&&(i=!0),Hi(r,a,t[a])}else if(s){if(e!==t){const a=r[Uy];a&&(t+=";"+a),r.cssText=t,i=By.test(t)}}else e&&n.removeAttribute("style");qu in n&&(n[qu]=i?r.display:"",n[Fy]&&(r.display="none"))}const Hu=/\s*!important$/;function Hi(n,e,t){if(le(t))t.forEach(r=>Hi(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=$y(n,e);Hu.test(t)?n.setProperty(_r(r),t.replace(Hu,""),"important"):n[r]=t}}const zu=["Webkit","Moz","ms"],ga={};function $y(n,e){const t=ga[e];if(t)return t;let r=hr(e);if(r!=="filter"&&r in n)return ga[e]=r;r=qf(r);for(let s=0;s<zu.length;s++){const i=zu[s]+r;if(i in n)return ga[e]=i}return e}const Ku="http://www.w3.org/1999/xlink";function Gu(n,e,t,r,s,i=Gm(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ku,e.slice(6,e.length)):n.setAttributeNS(Ku,e,t):t==null||i&&!Kf(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Xr(t)?String(t):t)}function qy(n,e,t,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?zd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let i=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Kf(t):t==null&&a==="string"?(t="",i=!0):a==="number"&&(t=0,i=!0)}try{n[e]=t}catch{}i&&n.removeAttribute(e)}function Hy(n,e,t,r){n.addEventListener(e,t,r)}function zy(n,e,t,r){n.removeEventListener(e,t,r)}const Wu=Symbol("_vei");function Ky(n,e,t,r,s=null){const i=n[Wu]||(n[Wu]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Gy(e);if(r){const h=i[e]=Jy(r,s);Hy(n,c,h,l)}else a&&(zy(n,c,a,l),i[e]=void 0)}}const Qu=/(?:Once|Passive|Capture)$/;function Gy(n){let e;if(Qu.test(n)){e={};let r;for(;r=n.match(Qu);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_r(n.slice(2)),e]}let ma=0;const Wy=Promise.resolve(),Qy=()=>ma||(Wy.then(()=>ma=0),ma=Date.now());function Jy(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Qt(Yy(r,t.value),e,5,[r])};return t.value=n,t.attached=Qy(),t}function Yy(n,e){if(le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ju=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Xy=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Ly(n,r,a):e==="style"?jy(n,t,r):Eo(e)?Ic(e)||Ky(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zy(n,e,r,a))?(qy(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gu(n,e,r,a,i,e!=="value")):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Gu(n,e,r,a))};function Zy(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ju(e)&&ue(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ju(e)&&Ke(t)?!1:!!(e in n||n._isVueCE&&(/[A-Z]/.test(e)||!Ke(t)))}const ev=Ye({patchProp:Xy},xy);let Yu;function tv(){return Yu||(Yu=sy(ev))}const Kd=(...n)=>{const e=tv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=rv(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,nv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function nv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function rv(n){return Ke(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const br=typeof document<"u";function Gd(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function sv(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Gd(n.default)}const we=Object.assign;function _a(n,e){const t={};for(const r in e){const s=e[r];t[r]=Lt(s)?s.map(n):n(s)}return t}const Ds=()=>{},Lt=Array.isArray,Wd=/#/g,iv=/&/g,ov=/\//g,av=/=/g,cv=/\?/g,Qd=/\+/g,lv=/%5B/g,uv=/%5D/g,Jd=/%5E/g,hv=/%60/g,Yd=/%7B/g,fv=/%7C/g,Xd=/%7D/g,dv=/%20/g;function zc(n){return encodeURI(""+n).replace(fv,"|").replace(lv,"[").replace(uv,"]")}function pv(n){return zc(n).replace(Yd,"{").replace(Xd,"}").replace(Jd,"^")}function za(n){return zc(n).replace(Qd,"%2B").replace(dv,"+").replace(Wd,"%23").replace(iv,"%26").replace(hv,"`").replace(Yd,"{").replace(Xd,"}").replace(Jd,"^")}function gv(n){return za(n).replace(av,"%3D")}function mv(n){return zc(n).replace(Wd,"%23").replace(cv,"%3F")}function _v(n){return n==null?"":mv(n).replace(ov,"%2F")}function Gs(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const yv=/\/$/,vv=n=>n.replace(yv,"");function ya(n,e,t="/"){let r,s={},i="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=n(i)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=wv(r??e,t),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Gs(a)}}function Ev(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Xu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Tv(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&jr(e.matched[r],t.matched[s])&&Zd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function jr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Zd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Iv(n[t],e[t]))return!1;return!0}function Iv(n,e){return Lt(n)?Zu(n,e):Lt(e)?Zu(e,n):n===e}function Zu(n,e){return Lt(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function wv(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=t.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const In={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ws;(function(n){n.pop="pop",n.push="push"})(Ws||(Ws={}));var Os;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Os||(Os={}));function Av(n){if(!n)if(br){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),vv(n)}const Rv=/^[^#]+#/;function Sv(n,e){return n.replace(Rv,"#")+e}function bv(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const ko=()=>({left:window.scrollX,top:window.scrollY});function Cv(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=bv(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function eh(n,e){return(history.state?history.state.position-e:-1)+n}const Ka=new Map;function Pv(n,e){Ka.set(n,e)}function kv(n){const e=Ka.get(n);return Ka.delete(n),e}let Nv=()=>location.protocol+"//"+location.host;function ep(n,e){const{pathname:t,search:r,hash:s}=e,i=n.indexOf("#");if(i>-1){let c=s.includes(n.slice(i))?n.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Xu(l,"")}return Xu(t,n)+r+s}function Dv(n,e,t,r){let s=[],i=[],a=null;const c=({state:m})=>{const I=ep(n,location),k=t.value,O=e.value;let x=0;if(m){if(t.value=I,e.value=m,a&&a===k){a=null;return}x=O?m.position-O.position:0}else r(I);s.forEach(W=>{W(t.value,k,{delta:x,type:Ws.pop,direction:x?x>0?Os.forward:Os.back:Os.unknown})})};function l(){a=t.value}function h(m){s.push(m);const I=()=>{const k=s.indexOf(m);k>-1&&s.splice(k,1)};return i.push(I),I}function d(){const{history:m}=window;m.state&&m.replaceState(we({},m.state,{scroll:ko()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function th(n,e,t,r=!1,s=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:s?ko():null}}function Ov(n){const{history:e,location:t}=window,r={value:ep(n,t)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=n.indexOf("#"),m=p>-1?(t.host&&document.querySelector("base")?n:n.slice(p))+l:Nv()+n+l;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(I){console.error(I),t[d?"replace":"assign"](m)}}function a(l,h){const d=we({},e.state,th(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=we({},s.value,e.state,{forward:l,scroll:ko()});i(d.current,d,!0);const p=we({},th(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function Vv(n){n=Av(n);const e=Ov(n),t=Dv(n,e.state,e.location,e.replace);function r(i,a=!0){a||t.pauseListeners(),history.go(i)}const s=we({location:"",base:n,go:r,createHref:Sv.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),Vv(n)}function Mv(n){return typeof n=="string"||n&&typeof n=="object"}function tp(n){return typeof n=="string"||typeof n=="symbol"}const np=Symbol("");var nh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(nh||(nh={}));function $r(n,e){return we(new Error,{type:n,[np]:!0},e)}function nn(n,e){return n instanceof Error&&np in n&&(e==null||!!(n.type&e))}const rh="[^/]+?",Lv={sensitive:!1,strict:!1,start:!0,end:!0},Fv=/[.+*?^${}()[\]/\\]/g;function Uv(n,e){const t=we({},Lv,e),r=[];let s=t.start?"^":"";const i=[];for(const h of n){const d=h.length?[]:[90];t.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let I=40+(t.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(Fv,"\\$&"),I+=40;else if(m.type===1){const{value:k,repeatable:O,optional:x,regexp:W}=m;i.push({name:k,repeatable:O,optional:x});const U=W||rh;if(U!==rh){I+=10;try{new RegExp(`(${U})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${k}" (${U}): `+H.message)}}let z=O?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(z=x&&h.length<2?`(?:/${z})`:"/"+z),x&&(z+="?"),s+=z,I+=20,x&&(I+=-8),O&&(I+=-20),U===".*"&&(I+=-50)}d.push(I)}r.push(d)}if(t.strict&&t.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function c(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const I=d[m]||"",k=i[m-1];p[k.name]=I&&k.repeatable?I.split("/"):I}return p}function l(h){let d="",p=!1;for(const m of n){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const I of m)if(I.type===0)d+=I.value;else if(I.type===1){const{value:k,repeatable:O,optional:x}=I,W=k in h?h[k]:"";if(Lt(W)&&!O)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const U=Lt(W)?W.join("/"):W;if(!U)if(x)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=U}}return d||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function Bv(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function rp(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const i=Bv(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(sh(r))return 1;if(sh(s))return-1}return s.length-r.length}function sh(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const jv={type:0,value:""},$v=/[a-zA-Z0-9_]/;function qv(n){if(!n)return[[]];if(n==="/")return[[jv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(I){throw new Error(`ERR (${t})/"${h}": ${I}`)}let t=0,r=t;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(t===0?i.push({type:0,value:h}):t===1||t===2||t===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<n.length;){if(l=n[c++],l==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:l==="/"?(h&&p(),a()):l===":"?(p(),t=1):m();break;case 4:m(),t=r;break;case 1:l==="("?t=2:$v.test(l)?m():(p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:t=3:d+=l;break;case 3:p(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function Hv(n,e,t){const r=Uv(qv(n.path),t),s=we(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zv(n,e){const t=[],r=new Map;e=ch({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,I){const k=!I,O=oh(p);O.aliasOf=I&&I.record;const x=ch(e,p),W=[O];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of H)W.push(oh(we({},O,{components:I?I.record.components:O.components,path:oe,aliasOf:I?I.record:O})))}let U,z;for(const H of W){const{path:oe}=H;if(m&&oe[0]!=="/"){const he=m.record.path,w=he[he.length-1]==="/"?"":"/";H.path=m.record.path+(oe&&w+oe)}if(U=Hv(H,m,x),I?I.alias.push(U):(z=z||U,z!==U&&z.alias.push(U),k&&p.name&&!ah(U)&&a(p.name)),sp(U)&&l(U),O.children){const he=O.children;for(let w=0;w<he.length;w++)i(he[w],U,I&&I.children[w])}I=I||U}return z?()=>{a(z)}:Ds}function a(p){if(tp(p)){const m=r.get(p);m&&(r.delete(p),t.splice(t.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=t.indexOf(p);m>-1&&(t.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function c(){return t}function l(p){const m=Wv(p,t);t.splice(m,0,p),p.record.name&&!ah(p)&&r.set(p.record.name,p)}function h(p,m){let I,k={},O,x;if("name"in p&&p.name){if(I=r.get(p.name),!I)throw $r(1,{location:p});x=I.record.name,k=we(ih(m.params,I.keys.filter(z=>!z.optional).concat(I.parent?I.parent.keys.filter(z=>z.optional):[]).map(z=>z.name)),p.params&&ih(p.params,I.keys.map(z=>z.name))),O=I.stringify(k)}else if(p.path!=null)O=p.path,I=t.find(z=>z.re.test(O)),I&&(k=I.parse(O),x=I.record.name);else{if(I=m.name?r.get(m.name):t.find(z=>z.re.test(m.path)),!I)throw $r(1,{location:p,currentLocation:m});x=I.record.name,k=we({},m.params,p.params),O=I.stringify(k)}const W=[];let U=I;for(;U;)W.unshift(U.record),U=U.parent;return{name:x,path:O,params:k,matched:W,meta:Gv(W)}}n.forEach(p=>i(p));function d(){t.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function ih(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function oh(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Kv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Kv(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function ah(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Gv(n){return n.reduce((e,t)=>we(e,t.meta),{})}function ch(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function Wv(n,e){let t=0,r=e.length;for(;t!==r;){const i=t+r>>1;rp(n,e[i])<0?r=i:t=i+1}const s=Qv(n);return s&&(r=e.lastIndexOf(s,r-1)),r}function Qv(n){let e=n;for(;e=e.parent;)if(sp(e)&&rp(n,e)===0)return e}function sp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Jv(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Qd," "),a=i.indexOf("="),c=Gs(a<0?i:i.slice(0,a)),l=a<0?null:Gs(i.slice(a+1));if(c in e){let h=e[c];Lt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function lh(n){let e="";for(let t in n){const r=n[t];if(t=gv(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(Lt(r)?r.map(i=>i&&za(i)):[r&&za(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function Yv(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=Lt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Xv=Symbol(""),uh=Symbol(""),Kc=Symbol(""),ip=Symbol(""),Ga=Symbol("");function vs(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Sn(n,e,t,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l($r(4,{from:t,to:e})):m instanceof Error?l(m):Mv(m)?l($r(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),c())},d=i(()=>n.call(r&&r.instances[s],e,t,h));let p=Promise.resolve(d);n.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function va(n,e,t,r,s=i=>i()){const i=[];for(const a of n)for(const c in a.components){let l=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(Gd(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Sn(d,t,r,a,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const p=sv(d)?d.default:d;a.mods[c]=d,a.components[c]=p;const I=(p.__vccOpts||p)[e];return I&&Sn(I,t,r,a,c,s)()}))}}return i}function hh(n){const e=un(Kc),t=un(ip),r=Nt(()=>{const l=or(n.to);return e.resolve(l)}),s=Nt(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=t.matched;if(!d||!p.length)return-1;const m=p.findIndex(jr.bind(null,d));if(m>-1)return m;const I=fh(l[h-2]);return h>1&&fh(d)===I&&p[p.length-1].path!==I?p.findIndex(jr.bind(null,l[h-2])):m}),i=Nt(()=>s.value>-1&&rE(t.params,r.value.params)),a=Nt(()=>s.value>-1&&s.value===t.matched.length-1&&Zd(t.params,r.value.params));function c(l={}){if(nE(l)){const h=e[or(n.replace)?"replace":"push"](or(n.to)).catch(Ds);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Nt(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}function Zv(n){return n.length===1?n[0]:n}const eE=Uc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:hh,setup(n,{slots:e}){const t=Ao(hh(n)),{options:r}=un(Kc),s=Nt(()=>({[dh(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[dh(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&Zv(e.default(t));return n.custom?i:Hd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),tE=eE;function nE(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function rE(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!Lt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function fh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const dh=(n,e,t)=>n??e??t,sE=Uc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=un(Ga),s=Nt(()=>n.route||r.value),i=un(uh,0),a=Nt(()=>{let h=or(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=Nt(()=>s.value.matched[a.value]);ji(uh,Nt(()=>a.value+1)),ji(Xv,c),ji(Ga,s);const l=__();return $i(()=>[l.value,c.value,n.name],([h,d,p],[m,I,k])=>{d&&(d.instances[p]=h,I&&I!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=I.leaveGuards),d.updateGuards.size||(d.updateGuards=I.updateGuards))),h&&d&&(!I||!jr(d,I)||!m)&&(d.enterCallbacks[p]||[]).forEach(O=>O(h))},{flush:"post"}),()=>{const h=s.value,d=n.name,p=c.value,m=p&&p.components[d];if(!m)return ph(t.default,{Component:m,route:h});const I=p.props[d],k=I?I===!0?h.params:typeof I=="function"?I(h):I:null,x=Hd(m,we({},k,e,{onVnodeUnmounted:W=>{W.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return ph(t.default,{Component:x,route:h})||x}}});function ph(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const op=sE;function iE(n){const e=zv(n.routes,n),t=n.parseQuery||Jv,r=n.stringifyQuery||lh,s=n.history,i=vs(),a=vs(),c=vs(),l=y_(In);let h=In;br&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=_a.bind(null,D=>""+D),p=_a.bind(null,_v),m=_a.bind(null,Gs);function I(D,J){let G,X;return tp(D)?(G=e.getRecordMatcher(D),X=J):X=D,e.addRoute(X,G)}function k(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function O(){return e.getRoutes().map(D=>D.record)}function x(D){return!!e.getRecordMatcher(D)}function W(D,J){if(J=we({},J||l.value),typeof D=="string"){const v=ya(t,D,J.path),C=e.resolve({path:v.path},J),M=s.createHref(v.fullPath);return we(v,C,{params:m(C.params),hash:Gs(v.hash),redirectedFrom:void 0,href:M})}let G;if(D.path!=null)G=we({},D,{path:ya(t,D.path,J.path).path});else{const v=we({},D.params);for(const C in v)v[C]==null&&delete v[C];G=we({},D,{params:p(v)}),J.params=p(J.params)}const X=e.resolve(G,J),me=D.hash||"";X.params=d(m(X.params));const Se=Ev(r,we({},D,{hash:pv(me),path:X.path})),_=s.createHref(Se);return we({fullPath:Se,hash:me,query:r===lh?Yv(D.query):D.query||{}},X,{redirectedFrom:void 0,href:_})}function U(D){return typeof D=="string"?ya(t,D,l.value.path):we({},D)}function z(D,J){if(h!==D)return $r(8,{from:J,to:D})}function H(D){return w(D)}function oe(D){return H(we(U(D),{replace:!0}))}function he(D){const J=D.matched[D.matched.length-1];if(J&&J.redirect){const{redirect:G}=J;let X=typeof G=="function"?G(D):G;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=U(X):{path:X},X.params={}),we({query:D.query,hash:D.hash,params:X.path!=null?{}:D.params},X)}}function w(D,J){const G=h=W(D),X=l.value,me=D.state,Se=D.force,_=D.replace===!0,v=he(G);if(v)return w(we(U(v),{state:typeof v=="object"?we({},me,v.state):me,force:Se,replace:_}),J||G);const C=G;C.redirectedFrom=J;let M;return!Se&&Tv(r,X,G)&&(M=$r(16,{to:C,from:X}),St(X,X,!0,!1)),(M?Promise.resolve(M):A(C,X)).catch(N=>nn(N)?nn(N,2)?N:Pt(N):fe(N,C,X)).then(N=>{if(N){if(nn(N,2))return w(we({replace:_},U(N.to),{state:typeof N.to=="object"?we({},me,N.to.state):me,force:Se}),J||C)}else N=S(C,X,!0,_,me);return R(C,X,N),N})}function y(D,J){const G=z(D,J);return G?Promise.reject(G):Promise.resolve()}function T(D){const J=mn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(D):D()}function A(D,J){let G;const[X,me,Se]=oE(D,J);G=va(X.reverse(),"beforeRouteLeave",D,J);for(const v of X)v.leaveGuards.forEach(C=>{G.push(Sn(C,D,J))});const _=y.bind(null,D,J);return G.push(_),yt(G).then(()=>{G=[];for(const v of i.list())G.push(Sn(v,D,J));return G.push(_),yt(G)}).then(()=>{G=va(me,"beforeRouteUpdate",D,J);for(const v of me)v.updateGuards.forEach(C=>{G.push(Sn(C,D,J))});return G.push(_),yt(G)}).then(()=>{G=[];for(const v of Se)if(v.beforeEnter)if(Lt(v.beforeEnter))for(const C of v.beforeEnter)G.push(Sn(C,D,J));else G.push(Sn(v.beforeEnter,D,J));return G.push(_),yt(G)}).then(()=>(D.matched.forEach(v=>v.enterCallbacks={}),G=va(Se,"beforeRouteEnter",D,J,T),G.push(_),yt(G))).then(()=>{G=[];for(const v of a.list())G.push(Sn(v,D,J));return G.push(_),yt(G)}).catch(v=>nn(v,8)?v:Promise.reject(v))}function R(D,J,G){c.list().forEach(X=>T(()=>X(D,J,G)))}function S(D,J,G,X,me){const Se=z(D,J);if(Se)return Se;const _=J===In,v=br?history.state:{};G&&(X||_?s.replace(D.fullPath,we({scroll:_&&v&&v.scroll},me)):s.push(D.fullPath,me)),l.value=D,St(D,J,G,_),Pt()}let E;function lt(){E||(E=s.listen((D,J,G)=>{if(!Ft.listening)return;const X=W(D),me=he(X);if(me){w(we(me,{replace:!0,force:!0}),X).catch(Ds);return}h=X;const Se=l.value;br&&Pv(eh(Se.fullPath,G.delta),ko()),A(X,Se).catch(_=>nn(_,12)?_:nn(_,2)?(w(we(U(_.to),{force:!0}),X).then(v=>{nn(v,20)&&!G.delta&&G.type===Ws.pop&&s.go(-1,!1)}).catch(Ds),Promise.reject()):(G.delta&&s.go(-G.delta,!1),fe(_,X,Se))).then(_=>{_=_||S(X,Se,!1),_&&(G.delta&&!nn(_,8)?s.go(-G.delta,!1):G.type===Ws.pop&&nn(_,20)&&s.go(-1,!1)),R(X,Se,_)}).catch(Ds)}))}let Rt=vs(),Ue=vs(),ge;function fe(D,J,G){Pt(D);const X=Ue.list();return X.length?X.forEach(me=>me(D,J,G)):console.error(D),Promise.reject(D)}function Et(){return ge&&l.value!==In?Promise.resolve():new Promise((D,J)=>{Rt.add([D,J])})}function Pt(D){return ge||(ge=!D,lt(),Rt.list().forEach(([J,G])=>D?G(D):J()),Rt.reset()),D}function St(D,J,G,X){const{scrollBehavior:me}=n;if(!br||!me)return Promise.resolve();const Se=!G&&kv(eh(D.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return hd().then(()=>me(D,J,Se)).then(_=>_&&Cv(_)).catch(_=>fe(_,D,J))}const Ne=D=>s.go(D);let De;const mn=new Set,Ft={currentRoute:l,listening:!0,addRoute:I,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:O,resolve:W,options:n,push:H,replace:oe,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:Ue.add,isReady:Et,install(D){const J=this;D.component("RouterLink",tE),D.component("RouterView",op),D.config.globalProperties.$router=J,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>or(l)}),br&&!De&&l.value===In&&(De=!0,H(s.location).catch(me=>{}));const G={};for(const me in In)Object.defineProperty(G,me,{get:()=>l.value[me],enumerable:!0});D.provide(Kc,J),D.provide(ip,od(G)),D.provide(Ga,l);const X=D.unmount;mn.add(D),D.unmount=function(){mn.delete(D),mn.size<1&&(h=In,E&&E(),E=null,l.value=In,De=!1,ge=!1),X()}}};function yt(D){return D.reduce((J,G)=>J.then(()=>T(G)),Promise.resolve())}return Ft}function oE(n,e){const t=[],r=[],s=[],i=Math.max(e.matched.length,n.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(n.matched.find(h=>jr(h,c))?r.push(c):t.push(c));const l=n.matched[a];l&&(e.matched.find(h=>jr(h,l))||s.push(l))}return[t,r,s]}const ap=Uc({__name:"App",setup(n){return(e,t)=>($c(),vy(or(op)))}}),aE=()=>{};var gh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},cE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,I=h&63;l||(I=64,a||(m=64)),r.push(t[d],t[p],t[m],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new lE;const m=i<<2|c>>4;if(r.push(m),h!==64){const I=c<<4&240|h>>2;if(r.push(I),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class lE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uE=function(n){const e=cp(n);return lp.encodeByteArray(e,!0)},so=function(n){return uE(n).replace(/\./g,"")},up=function(n){try{return lp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=()=>hE().__FIREBASE_DEFAULTS__,dE=()=>{if(typeof process>"u"||typeof gh>"u")return;const n=gh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},pE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&up(n[1]);return e&&JSON.parse(e)},No=()=>{try{return aE()||fE()||dE()||pE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hp=n=>{var e,t;return(t=(e=No())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},gE=n=>{const e=hp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},fp=()=>{var n;return(n=No())==null?void 0:n.config},dp=n=>{var e;return(e=No())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pp(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[so(JSON.stringify(t)),so(JSON.stringify(a)),""].join(".")}const Vs={};function yE(){const n={prod:[],emulator:[]};for(const e of Object.keys(Vs))Vs[e]?n.emulator.push(e):n.prod.push(e);return n}function vE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let mh=!1;function gp(n,e){if(typeof window>"u"||typeof document>"u"||!Zr(window.location.host)||Vs[n]===e||Vs[n]||mh)return;Vs[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=yE().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,I){m.setAttribute("width","24"),m.setAttribute("id",I),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{mh=!0,a()},m}function d(m,I){m.setAttribute("id",I),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=vE(r),I=t("text"),k=document.getElementById(I)||document.createElement("span"),O=t("learnmore"),x=document.getElementById(O)||document.createElement("a"),W=t("preprendIcon"),U=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const z=m.element;c(z),d(x,O);const H=h();l(U,W),z.append(U,k,x,H),document.body.appendChild(z)}i?(k.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function TE(){var e;const n=(e=No())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function AE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RE(){const n=ct();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function SE(){return!TE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bE(){try{return typeof indexedDB=="object"}catch{return!1}}function CE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="FirebaseError";class gn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=PE,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?kE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new gn(s,c,r)}}function kE(n,e){return n.replace(NE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const NE=/\{\$([^}]+)}/g;function DE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(_h(i)&&_h(a)){if(!dr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function _h(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function OE(n,e){const t=new VE(n,e);return t.subscribe.bind(t)}class VE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ea),s.error===void 0&&(s.error=Ea),s.complete===void 0&&(s.complete=Ea);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ea(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n){return n&&n._delegate?n._delegate:n}class pr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new mE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FE(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LE(n){return n===nr?void 0:n}function FE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ME(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const BE={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},jE=de.INFO,$E={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},qE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=$E[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gc{constructor(e){this.name=e,this._logLevel=jE,this._logHandler=qE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const HE=(n,e)=>e.some(t=>n instanceof t);let yh,vh;function zE(){return yh||(yh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KE(){return vh||(vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mp=new WeakMap,Wa=new WeakMap,_p=new WeakMap,Ta=new WeakMap,Wc=new WeakMap;function GE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(On(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&mp.set(t,n)}).catch(()=>{}),Wc.set(e,n),e}function WE(n){if(Wa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Wa.set(n,e)}let Qa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_p.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return On(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function QE(n){Qa=n(Qa)}function JE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ia(this),e,...t);return _p.set(r,e.sort?e.sort():[e]),On(r)}:KE().includes(n)?function(...e){return n.apply(Ia(this),e),On(mp.get(this))}:function(...e){return On(n.apply(Ia(this),e))}}function YE(n){return typeof n=="function"?JE(n):(n instanceof IDBTransaction&&WE(n),HE(n,zE())?new Proxy(n,Qa):n)}function On(n){if(n instanceof IDBRequest)return GE(n);if(Ta.has(n))return Ta.get(n);const e=YE(n);return e!==n&&(Ta.set(n,e),Wc.set(e,n)),e}const Ia=n=>Wc.get(n);function XE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=On(a);return r&&a.addEventListener("upgradeneeded",l=>{r(On(a.result),l.oldVersion,l.newVersion,On(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const ZE=["get","getKey","getAll","getAllKeys","count"],eT=["put","add","delete","clear"],wa=new Map;function Eh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wa.get(e))return wa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=eT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ZE.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return wa.set(e,i),i}QE(n=>({...n,get:(e,t,r)=>Eh(e,t)||n.get(e,t,r),has:(e,t)=>!!Eh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function nT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ja="@firebase/app",Th="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Gc("@firebase/app"),rT="@firebase/app-compat",sT="@firebase/analytics-compat",iT="@firebase/analytics",oT="@firebase/app-check-compat",aT="@firebase/app-check",cT="@firebase/auth",lT="@firebase/auth-compat",uT="@firebase/database",hT="@firebase/data-connect",fT="@firebase/database-compat",dT="@firebase/functions",pT="@firebase/functions-compat",gT="@firebase/installations",mT="@firebase/installations-compat",_T="@firebase/messaging",yT="@firebase/messaging-compat",vT="@firebase/performance",ET="@firebase/performance-compat",TT="@firebase/remote-config",IT="@firebase/remote-config-compat",wT="@firebase/storage",AT="@firebase/storage-compat",RT="@firebase/firestore",ST="@firebase/ai",bT="@firebase/firestore-compat",CT="firebase",PT="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="[DEFAULT]",kT={[Ja]:"fire-core",[rT]:"fire-core-compat",[iT]:"fire-analytics",[sT]:"fire-analytics-compat",[aT]:"fire-app-check",[oT]:"fire-app-check-compat",[cT]:"fire-auth",[lT]:"fire-auth-compat",[uT]:"fire-rtdb",[hT]:"fire-data-connect",[fT]:"fire-rtdb-compat",[dT]:"fire-fn",[pT]:"fire-fn-compat",[gT]:"fire-iid",[mT]:"fire-iid-compat",[_T]:"fire-fcm",[yT]:"fire-fcm-compat",[vT]:"fire-perf",[ET]:"fire-perf-compat",[TT]:"fire-rc",[IT]:"fire-rc-compat",[wT]:"fire-gcs",[AT]:"fire-gcs-compat",[RT]:"fire-fst",[bT]:"fire-fst-compat",[ST]:"fire-vertex","fire-js":"fire-js",[CT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new Map,NT=new Map,Xa=new Map;function Ih(n,e){try{n.container.addComponent(e)}catch(t){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qr(n){const e=n.name;if(Xa.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,n);for(const t of io.values())Ih(t,n);for(const t of NT.values())Ih(t,n);return!0}function Qc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new si("app","Firebase",DT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=PT;function yp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ya,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Vn.create("bad-app-name",{appName:String(s)});if(t||(t=fp()),!t)throw Vn.create("no-options");const i=io.get(s);if(i){if(dr(t,i.options)&&dr(r,i.config))return i;throw Vn.create("duplicate-app",{appName:s})}const a=new UE(s);for(const l of Xa.values())a.addComponent(l);const c=new OT(t,r,a);return io.set(s,c),c}function vp(n=Ya){const e=io.get(n);if(!e&&n===Ya&&fp())return yp();if(!e)throw Vn.create("no-app",{appName:n});return e}function xn(n,e,t){let r=kT[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}qr(new pr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="firebase-heartbeat-database",xT=1,Qs="firebase-heartbeat-store";let Aa=null;function Ep(){return Aa||(Aa=XE(VT,xT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vn.create("idb-open",{originalErrorMessage:n.message})})),Aa}async function MT(n){try{const t=(await Ep()).transaction(Qs),r=await t.objectStore(Qs).get(Tp(n));return await t.done,r}catch(e){if(e instanceof gn)hn.warn(e.message);else{const t=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(t.message)}}}async function wh(n,e){try{const r=(await Ep()).transaction(Qs,"readwrite");await r.objectStore(Qs).put(e,Tp(n)),await r.done}catch(t){if(t instanceof gn)hn.warn(t.message);else{const r=Vn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});hn.warn(r.message)}}}function Tp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=1024,FT=30;class UT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ah();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>FT){const a=$T(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ah(),{heartbeatsToSend:r,unsentEntries:s}=BT(this._heartbeatsCache.heartbeats),i=so(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return hn.warn(t),""}}}function Ah(){return new Date().toISOString().substring(0,10)}function BT(n,e=LT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Rh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Rh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class jT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bE()?CE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await MT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rh(n){return so(JSON.stringify({version:2,heartbeats:n})).length}function $T(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(n){qr(new pr("platform-logger",e=>new tT(e),"PRIVATE")),qr(new pr("heartbeat",e=>new UT(e),"PRIVATE")),xn(Ja,Th,n),xn(Ja,Th,"esm2020"),xn("fire-js","")}qT("");var Sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mn,Ip;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function T(){}T.prototype=y.prototype,w.D=y.prototype,w.prototype=new T,w.prototype.constructor=w,w.C=function(A,R,S){for(var E=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)E[lt-2]=arguments[lt];return y.prototype[R].apply(A,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(R=0;16>R;++R)A[R]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=w.g[0],T=w.g[1],R=w.g[2];var S=w.g[3],E=y+(S^T&(R^S))+A[0]+3614090360&4294967295;y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[1]+3905402710&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[2]+606105819&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[3]+3250441966&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[4]+4118548399&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[5]+1200080426&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[6]+2821735955&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[7]+4249261313&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[8]+1770035416&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[9]+2336552879&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[10]+4294925233&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[11]+2304563134&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[12]+1804603682&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[13]+4254626195&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[14]+2792965006&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[15]+1236535329&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(R^S&(T^R))+A[1]+4129170786&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[6]+3225465664&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[11]+643717713&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[0]+3921069994&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[5]+3593408605&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[10]+38016083&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[15]+3634488961&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[4]+3889429448&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[9]+568446438&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[14]+3275163606&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[3]+4107603335&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[8]+1163531501&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[13]+2850285829&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[2]+4243563512&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[7]+1735328473&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[12]+2368359562&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(T^R^S)+A[5]+4294588738&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[8]+2272392833&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[11]+1839030562&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[14]+4259657740&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[1]+2763975236&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[4]+1272893353&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[7]+4139469664&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[10]+3200236656&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[13]+681279174&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[0]+3936430074&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[3]+3572445317&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[6]+76029189&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[9]+3654602809&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[12]+3873151461&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[15]+530742520&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[2]+3299628645&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(R^(T|~S))+A[0]+4096336452&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[7]+1126891415&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[14]+2878612391&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[5]+4237533241&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[12]+1700485571&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[3]+2399980690&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[10]+4293915773&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[1]+2240044497&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[8]+1873313359&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[15]+4264355552&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[6]+2734768916&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[13]+1309151649&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[4]+4149444226&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[11]+3174756917&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[2]+718787259&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var T=y-this.blockSize,A=this.B,R=this.h,S=0;S<y;){if(R==0)for(;S<=T;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(A[R++]=w.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<y;)if(A[R++]=w[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var T=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=T&255,T/=256;for(this.u(w),w=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)w[T++]=this.g[y]>>>A&255;return w};function i(w,y){var T=c;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=y(w)}function a(w,y){this.h=y;for(var T=[],A=!0,R=w.length-1;0<=R;R--){var S=w[R]|0;A&&S==y||(T[R]=S,A=!1)}this.g=T}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new a([y|0],0>y?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return x(h(-w));for(var y=[],T=1,A=0;w>=T;A++)y[A]=w/T|0,T*=4294967296;return new a(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return x(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),A=p,R=0;R<w.length;R+=8){var S=Math.min(8,w.length-R),E=parseInt(w.substring(R,R+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(E))):(A=A.j(T),A=A.add(h(E)))}return A}var p=l(0),m=l(1),I=l(16777216);n=a.prototype,n.m=function(){if(O(this))return-x(this).m();for(var w=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);w+=(0<=A?A:4294967296+A)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(O(this))return"-"+x(this).toString(w);for(var y=h(Math.pow(w,6)),T=this,A="";;){var R=H(T,y).g;T=W(T,R.j(y));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(w);if(T=R,k(T))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function O(w){return w.h==-1}n.l=function(w){return w=W(this,w),O(w)?-1:k(w)?0:1};function x(w){for(var y=w.g.length,T=[],A=0;A<y;A++)T[A]=~w.g[A];return new a(T,~w.h).add(m)}n.abs=function(){return O(this)?x(this):this},n.add=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0,R=0;R<=y;R++){var S=A+(this.i(R)&65535)+(w.i(R)&65535),E=(S>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=E>>>16,S&=65535,E&=65535,T[R]=E<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function W(w,y){return w.add(x(y))}n.j=function(w){if(k(this)||k(w))return p;if(O(this))return O(w)?x(this).j(x(w)):x(x(this).j(w));if(O(w))return x(this.j(x(w)));if(0>this.l(I)&&0>w.l(I))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var S=this.i(A)>>>16,E=this.i(A)&65535,lt=w.i(R)>>>16,Rt=w.i(R)&65535;T[2*A+2*R]+=E*Rt,U(T,2*A+2*R),T[2*A+2*R+1]+=S*Rt,U(T,2*A+2*R+1),T[2*A+2*R+1]+=E*lt,U(T,2*A+2*R+1),T[2*A+2*R+2]+=S*lt,U(T,2*A+2*R+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new a(T,0)};function U(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function z(w,y){this.g=w,this.h=y}function H(w,y){if(k(y))throw Error("division by zero");if(k(w))return new z(p,p);if(O(w))return y=H(x(w),y),new z(x(y.g),x(y.h));if(O(y))return y=H(w,x(y)),new z(x(y.g),y.h);if(30<w.g.length){if(O(w)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=y;0>=A.l(w);)T=oe(T),A=oe(A);var R=he(T,1),S=he(A,1);for(A=he(A,2),T=he(T,2);!k(A);){var E=S.add(A);0>=E.l(w)&&(R=R.add(T),S=E),A=he(A,1),T=he(T,1)}return y=W(w,R.j(y)),new z(R,y)}for(R=p;0<=w.l(y);){for(T=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(T),E=S.j(y);O(E)||0<E.l(w);)T-=A,S=h(T),E=S.j(y);k(S)&&(S=m),R=R.add(S),w=W(w,E)}return new z(R,w)}n.A=function(w){return H(this,w).h},n.and=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&w.i(A);return new a(T,this.h&w.h)},n.or=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|w.i(A);return new a(T,this.h|w.h)},n.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^w.i(A);return new a(T,this.h^w.h)};function oe(w){for(var y=w.g.length+1,T=[],A=0;A<y;A++)T[A]=w.i(A)<<1|w.i(A-1)>>>31;return new a(T,w.h)}function he(w,y){var T=y>>5;y%=32;for(var A=w.g.length-T,R=[],S=0;S<A;S++)R[S]=0<y?w.i(S+T)>>>y|w.i(S+T+1)<<32-y:w.i(S+T);return new a(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ip=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Mn=a}).apply(typeof Sh<"u"?Sh:typeof self<"u"?self:typeof window<"u"?window:{});var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wp,Ts,Ap,zi,Za,Rp,Sp,bp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof xi=="object"&&xi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var b=o[g];if(!(b in f))break e;f=f[b]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,b={next:function(){if(!g&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function I(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,b,P){for(var q=Array(arguments.length-2),be=2;be<arguments.length;be++)q[be-2]=arguments[be];return u.prototype[b].apply(g,q)}}function O(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function x(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const b=o.length||0,P=g.length||0;o.length=b+P;for(let q=0;q<P;q++)o[b+q]=g[q]}else o.push(g)}}class W{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var oe=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function he(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function w(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)o[f]=g[f];for(let P=0;P<T.length;P++)f=T[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function R(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Et;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class lt{constructor(){this.h=this.g=null}add(u,f){const g=Rt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Rt=new W(()=>new Ue,o=>o.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,fe=!1,Et=new lt,Pt=()=>{const o=c.Promise.resolve(void 0);ge=()=>{o.then(St)}};var St=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Rt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}fe=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function De(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var mn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o}();function Ft(o,u){if(De.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{H(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:yt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ft.aa.h.call(this)}}k(Ft,De);var yt={2:"touch",3:"pen",4:"mouse"};Ft.prototype.h=function(){Ft.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),J=0;function G(o,u,f,g,b){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=b,this.key=++J,this.da=this.fa=!1}function X(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function me(o){this.src=o,this.g={},this.h=0}me.prototype.add=function(o,u,f,g,b){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var q=_(o,u,g,b);return-1<q?(u=o[q],f||(u.fa=!1)):(u=new G(u,this.src,P,!!g,b),u.fa=f,o.push(u)),u};function Se(o,u){var f=u.type;if(f in o.g){var g=o.g[f],b=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=b)&&Array.prototype.splice.call(g,b,1),P&&(X(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function _(o,u,f,g){for(var b=0;b<o.length;++b){var P=o[b];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return b}return-1}var v="closure_lm_"+(1e6*Math.random()|0),C={};function M(o,u,f,g,b){if(Array.isArray(u)){for(var P=0;P<u.length;P++)M(o,u[P],f,g,b);return null}return f=ee(f),o&&o[D]?o.K(u,f,h(g)?!!g.capture:!!g,b):N(o,u,f,!1,g,b)}function N(o,u,f,g,b,P){if(!u)throw Error("Invalid event type");var q=h(b)?!!b.capture:!!b,be=ne(o);if(be||(o[v]=be=new me(o)),f=be.add(u,f,g,q,P),f.proxy)return f;if(g=L(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)mn||(b=q),b===void 0&&(b=!1),o.addEventListener(u.toString(),g,b);else if(o.attachEvent)o.attachEvent(B(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function L(){function o(f){return u.call(o.src,o.listener,f)}const u=F;return o}function K(o,u,f,g,b){if(Array.isArray(u))for(var P=0;P<u.length;P++)K(o,u[P],f,g,b);else g=h(g)?!!g.capture:!!g,f=ee(f),o&&o[D]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=_(P,f,g,b),-1<f&&(X(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=ne(o))&&(u=o.g[u.toString()],o=-1,u&&(o=_(u,f,g,b)),(f=-1<o?u[o]:null)&&j(f))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[D])Se(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(B(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=ne(u))?(Se(f,o),f.h==0&&(f.src=null,u[v]=null)):X(o)}}}function B(o){return o in C?C[o]:C[o]="on"+o}function F(o,u){if(o.da)o=!0;else{u=new Ft(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&j(o),o=f.call(g,u)}return o}function ne(o){return o=o[v],o instanceof me?o:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(o){return typeof o=="function"?o:(o[Q]||(o[Q]=function(u){return o.handleEvent(u)}),o[Q])}function Z(){Ne.call(this),this.i=new me(this),this.M=this,this.F=null}k(Z,Ne),Z.prototype[D]=!0,Z.prototype.removeEventListener=function(o,u,f,g){K(this,o,u,f,g)};function se(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new De(u,o);else if(u instanceof De)u.target=u.target||o;else{var b=u;u=new De(g,o),A(u,b)}if(b=!0,f)for(var P=f.length-1;0<=P;P--){var q=u.g=f[P];b=Ie(q,g,!0,u)&&b}if(q=u.g=o,b=Ie(q,g,!0,u)&&b,b=Ie(q,g,!1,u)&&b,f)for(P=0;P<f.length;P++)q=u.g=f[P],b=Ie(q,g,!1,u)&&b}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)X(f[g]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},Z.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function Ie(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,P=0;P<u.length;++P){var q=u[P];if(q&&!q.da&&q.capture==f){var be=q.listener,Qe=q.ha||q.src;q.fa&&Se(o.i,q),b=be.call(Qe,g)!==!1&&b}}return b&&!g.defaultPrevented}function Ee(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ze(o){o.g=Ee(()=>{o.g=null,o.i&&(o.i=!1,Ze(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ge extends Ne{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ze(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(o){Ne.call(this),this.h=o,this.g={}}k(We,Ne);var et=[];function _n(o){he(o.g,function(u,f){this.g.hasOwnProperty(f)&&j(u)},o),o.g={}}We.prototype.N=function(){We.aa.N.call(this),_n(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vr=c.JSON.stringify,ut=c.JSON.parse,bt=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Er(){}Er.prototype.h=null;function Nl(o){return o.h||(o.h=o.i())}function Dl(){}var is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ko(){De.call(this,"d")}k(Ko,De);function Go(){De.call(this,"c")}k(Go,De);var Qn={},Ol=null;function pi(){return Ol=Ol||new Z}Qn.La="serverreachability";function Vl(o){De.call(this,Qn.La,o)}k(Vl,De);function os(o){const u=pi();se(u,new Vl(u))}Qn.STAT_EVENT="statevent";function xl(o,u){De.call(this,Qn.STAT_EVENT,o),this.stat=u}k(xl,De);function ht(o){const u=pi();se(u,new xl(u,o))}Qn.Ma="timingevent";function Ml(o,u){De.call(this,Qn.Ma,o),this.size=u}k(Ml,De);function as(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function cs(){this.g=!0}cs.prototype.xa=function(){this.g=!1};function um(o,u,f,g,b,P){o.info(function(){if(o.g)if(P)for(var q="",be=P.split("&"),Qe=0;Qe<be.length;Qe++){var Te=be[Qe].split("=");if(1<Te.length){var tt=Te[0];Te=Te[1];var nt=tt.split("_");q=2<=nt.length&&nt[1]=="type"?q+(tt+"="+Te+"&"):q+(tt+"=redacted&")}}else q=null;else q=P;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+u+`
`+f+`
`+q})}function hm(o,u,f,g,b,P,q){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+u+`
`+f+`
`+P+" "+q})}function Tr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+dm(o,f)+(g?" "+g:"")})}function fm(o,u){o.info(function(){return"TIMEOUT: "+u})}cs.prototype.info=function(){};function dm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var q=1;q<b.length;q++)b[q]=""}}}}return vr(f)}catch{return u}}var gi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ll={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wo;function mi(){}k(mi,Er),mi.prototype.g=function(){return new XMLHttpRequest},mi.prototype.i=function(){return{}},Wo=new mi;function yn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new We(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fl}function Fl(){this.i=null,this.g="",this.h=!1}var Ul={},Qo={};function Jo(o,u,f){o.L=1,o.v=Ei(Zt(u)),o.m=f,o.P=!0,Bl(o,null)}function Bl(o,u){o.F=Date.now(),_i(o),o.A=Zt(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),eu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Fl,o.g=yu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Ge(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(et[0]=b.toString()),b=et);for(var P=0;P<b.length;P++){var q=M(f,b[P],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),os(),um(o.i,o.u,o.A,o.l,o.R,o.m)}yn.prototype.ca=function(o){o=o.target;const u=this.M;u&&en(o)==3?u.j():this.Y(o)},yn.prototype.Y=function(o){try{if(o==this.g)e:{const nt=en(this.g);var u=this.g.Ba();const Ar=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||au(this.g)))){this.J||nt!=4||u==7||(u==8||0>=Ar?os(3):os(2)),Yo(this);var f=this.g.Z();this.X=f;t:if(jl(this)){var g=au(this.g);o="";var b=g.length,P=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),ls(this);var q="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==b-1)});g.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,hm(this.i,this.u,this.A,this.l,this.R,nt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var be,Qe=this.g;if((be=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(be)){var Te=be;break t}}Te=null}if(f=Te)Tr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xo(this,f);else{this.o=!1,this.s=3,ht(12),Jn(this),ls(this);break e}}if(this.P){f=!0;let kt;for(;!this.J&&this.C<q.length;)if(kt=pm(this,q),kt==Qo){nt==4&&(this.s=4,ht(14),f=!1),Tr(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Ul){this.s=4,ht(15),Tr(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else Tr(this.i,this.l,kt,null),Xo(this,kt);if(jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||q.length!=0||this.h.h||(this.s=1,ht(16),f=!1),this.o=this.o&&f,!f)Tr(this.i,this.l,q,"[Invalid Chunked Response]"),Jn(this),ls(this);else if(0<q.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),sa(tt),tt.M=!0,ht(11))}}else Tr(this.i,this.l,q,null),Xo(this,q);nt==4&&Jn(this),this.o&&!this.J&&(nt==4?pu(this.j,this):(this.o=!1,_i(this)))}else Nm(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Jn(this),ls(this)}}}catch{}finally{}};function jl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function pm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Qo:(f=Number(u.substring(f,g)),isNaN(f)?Ul:(g+=1,g+f>u.length?Qo:(u=u.slice(g,g+f),o.C=g+f,u)))}yn.prototype.cancel=function(){this.J=!0,Jn(this)};function _i(o){o.S=Date.now()+o.I,$l(o,o.I)}function $l(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=as(m(o.ba,o),u)}function Yo(o){o.B&&(c.clearTimeout(o.B),o.B=null)}yn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(fm(this.i,this.A),this.L!=2&&(os(),ht(17)),Jn(this),this.s=2,ls(this)):$l(this,this.S-o)};function ls(o){o.j.G==0||o.J||pu(o.j,o)}function Jn(o){Yo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,_n(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Xo(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Zo(f.h,o))){if(!o.K&&Zo(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Si(f),Ai(f);else break e;ra(f),ht(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=as(m(f.Za,f),6e3));if(1>=zl(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Xn(f,11)}else if((o.K||f.g==o)&&Si(f),!U(u))for(b=f.Da.g.parse(u),u=0;u<b.length;u++){let Te=b[u];if(f.T=Te[0],Te=Te[1],f.G==2)if(Te[0]=="c"){f.K=Te[1],f.ia=Te[2];const tt=Te[3];tt!=null&&(f.la=tt,f.j.info("VER="+f.la));const nt=Te[4];nt!=null&&(f.Aa=nt,f.j.info("SVER="+f.Aa));const Ar=Te[5];Ar!=null&&typeof Ar=="number"&&0<Ar&&(g=1.5*Ar,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const kt=o.g;if(kt){const Ci=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ci){var P=g.h;P.g||Ci.indexOf("spdy")==-1&&Ci.indexOf("quic")==-1&&Ci.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ea(P,P.h),P.h=null))}if(g.D){const ia=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;ia&&(g.ya=ia,ke(g.I,g.D,ia))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var q=o;if(g.qa=_u(g,g.J?g.ia:null,g.W),q.K){Kl(g.h,q);var be=q,Qe=g.L;Qe&&(be.I=Qe),be.B&&(Yo(be),_i(be)),g.g=q}else fu(g);0<f.i.length&&Ri(f)}else Te[0]!="stop"&&Te[0]!="close"||Xn(f,7);else f.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Xn(f,7):na(f):Te[0]!="noop"&&f.l&&f.l.ta(Te),f.v=0)}}os(4)}catch{}}var gm=class{constructor(o,u){this.g=o,this.map=u}};function ql(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function zl(o){return o.h?1:o.g?o.g.size:0}function Zo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ea(o,u){o.g?o.g.add(u):o.h=u}function Kl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ql.prototype.cancel=function(){if(this.i=Gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Gl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return O(o.i)}function mm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function _m(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Wl(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=_m(o),g=mm(o),b=g.length,P=0;P<b;P++)u.call(void 0,g[P],f&&f[P],o)}var Ql=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ym(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),b=null;if(0<=g){var P=o[f].substring(0,g);b=o[f].substring(g+1)}else P=o[f];u(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Yn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Yn){this.h=o.h,yi(this,o.j),this.o=o.o,this.g=o.g,vi(this,o.s),this.l=o.l;var u=o.i,f=new fs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Jl(this,f),this.m=o.m}else o&&(u=String(o).match(Ql))?(this.h=!1,yi(this,u[1]||"",!0),this.o=us(u[2]||""),this.g=us(u[3]||"",!0),vi(this,u[4]),this.l=us(u[5]||"",!0),Jl(this,u[6]||"",!0),this.m=us(u[7]||"")):(this.h=!1,this.i=new fs(null,this.h))}Yn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(hs(u,Yl,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(hs(u,Yl,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(hs(f,f.charAt(0)=="/"?Tm:Em,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",hs(f,wm)),o.join("")};function Zt(o){return new Yn(o)}function yi(o,u,f){o.j=f?us(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function vi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Jl(o,u,f){u instanceof fs?(o.i=u,Am(o.i,o.h)):(f||(u=hs(u,Im)),o.i=new fs(u,o.h))}function ke(o,u,f){o.i.set(u,f)}function Ei(o){return ke(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function us(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,vm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function vm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Yl=/[#\/\?@]/g,Em=/[#\?:]/g,Tm=/[#\?]/g,Im=/[#\?@]/g,wm=/#/g;function fs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function vn(o){o.g||(o.g=new Map,o.h=0,o.i&&ym(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=fs.prototype,n.add=function(o,u){vn(this),this.i=null,o=Ir(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Xl(o,u){vn(o),u=Ir(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Zl(o,u){return vn(o),u=Ir(o,u),o.g.has(u)}n.forEach=function(o,u){vn(this),this.g.forEach(function(f,g){f.forEach(function(b){o.call(u,b,g,this)},this)},this)},n.na=function(){vn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const b=o[g];for(let P=0;P<b.length;P++)f.push(u[g])}return f},n.V=function(o){vn(this);let u=[];if(typeof o=="string")Zl(this,o)&&(u=u.concat(this.g.get(Ir(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return vn(this),this.i=null,o=Ir(this,o),Zl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function eu(o,u,f){Xl(o,u),0<f.length&&(o.i=null,o.g.set(Ir(o,u),O(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var b=P;q[g]!==""&&(b+="="+encodeURIComponent(String(q[g]))),o.push(b)}}return this.i=o.join("&")};function Ir(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Am(o,u){u&&!o.j&&(vn(o),o.i=null,o.g.forEach(function(f,g){var b=g.toLowerCase();g!=b&&(Xl(this,g),eu(this,b,f))},o)),o.j=u}function Rm(o,u){const f=new cs;if(c.Image){const g=new Image;g.onload=I(En,f,"TestLoadImage: loaded",!0,u,g),g.onerror=I(En,f,"TestLoadImage: error",!1,u,g),g.onabort=I(En,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=I(En,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Sm(o,u){const f=new cs,g=new AbortController,b=setTimeout(()=>{g.abort(),En(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(b),P.ok?En(f,"TestPingServer: ok",!0,u):En(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),En(f,"TestPingServer: error",!1,u)})}function En(o,u,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function bm(){this.g=new bt}function Cm(o,u,f){const g=f||"";try{Wl(o,function(b,P){let q=b;h(b)&&(q=vr(b)),u.push(g+P+"="+encodeURIComponent(q))})}catch(b){throw u.push(g+"type="+encodeURIComponent("_badmap")),b}}function Ti(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Ti,Er),Ti.prototype.g=function(){return new Ii(this.l,this.j)},Ti.prototype.i=function(o){return function(){return o}}({});function Ii(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ii,Z),n=Ii.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ps(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ds(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function tu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ds(this):ps(this),this.readyState==3&&tu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ds(this))},n.Qa=function(o){this.g&&(this.response=o,ds(this))},n.ga=function(){this.g&&ds(this)};function ds(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ps(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function ps(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function nu(o){let u="";return he(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function ta(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=nu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):ke(o,u,f))}function xe(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(xe,Z);var Pm=/^https?$/i,km=["POST","PUT"];n=xe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wo.g(),this.v=this.o?Nl(this.o):Nl(Wo),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){ru(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(km,u,void 0))||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,q]of f)this.g.setRequestHeader(P,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ou(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){ru(this,P)}};function ru(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,su(o),wi(o)}function su(o){o.A||(o.A=!0,se(o,"complete"),se(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,se(this,"complete"),se(this,"abort"),wi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wi(this,!0)),xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?iu(this):this.bb())},n.bb=function(){iu(this)};function iu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||en(o)!=4||o.Z()!=2)){if(o.u&&en(o)==4)Ee(o.Ea,0,o);else if(se(o,"readystatechange"),en(o)==4){o.h=!1;try{const q=o.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=q===0){var b=String(o.D).match(Ql)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),g=!Pm.test(b?b.toLowerCase():"")}f=g}if(f)se(o,"complete"),se(o,"success");else{o.m=6;try{var P=2<en(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",su(o)}}finally{wi(o)}}}}function wi(o,u){if(o.g){ou(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||se(o,"ready");try{f.onreadystatechange=g}catch{}}}function ou(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function en(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ut(u)}};function au(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Nm(o){const u={};o=(o.g&&2<=en(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(U(o[g]))continue;var f=R(o[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[b]||[];u[b]=P,P.push(f)}w(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function cu(o){this.Aa=0,this.i=[],this.j=new cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gs("baseRetryDelayMs",5e3,o),this.cb=gs("retryDelaySeedMs",1e4,o),this.Wa=gs("forwardChannelMaxRetries",2,o),this.wa=gs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ql(o&&o.concurrentRequestLimit),this.Da=new bm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=cu.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){ht(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=_u(this,null,this.W),Ri(this)};function na(o){if(lu(o),o.G==3){var u=o.U++,f=Zt(o.I);if(ke(f,"SID",o.K),ke(f,"RID",u),ke(f,"TYPE","terminate"),ms(o,f),u=new yn(o,o.j,u),u.L=2,u.v=Ei(Zt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=yu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),_i(u)}mu(o)}function Ai(o){o.g&&(sa(o),o.g.cancel(),o.g=null)}function lu(o){Ai(o),o.u&&(c.clearTimeout(o.u),o.u=null),Si(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ri(o){if(!Hl(o.h)&&!o.s){o.s=!0;var u=o.Ga;ge||Pt(),fe||(ge(),fe=!0),Et.add(u,o),o.B=0}}function Dm(o,u){return zl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=as(m(o.Ga,o,u),gu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new yn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=y(P),A(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=hu(this,b,u),f=Zt(this.I),ke(f,"RID",o),ke(f,"CVER",22),this.D&&ke(f,"X-HTTP-Session-Id",this.D),ms(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(nu(P)))+"&"+u:this.m&&ta(f,this.m,P)),ea(this.h,b),this.Ua&&ke(f,"TYPE","init"),this.P?(ke(f,"$req",u),ke(f,"SID","null"),b.T=!0,Jo(b,f,null)):Jo(b,f,u),this.G=2}}else this.G==3&&(o?uu(this,o):this.i.length==0||Hl(this.h)||uu(this))};function uu(o,u){var f;u?f=u.l:f=o.U++;const g=Zt(o.I);ke(g,"SID",o.K),ke(g,"RID",f),ke(g,"AID",o.T),ms(o,g),o.m&&o.o&&ta(g,o.m,o.o),f=new yn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=hu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ea(o.h,f),Jo(f,g,u)}function ms(o,u){o.H&&he(o.H,function(f,g){ke(u,g,f)}),o.l&&Wl({},function(f,g){ke(u,g,f)})}function hu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var b=o.i;let P=-1;for(;;){const q=["count="+f];P==-1?0<f?(P=b[0].g,q.push("ofs="+P)):P=0:q.push("ofs="+P);let be=!0;for(let Qe=0;Qe<f;Qe++){let Te=b[Qe].g;const tt=b[Qe].map;if(Te-=P,0>Te)P=Math.max(0,b[Qe].g-100),be=!1;else try{Cm(tt,q,"req"+Te+"_")}catch{g&&g(tt)}}if(be){g=q.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function fu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ge||Pt(),fe||(ge(),fe=!0),Et.add(u,o),o.v=0}}function ra(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=as(m(o.Fa,o),gu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,du(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=as(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),Ai(this),du(this))};function sa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function du(o){o.g=new yn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Zt(o.qa);ke(u,"RID","rpc"),ke(u,"SID",o.K),ke(u,"AID",o.T),ke(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ke(u,"TO",o.ja),ke(u,"TYPE","xmlhttp"),ms(o,u),o.m&&o.o&&ta(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ei(Zt(u)),f.m=null,f.P=!0,Bl(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Ai(this),ra(this),ht(19))};function Si(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function pu(o,u){var f=null;if(o.g==u){Si(o),sa(o),o.g=null;var g=2}else if(Zo(o.h,u))f=u.D,Kl(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;g=pi(),se(g,new Ml(g,f)),Ri(o)}else fu(o);else if(b=u.s,b==3||b==0&&0<u.X||!(g==1&&Dm(o,u)||g==2&&ra(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),b){case 1:Xn(o,5);break;case 4:Xn(o,10);break;case 3:Xn(o,6);break;default:Xn(o,2)}}}function gu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Xn(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const b=!g;g=new Yn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||yi(g,"https"),Ei(g),b?Rm(g.toString(),f):Sm(g.toString(),f)}else ht(2);o.G=0,o.l&&o.l.sa(u),mu(o),lu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function mu(o){if(o.G=0,o.ka=[],o.l){const u=Gl(o.h);(u.length!=0||o.i.length!=0)&&(x(o.ka,u),x(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function _u(o,u,f){var g=f instanceof Yn?Zt(f):new Yn(f);if(g.g!="")u&&(g.g=u+"."+g.g),vi(g,g.s);else{var b=c.location;g=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var P=new Yn(null);g&&yi(P,g),u&&(P.g=u),b&&vi(P,b),f&&(P.l=f),g=P}return f=o.D,u=o.ya,f&&u&&ke(g,f,u),ke(g,"VER",o.la),ms(o,g),g}function yu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new xe(new Ti({eb:f})):new xe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function vu(){}n=vu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function bi(){}bi.prototype.g=function(o,u){return new Tt(o,u)};function Tt(o,u){Z.call(this),this.g=new cu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!U(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new wr(this)}k(Tt,Z),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){na(this.g)},Tt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=vr(o),o=f);u.i.push(new gm(u.Ya++,o)),u.G==3&&Ri(u)},Tt.prototype.N=function(){this.g.l=null,delete this.j,na(this.g),delete this.g,Tt.aa.N.call(this)};function Eu(o){Ko.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Eu,Ko);function Tu(){Go.call(this),this.status=1}k(Tu,Go);function wr(o){this.g=o}k(wr,vu),wr.prototype.ua=function(){se(this.g,"a")},wr.prototype.ta=function(o){se(this.g,new Eu(o))},wr.prototype.sa=function(o){se(this.g,new Tu)},wr.prototype.ra=function(){se(this.g,"b")},bi.prototype.createWebChannel=bi.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,bp=function(){return new bi},Sp=function(){return pi()},Rp=Qn,Za={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gi.NO_ERROR=0,gi.TIMEOUT=8,gi.HTTP_ERROR=6,zi=gi,Ll.COMPLETE="complete",Ap=Ll,Dl.EventType=is,is.OPEN="a",is.CLOSE="b",is.ERROR="c",is.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Ts=Dl,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,wp=xe}).apply(typeof xi<"u"?xi:typeof self<"u"?self:typeof window<"u"?window:{});const bh="@firebase/firestore",Ch="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Gc("@firebase/firestore");function Cr(){return gr.logLevel}function Y(n,...e){if(gr.logLevel<=de.DEBUG){const t=e.map(Jc);gr.debug(`Firestore (${ts}): ${n}`,...t)}}function fn(n,...e){if(gr.logLevel<=de.ERROR){const t=e.map(Jc);gr.error(`Firestore (${ts}): ${n}`,...t)}}function Hr(n,...e){if(gr.logLevel<=de.WARN){const t=e.map(Jc);gr.warn(`Firestore (${ts}): ${n}`,...t)}}function Jc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Cp(n,r,t)}function Cp(n,e,t){let r=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw fn(r),new Error(r)}function Ve(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Cp(e,s,r)}function ye(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(st.UNAUTHENTICATED))}shutdown(){}}class zT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class KT{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ve(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ar,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ar)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string",31837,{l:r}),new Pp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class GT{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class WT{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new GT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ph{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ve(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ph(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ve(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ph(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=JT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function pe(n,e){return n<e?-1:n>e?1:0}function ec(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Ra(s)===Ra(i)?pe(s,i):Ra(s)?1:-1}return pe(n.length,e.length)}const YT=55296,XT=57343;function Ra(n){const e=n.charCodeAt(0);return e>=YT&&e<=XT}function zr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="__name__";class jt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ce(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ce(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=jt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return pe(e.length,t.length)}static compareSegments(e,t){const r=jt.isNumericId(e),s=jt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?jt.extractNumericId(e).compare(jt.extractNumericId(t)):ec(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mn.fromString(e.substring(4,e.length-2))}}class Oe extends jt{construct(e,t,r){return new Oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Oe(t)}static emptyPath(){return new Oe([])}}const ZT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends jt{construct(e,t,r){return new mt(e,t,r)}static isValidIdentifier(e){return ZT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kh}static keyField(){return new mt([kh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(t)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Oe.fromString(e))}static fromName(e){return new re(Oe.fromString(e).popFirst(5))}static empty(){return new re(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(n,e,t){if(!t)throw new te($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tI(n,e,t,r){if(e===!0&&r===!0)throw new te($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nh(n){if(!re.isDocumentKey(n))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nI(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function rI(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce(12329,{type:typeof n})}function tc(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=rI(n);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n,e){const t={typeString:n};return e&&(t.value=e),t}function oi(n,e){if(!nI(n))throw new te($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new te($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=-62135596800,Oh=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Oh);return new je(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Dh)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Oh}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oi(e,je._jsonSchema))return new je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}je._jsonSchemaVersion="firestore/timestamp/1.0",je._jsonSchema={type:$e("string",je._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new je(0,0))}static max(){return new ae(new je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=-1;function sI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new je(t+1,0):new je(t,r));return new Bn(s,re.empty(),e)}function iI(n){return new Bn(n.readTime,n.key,Js)}class Bn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Bn(ae.min(),re.empty(),Js)}static max(){return new Bn(ae.max(),re.empty(),Js)}}function oI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=re.comparator(n.documentKey,e.documentKey),t!==0?t:pe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==aI)throw n;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(d=>{a[h]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function lI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ns(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Oo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=-1;function Vo(n){return n==null}function nc(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="";function hI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Vh(e)),e=fI(n.get(t),e);return Vh(e)}function fI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case kp:t+="";break;default:t+=i}}return t}function Vh(n){return n+kp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ai(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||Je.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mi(this.root,e,this.comparator,!0)}}class Mi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mh(this.data.getIterator())}getIteratorFrom(e){return new Mh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new He(this.comparator);return t.data=e,t}}class Mh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new Nn([])}unionWith(e){let t=new He(mt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Nn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Np("Invalid base64 string: "+i):i}}(e);return new Xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const pI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jn(n){if(Ve(!!n,39018),typeof n=="string"){let e=0;const t=pI.exec(n);if(Ve(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(n.seconds),nanos:Me(n.nanos)}}function Me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $n(n){return typeof n=="string"?Xe.fromBase64String(n):Xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="server_timestamp",Op="__type__",Vp="__previous_value__",xp="__local_write_time__";function Xc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Op])==null?void 0:r.stringValue)===Dp}function xo(n){const e=n.mapValue.fields[Vp];return Xc(e)?xo(e):e}function Ys(n){const e=jn(n.mapValue.fields[xp].timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,t,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const oo="(default)";class Xs{constructor(e,t){this.projectId=e,this.database=t||oo}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database===oo}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="__type__",Mp="__max__",Li={mapValue:{fields:{__type__:{stringValue:Mp}}}},_I="__vector__",rc="value";function qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xc(n)?4:vI(n)?9007199254740991:yI(n)?10:11:ce(28295,{value:n})}function Jt(n,e){if(n===e)return!0;const t=qn(n);if(t!==qn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ys(n).isEqual(Ys(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=jn(s.timestampValue),c=jn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return $n(s.bytesValue).isEqual($n(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Me(s.doubleValue),c=Me(i.doubleValue);return a===c?nc(a)===nc(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return zr(n.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(xh(a)!==xh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Jt(a[l],c[l])))return!1;return!0}(n,e);default:return ce(52216,{left:n})}}function Zs(n,e){return(n.values||[]).find(t=>Jt(t,e))!==void 0}function Kr(n,e){if(n===e)return 0;const t=qn(n),r=qn(e);if(t!==r)return pe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return pe(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Me(i.integerValue||i.doubleValue),l=Me(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Lh(n.timestampValue,e.timestampValue);case 4:return Lh(Ys(n),Ys(e));case 5:return ec(n.stringValue,e.stringValue);case 6:return function(i,a){const c=$n(i),l=$n(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=pe(c[h],l[h]);if(d!==0)return d}return pe(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=pe(Me(i.latitude),Me(a.latitude));return c!==0?c:pe(Me(i.longitude),Me(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Fh(n.arrayValue,e.arrayValue);case 10:return function(i,a){var m,I,k,O;const c=i.fields||{},l=a.fields||{},h=(m=c[rc])==null?void 0:m.arrayValue,d=(I=l[rc])==null?void 0:I.arrayValue,p=pe(((k=h==null?void 0:h.values)==null?void 0:k.length)||0,((O=d==null?void 0:d.values)==null?void 0:O.length)||0);return p!==0?p:Fh(h,d)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Li.mapValue&&a===Li.mapValue)return 0;if(i===Li.mapValue)return 1;if(a===Li.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=ec(l[p],d[p]);if(m!==0)return m;const I=Kr(c[l[p]],h[d[p]]);if(I!==0)return I}return pe(l.length,d.length)}(n.mapValue,e.mapValue);default:throw ce(23264,{he:t})}}function Lh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return pe(n,e);const t=jn(n),r=jn(e),s=pe(t.seconds,r.seconds);return s!==0?s:pe(t.nanos,r.nanos)}function Fh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Kr(t[s],r[s]);if(i)return i}return pe(t.length,r.length)}function Gr(n){return sc(n)}function sc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=jn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return $n(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return re.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=sc(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${sc(t.fields[a])}`;return s+"}"}(n.mapValue):ce(61005,{value:n})}function Ki(n){switch(qn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xo(n);return e?16+Ki(e):16;case 5:return 2*n.stringValue.length;case 6:return $n(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ki(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ai(r.fields,(i,a)=>{s+=i.length+Ki(a)}),s}(n.mapValue);default:throw ce(13486,{value:n})}}function ic(n){return!!n&&"integerValue"in n}function Zc(n){return!!n&&"arrayValue"in n}function Uh(n){return!!n&&"nullValue"in n}function Bh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Sa(n){return!!n&&"mapValue"in n}function yI(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[mI])==null?void 0:r.stringValue)===_I}function xs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ai(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=xs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xs(n.arrayValue.values[t]);return e}return{...n}}function vI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Mp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Sa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xs(t)}setAll(e){let t=mt.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=xs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Sa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ai(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qt(xs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new it(e,0,ae.min(),ae.min(),ae.min(),qt.empty(),0)}static newFoundDocument(e,t,r,s){return new it(e,1,t,ae.min(),r,s,0)}static newNoDocument(e,t){return new it(e,2,t,ae.min(),ae.min(),qt.empty(),0)}static newUnknownDocument(e,t){return new it(e,3,t,ae.min(),ae.min(),qt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.position=e,this.inclusive=t}}function jh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(a.referenceValue),t.key):r=Kr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $h(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Jt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t="asc"){this.field=e,this.dir=t}}function EI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{}class qe extends Lp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new II(e,t,r):t==="array-contains"?new RI(e,r):t==="in"?new SI(e,r):t==="not-in"?new bI(e,r):t==="array-contains-any"?new CI(e,r):new qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new wI(e,r):new AI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Kr(t,this.value)):t!==null&&qn(this.value)===qn(t)&&this.matchesComparison(Kr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends Lp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Yt(e,t)}matches(e){return Fp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Fp(n){return n.op==="and"}function Up(n){return TI(n)&&Fp(n)}function TI(n){for(const e of n.filters)if(e instanceof Yt)return!1;return!0}function oc(n){if(n instanceof qe)return n.field.canonicalString()+n.op.toString()+Gr(n.value);if(Up(n))return n.filters.map(e=>oc(e)).join(",");{const e=n.filters.map(t=>oc(t)).join(",");return`${n.op}(${e})`}}function Bp(n,e){return n instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&Jt(r.value,s.value)}(n,e):n instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Bp(a,s.filters[c]),!0):!1}(n,e):void ce(19439)}function jp(n){return n instanceof qe?function(t){return`${t.field.canonicalString()} ${t.op} ${Gr(t.value)}`}(n):n instanceof Yt?function(t){return t.op.toString()+" {"+t.getFilters().map(jp).join(" ,")+"}"}(n):"Filter"}class II extends qe{constructor(e,t,r){super(e,t,r),this.key=re.fromName(r.referenceValue)}matches(e){const t=re.comparator(e.key,this.key);return this.matchesComparison(t)}}class wI extends qe{constructor(e,t){super(e,"in",t),this.keys=$p("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class AI extends qe{constructor(e,t){super(e,"not-in",t),this.keys=$p("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $p(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>re.fromName(r.referenceValue))}class RI extends qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zc(t)&&Zs(t.arrayValue,this.value)}}class SI extends qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zs(this.value.arrayValue,t)}}class bI extends qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Zs(this.value.arrayValue,t)}}class CI extends qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Zs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function qh(n,e=null,t=[],r=[],s=null,i=null,a=null){return new PI(n,e,t,r,s,i,a)}function el(n){const e=ye(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>oc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Gr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Gr(r)).join(",")),e.Te=t}return e.Te}function tl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Bp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$h(n.startAt,e.startAt)&&$h(n.endAt,e.endAt)}function ac(n){return re.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function kI(n,e,t,r,s,i,a,c){return new Mo(n,e,t,r,s,i,a,c)}function nl(n){return new Mo(n)}function Hh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function NI(n){return n.collectionGroup!==null}function Ms(n){const e=ye(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new He(mt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new co(i,r))}),t.has(mt.keyField().canonicalString())||e.Ie.push(new co(mt.keyField(),r))}return e.Ie}function Gt(n){const e=ye(n);return e.Ee||(e.Ee=DI(e,Ms(n))),e.Ee}function DI(n,e){if(n.limitType==="F")return qh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new co(s.field,i)});const t=n.endAt?new ao(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ao(n.startAt.position,n.startAt.inclusive):null;return qh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function cc(n,e,t){return new Mo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Lo(n,e){return tl(Gt(n),Gt(e))&&n.limitType===e.limitType}function qp(n){return`${el(Gt(n))}|lt:${n.limitType}`}function Pr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>jp(s)).join(", ")}]`),Vo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Gr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Gr(s)).join(",")),`Target(${r})`}(Gt(n))}; limitType=${n.limitType})`}function Fo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ms(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=jh(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,Ms(r),s)||r.endAt&&!function(a,c,l){const h=jh(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,Ms(r),s))}(n,e)}function OI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Hp(n){return(e,t)=>{let r=!1;for(const s of Ms(n)){const i=VI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function VI(n,e,t){const r=n.field.isKeyField()?re.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Kr(l,h):ce(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ai(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return dI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=new Fe(re.comparator);function Hn(){return xI}const zp=new Fe(re.comparator);function Is(...n){let e=zp;for(const t of n)e=e.insert(t.key,t);return e}function MI(n){let e=zp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function rr(){return Ls()}function Kp(){return Ls()}function Ls(){return new yr(n=>n.toString(),(n,e)=>n.isEqual(e))}const LI=new He(re.comparator);function ve(...n){let e=LI;for(const t of n)e=e.add(t);return e}const FI=new He(pe);function UI(){return FI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nc(e)?"-0":e}}function jI(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this._=void 0}}function $I(n,e,t){return n instanceof lc?function(s,i){const a={fields:{[Op]:{stringValue:Dp},[xp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xc(i)&&(i=xo(i)),i&&(a.fields[Vp]=i),{mapValue:a}}(t,e):n instanceof lo?Gp(n,e):n instanceof uo?Wp(n,e):function(s,i){const a=HI(s,i),c=zh(a)+zh(s.Ae);return ic(a)&&ic(s.Ae)?jI(c):BI(s.serializer,c)}(n,e)}function qI(n,e,t){return n instanceof lo?Gp(n,e):n instanceof uo?Wp(n,e):t}function HI(n,e){return n instanceof uc?function(r){return ic(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class lc extends Uo{}class lo extends Uo{constructor(e){super(),this.elements=e}}function Gp(n,e){const t=Qp(e);for(const r of n.elements)t.some(s=>Jt(s,r))||t.push(r);return{arrayValue:{values:t}}}class uo extends Uo{constructor(e){super(),this.elements=e}}function Wp(n,e){let t=Qp(e);for(const r of n.elements)t=t.filter(s=>!Jt(s,r));return{arrayValue:{values:t}}}class uc extends Uo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function zh(n){return Me(n.integerValue||n.doubleValue)}function Qp(n){return Zc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zI(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof lo&&s instanceof lo||r instanceof uo&&s instanceof uo?zr(r.elements,s.elements,Jt):r instanceof uc&&s instanceof uc?Jt(r.Ae,s.Ae):r instanceof lc&&s instanceof lc}(n.transform,e.transform)}class cr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cr}static exists(e){return new cr(void 0,e)}static updateTime(e){return new cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class rl{}function Jp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new GI(n.key,cr.none()):new sl(n.key,n.data,cr.none());{const t=n.data,r=qt.empty();let s=new He(mt.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Bo(n.key,r,new Nn(s.toArray()),cr.none())}}function KI(n,e,t){n instanceof sl?function(s,i,a){const c=s.value.clone(),l=Gh(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Bo?function(s,i,a){if(!Gi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Gh(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Yp(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Fs(n,e,t,r){return n instanceof sl?function(i,a,c,l){if(!Gi(i.precondition,a))return c;const h=i.value.clone(),d=Wh(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Bo?function(i,a,c,l){if(!Gi(i.precondition,a))return c;const h=Wh(i.fieldTransforms,l,a),d=a.data;return d.setAll(Yp(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,c){return Gi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Kh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zr(r,s,(i,a)=>zI(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class sl extends rl{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bo extends rl{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Gh(n,e,t){const r=new Map;Ve(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,qI(a,c,t[s]))}return r}function Wh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,$I(i,a,e))}return r}class GI extends rl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&KI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Fs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Fs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Kp();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Jp(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ve())}isEqual(e){return this.batchId===e.batchId&&zr(this.mutations,e.mutations,(t,r)=>Kh(t,r))&&zr(this.baseMutations,e.baseMutations,(t,r)=>Kh(t,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,_e;function Xp(n){if(n===void 0)return fn("GRPC error has no .code"),$.UNKNOWN;switch(n){case Be.OK:return $.OK;case Be.CANCELLED:return $.CANCELLED;case Be.UNKNOWN:return $.UNKNOWN;case Be.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Be.INTERNAL:return $.INTERNAL;case Be.UNAVAILABLE:return $.UNAVAILABLE;case Be.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Be.NOT_FOUND:return $.NOT_FOUND;case Be.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Be.ABORTED:return $.ABORTED;case Be.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Be.DATA_LOSS:return $.DATA_LOSS;default:return ce(39323,{code:n})}}(_e=Be||(Be={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=new Mn([4294967295,4294967295],0);function Qh(n){const e=YI().encode(n),t=new Ip;return t.update(e),new Uint8Array(t.digest())}function Jh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Mn([t,r],0),new Mn([s,i],0)]}class il{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ws(`Invalid padding: ${t}`);if(r<0)throw new ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ws(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ws(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Mn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Mn.fromNumber(r)));return s.compare(XI)===1&&(s=new Mn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Qh(e),[r,s]=Jh(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new il(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Qh(e),[r,s]=Jh(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ci.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new jo(ae.min(),s,new Fe(pe),Hn(),ve())}}class ci{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ci(r,t,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Zp{constructor(e,t){this.targetId=e,this.Ce=t}}class eg{constructor(e,t,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Yh{constructor(){this.ve=0,this.Fe=Xh(),this.Me=Xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ve(),t=ve(),r=ve();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}}),new ci(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Xh()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ZI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hn(),this.Je=Fi(),this.He=Fi(),this.Ye=new Fe(pe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(ac(i))if(r===0){const a=new re(i.path);this.et(t,a,it.newNoDocument(a,ae.min()))}else Ve(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=$n(r).toUint8Array()}catch(l){if(l instanceof Np)return Hr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new il(a,s,i)}catch(l){return Hr(l instanceof ws?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&ac(c.target)){const l=new re(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,it.newNoDocument(l,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=ve();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new jo(e,t,this.Ye,this.je,r);return this.je=Hn(),this.Je=Fi(),this.He=Fi(),this.Ye=new Fe(pe),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Yh,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new He(pe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new He(pe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||Y("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Yh),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Fi(){return new Fe(re.comparator)}function Xh(){return new Fe(re.comparator)}const ew={asc:"ASCENDING",desc:"DESCENDING"},tw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nw={and:"AND",or:"OR"};class rw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hc(n,e){return n.useProto3Json||Vo(e)?e:{value:e}}function sw(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xr(n){return Ve(!!n,49232),ae.fromTimestamp(function(t){const r=jn(t);return new je(r.seconds,r.nanos)}(n))}function ow(n,e){return fc(n,e).canonicalString()}function fc(n,e){const t=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function tg(n){const e=Oe.fromString(n);return Ve(og(e),10190,{key:e.toString()}),e}function ba(n,e){const t=tg(e);if(t.get(1)!==n.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new re(rg(t))}function ng(n,e){return ow(n.databaseId,e)}function aw(n){const e=tg(n);return e.length===4?Oe.emptyPath():rg(e)}function Zh(n){return new Oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rg(n){return Ve(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function cw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ve(d===void 0||typeof d=="string",58123),Xe.fromBase64String(d||"")):(Ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Xe.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const d=h.code===void 0?$.UNKNOWN:Xp(h.code);return new te(d,h.message||"")}(a);t=new eg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ba(n,r.document.name),i=xr(r.document.updateTime),a=r.document.createTime?xr(r.document.createTime):ae.min(),c=new qt({mapValue:{fields:r.document.fields}}),l=it.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new Wi(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ba(n,r.document),i=r.readTime?xr(r.readTime):ae.min(),a=it.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Wi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ba(n,r.document),i=r.removedTargetIds||[];t=new Wi([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new JI(s,i),c=r.targetId;t=new Zp(c,a)}}return t}function lw(n,e){return{documents:[ng(n,e.path)]}}function uw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ng(n,s);const i=function(h){if(h.length!==0)return ig(Yt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:kr(m.field),direction:dw(m.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=hc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function hw(n){let e=aw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ve(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const m=sg(p);return m instanceof Yt&&Up(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(m=>function(k){return new co(Nr(k.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Vo(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(p){const m=!!p.before,I=p.values||[];return new ao(I,m)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const m=!p.before,I=p.values||[];return new ao(I,m)}(t.endAt)),kI(e,s,a,i,c,"F",l,h)}function fw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Nr(t.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nr(t.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nr(t.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nr(t.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}}(n):n.fieldFilter!==void 0?function(t){return qe.create(Nr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Yt.create(t.compositeFilter.filters.map(r=>sg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}}(t.compositeFilter.op))}(n):ce(30097,{filter:n})}function dw(n){return ew[n]}function pw(n){return tw[n]}function gw(n){return nw[n]}function kr(n){return{fieldPath:n.canonicalString()}}function Nr(n){return mt.fromServerFormat(n.fieldPath)}function ig(n){return n instanceof qe?function(t){if(t.op==="=="){if(Bh(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NAN"}};if(Uh(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Bh(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NAN"}};if(Uh(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(t.field),op:pw(t.op),value:t.value}}}(n):n instanceof Yt?function(t){const r=t.getFilters().map(s=>ig(s));return r.length===1?r[0]:{compositeFilter:{op:gw(t.op),filters:r}}}(n):ce(54877,{filter:n})}function og(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,r,s,i=ae.min(),a=ae.min(),c=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.yt=e}}function _w(n){const e=hw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(){this.Cn=new vw}addToCollectionParentIndex(e,t){return this.Cn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Bn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class vw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new He(Oe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ag=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(ag,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Wr(0)}static cr(){return new Wr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="LruGarbageCollector",Ew=1048576;function nf([n,e],[t,r]){const s=pe(n,t);return s===0?pe(e,r):s}class Tw{constructor(e){this.Ir=e,this.buffer=new He(nf),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();nf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Iw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Y(tf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ns(t)?Y(tf,"Ignoring IndexedDB error during garbage collection: ",t):await Do(t)}await this.Vr(3e5)})}}class ww{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Oo.ce);const r=new Tw(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(ef)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ef):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Cr()<=de.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Aw(n,e){return new ww(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.changes=new yr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Fs(r.mutation,s,Nn.empty(),je.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ve()){const s=rr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Is();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=rr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ve()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Hn();const a=Ls(),c=function(){return Ls()}();return t.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Bo)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Fs(d.mutation,h,d.mutation.getFieldMask(),je.now())):a.set(h.key,Nn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>c.set(h,new Sw(d,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Ls();let s=new Fe((a,c)=>a-c),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||Nn.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||ve()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Kp();d.forEach(m=>{if(!i.has(m)){const I=Jp(t.get(m),r.get(m));I!==null&&p.set(m,I),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return re.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):NI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(rr());let c=Js,l=i;return a.next(h=>V.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ve())).next(d=>({batchId:c,changes:MI(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new re(t)).next(r=>{let s=Is();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Is();return this.indexManager.getCollectionParents(e,i).next(c=>V.forEach(c,l=>{const h=function(p,m){return new Mo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,it.newInvalidDocument(d)))});let c=Is();return a.forEach((l,h)=>{const d=i.get(l);d!==void 0&&Fs(d.mutation,h,Nn.empty(),je.now()),Fo(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return V.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:xr(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:_w(s.bundledQuery),readTime:xr(s.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(){this.overlays=new Fe(re.comparator),this.qr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=rr();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=rr(),i=t.length+1,a=new re(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Fe((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=rr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=rr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return V.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new QI(t,r));let i=this.qr.get(t);i===void 0&&(i=ve(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.Qr=new He(ze.$r),this.Ur=new He(ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new ze(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new ze(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new re(new Oe([])),r=new ze(t,e),s=new ze(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new re(new Oe([])),r=new ze(t,e),s=new ze(t,e+1);let i=ve();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ze(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return re.comparator(e.key,t.key)||pe(e.Yr,t.Yr)}static Kr(e,t){return pe(e.Yr,t.Yr)||re.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new He(ze.$r)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new WI(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?uI:this.tr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ze(t,0),s=new ze(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new He(pe);return t.forEach(s=>{const i=new ze(s,0),a=new ze(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const a=new ze(new re(i),0);let c=new He(pe);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},a),V.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ve(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(t.mutations,s=>{const i=new ze(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new ze(t,0),s=this.Zr.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.ri=e,this.docs=function(){return new Fe(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():it.newInvalidDocument(t))}getEntries(e,t){let r=Hn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Hn();const a=t.path,c=new re(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||oI(iI(d),r)<=0||(s.has(d.key)||Fo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ce(9500)}ii(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Ow(this)}getSize(e){return V.resolve(this.size)}}class Ow extends Rw{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.persistence=e,this.si=new yr(t=>el(t),tl),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.oi=0,this._i=new ol,this.targetCount=0,this.ai=Wr.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),V.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Wr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Pr(t),V.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t){this.ui={},this.overlays={},this.ci=new Oo(0),this.li=!1,this.li=!0,this.hi=new kw,this.referenceDelegate=e(this),this.Pi=new Vw(this),this.indexManager=new yw,this.remoteDocumentCache=function(s){return new Dw(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new mw(t),this.Ii=new Cw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Pw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Nw(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){Y("MemoryPersistence","Starting transaction:",e);const s=new xw(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return V.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class xw extends cI{constructor(e){super(),this.currentSequenceNumber=e}}class al{constructor(e){this.persistence=e,this.Ri=new ol,this.Vi=null}static mi(e){return new al(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,r=>{const s=re.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,ae.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return V.or([()=>V.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ho{constructor(e,t){this.persistence=e,this.pi=new yr(r=>hI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Aw(this,t)}static mi(e,t){return new ho(e,t)}Ei(){}di(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return V.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?V.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,ae.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ki(e.data.value)),t}br(e,t,r){return V.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=ve(),s=ve();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new cl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return SE()?8:lI(ct())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Mw;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Cr()<=de.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Pr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(Cr()<=de.DEBUG&&Y("QueryEngine","Query:",Pr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Cr()<=de.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Pr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(t))):V.resolve())}ys(e,t){if(Hh(t))return V.resolve(null);let r=Gt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=cc(t,null,"F"),r=Gt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ve(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(t,c);return this.Cs(t,h,a,l.readTime)?this.ys(e,cc(t,null,"F")):this.vs(e,h,t,l)}))})))}ws(e,t,r,s){return Hh(t)||s.isEqual(ae.min())?V.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?V.resolve(null):(Cr()<=de.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pr(t)),this.vs(e,a,t,sI(s,Js)).next(c=>c))})}Ds(e,t){let r=new He(Hp(e));return t.forEach((s,i)=>{Fo(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Cr()<=de.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Pr(t)),this.ps.getDocumentsMatchingQuery(e,t,Bn.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="LocalStore",Fw=3e8;class Uw{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Fe(pe),this.xs=new yr(i=>el(i),tl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bw(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Bw(n,e,t,r){return new Uw(n,e,t,r)}async function lg(n,e){const t=ye(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=ve();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:c}))})})}function ug(n){const e=ye(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function jw(n,e){const t=ye(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(t.Pi.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(i,d.addedDocuments,p)));let I=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Xe.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(p,I),function(O,x,W){return O.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Fw?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(m,I,d)&&c.push(t.Pi.updateTargetData(i,I))});let l=Hn(),h=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push($w(i,a,e.documentUpdates).next(d=>{l=d.ks,h=d.qs})),!r.isEqual(ae.min())){const d=t.Pi.getLastRemoteSnapshotVersion(i).next(p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Ms=s,i))}function $w(n,e,t){let r=ve(),s=ve();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Hn();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):Y(ll,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:a,qs:s}})}function qw(n,e){const t=ye(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Dn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function dc(n,e,t){const r=ye(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ns(a))throw a;Y(ll,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function rf(n,e,t){const r=ye(n);let s=ae.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,d){const p=ye(l),m=p.xs.get(d);return m!==void 0?V.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,d)}(r,a,Gt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:ae.min(),t?i:ve())).next(c=>(Hw(r,OI(e),c),{documents:c,Qs:i})))}function Hw(n,e,t){let r=n.Os.get(e)||ae.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class sf{constructor(){this.activeTargetIds=UI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zw{constructor(){this.Mo=new sf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new sf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="ConnectivityMonitor";class af{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Y(of,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Y(of,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui=null;function pc(){return Ui===null?Ui=function(){return 268435456+Math.round(2147483648*Math.random())}():Ui++,"0x"+Ui.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="RestConnection",Gw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ww{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===oo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=pc(),c=this.zo(e,t.toUriEncodedString());Y(Ca,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),d=Zr(h);return this.Jo(e,c,l,r,d).then(p=>(Y(Ca,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Hr(Ca,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ts}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=Gw[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class Jw extends Ww{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=pc();return new Promise((c,l)=>{const h=new wp;h.setWithCredentials(!0),h.listenOnce(Ap.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case zi.NO_ERROR:const p=h.getResponseJson();Y(rt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case zi.TIMEOUT:Y(rt,`RPC '${e}' ${a} timed out`),l(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const m=h.getStatus();if(Y(rt,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const k=I==null?void 0:I.error;if(k&&k.status&&k.message){const O=function(W){const U=W.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(U)>=0?U:$.UNKNOWN}(k.status);l(new te(O,k.message))}else l(new te($.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new te($.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Y(rt,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(s);Y(rt,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)})}T_(e,t,r){const s=pc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=bp(),c=Sp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");Y(rt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.I_(p);let m=!1,I=!1;const k=new Qw({Yo:x=>{I?Y(rt,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(Y(rt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(rt,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Zo:()=>p.close()}),O=(x,W,U)=>{x.listen(W,z=>{try{U(z)}catch(H){setTimeout(()=>{throw H},0)}})};return O(p,Ts.EventType.OPEN,()=>{I||(Y(rt,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),O(p,Ts.EventType.CLOSE,()=>{I||(I=!0,Y(rt,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(p))}),O(p,Ts.EventType.ERROR,x=>{I||(I=!0,Hr(rt,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),k.a_(new te($.UNAVAILABLE,"The operation could not be completed")))}),O(p,Ts.EventType.MESSAGE,x=>{var W;if(!I){const U=x.data[0];Ve(!!U,16349);const z=U,H=(z==null?void 0:z.error)||((W=z[0])==null?void 0:W.error);if(H){Y(rt,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let he=function(T){const A=Be[T];if(A!==void 0)return Xp(A)}(oe),w=H.message;he===void 0&&(he=$.INTERNAL,w="Unknown error status: "+oe+" with message "+H.message),I=!0,k.a_(new te(he,w)),p.close()}else Y(rt,`RPC '${e}' stream ${s} received:`,U),k.u_(U)}}),O(c,Rp.STAT_EVENT,x=>{x.stat===Za.PROXY?Y(rt,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Za.NOPROXY&&Y(rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Pa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(n){return new rw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="PersistentStream";class Yw{constructor(e,t,r,s,i,a,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new fg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(fn(t.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new te($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Y(cf,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(Y(cf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xw extends Yw{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=cw(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ae.min():a.readTime?xr(a.readTime):ae.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Zh(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=ac(l)?{documents:lw(i,l)}:{query:uw(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=iw(i,a.resumeToken);const h=hc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ae.min())>0){c.readTime=sw(i,a.snapshotVersion.toTimestamp());const h=hc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=fw(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Zh(this.serializer),t.removeTarget=e,this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{}class eA extends Zw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,fc(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te($.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,fc(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new te($.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class tA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(fn(t),this.aa=!1):Y("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="RemoteStore";class nA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{ui(this)&&(Y(Qr,"Restarting streams for network reachability change."),await async function(l){const h=ye(l);h.Ea.add(4),await li(h),h.Ra.set("Unknown"),h.Ea.delete(4),await $o(h)}(this))})}),this.Ra=new tA(r,s)}}async function $o(n){if(ui(n))for(const e of n.da)await e(!0)}async function li(n){for(const e of n.da)await e(!1)}function dg(n,e){const t=ye(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),dl(t)?fl(t):rs(t).O_()&&hl(t,e))}function ul(n,e){const t=ye(n),r=rs(t);t.Ia.delete(e),r.O_()&&pg(t,e),t.Ia.size===0&&(r.O_()?r.L_():ui(t)&&t.Ra.set("Unknown"))}function hl(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}rs(n).Y_(e)}function pg(n,e){n.Va.Ue(e),rs(n).Z_(e)}function fl(n){n.Va=new ZI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),rs(n).start(),n.Ra.ua()}function dl(n){return ui(n)&&!rs(n).x_()&&n.Ia.size>0}function ui(n){return ye(n).Ea.size===0}function gg(n){n.Va=void 0}async function rA(n){n.Ra.set("Online")}async function sA(n){n.Ia.forEach((e,t)=>{hl(n,e)})}async function iA(n,e){gg(n),dl(n)?(n.Ra.ha(e),fl(n)):n.Ra.set("Unknown")}async function oA(n,e,t){if(n.Ra.set("Online"),e instanceof eg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){Y(Qr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lf(n,r)}else if(e instanceof Wi?n.Va.Ze(e):e instanceof Zp?n.Va.st(e):n.Va.tt(e),!t.isEqual(ae.min()))try{const r=await ug(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(h);d&&i.Ia.set(h,d.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(Xe.EMPTY_BYTE_STRING,d.snapshotVersion)),pg(i,l);const p=new Dn(d.target,l,h,d.sequenceNumber);hl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){Y(Qr,"Failed to raise snapshot:",r),await lf(n,r)}}async function lf(n,e,t){if(!ns(e))throw e;n.Ea.add(1),await li(n),n.Ra.set("Offline"),t||(t=()=>ug(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Y(Qr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await $o(n)})}async function uf(n,e){const t=ye(n);t.asyncQueue.verifyOperationInProgress(),Y(Qr,"RemoteStore received new credentials");const r=ui(t);t.Ea.add(3),await li(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await $o(t)}async function aA(n,e){const t=ye(n);e?(t.Ea.delete(2),await $o(t)):e||(t.Ea.add(2),await li(t),t.Ra.set("Unknown"))}function rs(n){return n.ma||(n.ma=function(t,r,s){const i=ye(t);return i.sa(),new Xw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:rA.bind(null,n),t_:sA.bind(null,n),r_:iA.bind(null,n),H_:oA.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),dl(n)?fl(n):n.Ra.set("Unknown")):(await n.ma.stop(),gg(n))})),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new pl(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mg(n,e){if(fn("AsyncQueue",`${e}: ${n}`),ns(n))return new te($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{static emptySet(e){return new Mr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||re.comparator(t.key,r.key):(t,r)=>re.comparator(t.key,r.key),this.keyedMap=Is(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Mr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.ga=new Fe(re.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Jr{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Jr(e,t,Mr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class lA{constructor(){this.queries=ff(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=ye(t),i=s.queries;s.queries=ff(),i.forEach((a,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new te($.ABORTED,"Firestore shutting down"))}}function ff(){return new yr(n=>qp(n),Lo)}async function uA(n,e){const t=ye(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new cA,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=mg(a,`Initialization of query '${Pr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&gl(t)}async function hA(n,e){const t=ye(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function fA(n,e){const t=ye(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&gl(t)}function dA(n,e,t){const r=ye(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function gl(n){n.Ca.forEach(e=>{e.next()})}var gc,df;(df=gc||(gc={})).Ma="default",df.Cache="cache";class pA{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Jr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Jr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==gc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.key=e}}class yg{constructor(e){this.key=e}}class gA{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ve(),this.mutatedKeys=ve(),this.eu=Hp(e),this.tu=new Mr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new hf,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),I=Fo(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),O=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let x=!1;m&&I?m.data.isEqual(I.data)?k!==O&&(r.track({type:3,doc:I}),x=!0):this.su(m,I)||(r.track({type:2,doc:I}),x=!0,(l&&this.eu(I,l)>0||h&&this.eu(I,h)<0)&&(c=!0)):!m&&I?(r.track({type:0,doc:I}),x=!0):m&&!I&&(r.track({type:1,doc:m}),x=!0,(l||h)&&(c=!0)),x&&(I?(a=a.add(I),i=O?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((d,p)=>function(I,k){const O=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:x})}};return O(I)-O(k)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,a.length!==0||h?{snapshot:new Jr(this.query,e.tu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ve(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new yg(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new _g(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=ve();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Jr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ml="SyncEngine";class mA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class _A{constructor(e){this.key=e,this.hu=!1}}class yA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new yr(c=>qp(c),Lo),this.Iu=new Map,this.Eu=new Set,this.du=new Fe(re.comparator),this.Au=new Map,this.Ru=new ol,this.Vu={},this.mu=new Map,this.fu=Wr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vA(n,e,t=!0){const r=wg(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await vg(r,e,t,!0),s}async function EA(n,e){const t=wg(n);await vg(t,e,!0,!1)}async function vg(n,e,t,r){const s=await qw(n.localStore,Gt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await TA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&dg(n.remoteStore,s),c}async function TA(n,e,t,r,s){n.pu=(p,m,I)=>async function(O,x,W,U){let z=x.view.ru(W);z.Cs&&(z=await rf(O.localStore,x.query,!1).then(({documents:w})=>x.view.ru(w,z)));const H=U&&U.targetChanges.get(x.targetId),oe=U&&U.targetMismatches.get(x.targetId)!=null,he=x.view.applyChanges(z,O.isPrimaryClient,H,oe);return gf(O,x.targetId,he.au),he.snapshot}(n,p,m,I);const i=await rf(n.localStore,e,!0),a=new gA(e,i.Qs),c=a.ru(i.documents),l=ci.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);gf(n,t,h.au);const d=new mA(e,t,a);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function IA(n,e,t){const r=ye(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!Lo(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await dc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ul(r.remoteStore,s.targetId),mc(r,s.targetId)}).catch(Do)):(mc(r,s.targetId),await dc(r.localStore,s.targetId,!0))}async function wA(n,e){const t=ye(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ul(t.remoteStore,r.targetId))}async function Eg(n,e){const t=ye(n);try{const r=await jw(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Ve(a.hu,14607):s.removedDocuments.size>0&&(Ve(a.hu,42227),a.hu=!1))}),await Ig(t,r,e)}catch(r){await Do(r)}}function pf(n,e,t){const r=ye(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=ye(a);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(c)&&(h=!0)}),h&&gl(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AA(n,e,t){const r=ye(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Fe(re.comparator);a=a.insert(i,it.newNoDocument(i,ae.min()));const c=ve().add(i),l=new jo(ae.min(),new Map,new Fe(pe),a,c);await Eg(r,l),r.du=r.du.remove(i),r.Au.delete(e),_l(r)}else await dc(r.localStore,e,!1).then(()=>mc(r,e,t)).catch(Do)}function mc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Tg(n,r)})}function Tg(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ul(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),_l(n))}function gf(n,e,t){for(const r of t)r instanceof _g?(n.Ru.addReference(r.key,e),RA(n,r)):r instanceof yg?(Y(ml,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Tg(n,r.key)):ce(19791,{wu:r})}function RA(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(Y(ml,"New document in limbo: "+t),n.Eu.add(r),_l(n))}function _l(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new re(Oe.fromString(e)),r=n.fu.next();n.Au.set(r,new _A(t)),n.du=n.du.insert(t,r),dg(n.remoteStore,new Dn(Gt(nl(t.path)),r,"TargetPurposeLimboResolution",Oo.ce))}}async function Ig(n,e,t){const r=ye(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{a.push(r.pu(l,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=cl.As(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(l,h){const d=ye(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(h,m=>V.forEach(m.Es,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>V.forEach(m.ds,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!ns(p))throw p;Y(ll,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const I=d.Ms.get(m),k=I.snapshotVersion,O=I.withLastLimboFreeSnapshotVersion(k);d.Ms=d.Ms.insert(m,O)}}}(r.localStore,i))}async function SA(n,e){const t=ye(n);if(!t.currentUser.isEqual(e)){Y(ml,"User change. New user:",e.toKey());const r=await lg(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new te($.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ig(t,r.Ls)}}function bA(n,e){const t=ye(n),r=t.Au.get(e);if(r&&r.hu)return ve().add(r.key);{let s=ve();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function wg(n){const e=ye(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Eg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AA.bind(null,e),e.Pu.H_=fA.bind(null,e.eventManager),e.Pu.yu=dA.bind(null,e.eventManager),e}class fo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hg(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Bw(this.persistence,new Lw,e.initialUser,this.serializer)}Cu(e){return new cg(al.mi,this.serializer)}Du(e){return new zw}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fo.provider={build:()=>new fo};class CA extends fo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ve(this.persistence.referenceDelegate instanceof ho,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Iw(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new cg(r=>ho.mi(r,t),this.serializer)}}class _c{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SA.bind(null,this.syncEngine),await aA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lA}()}createDatastore(e){const t=hg(e.databaseInfo.databaseId),r=function(i){return new Jw(i)}(e.databaseInfo);return function(i,a,c,l){return new eA(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new nA(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>pf(this.syncEngine,t,0),function(){return af.v()?new af:new Kw}())}createSyncEngine(e,t){return function(s,i,a,c,l,h,d){const p=new yA(s,i,a,c,l,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ye(s);Y(Qr,"RemoteStore shutting down."),i.Ea.add(5),await li(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}_c.provider={build:()=>new _c};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):fn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="FirestoreClient";class kA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=Yc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Y(zn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Y(zn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=mg(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ka(n,e){n.asyncQueue.verifyOperationInProgress(),Y(zn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await lg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function mf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await NA(n);Y(zn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>uf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>uf(e.remoteStore,s)),n._onlineComponents=e}async function NA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Y(zn,"Using user provided OfflineComponentProvider");try{await ka(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Hr("Error using user provided cache. Falling back to memory cache: "+t),await ka(n,new fo)}}else Y(zn,"Using default OfflineComponentProvider"),await ka(n,new CA(void 0));return n._offlineComponents}async function DA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Y(zn,"Using user provided OnlineComponentProvider"),await mf(n,n._uninitializedComponentsProvider._online)):(Y(zn,"Using default OnlineComponentProvider"),await mf(n,new _c))),n._onlineComponents}async function OA(n){const e=await DA(n),t=e.eventManager;return t.onListen=vA.bind(null,e.syncEngine),t.onUnlisten=IA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=EA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=wA.bind(null,e.syncEngine),t}function VA(n,e,t={}){const r=new ar;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const d=new PA({next:m=>{d.Nu(),a.enqueueAndForget(()=>hA(i,p));const I=m.docs.has(c);!I&&m.fromCache?h.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&l&&l.source==="server"?h.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new pA(nl(c.path),d,{includeMetadataChanges:!0,qa:!0});return uA(i,p)}(await OA(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="firestore.googleapis.com",yf=!0;class vf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rg,this.ssl=yf}else this.host=e.host,this.ssl=e.ssl??yf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ag;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ew)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ag(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yl{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HT;switch(r.type){case"firstParty":return new WT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=_f.get(t);r&&(Y("ComponentProvider","Removing Datastore"),_f.delete(t),r.terminate())}(this),Promise.resolve()}}function xA(n,e,t,r={}){var h;n=tc(n,yl);const s=Zr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(pp(`https://${c}`),gp("Firestore",!0)),i.host!==Rg&&i.host!==c&&Hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!dr(l,a)&&(n._setSettings(l),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=st.MOCK_USER;else{d=_E(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new st(m)}n._authCredentials=new zT(new Pp(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vl(this.firestore,e,this._query)}}class _t{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(oi(t,_t._jsonSchema))return new _t(e,r||null,new re(Oe.fromString(t.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:$e("string",_t._jsonSchemaVersion),referencePath:$e("string")};class ei extends vl{constructor(e,t,r){super(e,t,nl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new re(e))}withConverter(e){return new ei(this.firestore,e,this._path)}}function MA(n,e,...t){if(n=Wn(n),arguments.length===1&&(e=Yc.newId()),eI("doc","path",e),n instanceof yl){const r=Oe.fromString(e,...t);return Nh(r),new _t(n,null,new re(r))}{if(!(n instanceof _t||n instanceof ei))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Oe.fromString(e,...t));return Nh(r),new _t(n.firestore,n instanceof ei?n.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="AsyncQueue";class Tf{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fg(this,"async_queue_retry"),this._c=()=>{const r=Pa();r&&Y(Ef,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Pa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Pa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new ar;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ns(e))throw e;Y(Ef,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,fn("INTERNAL UNHANDLED ERROR: ",If(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=pl.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ce(47125,{Pc:If(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function If(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Sg extends yl{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Tf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tf(e),this._firestoreClient=void 0,await e}}}function LA(n,e){const t=typeof n=="object"?n:vp(),r=typeof n=="string"?n:oo,s=Qc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gE("firestore");i&&xA(s,...i)}return s}function FA(n){if(n._terminated)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||UA(n),n._firestoreClient}function UA(n){var r,s,i;const e=n._freezeSettings(),t=function(c,l,h,d){return new gI(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ag(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new kA(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ht(Xe.fromBase64String(e))}catch(t){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ht(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ht._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oi(e,Ht._jsonSchema))return Ht.fromBase64String(e.bytes)}}Ht._jsonSchemaVersion="firestore/bytes/1.0",Ht._jsonSchema={type:$e("string",Ht._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ln._jsonSchemaVersion}}static fromJSON(e){if(oi(e,Ln._jsonSchema))return new Ln(e.latitude,e.longitude)}}Ln._jsonSchemaVersion="firestore/geoPoint/1.0",Ln._jsonSchema={type:$e("string",Ln._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oi(e,Fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Fn(e.vectorValues);throw new te($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fn._jsonSchemaVersion="firestore/vectorValue/1.0",Fn._jsonSchema={type:$e("string",Fn._jsonSchemaVersion),vectorValues:$e("object")};const BA=new RegExp("[~\\*/\\[\\]]");function jA(n,e,t){if(e.search(BA)>=0)throw wf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new bg(...e.split("."))._internalPath}catch{throw wf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function wf(n,e,t,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new te($.INVALID_ARGUMENT,i+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $A(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $A extends Cg{data(){return super.data()}}function Pg(n,e){return typeof e=="string"?jA(n,e):e instanceof bg?e._internalPath:e._delegate._internalPath}class qA{convertValue(e,t="none"){switch(qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ai(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[rc].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>Me(a.doubleValue));return new Fn(t)}convertGeoPoint(e){return new Ln(Me(e.latitude),Me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const t=jn(e);return new je(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Oe.fromString(e);Ve(og(r),9688,{name:e});const s=new Xs(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(t)||fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}class As{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lr extends Cg{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Pg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=lr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}lr._jsonSchemaVersion="firestore/documentSnapshot/1.0",lr._jsonSchema={type:$e("string",lr._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class Qi extends lr{data(e={}){return super.data(e)}}class Us{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new As(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Qi(this._firestore,this._userDataWriter,r.key,r,new As(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Qi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new As(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Qi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new As(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:HA(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Us._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function HA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n){n=tc(n,_t);const e=tc(n.firestore,Sg);return VA(FA(e),n._key).then(t=>GA(e,n,t))}Us._jsonSchemaVersion="firestore/querySnapshot/1.0",Us._jsonSchema={type:$e("string",Us._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class KA extends qA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ht(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function GA(n,e,t){const r=t.docs.get(e._key),s=new KA(n);return new lr(n,s,e._key,r,new As(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){ts=s})(es),qr(new pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Sg(new KT(r.getProvider("auth-internal")),new QT(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(h.options.projectId,d)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),xn(bh,Ch,e),xn(bh,Ch,"esm2020")})();var WA="firebase",QA="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(WA,QA,"app");const JA={apiKey:"AIzaSyBdS7a_yu4rZaOOP2XTmrP6NozBzCXd0qE",authDomain:"pilotage-parapente.firebaseapp.com",projectId:"pilotage-parapente",storageBucket:"pilotage-parapente.firebasestorage.app",messagingSenderId:"42540911497",appId:"1:42540911497:web:f34827912c4bd44d512f58"},kg=yp(JA),YA=LA(kg),Ng=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},XA={name:"Main",data(){return{htmlpage:"<h1>Bienvenue sur la page principale</h1>",pageId:null}},mounted(){console.log("in main mounted"),this.pageId=this.$route.params.id,console.log("Page ID from route:",this.pageId),this.loadPageById()},methods:{async loadPageById(){const n=MA(YA,"pages",this.pageId);console.log("Document reference:",n);try{const e=await zA(n);e.exists()?this.htmlpage=this.decodeBase64Utf8(e.data().page):console.log("Aucun document trouvé !")}catch(e){console.error("Erreur lors du chargement du document :",e)}},decodeBase64Utf8(n){try{const e=atob(n),t=Uint8Array.from(e,s=>s.charCodeAt(0));return new TextDecoder("utf-8").decode(t)}catch(e){return console.error("Erreur de décodage UTF-8 base64 :",e),"Erreur de décodage"}}}},ZA=["innerHTML"];function e0(n,e,t,r,s,i){return $c(),Ud("div",{innerHTML:s.htmlpage},null,8,ZA)}const t0=Ng(XA,[["render",e0]]);function Dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n0=Dg,Og=new si("auth","Firebase",Dg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Gc("@firebase/auth");function r0(n,...e){po.logLevel<=de.WARN&&po.warn(`Auth (${es}): ${n}`,...e)}function Ji(n,...e){po.logLevel<=de.ERROR&&po.error(`Auth (${es}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,...e){throw Tl(n,...e)}function Mt(n,...e){return Tl(n,...e)}function El(n,e,t){const r={...n0(),[e]:t};return new si("auth","Firebase",r).create(e,{appName:n.name})}function ur(n){return El(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function s0(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xt(n,"argument-error"),El(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Og.create(n,...e)}function ie(n,e,...t){if(!n)throw Tl(e,...t)}function an(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ji(e),new Error(e)}function dn(n,e){n||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function i0(){return Af()==="http:"||Af()==="https:"}function Af(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(i0()||wE()||"connection"in navigator)?navigator.onLine:!0}function a0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t){this.shortDelay=e,this.longDelay=t,dn(t>e,"Short delay should be less than long delay!"),this.isMobile=EE()||AE()}get(){return o0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n,e){dn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],u0=new hi(3e4,6e4);function wl(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ss(n,e,t,r,s={}){return xg(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ii({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return IE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Zr(n.emulatorConfig.host)&&(h.credentials="include"),Vg.fetch()(await Mg(n,n.config.apiHost,t,c),h)})}async function xg(n,e,t){n._canInitEmulator=!1;const r={...c0,...e};try{const s=new f0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Bi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Bi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Bi(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw El(n,d,h);Xt(n,d)}}catch(s){if(s instanceof gn)throw s;Xt(n,"network-request-failed",{message:String(s)})}}async function h0(n,e,t,r,s={}){const i=await ss(n,e,t,r,s);return"mfaPendingCredential"in i&&Xt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Mg(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Il(n.config,s):`${n.config.apiScheme}://${s}`;return l0.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class f0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),u0.get())})}}function Bi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Mt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(n,e){return ss(n,"POST","/v1/accounts:delete",e)}async function go(n,e){return ss(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function p0(n,e=!1){const t=Wn(n),r=await t.getIdToken(e),s=Al(r);ie(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bs(Na(s.auth_time)),issuedAtTime:Bs(Na(s.iat)),expirationTime:Bs(Na(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Na(n){return Number(n)*1e3}function Al(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ji("JWT malformed, contained fewer than 3 sections"),null;try{const s=up(t);return s?JSON.parse(s):(Ji("Failed to decode base64 JWT payload"),null)}catch(s){return Ji("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rf(n){const e=Al(n);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof gn&&g0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function g0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(n){var p;const e=n.auth,t=await n.getIdToken(),r=await ti(n,go(e,{idToken:t}));ie(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Lg(s.providerUserInfo):[],a=y0(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function _0(n){const e=Wn(n);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Lg(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(n,e){const t=await xg(n,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Mg(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Zr(n.emulatorConfig.host)&&(l.credentials="include"),Vg.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function E0(n,e){return ss(n,"POST","/v2/accounts:revokeToken",wl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=Rf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await v0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Lr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(n,e){ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ot{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new m0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ti(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return p0(this,e)}reload(){return _0(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(ur(this.auth));const e=await this.getIdToken();return await ti(this,d0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:I,providerData:k,stsTokenManager:O}=t;ie(p&&O,e,"internal-error");const x=Lr.fromJSON(this.name,O);ie(typeof p=="string",e,"internal-error"),wn(r,e.name),wn(s,e.name),ie(typeof m=="boolean",e,"internal-error"),ie(typeof I=="boolean",e,"internal-error"),wn(i,e.name),wn(a,e.name),wn(c,e.name),wn(l,e.name),wn(h,e.name),wn(d,e.name);const W=new Ot({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:I,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:x,createdAt:h,lastLoginAt:d});return k&&Array.isArray(k)&&(W.providerData=k.map(U=>({...U}))),l&&(W._redirectEventId=l),W}static async _fromIdTokenResponse(e,t,r=!1){const s=new Lr;s.updateFromServerResponse(t);const i=new Ot({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Lg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Lr;c.updateFromIdToken(r);const l=new Ot({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=new Map;function cn(n){dn(n instanceof Function,"Expected a class definition");let e=Sf.get(n);return e?(dn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sf.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fg.type="NONE";const bf=Fg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n,e,t){return`firebase:${n}:${e}:${t}`}class Fr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Yi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Yi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await go(this.auth,{idToken:e}).catch(()=>{});return t?Ot._fromGetAccountInfoResponse(this.auth,t,e):null}return Ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Fr(cn(bf),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||cn(bf);const a=Yi(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const m=await go(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Ot._fromGetAccountInfoResponse(e,m,d)}else p=Ot._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Fr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Fr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($g(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ug(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hg(e))return"Blackberry";if(zg(e))return"Webos";if(Bg(e))return"Safari";if((e.includes("chrome/")||jg(e))&&!e.includes("edge/"))return"Chrome";if(qg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ug(n=ct()){return/firefox\//i.test(n)}function Bg(n=ct()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jg(n=ct()){return/crios\//i.test(n)}function $g(n=ct()){return/iemobile/i.test(n)}function qg(n=ct()){return/android/i.test(n)}function Hg(n=ct()){return/blackberry/i.test(n)}function zg(n=ct()){return/webos/i.test(n)}function Rl(n=ct()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function T0(n=ct()){var e;return Rl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function I0(){return RE()&&document.documentMode===10}function Kg(n=ct()){return Rl(n)||qg(n)||zg(n)||Hg(n)||/windows phone/i.test(n)||$g(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n,e=[]){let t;switch(n){case"Browser":t=Cf(ct());break;case"Worker":t=`${Cf(ct())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A0(n,e={}){return ss(n,"GET","/v2/passwordPolicy",wl(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=6;class S0{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??R0,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pf(this),this.idTokenSubscription=new Pf(this),this.beforeStateQueue=new w0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=cn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await go(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=a0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(ur(this));const t=e?Wn(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await A0(this),t=new S0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await E0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&cn(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&r0(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function qo(n){return Wn(n)}class Pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=OE(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function C0(n){Sl=n}function P0(n){return Sl.loadJS(n)}function k0(){return Sl.gapiScript}function N0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(n,e){const t=Qc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(dr(i,e??{}))return s;Xt(s,"already-initialized")}return t.initialize({options:e})}function O0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(cn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function V0(n,e,t){const r=qo(n);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Wg(e),{host:a,port:c}=x0(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(dr(h,r.config.emulator)&&dr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Zr(a)?(pp(`${i}//${a}${l}`),gp("Auth",!0)):M0()}function Wg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function x0(n){const e=Wg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:kf(a)}}}function kf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function M0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,t){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(n,e){return h0(n,"POST","/v1/accounts:signInWithIdp",wl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="http://localhost";class mr extends Qg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new mr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ur(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ur(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ur(e,t)}buildRequest(){const e={requestUri:L0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ii(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends bl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends fi{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return on.credential(t,r)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends fi{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends fi{constructor(){super("twitter.com")}static credential(e,t){return mr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return kn.credential(t,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),a=Nf(r);return new Yr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Nf(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Nf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends gn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new _o(e,t,r,s)}}function Jg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(n,i,e,r):i})}async function F0(n,e,t=!1){const r=await ti(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(n,e,t=!1){const{auth:r}=n;if(Dt(r.app))return Promise.reject(ur(r));const s="reauthenticate";try{const i=await ti(n,Jg(r,s,e,n),t);ie(i.idToken,r,"internal-error");const a=Al(i.idToken);ie(a,r,"internal-error");const{sub:c}=a;return ie(n.uid===c,r,"user-mismatch"),Yr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(n,e,t=!1){if(Dt(n.app))return Promise.reject(ur(n));const r="signIn",s=await Jg(n,r,e),i=await Yr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function j0(n,e,t,r){return Wn(n).onIdTokenChanged(e,t,r)}function $0(n,e,t){return Wn(n).beforeAuthStateChanged(e,t)}function q0(n,e,t,r){return Wn(n).onAuthStateChanged(e,t,r)}const yo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=1e3,z0=10;class Xg extends Yg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);I0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,z0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},H0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xg.type="LOCAL";const K0=Xg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends Yg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zg.type="SESSION";const em=Zg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ho(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await G0(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ho.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Cl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function Q0(n){Wt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function J0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Y0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function X0(){return tm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="firebaseLocalStorageDb",Z0=1,vo="firebaseLocalStorage",rm="fbase_key";class di{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zo(n,e){return n.transaction([vo],e?"readwrite":"readonly").objectStore(vo)}function eR(){const n=indexedDB.deleteDatabase(nm);return new di(n).toPromise()}function Ec(){const n=indexedDB.open(nm,Z0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(vo,{keyPath:rm})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(vo)?e(r):(r.close(),await eR(),e(await Ec()))})})}async function Df(n,e,t){const r=zo(n,!0).put({[rm]:e,value:t});return new di(r).toPromise()}async function tR(n,e){const t=zo(n,!1).get(e),r=await new di(t).toPromise();return r===void 0?null:r.value}function Of(n,e){const t=zo(n,!0).delete(e);return new di(t).toPromise()}const nR=800,rR=3;class sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ec(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>rR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ho._getInstance(X0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await J0(),!this.activeServiceWorker)return;this.sender=new W0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Y0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ec();return await Df(e,yo,"1"),await Of(e,yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Df(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>tR(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Of(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=zo(s,!1).getAll();return new di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sm.type="LOCAL";const sR=sm;new hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n,e){return e?cn(e):(ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends Qg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ur(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ur(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iR(n){return B0(n.auth,new Pl(n),n.bypassAuthState)}function oR(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),U0(t,new Pl(n),n.bypassAuthState)}async function aR(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),F0(t,new Pl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iR;case"linkViaPopup":case"linkViaRedirect":return aR;case"reauthViaPopup":case"reauthViaRedirect":return oR;default:Xt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new hi(2e3,1e4);async function lR(n,e,t){if(Dt(n.app))return Promise.reject(Mt(n,"operation-not-supported-in-this-environment"));const r=qo(n);s0(n,e,bl);const s=im(r,t);return new sr(r,"signInViaPopup",e,s).executeNotNull()}class sr extends om{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Cl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cR.get())};e()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="pendingRedirect",Xi=new Map;class hR extends om{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Xi.get(this.auth._key());if(!e){try{const r=await fR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Xi.set(this.auth._key(),e)}return this.bypassAuthState||Xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fR(n,e){const t=gR(e),r=pR(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function dR(n,e){Xi.set(n._key(),e)}function pR(n){return cn(n._redirectPersistence)}function gR(n){return Yi(uR,n.config.apiKey,n.name)}async function mR(n,e,t=!1){if(Dt(n.app))return Promise.reject(ur(n));const r=qo(n),s=im(r,e),a=await new hR(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=10*60*1e3;class yR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!am(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Mt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_R&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vf(e))}saveEventToCache(e){this.cachedEventUids.add(Vf(e)),this.lastProcessedEventTime=Date.now()}}function Vf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function am({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return am(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(n,e={}){return ss(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IR=/^https?/;async function wR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ER(n);for(const t of e)try{if(AR(t))return}catch{}Xt(n,"unauthorized-domain")}function AR(n){const e=yc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!IR.test(t))return!1;if(TR.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=new hi(3e4,6e4);function xf(){const n=Wt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function SR(n){return new Promise((e,t)=>{var s,i,a;function r(){xf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xf(),t(Mt(n,"network-request-failed"))},timeout:RR.get()})}if((i=(s=Wt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Wt().gapi)!=null&&a.load)r();else{const c=N0("iframefcb");return Wt()[c]=()=>{gapi.load?r():t(Mt(n,"network-request-failed"))},P0(`${k0()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Zi=null,e})}let Zi=null;function bR(n){return Zi=Zi||SR(n),Zi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new hi(5e3,15e3),PR="__/auth/iframe",kR="emulator/auth/iframe",NR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OR(n){const e=n.config;ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Il(e,kR):`https://${n.config.authDomain}/${PR}`,r={apiKey:e.apiKey,appName:n.name,v:es},s=DR.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ii(r).slice(1)}`}async function VR(n){const e=await bR(n),t=Wt().gapi;return ie(t,n,"internal-error"),e.open({where:document.body,url:OR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Mt(n,"network-request-failed"),c=Wt().setTimeout(()=>{i(a)},CR.get());function l(){Wt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MR=500,LR=600,FR="_blank",UR="http://localhost";class Mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BR(n,e,t,r=MR,s=LR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...xR,width:r.toString(),height:s.toString(),top:i,left:a},h=ct().toLowerCase();t&&(c=jg(h)?FR:t),Ug(h)&&(e=e||UR,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[I,k])=>`${m}${I}=${k},`,"");if(T0(h)&&c!=="_self")return jR(e||"",c),new Mf(null);const p=window.open(e||"",c,d);ie(p,n,"popup-blocked");try{p.focus()}catch{}return new Mf(p)}function jR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R="__/auth/handler",qR="emulator/auth/handler",HR=encodeURIComponent("fac");async function Lf(n,e,t,r,s,i){ie(n.config.authDomain,n,"auth-domain-config-required"),ie(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:es,eventId:s};if(e instanceof bl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",DE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof fi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${HR}=${encodeURIComponent(l)}`:"";return`${zR(n)}?${ii(c).slice(1)}${h}`}function zR({config:n}){return n.emulator?Il(n,qR):`https://${n.authDomain}/${$R}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="webStorageSupport";class KR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=em,this._completeRedirectFn=mR,this._overrideRedirectResult=dR}async _openPopup(e,t,r,s){var a;dn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Lf(e,t,r,yc(),s);return BR(e,i,Cl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Lf(e,t,r,yc(),s);return Q0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await VR(e),r=new yR(e);return t.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Da,{type:Da},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Da];i!==void 0&&t(!!i),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kg()||Bg()||Rl()}}const GR=KR;var Ff="@firebase/auth",Uf="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JR(n){qr(new pr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gg(n)},h=new b0(r,s,i,l);return O0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qr(new pr("auth-internal",e=>{const t=qo(e.getProvider("auth").getImmediate());return(r=>new WR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Ff,Uf,QR(n)),xn(Ff,Uf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=5*60,XR=dp("authIdTokenMaxAge")||YR;let Bf=null;const ZR=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>XR)return;const s=t==null?void 0:t.token;Bf!==s&&(Bf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cm(n=vp()){const e=Qc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=D0(n,{popupRedirectResolver:GR,persistence:[sR,K0,em]}),r=dp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=ZR(i.toString());$0(t,a,()=>a(t.currentUser)),j0(t,c=>a(c))}}const s=hp("auth");return s&&V0(t,`http://${s}`),t}function eS(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}C0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Mt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",eS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JR("Browser");const tS={name:"Register",data(){return{pageId:null}},mounted(){this.pageId=this.$route.params.id!=null?this.$route.params.id:"7416370e258da5ce6c102ef48c471eddca3090ff1b3a7c2dfba60afdf4483af3",this.signInWithGoogle(),console.log("mounted Register")},methods:{signInWithGoogle(){const n=new on,e=cm();lR(e,n).then(t=>{console.log(t.user),kl.push("/main/"+this.pageId)})}}};function nS(n,e,t,r,s,i){return $c(),Ud("button",{onClick:e[0]||(e[0]=(...a)=>i.signInWithGoogle&&i.signInWithGoogle(...a))},"Authenth")}const jf=Ng(tS,[["render",nS]]);Kd(ap);const kl=iE({history:xv(),routes:[{path:"/",component:jf},{path:"/:id",component:jf},{path:"/main/:id",component:t0,meta:{requiresAuth:!0}}]}),lm=cm(kg);kl.beforeEach((n,e,t)=>{n.matched.some(r=>r.meta.requiresAuth)?lm.currentUser?t():t("/"+n.params.id):t()});q0(lm,()=>{const n=Kd(ap);n.use(kl),n.mount("#app")});
