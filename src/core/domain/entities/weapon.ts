interface WeaponImages {
  buy: string;
  killfeed: string;
}

export interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  runSpeedMultiplier: number;
  firstBulletAccurancy: number;
}

interface WeaponShop {
  cost: number;
  category: {
    type?: string | null;
    text?: string | null;
  };
}

interface WeaponModification {
  id: string;
  name: string;
  image?: string | null;
  video?: string | null;
}

export interface WeaponSkin {
  id: string;
  name: string;
  image: string;
  chromas: WeaponModification[];
  levels: WeaponModification[];
}

export interface WeaponProps {
  id: string;
  name: string;
  images: WeaponImages;
  stats: WeaponStats;
  shop: WeaponShop;
  skins: WeaponSkin[];
}

export class Weapon {
  constructor(private props: WeaponProps) {}

  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public get images() {
    return this.props.images;
  }

  public get stats() {
    return this.props.stats;
  }

  public get shop() {
    return this.props.shop;
  }

  public get skins() {
    return this.props.skins;
  }

  toJSON() {
    return this.props;
  }
}
