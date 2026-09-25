import { ArrowUpRight, Wrench, LayoutDashboard, History, Plus, ArrowRight, CornerDownRight } from 'lucide-react'

function LandingPage() {
  return (
    <main className="workspace">
      <aside className="sidebar">
        <a className="brand" href="#top"><span className="brand-mark"><Wrench size={19} /></span>ToolLocker<span className="brand-period">.</span></a>
        <div className="sidebar-label">THE WORKSHOP</div>
        <nav aria-label="Main navigation">
          <a className="side-link selected" href="#top" aria-current="page"><LayoutDashboard size={18} /> Overview <span>01</span></a>
          <a className="side-link" href="#login"><Plus size={18} /> Record a loan <ArrowUpRight size={14} /></a>
          <a className="side-link" href="#login"><History size={18} /> Loan history <ArrowUpRight size={14} /></a>
        </nav>
        <div className="sidebar-bottom"><span className="small-cross">+</span><p>Good tools.<br />Better keeping.</p><small>BUILT FOR WORKSHOP OWNERS</small></div>
      </aside>
      <div className="workspace-main">
        <header className="topbar"><span><span className="muted">Workspace /</span> Overview</span><a className="btn btn-outline btn-sm" href="#login">Log in <ArrowUpRight size={16} /></a></header>
        <div className="workspace-content">
          <section className="overview-heading reveal"><div><p className="eyebrow">LESS CHASING. MORE MAKING.</p><h1>Your tools.<br />Accounted for<span>.</span></h1><p className="lead">A simple home for every loan, every borrower,<br className="desktop-break" /> and every return. Keep your workshop moving.</p></div><a className="btn btn-primary" href="#login">Start keeping track <ArrowUpRight size={18} /></a></section>
          <div className="overview-grid">
            <section className="blueprint-panel reveal" aria-labelledby="blueprint-heading">
              <div className="panel-top"><span className="mono">01 / KEEP IT TOGETHER</span><span className="crosshair">+</span></div>
              <svg className="tool-drawing" viewBox="0 0 520 250" fill="none" aria-hidden="true">
                <defs><pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" stroke="#FFFFFF" strokeOpacity=".07" /></pattern></defs>
                <rect width="520" height="250" fill="url(#grid)" />
                <g stroke="#a8b4b8" strokeWidth="1" strokeDasharray="4 6" opacity=".5"><path d="M30 125H495M265 12V242M106 36V221M430 36V221" /></g>
                <g transform="translate(85 34) rotate(-12 160 90)" stroke="#e3e8e8" strokeWidth="2" strokeLinejoin="round">
                  <path d="M34 55L66 29H218L238 47V105L214 119H143L158 191H104L87 119H66L34 97Z" fill="#354149" />
                  <path d="M238 49H271V99H238M271 57H291V90H271M291 67H344V80H291M66 29V119M79 44H126M79 55H126M79 66H126M152 45H204V81H152Z" />
                  <path d="M103 177H160L170 203H96V188ZM149 123H178L169 144H155" fill="#FF6700" stroke="#FF6700" />
                  <path d="M102 123L116 167M116 121L130 167M130 122L143 166" strokeOpacity=".4" />
                  <circle cx="188" cy="99" r="4" stroke="#FF6700" />
                </g>
                <path d="M335 178H422V202" stroke="#FF6700" /><circle cx="335" cy="178" r="3" fill="#FF6700" /><text x="428" y="207" fill="#bfcacd" fontSize="10" fontFamily="monospace">ON RECORD</text>
                <path d="M23 25V10H38M482 10H497V25M23 225V240H38M482 240H497V225" stroke="#71797E" />
              </svg>
              <div className="blueprint-caption"><h2 id="blueprint-heading">Out of the workshop.<br />Never out of sight.</h2><p>Know who has it.<br />Know when it’s coming back.</p></div>
            </section>
            <section className="records-panel reveal" aria-labelledby="records-heading">
              <div className="panel-top"><h2 id="records-heading">The loan book</h2><span className="example-label">EXAMPLE RECORDS</span></div>
              <p className="panel-description">The details that matter, in one place.</p>
              <div className="record-table" role="table" aria-label="Example loans, not live workshop data">
                <div className="record-line record-labels" role="row"><span role="columnheader">TOOL / BORROWER</span><span role="columnheader">DUE DATE</span><span role="columnheader">STATUS</span></div>
                {[['Angle Grinder 1','Daniel Okafor','24 Sep 2026','Overdue'],['Drill Set','Chika Nwosu','28 Sep 2026','Borrowed'],['Circular Saw','Emeka Obi','30 Sep 2026','Returned']].map(([tool,borrower,date,status])=><div className="record-line" role="row" key={tool}><span role="cell"><strong>{tool}</strong><small>{borrower}</small></span><span className="record-date" role="cell">{date}</span><span role="cell" className={`loan-status status-${status.toLowerCase()}`}>{status}</span></div>)}
              </div>
              <a className="record-link" href="#login">Your next loan starts here <ArrowRight size={17} /></a>
            </section>
          </div>
          <section className="pillars reveal" aria-label="How ToolLocker works">
            <div><span className="pillar-number">01</span><div><h3>Record the handover</h3><p>Tool, borrower, phone number, return date.</p></div><CornerDownRight size={21} /></div>
            <div><span className="pillar-number">02</span><div><h3>Keep an eye on returns</h3><p>Find outstanding and overdue loans.</p></div><CornerDownRight size={21} /></div>
            <div><span className="pillar-number">03</span><div><h3>Close the loop</h3><p>Mark it returned. Keep the history.</p></div><CornerDownRight size={21} /></div>
          </section>
          <footer className="workspace-footer"><span><i /> Made for the workbench.</span><span>LESS GUESSWORK. MORE HEADSPACE.</span></footer>
        </div>
      </div>
    </main>
  )
}
export default LandingPage
