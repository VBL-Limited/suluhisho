import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { RootContainer, ComponentContainer } from "./style";

const withAuthWrapperHOC = (WrappedComponent: FunctionComponent<any>) => {
    return function HOC(props: any) {
        return (
            <RootContainer maxWidth="sm">
                <Box sx={ComponentContainer}>
                    <WrappedComponent {...props} />
                </Box>
            </RootContainer>
        );
    };
};

export default withAuthWrapperHOC;
