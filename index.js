"use strict";module.exports=(t,{services:e,env:a})=>{const{AssetsService:n,MailService:s}=e;t.post("/",(async(t,e,c)=>{const l=new s({accountability:t.accountability,schema:c}),i=new n({accountability:t.accountability,schema:t.schema}),{body:o}=t;(async n=>{if(!(null!=a.EMAIL_ALLOW_GUEST_SEND&&a.EMAIL_ALLOW_GUEST_SEND||null!=t.accountability.user&&null!=t.accountability.role))return e.status(400).send({message:"User not authorized, enable guest sending or include a token"});await l.send(n).then((()=>{e.send("sent")}))})(await(async t=>{let e=new Object;if(e.to=t.to,e.template=t.template,e.subject=t.subject,e.attachments=t.attachments,null==e.attachments&&(e.attachments=new Array),null!=t.files||t.files.length>0){let a=await(async t=>{let e=new Array,a=new Array;return a=await Promise.all(t.map((function(t){return i.getAsset(t,{})}))),a.forEach((t=>{const{stream:a,file:n}=t;let s=new Object;s.contentType=n.type,s.filename=n.filename_download,s.content=a,e.push(s)})),e})(t.files);e.attachments=e.attachments.concat(a)}return e})(o))}))};
