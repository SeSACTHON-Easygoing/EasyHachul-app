import * as React from "react";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { Image, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function SearchRoute() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "skyblue",
        padding: 16,
        height: "100%",
      }}
    >
      {/* <Text>Swipe down to close</Text> */}
      <TextInput
        style={{ backgroundColor: "white", height: 40, borderRadius: 20 }}
      />
    </View>
  );

  // const sheetRef = React.useRef(null);
  const sheetRef = React.useRef<BottomSheet>(null);

  const handlePresentModalPress = React.useCallback(() => {
    sheetRef.current?.snapTo(0);
  }, []);

  // const renderBackdrop = React.useCallback(
  //   props => (
  //     <BottomSheetBackdrop
  //       {...props}
  //       disappearsOnIndex={1}
  //       appearsOnIndex={2}
  //     />
  //   ),
  //   []
  // );

  return (
    // GestureHandlerRootView 안하면 안드로이드에서 뭐 안됨
    <GestureHandlerRootView style={{ flex: 1, width: "100%" }}>
      <ViewBox>
        <View style={{ alignItems: "center" }}>
          <Logo source={require("../assets/easyhachul_korean.png")} />
          <StationInput
            title="출발역을 입력해주세요"
            // onPress={() => sheetRef.current.snapTo(0)}
            onPress={handlePresentModalPress}
          />
          <Text style={{ fontSize: 20, lineHeight: 60 }}>
            출발역을 입력해주세요
          </Text>
          <Image
            source={require("../assets/search_voice.png")}
            style={{ width: 30, height: 30, marginTop: 15 }}
          />
          {/* </StationInput> */}
          {/* <StationInput>
          <Text style={{ fontSize: 20, lineHeight: 60 }}>
            도착역을 입력해주세요
          </Text>
          <Image
            source={require("../assets/search_voice.png")}
            style={{ width: 30, height: 30, marginTop: 15 }}
          />
        </StationInput> */}
          <Search>
            <Text style={{ fontSize: 20, lineHeight: 60 }}>경로 검색하기</Text>
          </Search>
        </View>
        <MapIcon source={require("../assets/icon_map.png")} />
        <CallIcon source={require("../assets/icon_call.png")} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={[700, 0, 0]} //두번째 요소는 snap이 한번 멈추는 지점
          borderRadius={10}
          renderContent={renderContent}
          // isBackDrop={true}
          // isBackDropDismissByPress={true}
          // backDropColor="red"
        />
      </ViewBox>
    </GestureHandlerRootView>
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

const StationInput = styled.Button`
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
