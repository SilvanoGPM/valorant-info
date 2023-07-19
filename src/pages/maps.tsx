import { GetStaticProps } from 'next';

import type { GetMapsUseCase } from '$core/app/use-cases/map/get-maps-use-case';
import { container, Registry } from '$core/infra/container-registry';
import { MapsTemplate, MapsTemplateProps } from '$templates/maps-template';

const getMaps = container.get<GetMapsUseCase>(Registry.GetMaps);

export default function Maps(props: MapsTemplateProps) {
  return <MapsTemplate {...props} />;
}

export const getStaticProps: GetStaticProps<MapsTemplateProps> = async () => {
  const { maps } = await getMaps.execute();

  const jsonMaps = maps.map((map) => map.toJSON());

  return {
    props: { maps: jsonMaps },
  };
};
