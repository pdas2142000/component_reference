import { Text, View } from "react-native";
import BottomSheetScreen from "./screens/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PortalProvider } from '@gorhom/portal'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

const App = () => {

    return (
        // <View>
        //     <BottomSheetScreen/>
        // </View>

        /**
         * If you are useing bottom sheet 
         */
        <GestureHandlerRootView>
            <PortalProvider>
                <BottomSheetModalProvider>
                    <BottomSheetScreen />
                </BottomSheetModalProvider>
            </PortalProvider>
        </GestureHandlerRootView>
    );
}

export default App;
