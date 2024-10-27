/** React Imports */
import React from 'react'
import { Text, StyleSheet } from 'react-native'

/** Libraries */
import { OtpInput } from "react-native-otp-entry"
import { Controller } from 'react-hook-form'

/** Local Imports */
import { ms } from '../../utils/helpers/metrics'

/** Local Imports */
import { Fonts } from '../../utils/styles'

/** Main Export */
const OtpInputcomponents = ({ name, control, otpRef }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => {
                const errorMessage = error
                    ? error.message
                        ? error.message
                        : error
                    : ''
                return (
                    <>
                        <OtpInput
                            ref={otpRef}
                            numberOfDigits={6}
                            focusColor="#608BC1"
                            focusStickBlinkingDuration={500}
                            onTextChange={(text) => onChange(text)}
                            theme={{
                                containerStyle: styles.container,
                                pinCodeContainerStyle: styles.pinCodeContainer,
                                pinCodeTextStyle: styles.pinCodeText,
                                focusStickStyle: styles.focusStick,
                                focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                            }}
                        />
                        {errorMessage ? (
                            <Text style={styles.ws_error} numberOfLines={1} ellipsizeMode="tail">
                                {errorMessage}
                            </Text>
                        ) : null
                        }
                    </>
                )
            }
            }
        />

    )
}

export default OtpInputcomponents

const styles = StyleSheet.create({
    container: {

    },
    pinCodeContainer: {
        width: ms(45),
        height: ms(45),
        borderRadius: ms(10),
    },
    focusStick: {
        height: ms(15),
        backgroundColor: "#133E87",
    },
    pinCodeText: {
        fontSize: ms(19),
        fontFamily: Fonts.Font_500
    },
    ws_error:{
        color:"#B8001F",
        fontFamily:Fonts.Font_500,
        fontSize:ms(15),
        marginTop:ms(5)
    }

})