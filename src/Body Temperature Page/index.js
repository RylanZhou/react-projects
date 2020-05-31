import React, { Component } from 'react'
import {
  TextField,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody
} from '@material-ui/core'

import './style.scss'

export default class BodyTemperature extends Component {
  state = {
    names: [],
    data: []
  }

  handleStep1Change = (e) => {
    this.setState({
      names: e.target.value.split(/\n+/).filter((each) => each)
    })
  }

  handleStep2Change = (e) => {
    const messageList = e.target.value
      .split(/\n+/)
      .filter((each) => each)
      .map((each) => {
        const trimmed = each.replace(/[\s｜，]/g, '')
        const name = /\d/.exec(trimmed)
        const date = /\d+[月|-|\.]\d+日*/.exec(trimmed)
        const period = /(上午)|(下午)/.exec(trimmed)
        const temperature = /体温\d+(\.*\d+)?[(°C)|(゜C)|C|℃]?/.exec(trimmed)

        return {
          name: name ? trimmed.substring(0, name.index).trim() : '',
          date: date ? date[0] : '',
          period: period ? period[0] : '',
          temperature: temperature ? /\d+(\.*\d+)?/.exec(temperature[0])[0] : ''
        }
      })

    this.setState({
      data: messageList
    })
  }

  createDateTableCell = (name) => {
    let info = null

    for (const each of this.state.data) {
      if (each.name === name) {
        info = each
      }
    }

    return (
      <React.Fragment>
        <TableCell className="non-select">{name}</TableCell>
        <TableCell className="non-select">
          {(info && info.date) || '?'}
        </TableCell>
      </React.Fragment>
    )
  }

  createTableCell = (name) => {
    let infoMorning = null
    let infoAfternoon = null

    for (const each of this.state.data) {
      if (each.name === name) {
        if (each.period === '上午') {
          infoMorning = each
        } else if (each.period === '下午') {
          infoAfternoon = each
        }
      }
    }

    return (
      <React.Fragment>
        <TableCell className="sim-sun">
          {(infoMorning && `${infoMorning.temperature}℃`) || '?'}
        </TableCell>
        <TableCell className="sim-sun">
          {(infoAfternoon && `${infoAfternoon.temperature}℃`) || '?'}
        </TableCell>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="page-container">
        <TextField
          className="step-1"
          label="第一步"
          placeholder="需要填写体温的人名"
          multiline
          rows="20"
          variant="outlined"
          onChange={this.handleStep1Change}
        />
        <TextField
          className="step-2"
          label="第二步"
          placeholder="从微信复制的消息"
          multiline
          rows="20"
          variant="outlined"
          onChange={this.handleStep2Change}
        />
        <Table className="table" size="small">
          <TableHead className="table-header">
            <TableRow>
              <TableCell>姓名</TableCell>
              <TableCell>日期</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.names.map((name) => (
              <TableRow key={name}>{this.createDateTableCell(name)}</TableRow>
            ))}
          </TableBody>
        </Table>
        <Table className="table" size="small">
          <TableHead className="table-header">
            <TableRow>
              <TableCell>上午</TableCell>
              <TableCell>下午</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.names.map((name) => (
              <TableRow key={name}>{this.createTableCell(name)}</TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}
