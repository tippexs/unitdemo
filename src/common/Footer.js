import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import PropTypes from "prop-types";

function Copyright() {
    return (
        <Typography variant="body2">
            Build with &#10084;&#65039; by the NGINX Unit Team {new Date().getFullYear()}
        </Typography>
    );
}

function Footer(props) {
    const {sections} = props
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '20vh',
                position: 'fixed',
                width: '100%',
                bottom: '0',
                color: 'white'
            }}
        >
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: '#024059',

                }}
            >
                <Container maxWidth="sm" sx={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Copyright/>
                    {sections.map((section) => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            href={section.url}
                            sx={{paddingLeft: '0.5rem'}}
                        >
                            {section.title}
                        </Link>
                    ))}
                </Container>
            </Box>
        </Box>
    );
}

Footer.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ).isRequired
};
export default Footer;
