import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    <ViewBox>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </ViewBox>
  );
}

const ViewBox = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: pink;
  align-items: center;
  justify-content: center;
`;
