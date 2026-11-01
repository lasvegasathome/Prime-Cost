/* Runs inside index.html (through Playwright). Takes a preset definition and builds a starting save through the same path the
   setup screen uses: a sanitized spec becomes the custom concept and market, newGame() creates the business, and then the parts a
   preset defines by hand (menu, team, suppliers, setting, brand, country, ownership) are set before the engine backfills the rest. */
window.__buildPreset = function(D){
  const cats=["produce","meat","seafood","dairy","pantry","luxury"];
  const base=specFromPreset(D.baseConcept||"bistro",D.baseMarket||"suburb");
  const sp=sanitizeSpec(Object.assign({},D.spec,{bizName:D.bizName,ownerName:D.ownerName||"You",circumstances:D.circumstances,
    opening:D.opening||"",startMonth:D.startMonth==null?0:D.startMonth}),base);
  adoptSpec(sp);
  Object.assign(setupCfg,{seedText:D.seed||D.bizName,traits:D.traits||[],savings:sp.savings,loan:sp.loan,loanKind:sp.loanKind,investor:sp.investor||0});
  S=null;
  const g=newGame(setupCfg); S=g;
  S.log=[{when:`${MONTHS[S.calMonth]} Y1`,tone:"warn",text:D.circumstances}];
  if(D.epoch){ S.epoch=D.epoch; S.epochChecked=true; }
  S.circumstances=D.circumstances; S.origin=""; S.slotName=`${D.bizName} (starting save)`;
  Object.assign(S.world,{notes:D.notes,living:true},D.world||{});
  if(D.expansions) S.expansions=Object.assign({},D.expansions);

  // the country the business is in, when it isn't the United States
  if(D.country){ const I=intl(); const c=sanitizeCountry(D.country); c.builtIn=false; c.source=D.country.source||"";
    I.countries[c.name]=c; I.home=c.name; I.fx={}; }

  // money
  S.cash=Math.round(D.cash);
  S.loans=(D.loans||[]).map(l=>({id:uid(),kind:l.kind||"bank",label:l.label||"Bank loan",principal:l.amount,rate:l.rate,term:l.term,remaining:l.remaining??l.amount,
    monthsLeft:l.monthsLeft??l.term,payment:amortPayment(l.remaining??l.amount,l.rate,l.monthsLeft??l.term)}));
  if(D.creditLine) Object.assign(S.creditLine,D.creditLine);
  S.equityInvestor=D.equityInvestor||0;

  // the room and its place
  const L=S.locations[0];
  Object.assign(L,{name:D.locName||D.bizName,monthsOpen:D.monthsOpen??0},D.loc||{});
  if(D.setting) L.setting=Object.assign({custom:true,check:1,traffic:1,season:[1,1,1,1,1,1,1,1,1,1,1,1],seg:{},crime:20,ev:[],drift:null,source:""},D.setting);
  if(D.features) L.features=D.features.map(f=>Object.assign({id:"f"+uid(),when:"before you took over",weeks:0,original:true,cost:0,prestige:1},f));
  if(D.hours) L.hours=D.hours;
  if(D.cashOnly) L.cashOnly=true;
  if(D.mkt) L.mkt=D.mkt;

  // the people
  if(D.team) S.team=D.team.map(t=>Object.assign({id:uid(),away:false,stress:30,loyalty:66,ambition:45,fame:0,certs:[]},t));

  // the menu
  if(D.menu){ S.menu=Object.assign({format:"carte",tastingPrice:0,pairing:false,pairingPrice:0,coherence:80,creBonus:0,notes:"",v2:1},D.menu,
    {dishes:D.menu.dishes.map(d=>Object.assign({id:uid(),signature:false,off:false,note:"",src:"preset",sec:"food",grade:2,technique:2,presentation:2,creativity:40},d))}); }

  // the supply chain
  if(D.suppliers){ S.supplierPool=D.suppliers.map((s,i)=>Object.assign({id:"sp_"+(s.key||i),q:55,price:1,reliability:.95,terms:"net14",relation:55,green:false,monthsWith:24},s));
    S.suppliers={}; for(const c of cats){ const s=S.supplierPool.find(x=>x.cats.includes(c)); if(s) S.suppliers[c]=s.id; } }

  S.mods=(D.mods||[]).map(m=>Object.assign({id:uid(),left:null,loc:-1,src:D.bizName},m));
  if(D.dials) Object.assign(S.dials,D.dials);
  if(D.programs) Object.assign(S.programs,D.programs);
  if(D.cellar) Object.assign(S.cellar,D.cellar);
  if(D.namesake) S.namesake=D.namesake;
  if(D.ownership) S.ownership=Object.assign({type:"management",budget:0,yearEbitda:0,earned:0,yearFees:0,distributed:0,funded:0,misses:0,reserveFloor:Math.round(D.cash)},D.ownership);
  if(D.franchise) S.franchise=D.franchise;
  if(D.tipPolicy) S.tipPolicy=D.tipPolicy;
  if(D.deliveryPlan) S.deliveryPlan=D.deliveryPlan;
  if(D.actionsMax) S.actionsMax=D.actionsMax;
  if(D.heat){ const H=heat(); Object.assign(H,D.heat); }
  S.brand=Object.assign({logo:D.logo},D.brand||{});

  // the engine fills in everything that follows from the above: equipment the menu needs, people's backstories, prices it derives
  kitForStarterMenu(S);
  if(D.after) (new Function("S",D.after))(S);
  const st=hydrate(JSON.parse(JSON.stringify(S)));
  st.savedAt=Date.now();
  return JSON.stringify({game:"prime-cost",format:3,exportedAt:new Date().toISOString(),state:st});
};
