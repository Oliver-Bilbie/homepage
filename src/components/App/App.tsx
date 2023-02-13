import React from "react";
import { Grommet, Box } from "grommet";
import Theme from "../../theme";
import Banner from "../Banner/Banner";
import Showcase from "../Showcase/Showcase";

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <Grommet theme={Theme} full={true}>
        <Banner />
        <Box alignContent="center" align="center" justify="center" pad="large">
          <Showcase />
        </Box>
      </Grommet>
    </div>
  );
};

export default App;
