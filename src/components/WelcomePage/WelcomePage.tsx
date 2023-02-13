import React, { ReactElement } from "react";
import { Box, Heading, Text } from "grommet";
import { WELCOME_MESSAGE } from "../../constants/welcomeMessage";

const WelcomePage: React.FC = (): React.ReactElement => {
  return (
    <Box
      height="920px"
      justify="center"
      pad={{ left: "medium", right: "medium" }}
    >
      <Heading weight="bold" textAlign="center">
        Welcome!
      </Heading>
      {WELCOME_MESSAGE.map((paragraph: string, index: number): ReactElement => {
        return (
          <Box key={index} pad="small">
            <Text textAlign="center">{paragraph}</Text>
          </Box>
        );
      })}
      <Box height="100px" />
    </Box>
  );
};

export default WelcomePage;
