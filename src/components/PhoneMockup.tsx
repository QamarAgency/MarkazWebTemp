const PhoneMockup = () => {
  return (
    <div className="relative w-[280px] h-[580px] animate-float">
      {/* Phone outer frame - dark bezel */}
      <div className="absolute inset-0 rounded-[3rem] bg-[#1a1a1a] shadow-2xl shadow-black/25">
        {/* Screen area */}
        <div className="absolute inset-[10px] rounded-[2.5rem] bg-background overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 py-2 bg-background">
            <span className="text-xs font-semibold text-foreground">9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px]">
                <div className="w-[3px] h-2 bg-foreground rounded-sm" />
                <div className="w-[3px] h-2.5 bg-foreground rounded-sm" />
                <div className="w-[3px] h-3 bg-foreground rounded-sm" />
                <div className="w-[3px] h-3.5 bg-foreground rounded-sm" />
              </div>
              <svg className="w-4 h-4 text-foreground ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
              </svg>
              <div className="ml-1 w-6 h-3 rounded-sm border-2 border-foreground relative">
                <div className="absolute inset-[2px] bg-foreground rounded-[1px]" />
                <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1.5 bg-foreground rounded-r" />
              </div>
            </div>
          </div>
          
          {/* Navigation header */}
          <div className="flex items-center justify-between px-4 py-2">
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-lg font-semibold text-foreground">Waterloo</span>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
          </div>
          
          {/* Events list - scrollable area */}
          <div className="px-4 pb-16 overflow-hidden h-full">
            {/* November 20 */}
            <div className="mb-3">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-foreground">November 20</span>
                <span className="text-xs text-muted-foreground">/ Thursday</span>
              </div>
              <div className="flex gap-2.5 mb-2">
                <div className="w-16 h-12 rounded-lg bg-[#8fbc8f] flex items-center justify-center overflow-hidden">
                  <span className="text-[8px]">🌳</span>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 bg-[#e8f5e9] px-1.5 py-0.5 rounded text-[8px] text-primary mb-0.5">
                    <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"/>
                    </svg>
                    Al-Rahma Community
                  </div>
                  <h4 className="text-[10px] font-semibold text-foreground">Family Picnic & BBQ Day</h4>
                  <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth={2}/>
                      <path strokeWidth={2} d="M12 6v6l4 2"/>
                    </svg>
                    12:00 PM
                  </div>
                  <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    </svg>
                    Riverside Park
                  </div>
                </div>
              </div>
            </div>

            {/* November 25 */}
            <div className="mb-3">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-foreground">November 25</span>
                <span className="text-xs text-muted-foreground">/ Tuesday</span>
              </div>
              <div className="flex gap-2.5 mb-2">
                <div className="w-16 h-12 rounded-lg bg-[#87ceeb] flex items-center justify-center overflow-hidden">
                  <span className="text-[8px]">🏀</span>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 bg-[#e8f5e9] px-1.5 py-0.5 rounded text-[8px] text-primary mb-0.5">
                    <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"/>
                    </svg>
                    Community Sports League
                  </div>
                  <h4 className="text-[10px] font-semibold text-foreground">Basketball Tournament Finals</h4>
                  <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth={2}/>
                      <path strokeWidth={2} d="M12 6v6l4 2"/>
                    </svg>
                    5:00 PM
                  </div>
                  <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    </svg>
                    City Sports Complex
                  </div>
                </div>
              </div>
            </div>

            {/* December 2 */}
            <div className="mb-3">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm font-bold text-foreground">December 2</span>
                <span className="text-xs text-muted-foreground">/ Monday</span>
              </div>
              <div className="flex gap-2.5">
                <div className="w-16 h-12 rounded-lg bg-[#daa520] flex items-center justify-center overflow-hidden">
                  <span className="text-[8px]">📖</span>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 bg-[#e8f5e9] px-1.5 py-0.5 rounded text-[8px] text-primary mb-0.5">
                    <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"/>
                    </svg>
                    Islamic Center of Waterloo
                  </div>
                  <h4 className="text-[10px] font-semibold text-foreground">Quran Recitation Competition</h4>
                  <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth={2}/>
                      <path strokeWidth={2} d="M12 6v6l4 2"/>
                    </svg>
                    7:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2}/>
                    <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2}/>
                    <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2}/>
                    <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2}/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#1a1a1a] rounded-full z-10" />
        
        {/* Side buttons */}
        <div className="absolute -right-[2px] top-28 w-[3px] h-10 bg-[#1a1a1a] rounded-r" />
        <div className="absolute -left-[2px] top-24 w-[3px] h-7 bg-[#1a1a1a] rounded-l" />
        <div className="absolute -left-[2px] top-36 w-[3px] h-12 bg-[#1a1a1a] rounded-l" />
        <div className="absolute -left-[2px] top-52 w-[3px] h-12 bg-[#1a1a1a] rounded-l" />
      </div>
    </div>
  );
};

export default PhoneMockup;