import * as React from "react";
import Animated from "react-native-reanimated";
// import BottomSheet from "reanimated-bottom-sheet";
import { Button, Image, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export default function SearchRoute() {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = React.useMemo(() => ["50%"], []);

  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders 모달 뒷배경
  const renderBackdrop = React.useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        // disappearsOnIndex={1}
        // appearsOnIndex={2}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <GestureHandlerRootView style={{ flex: 1, width: "100%" }}>
      <ViewBox>
        <Logo source={require("../assets/easyhachul_korean.png")} />
        <MapIcon source={require("../assets/icon_map.png")} />
        <CallIcon source={require("../assets/icon_call.png")} />
        <BottomSheetModalProvider>
          <StationInput>
            <Button
              onPress={handlePresentModalPress}
              title="출발역을 입력해주세요"
              color="black"
            />
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0} //배열의 첫번째(0번째 인덱스)값만큼 바텀시트 높이를 올리겠다는 의미
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              backdropComponent={renderBackdrop}
            >
              <View style={{ backgroundColor: "skyblue" }}>
                <Text>Awesome 🎉</Text>
              </View>
            </BottomSheetModal>
          </StationInput>
        </BottomSheetModalProvider>
      </ViewBox>
    </GestureHandlerRootView>

    //이건왜 안돼 ㅡㅡ
    // <GestureHandlerRootView style={{ flex: 1, width: "100%" }}>
    // <BottomSheetModalProvider>
    //   <ViewBox>
    //     <View style={{ alignItems: "center" }}>
    //       <Logo source={require("../assets/easyhachul_korean.png")} />
    //       <StationInput
    //         title="출발역을 입력해주세요"
    //         onPress={handlePresentModalPress}
    //       />
    //       <Text style={{ fontSize: 20, lineHeight: 60 }}>
    //         출발역을 입력해주세요
    //       </Text>
    //       <Image
    //         source={require("../assets/search_voice.png")}
    //         style={{ width: 30, height: 30, marginTop: 15 }}
    //       />
    //       <Search>
    //         <Text style={{ fontSize: 20, lineHeight: 60 }}>경로 검색하기</Text>
    //       </Search>
    //     </View>
    //     <MapIcon source={require("../assets/icon_map.png")} />
    //     <CallIcon source={require("../assets/icon_call.png")} />

    //     <BottomSheet
    //       ref={bottomSheetModalRef}
    //       index={0}
    //       snapPoints={snapPoints}
    //       onChange={handleSheetChanges}
    //       backdropComponent={renderBackdrop}
    //     >
    //       <View>
    //         <Text>Awesome 🎉</Text>
    //       </View>
    //     </BottomSheet>
    //   </ViewBox>
    // </BottomSheetModalProvider>
    // </GestureHandlerRootView>
  );
}

const ViewBox = styled.SafeAreaView`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f5f5f9;
  /* font-size: 30px; */
`;

const Logo = styled.Image`
  width: 90px;
  height: 24px;
  margin-bottom: 60px;
`;

const StationInput = styled.View`
  width: 300px;
  height: 60px;
  border-radius: 30px;
  padding: 0 20px;
  margin-bottom: 20px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
`;

const MapIcon = styled.Image`
  width: 56px;
  height: 56px;
  position: absolute;
  bottom: 40px;
  left: 20px;
`;

const CallIcon = styled.Image`
  width: 56px;
  height: 56px;
  position: absolute;
  bottom: 40px;
  right: 20px;
`;

const Search = styled.View`
  padding: 0 20px;
  height: 60px;
  border-radius: 30px;
  background-color: lightgray;
`;
