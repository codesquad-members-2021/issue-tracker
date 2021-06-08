import { makeStyles } from '@material-ui/core/styles';

const useInputStyles = makeStyles(() => ({
  InputLarge: {
    width: '340px',
    height: '64px',
    fontSize: '16px',
  },
  InputMedium: {
    width: '320px',
    height: '56px',
    fontSize: '16px',
  },
  InputSmall: {
    width: '120px',
    height: '40px',
    fontSize: '12px',
    lineHeight: '20px',
  },
  InputText: {
    width: '340px',
    minHeight: '200px',
    fontSize: '16px',
    lineHeight: '28px',
  },
}));

export default useInputStyles;
