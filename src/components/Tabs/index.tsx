import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Carousel from '../Carousel/index';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 5,}}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', gap: '30px', paddingTop: '39px' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          variant='scrollable'
          scrollButtons='auto'
          allowScrollButtonsMobile
          TabIndicatorProps={{
            style: { display: 'none' }
          }}
          sx={{
            '.MuiTabs-scrollButtons': {
              color: 'white',
            },
          }}
        >
          {['For You', 'Popular', 'Podcasts', 'Rap', 'EDM', 'Rook', 'More'].map((item, index) => {
            return (
              <Tab
                label={item}
                {...a11yProps(index)}
                style={{
                  color: 'white',
                  backgroundColor: value === index ? '#BC0017' : '#3B3B3B',
                  borderRadius: '38px',
                  marginLeft: '8px',
                  marginRight: '8px',
                }}
              />
            );
          })}
        </Tabs>
      </Box>
      {['For You', 'Popular', 'Podcasts', 'Rap', 'EDM', 'Rook', 'More'].map((item, index) => {
        return (
          <CustomTabPanel value={value} index={index}>
            <Carousel />
          </CustomTabPanel>
        );
      })}
    </Box>
  );
}
