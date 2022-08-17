import {useState} from 'react';
import {Box, NavLink} from '@mantine/core';


function Demo(props) {
  const {data, activeIndex} = props;
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
    />
  ));

  return <Box sx={{width: 220}}>{items}</Box>;
}

export default Demo;