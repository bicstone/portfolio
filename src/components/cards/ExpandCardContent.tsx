import React from 'react';
import clsx from 'clsx';
import { makeStyles, CardActions, Collapse, ButtonBase, IconButton } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useBreakPoint } from '../../hooks';

type Props = {
  id: string;
  defaultExpanded?: boolean;
  defaultExpandedBreakpoints?: Breakpoint[];
  title: JSX.Element;
  detail: JSX.Element;
};

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

export const ExpandCardContent: React.FC<Props> = ({
  id,
  defaultExpanded = true,
  defaultExpandedBreakpoints = undefined,
  title,
  detail,
}) => {
  const classes = useStyles();
  const width = useBreakPoint();

  const [expanded, setExpanded] = React.useState<boolean>(defaultExpanded);

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

  React.useEffect(() => {
    // ブレークポイントが広くなった場合に展開する
    if (defaultExpandedBreakpoints) {
      const newValue = defaultExpandedBreakpoints.includes(width);
      if (!expanded && newValue) {
        setExpanded(newValue);
      }
    }
  }, [width]);

  return (
    <>
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
        aria-controls={`${id}-content`}
        id={`${id}-header`}
        role="button"
      >
        <CardActions className={classes.cardActions}>
          <div className={classes.title}>{title}</div>
          <IconButton
            className={clsx(classes.action, {
              [classes.actionExpand]: expanded,
            })}
            component="div"
            tabIndex={-1}
            aria-hidden={true}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </ButtonBase>
      <Collapse in={expanded}>
        <detail.type
          {...detail.props}
          id={`${id}-content`}
          aria-labelledby={`${id}-header`}
          role="region"
        />
      </Collapse>
    </>
  );
};
