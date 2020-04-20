import { createUseStyles } from 'react-jss';

import IGeneralTheme from '../../theme/interfaces';

const useStyles = createUseStyles((theme: IGeneralTheme) => ({
  wizardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  wizardHeaderActiveItem: {},
  wizardHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60px',
    width: '100%',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '28px',
    '& div': {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: theme.background.color.inactiveContainerHeader,
      color: theme.font.color.secondary,
      '&$wizardHeaderActiveItem': {
        backgroundColor: theme.background.color.activeContainerHeader,
        color: theme.font.color.white,
      },
    },
  },
}));

export default useStyles;