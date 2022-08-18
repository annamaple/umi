import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

function Demo() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  debugger

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme(colorScheme)}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size={18}/> : <IconMoonStars size={18}/>}
    </ActionIcon>
  );
}

export default Demo;