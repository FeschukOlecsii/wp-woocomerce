"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[457],{57384:function(t,e,n){var a=n(2226),l=n(7936),o=n(85241),i=n(38313),s=n(25283),r=n(96854),u=n(44259),c=n(70079),m=n(19382),d=n(84209),p=n(20174),h=n(82299),x=n(35250);function _(t){let{showModal:e,onClose:n}=t;return e?(0,x.jsx)(p.ZG,{onRequestClose:n,tracking:{utm_medium:"upsell_modal",utm_campaign:"create_automation_from_scratch"},children:(0,l.__)("Creating custom automations is a premium feature.","mailpoet")}):null}function j(t){let{variant:e="secondary"}=t;const[n,a]=(0,c.useState)(!1),[o,i]=(0,c.useState)(null),[s,r]=(0,c.useState)(!1),u=(0,c.useCallback)((()=>{!function(t,e){d.Hooks.applyFilters("mailpoet.automation.templates.from_scratch_button",(()=>{r(!1),a(!0)}))(e)}(0,i)}),[]);return(0,x.jsxs)(x.Fragment,{children:[o&&(0,x.jsx)(h.q,{type:"error",closable:!0,timeout:!1,children:(0,x.jsx)("p",{children:o})}),(0,x.jsx)(m.ZP,{variant:e,isBusy:s&&"link"!==e,disabled:s,onClick:()=>{r(!0),u()},children:(0,l.__)("Create custom automation","mailpoet")}),(0,x.jsx)(_,{showModal:n,onClose:()=>{a(!1),r(!1)}})]})}var f=n(2632),g=n(67308),k=n(41211);const C=[{name:"all",title:(0,x.jsx)(k.J$,{title:(0,l.__)("All","mailpoet"),count:i.U.length})},...i.G.map((t=>({...t,count:i.U.filter((e=>e.category===t.slug)).length}))).filter((t=>{let{count:e}=t;return e>0})).map((t=>{let{name:e,slug:n,count:a}=t;return{name:n,title:(0,x.jsx)(k.J$,{title:e,count:a})}}))];function y(){return(0,x.jsxs)("div",{className:"mailpoet-main-container",children:[(0,x.jsx)(u.Q,{}),(0,x.jsx)(f.m,{heading:(0,l.__)("Start with a template","mailpoet"),headingPrefix:(0,x.jsx)(f.x,{href:g.MailPoet.urls.automationListing,label:(0,l.__)("Back to automation list","mailpoet")}),children:(0,x.jsx)(j,{})}),(0,x.jsx)(k.x4,{tabs:C,children:t=>(0,x.jsx)(k.rj,{children:i.U.filter((e=>"all"===t.name||e.category===t.name)).map((t=>(0,x.jsx)(s.v,{template:t},t.slug)))})}),(0,x.jsxs)(k.$_,{children:[(0,x.jsx)("p",{children:(0,l.__)("Can’t find what you’re looking for?","mailpoet")}),(0,x.jsx)(j,{variant:"link"})]})]})}window.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("mailpoet_automation_templates");t&&((0,o.registerTranslations)(),(0,r.q)(),(0,a.s)(t).render((0,x.jsx)(y,{})))}))},65311:function(t){t.exports=jQuery}},function(t){t.O(0,[351],(function(){return 57384,t(t.s=57384)})),t.O()}]);