import { Button, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import React from 'react';

const TimeConverter = () => {
    return (
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
    );
};

export default TimeConverter;