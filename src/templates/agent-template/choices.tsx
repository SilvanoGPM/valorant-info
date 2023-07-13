import { Button, ButtonGroup } from '@chakra-ui/react';

export type MenuChoice = 'bio' | 'abilities';

interface ChoicesProps {
  selected: MenuChoice;
  setSelected: (selected: MenuChoice) => void;
}

const choices: Array<{ name: MenuChoice; text: string }> = [
  { name: 'bio', text: 'Biografia' },
  { name: 'abilities', text: 'Habilidades' },
];

export function Choices({ selected, setSelected }: ChoicesProps) {
  function selectChoice(choice: MenuChoice) {
    setSelected(choice);
  }

  return (
    <ButtonGroup
      variant="unstyled"
      spacing="0"
      w="full"
      justifyContent="space-around"
      overflow="hidden"
      borderBottomWidth="1px"
      borderBottomColor="whiteAlpha.300"
    >
      {choices.map((choice, index) => {
        const isActive = selected === choice.name;
        const isFirst = index === 0;

        const activeStyle = isActive
          ? { fontWeight: 'bold', bg: 'whiteAlpha.100' }
          : {};

        const firstStyle = isFirst
          ? { borderRightWidth: '1px', borderRightColor: 'whiteAlpha.300' }
          : {};

        return (
          <Button
            key={choice.name}
            onClick={() => selectChoice(choice.name)}
            flex="1"
            rounded="none"
            textTransform="uppercase"
            {...firstStyle}
            {...activeStyle}
          >
            {choice.text}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
