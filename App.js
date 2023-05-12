import App from "./components/Homepage/refer.js";
import { StatusBar } from "react-native";
import HttpExample from "./components/apicalling/Httpsrequest.js";



export default function Main() {
  return (
    <>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
      {/* <App /> */}
      <HttpExample />



    </>
  );
};
