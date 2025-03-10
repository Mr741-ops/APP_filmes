import { AppBar } from 'react-admin';
import { Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const MyAppBar = (props: any) => (

    <AppBar {...props} userMenu={null}>
        <Toolbar>
            <Button color="inherit" component={Link} to ="/home_page">
                Home
            </Button>
            <Button color="inherit" component={Link} to ="/popular">
                Popular
            </Button>
            <Button color="inherit" component={Link} to ="/trending">
                Trending
            </Button>
        </Toolbar>
    </AppBar>

);

export default MyAppBar;