import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import withWidth from '@material-ui/core/withWidth'

import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

import Rating from '../../Rating'
import styles from './styles'

/**
 * Componente utilizado no resumo diário<br />
 * Retorna um componente conforme os tipos pré-definidos: ALTERNATIVAS, LOGICO, TEXTO e AVALIACAO.
 */
const ResumoDiarioField = ({ width, readonly, tipo, texto, classes, ...otherProps }) => {
  const { fullwidth, ...props } = otherProps
  if (tipo === 'AVALIACAO') {
    return <Rating rating={parseInt(texto || '0')} readonly={readonly} {...props} />
  }
  if (tipo === 'TEXTO') {
    return (
      <TextField
        multiline
        type='text'
        variant='outlined'
        value={texto || ''}
        {...props}
        onChange={e => props.onChange(e.target.value)}
        InputProps={{
          readOnly: readonly
        }}
        fullWidth={fullwidth && (width === 'xs')}
        placeholder={props.name === 'todos' ? 'Digite para todos...' : ''}
        style={{
          overflow: 'visible',
          marginTop: 10,
          minWidth: width === 'xs' ? 0 : 400
        }}
      />
    )
  }
  if (tipo === 'LOGICO') {
    return (
      <FormControlLabel
        label={texto === 'true' ? 'Sim' : 'Não'}
        disabled={readonly}
        control={
          <Checkbox
            value={Boolean(texto).toString()}
            icon={<CloseRoundedIcon className={classNames(classes.iconBase, classes.closeIcon)} />}
            checkedIcon={<CheckBoxRoundedIcon className={classNames(classes.iconBase, classes.checkedIcon)} />}
            checked={texto === 'true'}
            disabled={readonly}
            inputProps={{ 'aria-label': 'Checkbox resumo diário' }}
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            {...props}
            onChange={(e, checked) => {
              e.target.value = checked
              props.onChange(e.target.value)
            }}
          />
        }
      />
    )
  }
  if (tipo === 'ALTERNATIVAS') {
    const values = ['Péssimo', 'Ruim', 'Normal', 'Bom', 'Ótimo']

    if (readonly) {
      return (<Typography>{texto}</Typography>)
    }

    if (props.name === 'todos') {
      return (
        <Grid container justify={width === 'xs' ? 'space-around' : 'flex-end'} spacing={8}>
          {
            values.map((v, k) => (
              <Grid
                item
                lg={1}
                key={k}
                component={Button}
                disabled={v === texto}
                size='small'
                onClick={(e) => props.onChange(v)}
                variant='outlined'
                color='primary'
                className={classes.buttonsTop}
              >
                {v}
              </Grid>
            ))
          }
        </Grid>
      )
    }

    return (
      <RadioGroup
        row={width !== 'xs'}
        value={texto}
        {...props}
        onChange={(e, value) => {
          e.target.value = value
          props.onChange(e.target.value)
        }}
      >
        {
          values.map((v, k) => (
            <FormControlLabel
              key={k}
              value={v}
              control={<Radio checked={texto === v} />}
              label={v}
            />
          ))
        }
      </RadioGroup>
    )
  }

  return (
    <Typography variant='caption'>Tipo da questão inválido</Typography>
  )
}

ResumoDiarioField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  name: PropTypes.string,
  id: PropTypes.string,
  tipo: PropTypes.oneOf(['AVALIACAO', 'TEXTO', 'LOGICO', 'ALTERNATIVAS']).isRequired,
  texto: PropTypes.any,
  readonly: PropTypes.bool,
  fullwidth: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
}

export default withStyles(styles)(withWidth()(ResumoDiarioField))
