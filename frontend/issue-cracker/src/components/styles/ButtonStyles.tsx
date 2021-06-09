import { makeStyles } from '@material-ui/core/styles';

const useButtonStyles = makeStyles(() => ({
  buttonLarge: {
    width: '340px',
    height: '64px',
    fontSize: '18px',
    borderRadius: '20px',
  },
  buttonMedium: {
    width: '240px',
    height: '56px',
    fontSize: '18px',
    borderRadius: '20px',
  },
  buttonSmallFill: {
    width: '120px',
    height: '40px',
    fontSize: '12px',
    lineHeight: '20px',
    borderRadius: '20px',
  },
  buttonSmallBorder: {
    width: '120px',
    height: '40px',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#1E4174',
    borderRadius: '20px',
  },
  buttonMediumText: {
    width: '120px',
    height: '40px',
    fontSize: '16px',
    lineHeight: '28px',
    color: '#1E4174',
    borderRadius: '20px',
  },
  buttonSmallText: {
    width: '120px',
    height: '40px',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#1E4174',
    borderRadius: '20px',
  },
}));

export default useButtonStyles;
