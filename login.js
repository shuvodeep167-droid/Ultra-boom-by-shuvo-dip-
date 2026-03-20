export default function handler(req,res){
  const {id,pass}=req.query;
  const LICENSES=[
    {id:"shuvo10",pass:"shuvo10",exp:"2026-03-01"},
    {id:"client1",pass:"client123",exp:"2026-12-31"}
  ];
  const u=LICENSES.find(x=>x.id===id&&x.pass===pass);
  if(!u) return res.json({ok:false,msg:"Invalid"});
  if(new Date()>new Date(u.exp)) return res.json({ok:false,msg:"Expired"});
  res.json({ok:true,expires:u.exp});
}