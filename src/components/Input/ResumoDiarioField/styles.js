const styles = theme => ({
  iconBase: {
    color: '#fff',
    borderRadius: 3
  },
  closeIcon: {
    width: '0.75em',
    height: '0.75em',
    color: '#fff',
    backgroundColor: '#d32d00'
  },
  checkedIcon: {
    color: '#05ad5b',
    backgroundColor: '#fff'
  },
  root: {
    width: '1em',
    height: '1em',
    fontSize: '20px'
  },
  checked: {},
  radioChecked: {
    root: {
      color: 'inherit',
      '&$checked': {
        color: '#05ad5b'
      }
    },
    checked: {}
  },
  buttonsTop: {
    marginTop: 5,
    marginRight: 15,
    marginBottom: 10
  }
})

export default styles
