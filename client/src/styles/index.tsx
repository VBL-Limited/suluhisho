import { colors } from '../theme';
import { makeStyles } from '@mui/styles';
import { Box, styled, Paper, Link, TextField } from '@mui/material';

const globalUseStyles = makeStyles(() => ({
  inputFieldStyle: {
    height: '24px',
    padding: '12px 14px',
  },
  GridContainer: {
    padding: '1em',
  },
}));

const CenterContainer = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  padding: '18px',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
});
const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root.Mui-disabled {
    color: blue;
    & > fieldset {
      border-color: orange;
    }
  }
`;
const RoundedCard = styled(Paper)((props) => ({
  width: '100%',
  padding: '18px 28px',
  height: '100%',
  borderRadius: '10px',
  display: 'inline-block',

  background: colors.white,
  boxShadow: '2px 2px 6px rgba(10, 10, 10, 0.05)',
  [props.theme.breakpoints.down('sm')]: {
    padding: '18px',
  },
}));

const LinkStyle = styled(Link)({
  fontSize: '0.75rem',
  width: 'fit-content',
  alignSelf: 'flex-end',
  color: colors.primary,
  letterSpacing: '0.4px',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const MessageContainer = styled(Box)({
  paddingBottom: '5%',
});

const ContainerJustifySpaceBtw = styled(Box)((props) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  [props.theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export {
  LinkStyle,
  RoundedCard,
  globalUseStyles,
  StyledTextField,
  CenterContainer,
  MessageContainer,
  ContainerJustifySpaceBtw,
};
