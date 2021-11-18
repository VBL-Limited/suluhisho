import "../../i18n/i18n";
import { AddEmail } from "../../utils";
import { useTranslation } from "react-i18next";
import withAuthWrapperHOC from "../withAuthWrapperHOC";
import { Box, Typography, Stack } from "@mui/material";
import { LinkStyle, MessageContainer } from "../../styles";

type ForgotPasswordConfirmationMessageProps = {
    email: string;
};

const ForgotPasswordConfirmationMessage = ({
    email,
}: ForgotPasswordConfirmationMessageProps) => {
    const { t } = useTranslation();

    return (
        <Box width="100%">
            <Stack spacing={"8px"}>
                <Typography variant="h5" color="initial">
                    {t("RECOVER_PASSWORD.FormTitle")}
                </Typography>

                <MessageContainer>
                    <Typography
                        variant="body1"
                        sx={{ letterSpacing: "0.15 px" }}
                    >
                        {AddEmail(t("RECOVER_PASSWORD.FormNote"), email)}
                        <span style={{ fontWeight: 700 }}>
                            {t("RECOVER_PASSWORD.ImportantNote")}
                        </span>
                    </Typography>
                </MessageContainer>
                <LinkStyle href="/login" sx={{ alignSelf: "flex-start" }}>
                    {t("CONSTANT.ReturnToLoginLink")}
                </LinkStyle>
            </Stack>
        </Box>
    );
};

export default withAuthWrapperHOC(ForgotPasswordConfirmationMessage);
