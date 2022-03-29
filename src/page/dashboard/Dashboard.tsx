import * as React from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Routers from '../../Routers'
import nip_logo from '../../assets/icon/nip-logo.svg'
import DrawerField from '../../components/drawer-items/DrawerField'
import { drawerFields } from '../../components/drawer-items/items/drawer-fields'
import navi_logo from '../../assets/images/navi-logo.png'
import { useNavigate } from 'react-router-dom'

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="http://admin.nip1.net">
        NIP
      </Link>
      {new Date().getFullYear()}
    </Typography>
  )
}

const drawerWidth: number = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

const mdTheme = createTheme()

function DashboardContent() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  const onClickGoRootPage = () => {
    navigate('/')
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar position="absolute" open={open} sx={{ background: '#FFFFFF' }}>
          <Toolbar
            sx={{
              pr: '24px',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon sx={{ color: '#000000' }} />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="#000000"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {open ? (
                ''
              ) : (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img src={nip_logo} alt="nip-logo" />
                  <span
                    onClick={onClickGoRootPage}
                    style={{ marginLeft: '6px', cursor: 'pointer' }}
                  >
                    NIP
                  </span>
                </div>
              )}
            </Typography>

            <img src={navi_logo} alt="navi-logo" />
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: [1],
            }}
          >
            <img src={nip_logo} alt="nip-logo" />
            <h1
              onClick={onClickGoRootPage}
              style={{ marginLeft: '6px', cursor: 'pointer' }}
            >
              NIP
            </h1>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>

          {drawerFields.map((field, index) => (
            <List key={index}>
              <DrawerField
                title={field.title}
                setting_icon={field.icon}
                down_arrow_icon={field.arrow}
                childItems={field.child}
              />
            </List>
          ))}
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            width: '100%',
          }}
        >
          <Toolbar />

          <Container
            sx={{ mt: 4, mb: 4, ml: 25, width: '100%', maxWidth: '1526px' }}
          >
            <Routers />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}
