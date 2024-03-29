import Grid from '@mui/material/Grid';

function MuiGrid() {
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} md={3}>
                    <p>Hey I Am</p>
                </Grid>
                <Grid item xs={6} md={3}>
                    <p>here to show you</p>
                </Grid>
                <Grid item xs={6} md={3}>
                    <p>something very interesting</p>
                </Grid>
                <Grid item xs={6} md={3}>
                    <p>that you never saw before</p>
                </Grid>
                <Grid item xs={6} md={3}>
                    <p>Hey I Am</p>
                </Grid>
                <Grid item xs={6} md={3}>
                    <p>here to show you</p>
                </Grid>
                <Grid item xs={6} md={3}>
                    <p>something very interesting</p>
                </Grid>
                <Grid item xs={6} md={3}>
                    <p>that you never saw before</p>
                </Grid>
            </Grid>
        </div>
    )
}
export default MuiGrid