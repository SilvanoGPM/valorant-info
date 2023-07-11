import { GetStaticProps } from 'next';

import type { GetMapsUseCase } from '$core/app/use-cases/map/get-maps-use-case';
import type { MapProps } from '$core/domain/entities/map';
import { container, Registry } from '$core/infra/container-registry';

const getMaps = container.get<GetMapsUseCase>(Registry.GetMaps);

interface MapsProps {
  maps: MapProps[];
}

export default function Maps({ maps }: MapsProps) {
  console.log(maps);

  return <></>;
}

export const getStaticProps: GetStaticProps<MapsProps> = async () => {
  const { maps } = await getMaps.execute();

  const jsonMaps = maps.map((map) => map.toJSON());

  return {
    props: { maps: jsonMaps },
  };
};
