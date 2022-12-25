import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Image,
    Input,
    Select,
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
                            <Stack spacing="7">
                                <Stack spacing="7">
                                    <FormControl>
                                        <FormLabel htmlFor="amount">I'd Like To Exchange</FormLabel>
                                        <Input id="amount" type="number" placeholder='Enter Amount' />
                                    </FormControl>
                                </Stack>
                                <Stack spacing="7">
                                    <Select placeholder='Country From'>
                                        <option value='option1'>USD - US Dollar</option>
                                        <option value='option2'>INR - Indian Rupi</option>
                                        <option value='option3'>Euro - Euorope</option>
                                        <option value='option3'>BDT - Bangladesh</option>
                                        <option value='option3'>Yuan - China</option>
                                    </Select>
                                </Stack>
                                <Stack spacing="7">
                                    <Select placeholder='Country To'>
                                        <option value='option1'>USD - US Dollar</option>
                                        <option value='option2'>INR - Indian Rupi</option>
                                        <option value='option3'>Euro - Euorope</option>
                                        <option value='option3'>BDT - Bangladesh</option>
                                        <option value='option3'>Yuan - China</option>
                                    </Select>
                                </Stack>
                                <Stack spacing="7">
                                    <FormControl>
                                        <Input disabled type="number" placeholder='Exchanged Amount' />
                                    </FormControl>
                                </Stack>
                                <Stack spacing="6">
                                    <Button colorScheme='purple'>Convert Now</Button>
                                </Stack>
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <Stack spacing="7">
                                <Stack spacing="7">
                                    <FormControl>
                                        <FormLabel htmlFor="amount">The Time You want to convert</FormLabel>
                                        <Input id="amount" type="time" defaultValue='00:00:00' />
                                    </FormControl>
                                </Stack>
                                <Stack spacing="7">
                                    <Select placeholder='Country From'>
                                        <option value='option1'>(UTC-06:00) Central America</option>
                                        <option value='option2'>India(IST)</option>
                                        <option value='option3'>U.K.(UTC+01:00)</option>
                                        <option value='option3'>Bangladesh(BST)</option>
                                        <option value='option3'>France(CET) </option>
                                    </Select>
                                </Stack>
                                <Stack spacing="7">
                                    <Select placeholder='Country To'>
                                        <option value='option1'>(UTC-06:00) Central America</option>
                                        <option value='option2'>India(IST)</option>
                                        <option value='option3'>U.K.(UTC+01:00)</option>
                                        <option value='option3'>Bangladesh(BST)</option>
                                        <option value='option3'>France(CET) </option>
                                    </Select>
                                </Stack>
                                <Stack spacing="7">
                                    <FormControl>
                                        <Input disabled type="number" placeholder='Converted Time' />
                                    </FormControl>
                                </Stack>
                                <Stack spacing="6">
                                    <Button colorScheme='twitter'>Convert Now</Button>
                                </Stack>
                            </Stack>
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