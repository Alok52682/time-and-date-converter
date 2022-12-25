import {
    Flex,
    Image,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react';
import { useState } from 'react';
import banner from '../Assets/text.jpeg';
import time from '../Assets/time.jpg';
import Currency from './Currency';
import TimeConverter from './TimeConverter';

const Converter = () => {
    const [bannerImg, setBannerImg] = useState(false);
    return (
        <Stack minH={'60vh'} w="90%" mx='auto' direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Tabs w={{ base: '100%', md: '60%' }} mx='auto'>
                    <TabList>
                        <Tab onClick={(e) => setBannerImg(false)} >Currency</Tab>
                        <Tab onClick={(e) => setBannerImg(true)}>Time</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Currency />
                        </TabPanel>
                        <TabPanel>
                            <TimeConverter />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
            <Flex flex={1}>
                {!bannerImg ? <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={banner}
                /> :
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={time}
                    />
                }
            </Flex>
        </Stack>
    );
}

export default Converter;