import React, { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
  IconButton,
  Popover
} from '@material-ui/core'
import { FaQuestionCircle } from 'react-icons/fa'

const calculate = (m, n) => {
  if (m === 0) {
    return 0
  }
  if (m === 1) {
    return n
  }
  return n * calculate(m - 1, n - 1)
}

export default function Arrangement() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [m, setM] = useState('')
  const [n, setN] = useState('')
  const [result, setResult] = useState('')

  useEffect(() => {
    if (m >= 0 && n > 0) {
      setResult(calculate(m, n))
    } else {
      setResult('')
    }
  }, [m, n])

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'm') {
      setM(+value)
    } else if (name === 'n') {
      setN(+value)
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <Card className="card">
        <CardHeader
          title="排列  Arrangement"
          subheader="从n个中先选出m个，然后进行排列，有多少种排法"
          action={
            <IconButton onClick={handleClick}>
              <FaQuestionCircle />
            </IconButton>
          }
        />

        <CardContent>
          <div className="calc">
            <span className="math">A</span>
            <div className="inputs">
              <TextField
                name="m"
                className="input"
                label="抓取个数m"
                type="number"
                variant="outlined"
                size="small"
                onChange={handleChange}
              />
              <TextField
                name="n"
                className="input"
                label="总数n"
                type="number"
                variant="outlined"
                size="small"
                onChange={handleChange}
              />
            </div>
            <span className="math">=</span>
            <Typography className="result" variant={result ? 'h2' : 'h4'}>
              {result || '等待输入'}
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Popover
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <div className="popover-container">
          <Typography className="text">计算公式:</Typography>
          <img
            src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1488885628,2099751177&fm=58"
            alt="排列计算公式"
          />
        </div>
      </Popover>
    </React.Fragment>
  )
}
