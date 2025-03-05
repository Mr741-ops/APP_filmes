import { AppBar, AppBarProps } from 'react-admin';
import { Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';


const MyAppBar = (props: JSX.IntrinsicAttributes & AppBarProps) => (

    <AppBar {...props}>
        <Toolbar>
            <Button color="inherit" component={Link} to ="Home_page">
                Home
            </Button>
            <Button color="inherit" component={Link} to ="movie/popular">
                Popular
            </Button>
            <Button color="inherit" component={Link} to ="movie/trending">
                Trending
            </Button>
        </Toolbar>
    </AppBar>

);

export default MyAppBar;
