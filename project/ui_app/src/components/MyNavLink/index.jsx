import { useState } from 'react';
import { Box, NavLink } from '@mantine/core';
import { IconActivity, IconFingerprint, IconGauge } from "@tabler/icons";

const state = {
  activeIndex: 0,
  data: [
    { icon: IconGauge, label: 'Dashboard', },
    { icon: IconFingerprint, label: 'Security', },
    { icon: IconActivity, label: 'Activity' },
  ],
};

function Demo() {
  const { data, activeIndex } = state;
  const [active, setActive] = useState(activeIndex);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      icon={<item.icon size={16} stroke={1.5}/>}
      onClick={() => setActive(index)}
      to={'/work'}
    />
  ));

  return <Box sx={{ width: 220 }}>{items}</Box>;
}

export default Demo;