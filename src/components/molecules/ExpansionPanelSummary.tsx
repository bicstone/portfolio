import React from 'react';
import clsx from 'clsx';
import { makeStyles, CardActions, ButtonBase } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { ExpansionPanelContext } from 'src/contexts';

const useStyles = makeStyles(theme => ({
  buttonBase: {
    display: 'flex',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  buttonBaseFocused: {
    backgroundColor: theme.palette.action.focus,
  },
  cardActions: {
    display: 'flex',
    flexGrow: 1,
  },
  title: {
    display: 'flex',
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  action: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  actionExpand: {
    transform: 'rotate(180deg)',
  },
}));

/**
 * ExpansionPanelの概要
 */
export const ExpansionPanelSummary: React.FC<React.ComponentProps<typeof ButtonBase>> = ({
  children,
  ...props
}) => {
  const classes = useStyles();

  const { expanded, setExpanded } = React.useContext(ExpansionPanelContext);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const [focused, setFocused] = React.useState(false);

  const handleFocusVisible = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <ButtonBase
      component="div"
      focusRipple={false}
      disableRipple={true}
      onFocusVisible={handleFocusVisible}
      onBlur={handleBlur}
      onClick={handleChange}
      className={clsx(classes.buttonBase, {
        [classes.buttonBaseFocused]: focused,
      })}
      aria-expanded={expanded}
      role="button"
      {...props}
    >
      <CardActions className={classes.cardActions}>
        <div className={classes.title}>{children}</div>
        <ExpandMoreIcon
          className={clsx(classes.action, {
            [classes.actionExpand]: expanded,
          })}
          aria-hidden={true}
        />
      </CardActions>
    </ButtonBase>
  );
};
