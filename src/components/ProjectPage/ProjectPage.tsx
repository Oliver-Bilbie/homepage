import React, { ReactElement } from "react";
import { Box, Button, Heading, Image, Text } from "grommet";
import { ProjectType } from "../../types";

interface ProjectPageProps {
    project: ProjectType;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
    project,
}): React.ReactElement => {
    // Image locations must be hard-coded due to webpack limitations
    const images = {
        fg: require("../../resources/fg.png"),
        lcw: require("../../resources/lcw.png"),
        fallback: require("../../resources/placeholder.jpg"),
    };

    return (
        <Box pad={{ left: "medium", right: "medium" }}>
            <Heading weight="bold" textAlign="center">
                {project.name}
            </Heading>
            {project.description.map(
                (paragraph: string, index: number): ReactElement => {
                    return (
                        <Box key={index} pad="small">
                            <Text textAlign="center">{paragraph}</Text>
                        </Box>
                    );
                }
            )}
            <Box direction="row" gap="medium" justify="center" margin="small">
                <Button
                    label="View Project"
                    onClick={(): void => {
                        window.open(project.host_url, "_blank");
                    }}
                />
                <Button
                    label="Source Code"
                    onClick={(): void => {
                        window.open(project.src_url, "_blank");
                    }}
                />
            </Box>
            <Box
                height="500px"
                alignSelf="center"
                margin="medium"
                pad={{ bottom: "large" }}
            >
                <Image
                    src={images[project.image]}
                    fallback={images["fallback"]}
                    fit="contain"
                />
            </Box>
        </Box>
    );
};

export default ProjectPage;
