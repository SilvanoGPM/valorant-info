interface MapImages {
  inGame: string;
  inList: string;
  splash: string;
}

interface MapProps {
  id: string;
  name: string;
  coordinates: string;
  images: MapImages;
}

export class Map {
  constructor(private props: MapProps) {}

  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public get coordinates() {
    return this.props.coordinates;
  }

  public get images() {
    return this.props.images;
  }
}
