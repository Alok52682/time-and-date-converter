import { Button, Flex, FormControl, FormLabel, Input, Select, Spacer, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Currency = () => {
    const [ConvertedValue, setConvertedValue] = useState<string | number>('');
    const [inputValues, setInputValues] = useState({
        amount: '',
        CurrencyValue: ''
    });

    const handelOnSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const amountInput = parseFloat(inputValues.amount);
        const value = parseFloat(inputValues.CurrencyValue);
        const result = amountInput * value;
        setConvertedValue(result);
    }

    const handelInputamount = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const inputAmount = e.target.value;
        setInputValues({ ...inputValues, amount: inputAmount });
    }
    const handelCurrencyamount = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const inputCurrency = e.target.value;
        setInputValues({ ...inputValues, CurrencyValue: inputCurrency });
    }
    const handeReset = () => {
        setInputValues({
            amount: ' ',
            CurrencyValue: ' '
        })
        setConvertedValue(' ')
    }

    return (
        <Stack spacing="7">
            <Stack spacing="7">
                <FormControl>
                    <Flex>
                        <FormLabel htmlFor="amount">I'd Like To Convert</FormLabel>
                        <Spacer />
                        <Button onClick={handeReset} colorScheme='purple' variant='outline' size='xs'>Reset</Button>
                    </Flex>
                    <Input onChange={(e) => handelInputamount(e)} id="amount" type="number" placeholder='Enter Amount' value={parseFloat(inputValues?.amount)} />
                </FormControl>
            </Stack>
            <Stack spacing="7">
                <Select value={inputValues?.CurrencyValue} onChange={handelCurrencyamount} placeholder='Country From'>
                    <option value='105.84'>USD - US Dollar</option>
                    <option value='1.28'>INR - Indian Rupi</option>
                    <option value='112.89'>Euro - Euorope</option>
                    {/* <option value='option3'>BDT - Bangladesh</option> */}
                    <option value='15.14'>Yuan - China</option>
                </Select>
            </Stack>
            <Stack spacing="7">
                <Select placeholder='BDT - Bangladesh' disabled>
                    {/* <option value='option1'>USD - US Dollar</option>
                    <option value='option2'>INR - Indian Rupi</option>
                    <option value='option3'>Euro - Euorope</option>
                    <option value='option3'>BDT - Bangladesh</option>
                    <option value='option3'>Yuan - China</option> */}
                </Select>
            </Stack>
            <Stack spacing="7">
                <FormControl>
                    <Input readOnly type="number" placeholder='Exchanged Amount' value={ConvertedValue} />
                </FormControl>
            </Stack>
            <Stack spacing="6">
                <Button onClick={handelOnSubmit} type='submit' colorScheme='purple'>Convert Now</Button>
            </Stack>
        </Stack>
    );
};

export default Currency;