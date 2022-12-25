import { Button, Flex, FormControl, FormLabel, Input, Select, Spacer, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

const TimeConverter = () => {
    const [formInfo, setFormInfo] = useState({
        enterdeTime: '',
        fromCountry: '',
        toCountry: '',
        convertedTime: ''
    });

    const handelConvertTime = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // console.log(formInfo);
        // const str = new Date().toLocaleString('en-US', { timeZone: 'Asia/dhaka' });
        // console.log(str);
    }

    const handelInputTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const inputTime = e.target.value;
        setFormInfo({ ...formInfo, enterdeTime: inputTime });
    }
    const handelFromCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const timeZone = e.target.value;
        const str = new Date().toLocaleString('en-US', { timeZone: `${timeZone}` });
        const time = str.split(' ')[1] + ' ' + str.split(' ')[2];
        setFormInfo({ ...formInfo, fromCountry: timeZone, enterdeTime: time });
    }
    const handelToCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const timeZone = e.target.value;
        const str = new Date().toLocaleString('en-US', { timeZone: `${timeZone}` });
        const time1 = str.split(' ')[1] + ' ' + str.split(' ')[2];
        setFormInfo({ ...formInfo, toCountry: timeZone, convertedTime: time1 });
    }


    const handeReset = () => {
        setFormInfo({
            enterdeTime: '',
            fromCountry: '',
            toCountry: '',
            convertedTime: ''
        })
    }

    return (
        <Stack spacing="7">
            <Stack spacing="7">
                <FormControl>
                    <Flex>
                        <FormLabel htmlFor="amount">The Time You want to convert</FormLabel>
                        <Spacer />
                        <Button onClick={handeReset} colorScheme='purple' variant='outline' size='xs'>Reset</Button>
                    </Flex>
                    <Input readOnly onChange={handelInputTime} placeholder='Select time zone from options' id="amount" type="text" value={formInfo.enterdeTime} />
                </FormControl>
            </Stack>
            <Stack spacing="7">
                <Select placeholder='Country From' onChange={handelFromCountry} value={formInfo?.fromCountry}>
                    <option value='America/los_angeles'>Los Angeles, USA</option>
                    <option value='Asia/kolkata'>Kolkata, India</option>
                    <option value='Europe/paris'>London, UK</option>
                    <option value='Asia/Dhaka'>Dhaka, Bangladesh</option>
                    <option value='Europe/paris'>Paris, France</option>
                </Select>
            </Stack>
            <Stack spacing="7">
                <Select placeholder='Country To' onChange={handelToCountry} value={formInfo?.toCountry}>
                    <option value='America/los_angeles'>Los Angeles, USA</option>
                    <option value='Asia/kolkata'>Kolkata, India</option>
                    <option value='Europe/paris'>London, UK</option>
                    <option value='Asia/Dhaka'>Dhaka, Bangladesh</option>
                    <option value='Europe/paris'>Paris, France</option>
                </Select>
            </Stack>
            <Stack spacing="7">
                <FormControl>
                    <Input readOnly value={formInfo.convertedTime} type="text" placeholder='Converted Time' />
                </FormControl>
            </Stack>
            <Stack spacing="6">
                <Button disabled onClick={handelConvertTime} colorScheme='twitter'>Convert Now</Button>
            </Stack>
        </Stack>
    );
};

export default TimeConverter;