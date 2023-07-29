import { getAbilityVideoSrc } from '.';

describe('getAbilityVideoSrc util', () => {
  it('should get default video of agent ability', () => {
    const breachC = getAbilityVideoSrc({ agentName: 'Breach', key: 'C' });

    const expectedC =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/breach/abilities/Breach_C.mp4#t=0.1';

    expect(breachC).toEqual(expectedC);
  });

  it('should get video of chamber X ability', () => {
    const chamberX = getAbilityVideoSrc({ agentName: 'Chamber', key: 'X' });

    const expectedX =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/chamber/abilities/X_TourDeForce.mp4#t=0.1';

    expect(chamberX).toEqual(expectedX);
  });

  it('should get videos of fade abilities', () => {
    const fadeC = getAbilityVideoSrc({ agentName: 'Fade', key: 'C' });
    const fadeQ = getAbilityVideoSrc({ agentName: 'Fade', key: 'Q' });
    const fadeE = getAbilityVideoSrc({ agentName: 'Fade', key: 'E' });
    const fadeX = getAbilityVideoSrc({ agentName: 'Fade', key: 'X' });

    const expectedC =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/fade/abilities/C-Prowler_video.mp4#t=0.1';

    const expectedQ =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/fade/abilities/Q-Seize_video.mp4#t=0.1';

    const expectedE =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/fade/abilities/E-Haunt_video.mp4#t=0.1';

    const expectedX =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/fade/abilities/X-Nightfall_Video.mp4#t=0.1';

    expect(fadeC).toEqual(expectedC);
    expect(fadeQ).toEqual(expectedQ);
    expect(fadeE).toEqual(expectedE);
    expect(fadeX).toEqual(expectedX);
  });

  it('should get videos of gekko abilities', () => {
    const gekkoC = getAbilityVideoSrc({ agentName: 'Gekko', key: 'C' });
    const gekkoQ = getAbilityVideoSrc({ agentName: 'Gekko', key: 'Q' });
    const gekkoE = getAbilityVideoSrc({ agentName: 'Gekko', key: 'E' });
    const gekkoX = getAbilityVideoSrc({ agentName: 'Gekko', key: 'X' });

    const expectedC =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/gekko/abilities/gekko-moshpit.mp4#t=0.1';

    const expectedQ =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/gekko/abilities/gekko-wingman.mp4#t=0.1';

    const expectedE =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/gekko/abilities/gekko-dizzy.mp4#t=0.1';

    const expectedX =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/gekko/abilities/gekko-trash.mp4#t=0.1';

    expect(gekkoC).toEqual(expectedC);
    expect(gekkoQ).toEqual(expectedQ);
    expect(gekkoE).toEqual(expectedE);
    expect(gekkoX).toEqual(expectedX);
  });

  it('should get videos of kayo C and Q abilities', () => {
    const kayoC = getAbilityVideoSrc({ agentName: 'KAY/O', key: 'C' });
    const kayoQ = getAbilityVideoSrc({ agentName: 'KAY/O', key: 'Q' });

    const expectedC =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/kayo/abilities/KAYO_Q.mp4#t=0.1';

    const expectedQ =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/kayo/abilities/KAYO_C.mp4#t=0.1';

    expect(kayoC).toEqual(expectedC);
    expect(kayoQ).toEqual(expectedQ);
  });

  it('should get videos of killjoy abilities', () => {
    const killjoyC = getAbilityVideoSrc({ agentName: 'Killjoy', key: 'C' });
    const killjoyQ = getAbilityVideoSrc({ agentName: 'Killjoy', key: 'Q' });
    const killjoyE = getAbilityVideoSrc({ agentName: 'Killjoy', key: 'E' });
    const killjoyX = getAbilityVideoSrc({ agentName: 'Killjoy', key: 'X' });

    const expectedC =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/killjoy/abilities/killjoy-nanoswarm.mp4#t=0.1';

    const expectedQ =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/killjoy/abilities/killjoy-alarmbot.mp4#t=0.1';

    const expectedE =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/killjoy/abilities/killjoy-turret.mp4#t=0.1';

    const expectedX =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/killjoy/abilities/killjoy-lockdown.mp4#t=0.1';

    expect(killjoyC).toEqual(expectedC);
    expect(killjoyQ).toEqual(expectedQ);
    expect(killjoyE).toEqual(expectedE);
    expect(killjoyX).toEqual(expectedX);
  });

  it('should get video of sage E ability', () => {
    const sageE = getAbilityVideoSrc({ agentName: 'Sage', key: 'E' });

    const expectedE =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/sage/abilities/Sage_E_2.mp4#t=0.1';

    expect(sageE).toEqual(expectedE);
  });

  it('should get videos of yoru abilities', () => {
    const yoruC = getAbilityVideoSrc({ agentName: 'Yoru', key: 'C' });
    const yoruQ = getAbilityVideoSrc({ agentName: 'Yoru', key: 'Q' });
    const yoruE = getAbilityVideoSrc({ agentName: 'Yoru', key: 'E' });
    const yoruX = getAbilityVideoSrc({ agentName: 'Yoru', key: 'X' });

    const expectedC =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/yoru/abilities/Yoru_Rework_Fakeout_C.mp4#t=0.1';

    const expectedQ =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/yoru/abilities/Yoru_Abilities_Blindside_Q.mp4#t=0.1';

    const expectedE =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/yoru/abilities/Yoru_Rework_Gatecrash_E.mp4#t=0.1';

    const expectedX =
      'https://blitz-cdn-videos.blitz.gg/valorant/agents/yoru/abilities/Yoru_Rework_Dimensional_Drift_X.mp4#t=0.1';

    expect(yoruC).toEqual(expectedC);
    expect(yoruQ).toEqual(expectedQ);
    expect(yoruE).toEqual(expectedE);
    expect(yoruX).toEqual(expectedX);
  });
});
