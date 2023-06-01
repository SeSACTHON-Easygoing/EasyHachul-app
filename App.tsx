import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import SearchRoute from "./pages/SearchRoute";

export default function App() {
  return (
    <ViewBox>
      <StatusBar style="auto" />
      {/* 기본 페이지 */}
      <SearchRoute />
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
