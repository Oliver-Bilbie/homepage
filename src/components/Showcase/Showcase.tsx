import React, { ReactElement } from "react";
import { Box, Carousel } from "grommet";

import { PROJECTS } from "../../constants/projectData";
import ProjectPage from "../ProjectPage/ProjectPage";
import { ProjectType } from "../../types";
import WelcomePage from "../WelcomePage/WelcomePage";

const Showcase: React.FC = (): React.ReactElement => {
    return (
        <Box
            background="background-front"
            width="large"
            round="medium"
            pad="medium"
        >
            <Carousel>
                <WelcomePage />
                {PROJECTS.map((project: ProjectType): ReactElement => {
                    return <ProjectPage project={project} key={project.name} />;
                })}
            </Carousel>
        </Box>
    );
};

export default Showcase;
