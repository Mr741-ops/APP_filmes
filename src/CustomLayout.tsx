import { Layout, LayoutProps } from 'react-admin';
import MyAppBar from './AppBar';
import { JSX } from 'react/jsx-runtime';


const MyLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => <Layout {...props} appBar={MyAppBar} />

export default MyLayout;