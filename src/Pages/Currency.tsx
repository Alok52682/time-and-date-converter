import { Button, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import React from 'react';

const Currency = () => {
    return (
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
    );
};

export default Currency;