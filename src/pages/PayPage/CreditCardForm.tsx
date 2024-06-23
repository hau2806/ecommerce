import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

import Grid from "@mui/material/Grid";
import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  ImageList,
  ImageListItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

function CreditCardForm1() {
  const [cardNumber, setCardNumber] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState("");
  const [securityCode, setSecurityCode] = React.useState("");
  const [cardNumberError, setCardNumberError] = React.useState("");
  const [expirationDateError, setExpirationDateError] = React.useState("");

  return (
    <Container
      maxWidth="sm"
      sx={{
        ddisplay: "grid",
        padding: "20px",
        boxSizing: "border-box",

        p: 2,
      }}
    >
      <form
        style={{
          display: "grid",
          //   placeItems: "center",
          // minHeight: "100vh",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h6">Playment</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            All transactions are secure and end crypted
          </Typography>
        </Grid>

        <Grid
          container
          spacing={2}
          component="form"
          noValidate
          autoComplete="off"
          style={{
            border: "1px solid",
            padding: "3px 3px",
            margin: "3px",
            placeItems: "center",
          }}
        >
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Card Credit"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <ImageList>
              <ImageListItem>
                <img srcSet="" src="" alt="111" />
              </ImageListItem>
              <ImageListItem>
                <img srcSet="" src="" alt="111" />
              </ImageListItem>
            </ImageList>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ borderTop: "1px solid" }}
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              label="Card number"
              value={cardNumber}
              fullWidth
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              error={cardNumberError ? true : false}
              helperText={cardNumberError}
              placeholder="12345667"
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{ placeContent: "center" }}
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              label="Expiration (MM/YY)"
              value={expirationDate}
              fullWidth
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              error={expirationDateError ? true : false}
              helperText={expirationDateError}
              placeholder="MM/YY"
            />
          </Grid>
          <Grid
            item
            xs={6}
            // style={{ borderBottom: "1px solid" }}
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              type="password"
              label="Security code"
              value={securityCode}
              fullWidth
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              maxWidth: "100%",

              margin: "3px",
              padding: "3px",
            }}
          >
            <FormControl>
              <Grid container xs={12}>
                <Grid
                  item
                  xs={12}
                  style={{
                    borderTop: "1px solid",
                    padding: "3px",
                  }}
                >
                  <RadioGroup name="radio-buttons-group">
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label={
                        <ImageListItem>
                          <img srcSet="" src="" alt="Image Paypal" />
                        </ImageListItem>
                      }
                    />
                  </RadioGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    borderTop: "1px solid",
                    padding: "3px",
                  }}
                >
                  <RadioGroup name="radio-buttons-group">
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label={
                        <ImageListItem style={{ marginRight: "16rem" }}>
                          <img srcSet="" src="" alt="Image Paypal" />
                        </ImageListItem>
                      }
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default CreditCardForm1;
