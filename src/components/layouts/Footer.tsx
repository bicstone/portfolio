import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { Typography, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <Grid item sm={12}>
            <Typography variant="body2" color="textSecondary" align="center" paragraph>
              <Link color="inherit" to="/privacy">
                プライバシーポリシー・免責事項
              </Link>
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="body2" color="textSecondary" align="center">
              &copy;{` ${new Date().getFullYear()} `}Takanori Oishi
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
