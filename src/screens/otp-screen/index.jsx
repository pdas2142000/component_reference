/** React Imports */
import React, { useRef } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

/** Local Imports */
import Formfields from '../../utils/models/FormFields.json'
import { ms } from '../../utils/helpers/metrics'

/** Library */
import { useForm, } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

/** Components */
import OtpInputcomponents from '../../components/otp-input'
import SubmitButton from '../../components/common/submit-button';

/** Main Export */
const OtpScreen = () => {

    const otpRef = useRef(null)

    const { reset, control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(Schema),
    })

    const FormBuilder = [
        {
            name: 'otp',
            parent: 'otp',
            type: 'otp',
            control,
            label: false,
            placeholder: true,
            otpRef
        }
    ]

    const OnSubmit = (data) =>{
        console.log('Submit',data)
        reset()
        otpRef.current?.clear();
    }

    return (
        <>
            <SafeAreaView/>
            <View style={styles.otp_container}>
                {
                    FormBuilder.map((item, index) => {
                        return <OtpInputcomponents {...item} key={index} />
                    })
                }
                <SubmitButton
                    {...{
                        type: "submit",
                        title: "Send OTP",
                        // Loading: Loading,
                        OnPress: handleSubmit(OnSubmit)
                    }}
                />
            </View>
        </>
    );
}

export default OtpScreen;

const styles = StyleSheet.create({
    otp_container: {
        padding: ms(20)
    },
    btn_otp: {
        backgroundColor:"#CBDCEB", 
        padding:ms(15), 
        alignItems:"center", 
        justifyContent:"center",
        borderRadius:ms(7),
        marginTop:ms(15)
    }
});

const Schema = yup.object().shape({
    otp: yup
        .string()
        .required(Formfields.otp.otp.errors.required)
        .length(
            Formfields.otp.otp.errors.pattern.value,
            Formfields.otp.otp.errors.pattern.message,
        )
})