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
  const [rotateX,setRotateX] = useState(0)
  const [rotateY,setRotateY] = useState(0)
  const [scaleX,setScaleX] = useState(1)
  const [scaleY,setScaleY] = useState(1)
  const [top,setTop] = useState(0)
  const [left,setLeft] = useState(0)
  const [height,setHeight] = useState(1)
  const [width,setWidth] = useState(1)
  const [maxHeight,setMaxHeight] = useState(1)
  const [maxWidth,setMaxWidth] = useState(1)
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
    if(style.maxHeight && style.maxHeight.includes('px')){
      const value = parseFloat(style.maxHeight.match(/-{0,1}[0-9.]+/g)[0])
      setMaxHeight(value|0)
    }else{
      setMaxHeight(1)
    }
  },[style.maxHeight])

  React.useEffect(()=>{
    if(style.maxWidth && style.maxWidth.includes('px')){
      const value = parseFloat(style.maxWidth.match(/-{0,1}[0-9.]+/g)[0])
      setMaxWidth(value|0)
    }else{
      setMaxWidth(1)
    }
  },[style.maxWidth])

  React.useEffect(()=>{
    if(style.height && style.height.includes('px')){
      const value = parseFloat(style.height.match(/-{0,1}[0-9.]+/g)[0])
      setHeight(value|0)
    }else{
      setHeight(1)
    }
  },[style.height])

  React.useEffect(()=>{
    if(style.width && style.width.includes('px')){
      const value = parseFloat(style.width.match(/-{0,1}[0-9.]+/g)[0])
      setWidth(value|0)
    }else{
      setWidth(1)
    }
  },[style.width])

  React.useEffect(()=>{
    if(transform.includes('rotate')){
      const rotate = transform.match(/rotate\(-{0,1}[0-9.]+deg\)/g)[0]
      const value = parseFloat(rotate.match(/-{0,1}[0-9.]+/g)[0])
      setRotate(value|0)
    }else{
      setRotate(0)
    }
    if(transform.includes('rotateX')){
      const rotateX = transform.match(/rotateX\(-{0,1}[0-9.]+deg\)/g)[0]
      const value = parseFloat(rotateX.match(/-{0,1}[0-9.]+/g)[0])
      setRotateX(value|0)
    }else{
      setRotateX(0)
    }
    if(transform.includes('rotateY')){
      const rotateY = transform.match(/rotateY\(-{0,1}[0-9.]+deg\)/g)[0]
      const value = parseFloat(rotateY.match(/-{0,1}[0-9.]+/g)[0])
      setRotateY(value|0)
    }else{
      setRotateY(0)
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
    select.style.transform = `rotate(${value}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scaleX(${scaleX})  scaleY(${scaleY})`
  }

  const onChangeRotateX = (e)=>{
    const value = +e.target.value;
    setRotateX(value)
    select.style.transform = `rotate(${rotate}deg) rotateX(${value}deg) rotateY(${rotateY}deg) scaleX(${scaleX})  scaleY(${scaleY})`
  }

  const onChangeRotateY = (e)=>{
    const value = +e.target.value;
    setRotateY(value)
    select.style.transform = `rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${value}deg) scaleX(${scaleX})  scaleY(${scaleY})`
  }

  const onChangeWidth = (e)=>{
    const value = +e.target.value;
    setWidth(value)
    select.style.width = `${value}px`
    circle.style.left = `${(value/2)-5}px`
  }

  const onChangeHeight = (e)=>{
    const value = +e.target.value;
    setHeight(value)
    select.style.height = `${value}px`
    circle.style.top = `${(value/2)-5}px`
  }

  const onChangeScale = (e)=>{
    const value = +e.target.value;
    setScaleX(value)
    setScaleY(value)
    select.style.transform = `rotate(${rotate}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scaleX(${value})  scaleY(${value})`
  }

  const onChangeTop = (e)=>{
    const value = +e.target.value;
    setTop(value)
    select.style.top = `${value}px`
    circle.style.top = `${value+(select.style.height/2)-5}px`
  }

  const onChangeLeft = (e)=>{
    const value = +e.target.value;
    setLeft(value)
    select.style.left = `${value}px`
    circle.style.left = `${value+(select.style.width/2)-5}px`
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
        <label htmlFor="rotateX">{`rotateX :`}</label>
        <input type="range" value={rotateX|0}
          min={-180} max={180} step={1} onChange={onChangeRotateX}
          className="app_input_range" id="rotateX" />
        {`: ${rotateX|0} °`}
      </li>
      <li className="flex_row">
        <label htmlFor="rotateY">{`rotateY :`}</label>
        <input type="range" value={rotateY|0}
          min={-180} max={180} step={1} onChange={onChangeRotateY}
          className="app_input_range" id="rotateY" />
        {`: ${rotateY|0} °`}
      </li>
      <li className="flex_row">
        <label htmlFor="width">{`width :`}</label>
        <input type="range" value={width}
          min={1} max={maxWidth} step={1} onChange={onChangeWidth}
          className="app_input_range" id="width" />
        {`: ${width}px`}
      </li>
      <li className="flex_row">
        <label htmlFor="height">{`height :`}</label>
        <input type="range" value={height}
          min={1} max={maxHeight} step={1} onChange={onChangeHeight}
          className="app_input_range" id="height" />
        {`: ${height}px`}
      </li>
      <li className="flex_row">
        <label htmlFor="scale">{`scale :`}</label>
        <input type="range" value={scaleX}
          min={0} max={2} step={0.01} onChange={onChangeScale}
          className="app_input_range" id="scale" />
        {`: ${(scaleX*100)|0}%`}
      </li>
      <li className="flex_row">
        <button onClick={onClick} className='app_button'>release</button>
      </li>
    </ul>
    }</>
  )
}