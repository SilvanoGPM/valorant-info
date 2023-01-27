import { useEffect, useState } from 'react';
import {
  Center,
  VStack,
  Image,
  Button,
  Flex,
  useBoolean,
  Heading,
  Tooltip,
  Text,
  HStack,
} from '@chakra-ui/react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { GetAgentsUseCase } from '$core/app/use-cases/agent/get-agents-use-case';
import { container } from '$core/infra/container-registry';
import { Registry } from '$core/infra/container-registry/registry';
import { Agent } from '$core/domain/entities/agent';
import { glassmorphismContainer, thinScrollbar } from '$styles/tokens';
import { fillZero } from '$utils/fill-zero';

const getAgents = container.get<GetAgentsUseCase>(Registry.GetAgents);

export default function Home() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgentName, setSelectedAgentName] = useState('fade');

  const [showImage, showImageActions] = useBoolean(true);

  const selectedAgent = agents.find(
    (agent) => agent.name.toLocaleLowerCase() === selectedAgentName,
  );

  useEffect(() => {
    async function loadAgents() {
      const { agents } = await getAgents.execute();

      setAgents(agents);
    }

    if (agents.length === 0) {
      loadAgents();
    }
  }, [agents]);

  return (
    <Center h="100vh" mx="auto" p="4" maxW="1300px">
      <Flex
        maxH="500px"
        justify="center"
        w="full"
        sx={glassmorphismContainer()}
        p="8"
        rounded="lg"
      >
        <VStack
          as={ScrollContainer}
          align="start"
          spacing="0"
          overflowY="auto"
          sx={thinScrollbar}
        >
          {agents.map((agent, index) => {
            const highlightColor =
              selectedAgentName === agent.name.toLocaleLowerCase()
                ? 'brand.500'
                : 'inherit';

            return (
              <Flex key={agent.id} color={highlightColor}>
                <Text mr="2" mt="2">
                  {fillZero(index + 1)}
                </Text>
                <Button
                  onClick={() => {
                    if (agent.name !== selectedAgent?.name) {
                      setSelectedAgentName(agent.name.toLocaleLowerCase());
                      showImageActions.off();
                    }
                  }}
                  fontSize="3xl"
                  fontWeight="black"
                  textTransform="uppercase"
                  variant="unstyled"
                >
                  {agent.name}
                </Button>
              </Flex>
            );
          })}
        </VStack>

        {selectedAgent && (
          <Flex align="start">
            <Image
              src={selectedAgent.images.full}
              maxH="400px"
              transform={`scale(${showImage ? '1' : '0'})`}
              transition="0.2s ease-in-out"
              onLoad={showImageActions.on}
            />

            <VStack align="start" spacing="8">
              <HStack align="center" mt="8">
                <Heading as="h3" fontWeight="black">
                  {selectedAgent.role.name}
                </Heading>

                <Tooltip label={selectedAgent.role.description}>
                  <Image
                    ml="2"
                    src={selectedAgent.role.icon}
                    w="6"
                    h="6"
                    cursor="pointer"
                  />
                </Tooltip>
              </HStack>

              <Text maxW="400px" textAlign="justify">
                {selectedAgent.description}
              </Text>

              <HStack as={ScrollContainer} w="400px">
                {selectedAgent.abilities
                  .filter((ability) => Boolean(ability.icon))
                  .map((ability) => (
                    <Tooltip key={ability.slot} label={ability.description}>
                      <Center
                        cursor="pointer"
                        flexDir="column"
                        p="4"
                        minW="28"
                        minH="28"
                        textAlign="center"
                        sx={glassmorphismContainer()}
                      >
                        <Image src={ability.icon} w="10" h="10" />
                        <Text
                          mt="2"
                          fontSize="xx-small"
                          textTransform="uppercase"
                          fontWeight="bold"
                          textAlign="center"
                        >
                          {ability.name}
                        </Text>
                      </Center>
                    </Tooltip>
                  ))}
              </HStack>
            </VStack>
          </Flex>
        )}
      </Flex>
    </Center>
  );
}
