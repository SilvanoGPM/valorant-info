import { useEffect } from 'react';

import { HttpAgentGateway } from '$core/infra/gateways/http-agent-gateway';
import { FindAgentByNameUseCase } from '$core/app/use-cases/agent/find-agent-by-name-use-case';

const agentGateway = new HttpAgentGateway();
const findByName = new FindAgentByNameUseCase(agentGateway);

export default function Home() {
  useEffect(() => {
    async function load() {
      const { agent } = await findByName.execute('FADE');

      console.log(agent);
    }

    load();
  }, []);

  return <h1>Valorant</h1>;
}
