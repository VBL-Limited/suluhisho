import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import "../../i18n/i18n";
import * as Yup from "yup";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { PasswordFieldWithIndicator } from "..";
import withAuthWrapperHOC from "../withAuthWrapperHOC";
import { LinkStyle, globalUseStyles } from "../../styles";

const loginSchema = Yup.object({
    email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a valid email"),
    password: Yup.string().required("Password is required"),
    mobile: Yup.string().required("Mobile is required"),
    organisation: Yup.string().required("Organisation is required"),
});

const initialLoginValue = {
    email: "",
    password: "",
    organisation: "",
    mobile: "",
};

type LoginFormProps = {
    onSubmit: Function;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
    const classes = globalUseStyles();
    const { t } = useTranslation();

    return (
        <Box width="100%">
            <Formik
                validationSchema={loginSchema}
                initialValues={initialLoginValue}
                onSubmit={async values => onSubmit(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={"18px"}>
                            <Typography variant="h3">
                                {t("LOGIN.FormTitle")}
                            </Typography>

                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                onBlur={handleBlur}
                                value={values.email}
                                onChange={handleChange}
                                label={t("CONSTANT.EmailLabel")}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                    classes: { input: classes.inputFieldStyle },
                                }}
                                helperText={touched.email && errors.email}
                                error={touched.email && Boolean(errors.email)}
                            />
                            <TextField
                                fullWidth
                                id="mobile"
                                name="mobile"
                                onBlur={handleBlur}
                                value={values.mobile}
                                onChange={handleChange}
                                label={t("CONSTANT.MobileLabel")}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                    classes: { input: classes.inputFieldStyle },
                                }}
                                helperText={touched.mobile && errors.mobile}
                                error={touched.mobile && Boolean(errors.mobile)}
                            />
                            <TextField
                                fullWidth
                                id="organisation"
                                name="organisation"
                                onBlur={handleBlur}
                                value={values.organisation}
                                onChange={handleChange}
                                label={t("CONSTANT.OrganisationLabel")}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                    classes: { input: classes.inputFieldStyle },
                                }}
                                helperText={
                                    touched.organisation && errors.organisation
                                }
                                error={
                                    touched.organisation &&
                                    Boolean(errors.organisation)
                                }
                            />
                            <PasswordFieldWithIndicator
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                withIndicator={false}
                                value={values.password}
                                handleChange={handleChange}
                                label={t("CONSTANT.PasswordLabel")}
                                fieldStyle={classes.inputFieldStyle}
                            />

                            <Button
                                size="medium"
                                type="submit"
                                color="primary"
                                variant="contained"
                            >
                                {t("LOGIN.ButtonLabel")}
                            </Button>

                            <Typography
                                variant="body2"
                                sx={{ letterSpacing: "0.4px" }}
                            >
                                {t("LOGIN.FooterNoteText")}
                                <LinkStyle href="/login">
                                    {t("CONSTANT.LinkLabel")}
                                </LinkStyle>
                            </Typography>
                        </Stack>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default withAuthWrapperHOC(LoginForm);
