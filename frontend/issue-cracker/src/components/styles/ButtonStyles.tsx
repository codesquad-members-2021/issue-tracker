import { makeStyles } from '@material-ui/core/styles';

const useButtonStyles = makeStyles(() => ({
  buttonLarge: {
    width: '340px',
    height: '64px',
    backgroundColor: '#815854',
    fontSize: '18px',
  },
  buttonMedium: {
    width: '240px',
    height: '56px',
    backgroundColor: '#815854',
    fontSize: '18px',
  },
  buttonSmallFill: {
    width: '120px',
    height: '40px',
    backgroundColor: '#815854',
    fontSize: '12px',
    lineHeight: '20px',
  },
  buttonSmallBorder: {
    width: '120px',
    height: '40px',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#815854',
  },
  buttonMediumText: {
    width: '120px',
    height: '40px',
    fontSize: '16px',
    lineHeight: '28px',
    color: '#815854',
  },
  buttonSmallText: {
    width: '120px',
    height: '40px',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#815854',
  },
}));

export default useButtonStyles;
