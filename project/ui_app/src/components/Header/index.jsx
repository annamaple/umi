import { Grid, Title } from '@mantine/core';
import DarkLightSwitch from './DarkLightSwitch';
import { Box } from "@mui/material";

function index() {

  return (
    <>
      <Grid columns={30}>
        <Grid.Col span={29}>
          <Title order={1} children={'UI-APP'}/>
        </Grid.Col>
        <Grid.Col span={1} align={'right'}>
          <Box marginRight={1} marginTop={1}>
            <DarkLightSwitch/>
          </Box>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default index;