import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

/** Library */
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView, BottomSheetView, } from '@gorhom/bottom-sheet'
import { Portal } from '@gorhom/portal'
import { Fonts } from '../../utils/styles';
import { ms } from '../../utils/helpers/metrics';

const SheetBottomComp = ({ BottomSheetRef }) => {
    const SnapPoints = useMemo(() => ["50%"], [])

    const HandleCloseBottomsheet = () => {
        BottomSheetRef?.current?.close()
    }

    return (
        <Portal hostName='BottomSheet'>
            <BottomSheet
                snapPoints={SnapPoints}
                enablePanDownToClose={true}
                backdropComponent={RenderBackdrop}
                ref={BottomSheetRef}
                index={-1}
            >
                <BottomSheetView style={{ flex: 1, }}>
                    <View style={styles.sheet_hader_box}>
                        <Text style={styles.sheet_hader_title}>Sheet Bottom</Text>
                        {/* you should change icon for batter ui */}
                        <TouchableOpacity style={styles.sheet_hader_btn} onPress={HandleCloseBottomsheet}>
                            <Text style={styles.close_text}>Close</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView >
                        <View style={{marginTop:ms(12)}}>
                            {
                                jobs.map((item, index) => {
                                    return (
                                        <View key={index} style={styles.sheet_data}>
                                            <Text style={styles.text_one}>{item.title}</Text>
                                            <Text style={styles.text_two}>{item.location}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </BottomSheetView>
            </BottomSheet>
        </Portal>
    );
}

export default SheetBottomComp;

const RenderBackdrop = (props) => (
    <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
)

const styles = StyleSheet.create({
    text_one: {
        fontSize: ms(18),
        fontFamily: Fonts.Font_700,
        color: "#384B70"
    },
    text_two: {
        fontSize: ms(15),
        fontFamily: Fonts.Font_500,
        color: "#B7B7B7"
    },
    sheet_data: {
        paddingHorizontal: ms(15),
        paddingBottom: ms(20)
    },
    sheet_hader_box: {
        paddingVertical: ms(5),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: ms(1),
        borderColor: "#F5F5F5",
        paddingHorizontal: ms(15)
    },
    sheet_hader_btn: {
        paddingVertical: ms(8),
        paddingHorizontal: ms(15),
        backgroundColor: "#295F98",
        borderRadius: ms(7),
    },
    close_text: {
        fontSize: ms(14),
        fontFamily: Fonts.Font_700,
        color: "#F5F5F5"
    },
    sheet_hader_title: {
        fontSize: ms(16),
        fontFamily: Fonts.Font_700,
        color: "#1E201E"
    }
});

const jobs = [
    { id: 1, title: "Software Engineer", location: "New York, NY" },
    { id: 2, title: "Data Scientist", location: "San Francisco, CA" },
    { id: 3, title: "Project Manager", location: "Austin, TX" },
    { id: 4, title: "UI/UX Designer", location: "Seattle, WA" },
    { id: 5, title: "Digital Marketing Specialist", location: "Chicago, IL" },
    { id: 6, title: "Product Manager", location: "Boston, MA" },
    { id: 7, title: "Graphic Designer", location: "Los Angeles, CA" },
    { id: 8, title: "Network Engineer", location: "Atlanta, GA" },
    { id: 9, title: "Business Analyst", location: "Denver, CO" },
    { id: 10, title: "Human Resources Manager", location: "Miami, FL" }
];
