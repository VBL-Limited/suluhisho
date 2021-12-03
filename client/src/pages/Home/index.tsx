import { Header } from '../../components'
import {
  Grid,
  Paper,
  MenuItem,
  TextField,
  Box,
  Stack,
  Typography,
  Button,
  Tab,
  Tabs,
} from '@mui/material'
import Joblogo from '../../images/job1.png'
import Logo from '../../images/slide4.jpg'
import image2 from '../../images/slide1.jpg'
import colors from '../../theme/colors'
import { JobCategoryTypes } from '../../types'
import { JobCategory, Provinces } from '../../constants/stubData'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { RoundedCard } from '../../styles'
import React from 'react'
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}
const styles = {
  paperContainer: {
    backgroundImage: `url(${Logo})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    padding: '120px 20px 20px 80px',
  },
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
const Home = () => {
  const [categoryOptions, setCategoryOptions] = useState('Technologie')
  const [provinceOptions, setProvinceOptions] = useState('Kinshasa')
  const [value, setValue] = React.useState(0)

  const handleExportOptions = (event: any) => {
    setCategoryOptions(event.target.value)
  }
  const handleLocation = (event: any) => {
    setProvinceOptions(event.target.value)
  }
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <div style={{ paddingTop: 56 }}>
        <Header />

        <Paper style={styles.paperContainer}>
          <Grid container spacing={2}>
            <Grid container spacing={1}>
              <Grid item mt={2} xs={7}>
                <Typography
                  variant="h1"
                  style={{ color: 'white', fontWeight: 800 }}
                >
                  {`Recherchez parmi plus de 50 000 offres d'emploi.`}
                </Typography>
              </Grid>
              <Grid item />
            </Grid>
            <Grid container spacing={1} pb={15}>
              <Grid item mt={2} xs={6}>
                <Stack direction="row" spacing={2} sx={{ color: 'white' }}>
                  <TextField
                    InputLabelProps={{
                      style: {
                        color: colors.white,
                        fontSize: '20px',
                        border: 'white',
                      },
                    }}
                    style={{ color: colors.white }}
                    id="job-category"
                    select
                    label="Categories"
                    value={categoryOptions}
                    onChange={handleExportOptions}
                    sx={{ width: '100%', color: 'white' }}
                  >
                    {JobCategory.map(({ value, label }: JobCategoryTypes) => (
                      <MenuItem key={value} value={value}>
                        <Typography variant="body1">{label}</Typography>
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    InputLabelProps={{
                      style: {
                        color: colors.white,
                        fontSize: '20px',
                      },
                    }}
                    id="Province"
                    select
                    label="Province"
                    value={provinceOptions}
                    onChange={handleLocation}
                    sx={{ width: '100%' }}
                  >
                    {Provinces.map(({ value, label }: JobCategoryTypes) => (
                      <MenuItem key={value} value={value}>
                        <Typography variant="body1">{label}</Typography>
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
                <Grid item xs={12} mt={1}>
                  <Button
                    variant="contained"
                    startIcon={<SearchIcon fontSize="large" />}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '10px',
                      backgroundColor: colors.primary,
                    }}
                  >
                    <Typography variant="h5">Recherchez maintenant</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid item />
            </Grid>
          </Grid>
        </Paper>
        <Box mt={2} ml={1}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  justifyContent: 'center',
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  centered
                  TabIndicatorProps={{
                    style: {
                      background: colors.primary,
                      color: colors.primary,
                    },
                  }}
                >
                  <Tab label="Le plus récent" {...a11yProps(0)} />
                  <Tab label="Toutes les offres d'emploi" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <Paper
                      elevation={3}
                      sx={{ padding: 2, borderRadius: '10px' }}
                    >
                      <Grid container spacing={1}>
                        <Grid item container xs={6}>
                          <Typography variant="subtitle2">
                            A plein temps
                          </Typography>
                        </Grid>
                        <Grid item container justifyContent="flex-end" xs={6}>
                          <Typography
                            variant="subtitle2"
                            sx={{ color: colors.red }}
                          >
                            Exp 12/10/22
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <img
                            src={Joblogo}
                            alt=""
                            width="100%"
                            height="250px"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            style={{ color: colors.primary }}
                          >
                            Nous recherchons actuellement un chef de projet pour
                            un nouveau projet que nous avons lancé il y a
                            quelques semaines
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: colors.primary,
                              width: '100%',
                            }}
                            size="large"
                          >
                            APPLY NOW
                          </Button>
                        </Grid>
                      </Grid>
                      <Stack spacing={2} direction="row"></Stack>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper
                      elevation={3}
                      sx={{ padding: 2, borderRadius: '10px' }}
                    >
                      <Grid container spacing={1}>
                        <Grid item container xs={6}>
                          <Typography variant="subtitle2">
                            A plein temps
                          </Typography>
                        </Grid>
                        <Grid item container justifyContent="flex-end" xs={6}>
                          <Typography
                            variant="subtitle2"
                            sx={{ color: colors.green }}
                          >
                            Exp 12/10/22
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <img
                            src={Joblogo}
                            alt=""
                            width="100%"
                            height="250px"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            style={{ color: colors.primary }}
                          >
                            Nous recherchons actuellement un chef de projet pour
                            un nouveau projet que nous avons lancé il y a
                            quelques semaines
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: colors.primary,
                              width: '100%',
                            }}
                            size="large"
                          >
                            APPLY NOW
                          </Button>
                        </Grid>
                      </Grid>
                      <Stack spacing={2} direction="row"></Stack>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper
                      elevation={3}
                      sx={{ padding: 2, borderRadius: '10px' }}
                    >
                      <Grid container spacing={1}>
                        <Grid item container xs={6}>
                          <Typography variant="subtitle2">
                            A plein temps
                          </Typography>
                        </Grid>
                        <Grid item container justifyContent="flex-end" xs={6}>
                          <Typography variant="subtitle2">
                            Exp 12/10/22
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <img
                            src={Joblogo}
                            alt=""
                            width="100%"
                            height="250px"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            style={{ color: colors.primary }}
                          >
                            Nous recherchons actuellement un chef de projet pour
                            un nouveau projet que nous avons lancé il y a
                            quelques semaines
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: colors.primary,
                              width: '100%',
                            }}
                            size="large"
                          >
                            APPLY NOW
                          </Button>
                        </Grid>
                      </Grid>
                      <Stack spacing={2} direction="row"></Stack>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper
                      elevation={3}
                      sx={{ padding: 2, borderRadius: '10px' }}
                    >
                      <Grid container spacing={1}>
                        <Grid item container xs={6}>
                          <Typography variant="subtitle2">
                            A plein temps
                          </Typography>
                        </Grid>
                        <Grid item container justifyContent="flex-end" xs={6}>
                          <Typography variant="subtitle2">
                            Exp 12/10/22
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <img
                            src={Joblogo}
                            alt=""
                            height="250px"
                            width="100%"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            style={{ color: colors.primary }}
                          >
                            Nous recherchons actuellement un chef de projet pour
                            un nouveau projet que nous avons lancé il y a
                            quelques semaines
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: colors.primary,
                              width: '100%',
                            }}
                            size="large"
                          >
                            APPLY NOW
                          </Button>
                        </Grid>
                      </Grid>
                      <Stack spacing={2} direction="row"></Stack>
                    </Paper>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <Paper
                      elevation={3}
                      sx={{ padding: 2, borderRadius: '10px' }}
                    >
                      <Grid container spacing={1}>
                        <Grid item container xs={6}>
                          <Typography variant="subtitle2">
                            A plein temps
                          </Typography>
                        </Grid>
                        <Grid item container justifyContent="flex-end" xs={6}>
                          <Typography
                            variant="subtitle2"
                            sx={{ color: colors.red }}
                          >
                            Exp 12/10/22
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <img
                            src={Joblogo}
                            alt=""
                            width="100%"
                            height="250px"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            style={{ color: colors.primary }}
                          >
                            Nous recherchons actuellement un chef de projet pour
                            un nouveau projet que nous avons lancé il y a
                            quelques semaines
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: colors.primary,
                              width: '100%',
                            }}
                            size="large"
                          >
                            APPLY NOW
                          </Button>
                        </Grid>
                      </Grid>
                      <Stack spacing={2} direction="row"></Stack>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper
                      elevation={3}
                      sx={{ padding: 2, borderRadius: '10px' }}
                    >
                      <Grid container spacing={1}>
                        <Grid item container xs={6}>
                          <Typography variant="subtitle2">
                            A plein temps
                          </Typography>
                        </Grid>
                        <Grid item container justifyContent="flex-end" xs={6}>
                          <Typography
                            variant="subtitle2"
                            sx={{ color: colors.green }}
                          >
                            Exp 12/10/22
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <img
                            src={Joblogo}
                            alt=""
                            width="100%"
                            height="250px"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            style={{ color: colors.primary }}
                          >
                            Nous recherchons actuellement un chef de projet pour
                            un nouveau projet que nous avons lancé il y a
                            quelques semaines
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: colors.primary,
                              width: '100%',
                            }}
                            size="large"
                          >
                            APPLY NOW
                          </Button>
                        </Grid>
                      </Grid>
                      <Stack spacing={2} direction="row"></Stack>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper
                      elevation={3}
                      sx={{ padding: 2, borderRadius: '10px' }}
                    >
                      <Grid container spacing={1}>
                        <Grid item container xs={6}>
                          <Typography variant="subtitle2">
                            A plein temps
                          </Typography>
                        </Grid>
                        <Grid item container justifyContent="flex-end" xs={6}>
                          <Typography variant="subtitle2">
                            Exp 12/10/22
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <img
                            src={Joblogo}
                            alt=""
                            width="100%"
                            height="250px"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            style={{ color: colors.primary }}
                          >
                            Nous recherchons actuellement un chef de projet pour
                            un nouveau projet que nous avons lancé il y a
                            quelques semaines
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: colors.primary,
                              width: '100%',
                            }}
                            size="large"
                          >
                            APPLY NOW
                          </Button>
                        </Grid>
                      </Grid>
                      <Stack spacing={2} direction="row"></Stack>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper
                      elevation={3}
                      sx={{ padding: 2, borderRadius: '10px' }}
                    >
                      <Grid container spacing={1}>
                        <Grid item container xs={6}>
                          <Typography variant="subtitle2">
                            A plein temps
                          </Typography>
                        </Grid>
                        <Grid item container justifyContent="flex-end" xs={6}>
                          <Typography variant="subtitle2">
                            Exp 12/10/22
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <img
                            src={Joblogo}
                            alt=""
                            height="250px"
                            width="100%"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            style={{ color: colors.primary }}
                          >
                            Nous recherchons actuellement un chef de projet pour
                            un nouveau projet que nous avons lancé il y a
                            quelques semaines
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: colors.primary,
                              width: '100%',
                            }}
                            size="large"
                          >
                            APPLY NOW
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </TabPanel>
              <Grid container spacing={1} style={{ marginLeft: '12px' }}>
                <Grid item xs={8}>
                  <img
                    src={image2}
                    alt=""
                    width="auto"
                    height="500px"
                    style={{ borderRadius: '10px' }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Typography variant="h6">Pourquoi Suluhisho RH ?</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}
export default Home
