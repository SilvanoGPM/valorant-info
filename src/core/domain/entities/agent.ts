export interface Ability {
  slot: string;
  name: string;
  description: string;
  icon: string;
}

interface Role {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface AgentImages {
  small: string;
  normal: string;
  bust: string;
  full: string;
  killfeed: string;
  background: {
    image: string;
    gradient: string[];
  };
}

interface AgentProps {
  id: string;
  name: string;
  description: string;
  images: AgentImages;
  role: Role;
  abilities: Ability[];
}

export class Agent {
  constructor(private props: AgentProps) {}

  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public get description() {
    return this.props.description;
  }

  public get images() {
    return this.props.images;
  }

  public get role() {
    return this.props.role;
  }

  public get abilities() {
    return this.props.abilities;
  }
}
