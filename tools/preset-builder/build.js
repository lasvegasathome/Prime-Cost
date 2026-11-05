// Builds preset saves from the definitions in ./defs and checks each one by playing a year of it.
//   node tools/preset-builder/build.js                 build every definition
//   node tools/preset-builder/build.js di-fara kogi    build only these
// Needs Playwright with Chromium. Logos are PNGs in ./logos, at most 320 pixels on their longest side.
const {chromium}=require('playwright');
const fs=require('fs'), path=require('path');
const ROOT=path.resolve(__dirname,'../..'), DEFS=path.join(__dirname,'defs'), LOGOS=path.join(__dirname,'logos');

(async()=>{
  const only=process.argv.slice(2);
  const files=fs.readdirSync(DEFS).filter(f=>f.endsWith('.js')).filter(f=>!only.length||only.includes(f.replace(/\.js$/,''))).sort();
  const b=await chromium.launch();
  const page=async()=>{ const p=await b.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(String(e).slice(0,200))); p.on('dialog',d=>d.dismiss()); p.on('console',m=>{ if(/^KIT /.test(m.text())) console.log('  '+m.text()); });
    await p.route(/fonts\.(googleapis|gstatic)/,r=>r.abort()); await p.goto('file://'+path.join(ROOT,'index.html')); return {p,errs}; };
  let failed=0;
  for(const f of files){
    const slug=f.replace(/\.js$/,''); delete require.cache[require.resolve(path.join(DEFS,f))];
    const D=require(path.join(DEFS,f));
    const logoFile=path.join(LOGOS,(D.logoFile||slug)+'.png');
    D.logo=fs.existsSync(logoFile)? 'data:image/png;base64,'+fs.readFileSync(logoFile).toString('base64') : null;
    const {p,errs}=await page(); await p.addScriptTag({path:path.join(__dirname,'page-builder.js')});
    let json; try{ json=await p.evaluate(D=>window.__buildPreset(D),D); }catch(e){ console.log(`${slug}: BUILD FAILED ${String(e).slice(0,300)}`); failed++; await p.close(); continue; }
    await p.close();
    const out=path.join(ROOT,'presets',`prime-cost-${slug}.json`); fs.writeFileSync(out,json);

    // play it: import into a fresh page and run twelve months with no Claude
    const v=await page();
    const r=await v.p.evaluate(t=>{ try{ importSave(t,{textContent:""}); const c0=S.cash;
        for(let i=0;i<12;i++){ advanceMonth(); document.querySelectorAll('.modal').forEach(x=>x.remove()); if(S.gameOver) break; }
        const h=S.history, sum=k=>h.reduce((a,r)=>a+(r[k]||0),0), rev=sum("rev")||1;
        return {months:h.length, rev:Math.round(rev), prime:sum("prime")/rev, occ:sum("occ")/rev, ebitda:sum("ebitda")/rev, covers:sum("covers"), lost:sum("lost"), cash0:c0, cash:Math.round(S.cash), over:S.gameOver&&S.gameOver.kind||null, dishes:S.menu.dishes.length, kit:(S.locations[0].kit||[]).length};
      }catch(e){ return {err:String(e).slice(0,300)}; } },json);
    await v.p.close();
    const kb=Math.round(json.length/1024), P=x=>(x*100).toFixed(1)+'%';
    if(r.err||errs.length||v.errs.length){ failed++; console.log(`${slug}: FAILED ${r.err||''} ${errs.concat(v.errs).slice(0,2).join(' | ')}`); continue; }
    console.log(`${slug.padEnd(24)} ${String(kb).padStart(4)} KB  year one: revenue ${(r.rev/1e6).toFixed(2)}M, prime ${P(r.prime)}, occupancy ${P(r.occ)}, EBITDA ${P(r.ebitda)}, covers ${r.covers}, lost ${r.lost}, cash ${r.cash0} -> ${r.cash}${r.over?`, GAME OVER (${r.over})`:''}  [${r.dishes} dishes, ${r.kit} kit]`);
  }
  await b.close(); if(failed) process.exitCode=1;
})();
