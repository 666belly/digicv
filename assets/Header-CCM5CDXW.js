import{r as i,j as s,R as u}from"./index-Cvr6RyB8.js";function d(){const r=`Hi, I'm Isabel,
Welcome to my portfolio!`,[a,n]=i.useState(""),[e,o]=i.useState(0);return i.useEffect(()=>{if(e===0){const t=setTimeout(()=>o(1),500);return()=>clearTimeout(t)}if(e>0&&e<=r.length){const t=setTimeout(()=>{n(r.substring(0,e)),o(e+1)},100);return()=>clearTimeout(t)}},[e,r]),s.jsxs("header",{id:"header",children:[s.jsx("div",{className:"typewriter",children:a.split(`
`).map((t,c)=>s.jsxs(u.Fragment,{children:[t,s.jsx("br",{})]},c))}),"    "]})}export{d as default};
