import { Image, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";

export default function SearchRoute() {
  return (
    <ViewBox>
      <View style={{ alignItems: "center" }}>
        <Logo source={require("../assets/easyhachul_korean.png")} />
        <StationInput>
          <Text style={{ fontSize: 20, lineHeight: 60 }}>
            출발역을 입력해주세요
          </Text>
          <Image
            source={require("../assets/search_voice.png")}
            style={{ width: 30, height: 30, marginTop: 15 }}
          />
        </StationInput>
        <StationInput>
          <Text style={{ fontSize: 20, lineHeight: 60 }}>
            도착역을 입력해주세요
          </Text>
          <Image
            source={require("../assets/search_voice.png")}
            style={{ width: 30, height: 30, marginTop: 15 }}
          />
        </StationInput>
        <Search>
          <Text style={{ fontSize: 20, lineHeight: 60 }}>경로 검색하기</Text>
        </Search>
      </View>
      <MapIcon source={require("../assets/icon_map.png")} />
      <CallIcon source={require("../assets/icon_call.png")} />
    </ViewBox>
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
