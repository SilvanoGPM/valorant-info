import { Button, ButtonGroup, Flex } from '@chakra-ui/react';

interface TabsProps {
  tabs: Array<{ name: string; text: string; screen: JSX.Element }>;
  selectedTab: string;
  setSelectedTab: (selectedTab: string) => void;
}

export function Tabs({ selectedTab, setSelectedTab, tabs }: TabsProps) {
  function selectTab(choice: string) {
    setSelectedTab(choice);
  }

  const SelectedTab = tabs.find((tab) => tab.name === selectedTab)?.screen;

  return (
    <Flex
      flex="1"
      direction="column"
      borderTopWidth={{ base: '1px', lg: '0' }}
      borderColor="whiteAlpha.300"
    >
      <ButtonGroup
        variant="unstyled"
        spacing="0"
        w="full"
        justifyContent="space-around"
        overflow="hidden"
        borderBottomWidth="1px"
        borderBottomColor="whiteAlpha.300"
      >
        {tabs.map((tab, index) => {
          const isActive = selectedTab === tab.name;
          const isLast = index === tabs.length - 1;

          const activeStyle = isActive
            ? { fontWeight: 'bold', bg: 'whiteAlpha.100' }
            : {};

          return (
            <Button
              key={tab.name}
              onClick={() => selectTab(tab.name)}
              flex="1"
              rounded="none"
              textTransform="uppercase"
              borderRightWidth={isLast ? '0' : '1px'}
              borderRightColor="whiteAlpha.300"
              {...activeStyle}
            >
              {tab.text}
            </Button>
          );
        })}
      </ButtonGroup>

      {SelectedTab}
    </Flex>
  );
}
