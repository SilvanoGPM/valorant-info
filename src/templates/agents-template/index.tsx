import { Box, Center, Heading, Text } from '@chakra-ui/react';

import type { AgentProps } from '$core/domain/entities/agent';
import { glassmorphismContainer } from '$styles/tokens';

import { AgentsList } from './components/agents-list';
import { HighlightText } from '$components/highlight-text';

export interface AgentsTemplateProps {
  agents: AgentProps[];
}

export function AgentsTemplate({ agents }: AgentsTemplateProps) {
  return (
    <Center mx="auto" p="4" maxW="1300px">
      <Center
        w="full"
        p="8"
        rounded="lg"
        flexDir="column"
        sx={glassmorphismContainer({ showBorder: false })}
      >
        <Box textAlign="center" mb="8">
          <Heading mb="4">Agentes</Heading>

          <Text maxW="650px" color="gray.300">
            Atualmente são{' '}
            <HighlightText>{agents.length} personagens</HighlightText> para você
            escolher, com diversas funções e habilidades, além de cada um ter
            sua função como Duelistas, Iniciadores, Controladores e Sentinelas.
          </Text>
        </Box>

        <AgentsList agents={agents} />
      </Center>
    </Center>
  );
}
