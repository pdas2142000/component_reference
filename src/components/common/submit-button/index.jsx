/** React Import */
import React from 'react'
import {
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native'
import { ms } from '../../../utils/helpers/metrics'
import { Fonts } from '../../../utils/styles'

/** Style */

/** Main Export */
const SubmitButton = ({ Loading, OnPress, title }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={OnPress}
            style={[styles.ws_button]}
        >
            {
                Loading ? (
                    <ActivityIndicator size="small" color={"white"} />
                ) : (
                    <Text style={styles.ws_text}>{title}</Text>
                )
            }
        </TouchableOpacity>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    ws_button: {
        backgroundColor:"#CBDCEB",
        borderRadius: ms(10),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: ms(47),
        marginTop: ms(10)
    },
    ws_text: {
        fontFamily: Fonts.Font_600,
        color: "black",
        fontSize: ms(14),
    },
})
