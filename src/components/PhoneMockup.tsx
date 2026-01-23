const PhoneMockup = () => {
  return (
    <div className="relative w-[260px] h-[520px] animate-float">
      {/* Phone outer frame - dark bezel */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-[#1a1a1a] shadow-2xl shadow-black/20">
        {/* Screen area */}
        <div className="absolute inset-[8px] rounded-[2rem] bg-background overflow-hidden border border-border/50">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-2 bg-background">
            <span className="text-[10px] font-medium text-foreground">9:41</span>
            <div className="flex items-center gap-0.5">
              <svg className="w-3 h-3 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3C6.5 3 2 6.58 2 11c0 2.03 1 3.93 2.75 5.35L3.5 21l5-2.5c1.1.35 2.3.5 3.5.5 5.5 0 10-3.58 10-8s-4.5-8-10-8z" opacity="0.3"/>
              </svg>
              <svg className="w-3 h-3 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
              </svg>
              <div className="ml-0.5 w-5 h-2.5 rounded-sm border border-foreground/80 relative">
                <div className="absolute inset-[1px] right-[1px] bg-foreground rounded-[1px]" style={{width: '80%'}} />
                <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1px] h-1 bg-foreground/80 rounded-r" />
              </div>
            </div>
          </div>
          
          {/* App content */}
          <div className="px-3 pt-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-base font-semibold text-foreground">Your Events</span>
              <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            {/* Search bar */}
            <div className="bg-muted rounded-lg px-3 py-2 mb-3 flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xs text-muted-foreground">Search events...</span>
            </div>
            
            {/* Category pills */}
            <div className="flex gap-1.5 mb-3 overflow-hidden">
              <div className="bg-primary text-primary-foreground px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap">
                All Events
              </div>
              <div className="bg-muted text-muted-foreground px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap">
                This Week
              </div>
              <div className="bg-muted text-muted-foreground px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap">
                Nearby
              </div>
            </div>
            
            {/* Event cards */}
            <div className="space-y-2">
              <div className="bg-muted rounded-xl p-2.5">
                <div className="w-full h-16 bg-markaz-green-light rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-xl">🕌</span>
                </div>
                <h4 className="text-xs font-medium text-foreground mb-0.5">Friday Prayer</h4>
                <p className="text-[10px] text-muted-foreground">Islamic Center • 1:30 PM</p>
              </div>
              
              <div className="bg-muted rounded-xl p-2.5">
                <div className="w-full h-16 bg-markaz-green-light rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-xl">📚</span>
                </div>
                <h4 className="text-xs font-medium text-foreground mb-0.5">Quran Study Circle</h4>
                <p className="text-[10px] text-muted-foreground">Masjid Al-Noor • 7:00 PM</p>
              </div>
            </div>
          </div>
          
          {/* Bottom navigation */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <span className="text-[8px] text-primary font-medium">Home</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-5 h-5 rounded bg-muted flex items-center justify-center">
                  <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="text-[8px] text-muted-foreground">Search</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-5 h-5 rounded bg-muted flex items-center justify-center">
                  <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <span className="text-[8px] text-muted-foreground">Saved</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-5 h-5 rounded bg-muted flex items-center justify-center">
                  <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-[8px] text-muted-foreground">Profile</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1a1a1a] rounded-full" />
        
        {/* Side buttons */}
        <div className="absolute -right-[2px] top-24 w-[3px] h-8 bg-[#1a1a1a] rounded-r" />
        <div className="absolute -left-[2px] top-20 w-[3px] h-6 bg-[#1a1a1a] rounded-l" />
        <div className="absolute -left-[2px] top-32 w-[3px] h-10 bg-[#1a1a1a] rounded-l" />
        <div className="absolute -left-[2px] top-44 w-[3px] h-10 bg-[#1a1a1a] rounded-l" />
      </div>
    </div>
  );
};

export default PhoneMockup;