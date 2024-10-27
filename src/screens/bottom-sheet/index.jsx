import React, { useMemo, useRef } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SubmitButton from '../../components/common/submit-button';
import SheetBottomComp from '../../components/bottom-sheet-comp';
import { ms } from '../../utils/helpers/metrics';
import { PortalHost } from '@gorhom/portal';

const BottomSheetScreen = () => {

    const SheetRef = useRef(null)

    const OpenSheet = () => {
        if (SheetRef.current) {
            SheetRef.current.snapToIndex(0)
        }
    }

    return (
        <View style={{padding:ms(20), flex:1}}>
            <SafeAreaView/>
            <Text>BottomSheetScreen</Text>
            <SubmitButton
                {...{
                    type: "submit",
                    title: "Open sheet",
                    // Loading: Loading,
                    OnPress: () => OpenSheet()
                }}
            />
            <SheetBottomComp
                {...{
                    BottomSheetRef: SheetRef
                }}
            />
            <PortalHost name="BottomSheet" />
        </View>
    )
}

export default BottomSheetScreen;
