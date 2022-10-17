import React, { useState } from 'react';
import {PlacementInput} from '../components/placement-input'
import {PlacementOutput} from '../components/placement-output'

const Controller = (props)=>{
  return (
    <div className="app_controller">
      <div className='panel'><PlacementInput setImgList={props.setImgList}/></div>
      <div className='panel'><PlacementOutput/></div>
      <div className='panel'><TransformController/></div>
    </div>
  );
}
export default Controller

const TransformController = ()=>{
  let style = {top:'',left:''}
  let transform = ''
  const [now, setNow] = React.useState(new Date())
  const [rotate,setRotate] = useState(0)
  const [scaleX,setScaleX] = useState(1)
  const [scaleY,setScaleY] = useState(1)
  const [top,setTop] = useState(0)
  const [left,setLeft] = useState(0)
  const select = document.getElementsByClassName('select')[0]
  if(select){
    style = select.style
    transform = select.style.transform
  }
  const circle = document.getElementsByClassName('circle')[0]

  React.useEffect(function() {
    const intervalId = setInterval(function() {
      setNow(new Date());
    }, 100);
    return function(){clearInterval(intervalId)};
  }, [now]);

  React.useEffect(()=>{
    if(style.top.includes('px')){
      const value = parseFloat(style.top.match(/-{0,1}[0-9.]+/g)[0])
      setTop(value|0)
    }else{
      setTop(0)
    }
  },[style.top])

  React.useEffect(()=>{
    if(style.left.includes('px')){
      const value = parseFloat(style.left.match(/-{0,1}[0-9.]+/g)[0])
      setLeft(value|0)
    }else{
      setLeft(0)
    }
  },[style.left])

  React.useEffect(()=>{
    if(transform.includes('rotate')){
      const rotate = transform.match(/rotate\(-{0,1}[0-9.]+deg\)/g)[0]
      const value = parseFloat(rotate.match(/-{0,1}[0-9.]+/g)[0])
      setRotate(value|0)
    }else{
      setRotate(0)
    }
    if(transform.includes('scaleX')){
      const scaleX = transform.match(/scaleX\(-{0,1}[0-9.]+\)/g)[0]
      const value = parseFloat(scaleX.match(/-{0,1}[0-9.]+/g)[0])
      setScaleX(value)
    }else{
      setScaleX(1)
    }
    if(transform.includes('scaleY')){
      const scaleY = transform.match(/scaleY\(-{0,1}[0-9.]+\)/g)[0]
      const value = parseFloat(scaleY.match(/-{0,1}[0-9.]+/g)[0])
      setScaleY(value)
    }else{
      setScaleY(1)
    }
  },[transform])

  const onChangeRotate = (e)=>{
    const value = +e.target.value;
    setRotate(value)
    select.style.transform = `rotate(${value}deg) scaleX(${scaleX})  scaleY(${scaleY})`
  }

  const onChangeScaleX = (e)=>{
    const value = +e.target.value;
    setScaleX(value)
    select.style.transform = `rotate(${rotate}deg) scaleX(${value})  scaleY(${scaleY})`
  }

  const onChangeScaleY = (e)=>{
    const value = +e.target.value;
    setScaleY(value)
    select.style.transform = `rotate(${rotate}deg) scaleX(${scaleX})  scaleY(${value})`
  }

  const onChangeTop = (e)=>{
    const value = +e.target.value;
    setTop(value)
    select.style.top = `${value}px`
    circle.style.top = `${value+(select.width/4)}px`
  }

  const onChangeLeft = (e)=>{
    const value = +e.target.value;
    setLeft(value)
    select.style.left = `${value}px`
    circle.style.left = `${value+(select.width/2)}px`
  }

  const onClick = ()=>{
    const select = document.getElementsByClassName('select')
    for(const e of select){
      e.classList.remove('select')
    }
    const circle = document.getElementsByClassName('circle')
    for(const e of circle){
      e.classList.remove('circle')
    }
  }

  return (<>{select === undefined ? null:
    <ul className="flex_list">
      <li className="flex_row">Image Item Control</li>
      <li className="flex_row">{`${select.title}`}</li>
      <li className="flex_row">
        <label htmlFor="top">{`top :`}</label>
        <input type="range" value={top|0}
          min={0} max={window.innerHeight} step={1} onChange={onChangeTop}
          className="app_input_range" id="top" />
        {`: ${top|0}px`}
      </li>
      <li className="flex_row">
        <label htmlFor="left">{`left :`}</label>
        <input type="range" value={left|0}
          min={0} max={window.innerWidth} step={1} onChange={onChangeLeft}
          className="app_input_range" id="left" />
        {`: ${left|0}px`}
      </li>
      <li className="flex_row">
        <label htmlFor="rotate">{`rotate :`}</label>
        <input type="range" value={rotate|0}
          min={-180} max={180} step={1} onChange={onChangeRotate}
          className="app_input_range" id="rotate" />
        {`: ${rotate|0} °`}
      </li>
      <li className="flex_row">
        <label htmlFor="scaleX">{`scaleX :`}</label>
        <input type="range" value={scaleX}
          min={0} max={2} step={1/select.width} onChange={onChangeScaleX}
          className="app_input_range" id="scaleX" />
        {`: ${Math.round(scaleX*select.width)}px`}
      </li>
      <li className="flex_row">
        <label htmlFor="scaleY">{`scaleY :`}</label>
        <input type="range" value={scaleY}
          min={0} max={2} step={1/select.height} onChange={onChangeScaleY}
          className="app_input_range" id="scaleY" />
        {`: ${Math.round(scaleY*select.height)}px`}
      </li>
      <li className="flex_row">
        <button onClick={onClick} className='app_button'>release</button>
      </li>
    </ul>
    }</>
  )
}