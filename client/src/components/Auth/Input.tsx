import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

type InputParamsType = {
    half?: boolean
    name: string
    label: string
    type?: string
    autoFocus?: boolean
    handleChange: (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => void
    handleShowPassword?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => void
}

const Input: React.FC<InputParamsType> = ({
    half = false,
    name,
    label,
    type,
    autoFocus = false,
    handleChange,
    handleShowPassword,
}) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={
                    name === 'password'
                        ? {
                              endAdornment: (
                                  <InputAdornment position="end">
                                      <IconButton onClick={handleShowPassword}>
                                          {type === 'password' ? (
                                              <Visibility />
                                          ) : (
                                              <VisibilityOff />
                                          )}
                                      </IconButton>
                                  </InputAdornment>
                              ),
                          }
                        : undefined
                }
            />
        </Grid>
    )
}

export default Input
