import {
  Box,
  Menu,
  AppBar,
  Divider,
  Popover,
  Toolbar,
  MenuItem,
  IconButton,
  Typography,
  Badge,
  Stack,
} from '@mui/material'
import { colors } from '../../theme'
import { RoundedCard } from '../../styles'
// import { useHistory } from 'react-router-dom'
import {
  MoreVert,
  Settings,
  Notifications,
  AccountCircle,
} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState, useRef } from 'react'
import { LoadingWrapper } from '../../components'

type HeaderProps = {
  pageName: string
  isLoading?: boolean
  handlePageChange?: any
  handleDrawerToggle?: any
}

const Header = ({
  pageName,
  handlePageChange,
  handleDrawerToggle,
  isLoading,
}: HeaderProps) => {
  // const navigate = useHistory()
  const showDivider = pageName !== 'Billing' ? true : false
  const menuId = 'account-popup-menu'
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const ref = useRef(null)
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const notificationsLabel = (alertLength: any) => {
    if (alertLength === 0) {
      return 'no notifications'
    }
    if (alertLength > 999) {
      return 'more than 999 notifications'
    }
    return `${alertLength} notifications`
  }

  const [
    notificationAnchorEl,
    setNotificationAnchorEl,
  ] = useState<HTMLButtonElement | null>(null)
  const handleNotificationClick = () => {
    setNotificationAnchorEl(ref.current)
  }
  const handleNotificationClose = () => {
    setNotificationAnchorEl(null)
  }
  const open = Boolean(notificationAnchorEl)
  const notificationAnchorElId = open ? 'simple-popover' : undefined

  const handleSettingsClick = () => {
    handleMenuClose()
    handlePageChange('Settings')
    // navigate.push('/settings')
  }

  const renderMenu = (
    <Menu
      id={menuId}
      keepMounted
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Notifications</MenuItem>
    </Menu>
  )

  return (
    <Box>
      <Popover
        open={open}
        id={notificationAnchorElId}
        anchorEl={notificationAnchorEl}
        onClose={handleNotificationClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: {
            background: 'transparent',
          },
        }}
      >
        <RoundedCard>
          <Typography variant="h6" sx={{ mb: '14px' }}>
            Alerts
          </Typography>
        </RoundedCard>
      </Popover>
      <AppBar
        elevation={0}
        position="relative"
        color="transparent"
        sx={{ backgroundColor: '#4F46E5' }}
      >
        <Toolbar sx={{ padding: '33px 0px 12px 0px !important' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleDrawerToggle()}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <LoadingWrapper height={30} width={82} isLoading={isLoading}>
            <Typography variant="h5">{pageName}</Typography>
          </LoadingWrapper>

          <Box sx={{ flexGrow: 1 }} />

          <LoadingWrapper height={30} width={120} isLoading={isLoading}>
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              <IconButton
                size="small"
                color="inherit"
                onClick={handleSettingsClick}
              >
                <Settings />
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                onClick={handleNotificationClick}
                aria-label={notificationsLabel(232)}
              >
                <Badge
                  badgeContent="23"
                  sx={{
                    '& .MuiBadge-badge': {
                      color: colors.white,
                      backgroundColor: colors.vulcan,
                      paddingLeft: '3px',
                      paddingRight: '3px',
                    },
                  }}
                >
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton size="small" color="inherit">
                <AccountCircle />
              </IconButton>
            </Stack>
          </LoadingWrapper>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              color="inherit"
              aria-controls={menuId}
              onClick={handleMobileMenuOpen}
            >
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
        {showDivider && <Divider ref={ref} sx={{ m: '0px' }} />}
      </AppBar>
      {renderMenu}
    </Box>
  )
}

export default Header
