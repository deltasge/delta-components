import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import indigo from '@material-ui/core/colors/indigo'
export default (theme) => ({
  root: {
    marginBottom: theme.spacing.unit
  },
  nome: {
    margin: `0 ${theme.spacing.unit}px`
  },
  iniciais: {
    color: '#fff',
    // backgroundColor: primaryColor[500],
    margin: `${theme.spacing.unit}px 0 ${theme.spacing.unit}px ${theme.spacing.unit}px`
  },
  imagem: {
    margin: `${theme.spacing.unit}px 0 ${theme.spacing.unit}px ${theme.spacing.unit}px`
  },
  subtitulo: {
    margin: `0 ${theme.spacing.unit}px`
  },
  blue: { backgroundColor: blue[500] },
  red: { backgroundColor: red[500] },
  pink: { backgroundColor: pink[500] },
  indigo: { backgroundColor: indigo[500] }
})
