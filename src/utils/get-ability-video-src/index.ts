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

    shouldRemoveAbilitiesStringInUrl?: boolean;
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

  Iso: {
    C: 'Iso_Ability_C',
    Q: 'Iso_Ability_Q',
    E: 'Iso_Ability_E',
    X: 'Iso_Ability_X-Larger',
  },

  Vyse: {
    Q: 'shear',
    E: 'arc rose',
    C: 'razorvine',
    X: 'steel garden',
    shouldRemoveAbilitiesStringInUrl: true,
  },

  Tejo: {
    C: 'Special Delivery',
    Q: 'Guided Salvo',
    E: 'Stealth Drone',
    X: 'Armageddon',
    shouldRemoveAbilitiesStringInUrl: true,
  },

  Clove: {
    C: 'Clove - Ability C',
    Q: 'Clove - Ability Q',
    E: 'Clove - Ability E',
    X: 'Clove - Ability X',
    shouldRemoveAbilitiesStringInUrl: true,
  },
};

function getVideoPath(agentName: string, key: Key): [string, boolean] {
  const specialCase = specialCases[agentName as keyof typeof specialCases];

  if (specialCase) {
    const keyCase = specialCase[key as keyof typeof specialCase] as string;

    if (keyCase) {
      return [
        keyCase,
        specialCase['shouldRemoveAbilitiesStringInUrl'] ?? false,
      ];
    }
  }

  return [`${agentName.replaceAll('/', '')}_${key}`, false];
}

export function getAbilityVideoSrc({
  agentName,
  key,
}: GetAbilityVideoSrcParams) {
  const agentUrlName = formatToURL(agentName);
  const [videoKey, shouldRemoveAbilitiesStringInUrl] = getVideoPath(
    agentName,
    key,
  );

  let baseUrl = `https://blitz-cdn-videos.blitz.gg/valorant/agents/${agentUrlName}/abilities`;

  if (shouldRemoveAbilitiesStringInUrl) {
    baseUrl = baseUrl.replace('abilities', '');
  }

  return `${baseUrl}/${videoKey}.mp4#t=0.1`;
}
