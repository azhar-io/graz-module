"use strict";var a=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var t=(f,e,p,x)=>{if(e&&typeof e=="object"||typeof e=="function")for(let m of c(e))!d.call(f,m)&&m!==p&&a(f,m,{get:()=>e[m],enumerable:!(x=b(e,m))||x.enumerable});return f},r=(f,e,p)=>(t(f,e,"default"),p&&t(p,e,"default"));var g=f=>t(a({},"__esModule",{value:!0}),f);var o={};module.exports=g(o);r(o,require("@keplr-wallet/cosmos"),module.exports);r(o,require("@keplr-wallet/types"),module.exports);