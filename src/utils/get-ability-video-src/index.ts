import { formatToURL } from '../format-to-url';

export type Key = 'C' | 'Q' | 'E' | 'X';

interface GetAbilityVideoSrcParams {
  agentName: string;
  key: Key;
}

type SpecialCase = Record<
  string,
  {
    C?: string;
    Q?: string;
    E?: string;
    X?: string;
  }
>;

const specialCases: SpecialCase = {
  Chamber: {
    X: 'X_TourDeForce',
  },

  Fade: {
    C: 'C-Prowler_video',
    Q: 'Q-Seize_video',
    E: 'E-Haunt_video',
    X: 'X-Nightfall_Video',
  },

  Gekko: {
    C: 'gekko-moshpit',
    Q: 'gekko-wingman',
    E: 'gekko-dizzy',
    X: 'gekko-trash',
  },

  'KAY/O': {
    C: 'KAYO_Q',
    Q: 'KAYO_C',
  },

  Killjoy: {
    C: 'killjoy-nanoswarm',
    Q: 'killjoy-alarmbot',
    E: 'killjoy-turret',
    X: 'killjoy-lockdown',
  },

  Sage: {
    E: 'Sage_E_2',
  },

  Yoru: {
    C: 'Yoru_Rework_Fakeout_C',
    Q: 'Yoru_Abilities_Blindside_Q',
    E: 'Yoru_Rework_Gatecrash_E',
    X: 'Yoru_Rework_Dimensional_Drift_X',
  },
};

function getVideoPath(agentName: string, key: Key): string {
  const specialCase = specialCases[agentName as keyof typeof specialCases];

  if (specialCase) {
    const keyCase = specialCase[key as keyof typeof specialCase]!;

    if (keyCase) {
      return keyCase;
    }
  }

  return `${agentName.replaceAll('/', '')}_${key}`;
}

export function getAbilityVideoSrc({
  agentName,
  key,
}: GetAbilityVideoSrcParams) {
  const agentUrlName = formatToURL(agentName);
  const videoKey = getVideoPath(agentName, key);

  return `https://blitz-cdn-videos.blitz.gg/valorant/agents/${agentUrlName}/abilities/${videoKey}.mp4#t=0.1`;
}
