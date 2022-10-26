import React, { useState } from 'react';
import {PlacementInput} from '../components/placement-input'
import {PlacementOutput} from '../components/placement-output'

const Controller = (props)=>{
  const [now, setNow] = React.useState(new Date())

  React.useEffect(function() {
    const intervalId = setInterval(function() {
      setNow(new Date());
    }, 100);
    return function(){clearInterval(intervalId)};
  }, [now]);

  return (
    <div className="app_controller">
      <div className='panel'><PlacementInput setImgList={props.setImgList}/></div>
      <div className='panel'><PlacementOutput/></div>
      <div className='panel'><BaseTransformController/></div>
      <div className='panel'><TransformController/></div>
    </div>
  );
}
export default Controller

const BaseTransformController = ()=>{
  let transform = ''
  const [rotateX,setRotateX] = useState(0)
  const [rotateY,setRotateY] = useState(0)
  const imagecanvas = document.getElementsByClassName('imagecanvas')[0]
  if(imagecanvas){
    transform = imagecanvas.style.transform
  }

  React.useEffect(()=>{
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
  },[transform])

  const onChangeRotateX = (e)=>{
    const value = +e.target.value;
    setRotateX(value)
    imagecanvas.style.transform = `rotateX(${value}deg) rotateY(${rotateY}deg)`
  }

  const onChangeRotateY = (e)=>{
    const value = +e.target.value;
    setRotateY(value)
    imagecanvas.style.transform = `rotateX(${rotateX}deg) rotateY(${value}deg)`
  }

  return (<>
    <ul className="flex_list">
      <li className="flex_row">Base Rotate Control</li>
      <li className="flex_row">
        <label htmlFor="rotateX">{`rotateX :`}</label>
        <input type="range" value={rotateX|0}
          min={0} max={90} step={1} onChange={onChangeRotateX}
          className="app_input_range" id="rotateX" />
        {`: ${rotateX|0} °`}
      </li>
      <li className="flex_row">
        <label htmlFor="rotateY">{`rotateY :`}</label>
        <input type="range" value={rotateY|0}
          min={-90} max={90} step={1} onChange={onChangeRotateY}
          className="app_input_range" id="rotateY" />
        {`: ${rotateY|0} °`}
      </li>
    </ul>
    </>
  )
}

const TransformController = ()=>{
  let style = {top:'',left:''}
  let transform = ''
  let base = undefined
  let baseStyle = {top:'',left:''}
  let transform_img = ''
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
  const [translateX,setTranslateX] = useState(0)
  const [translateY,setTranslateY] = useState(0)
  const select = document.getElementsByClassName('select')[0]
  if(select){
    style = select.style
    transform = select.style.transform
    base = select.closest('.base_data')
    baseStyle = base.style
  }
  const select_img = document.getElementsByClassName('select_img')[0]
  if(select_img){
    transform_img = select_img.style.transform
  }
  const circle = document.getElementsByClassName('circle')[0]

  React.useEffect(()=>{
    if(baseStyle.top.includes('px')){
      const value = parseFloat(baseStyle.top.match(/-{0,1}[0-9.]+/g)[0])
      setTop(value|0)
    }else{
      setTop(0)
    }
  },[baseStyle.top])

  React.useEffect(()=>{
    if(baseStyle.left.includes('px')){
      const value = parseFloat(baseStyle.left.match(/-{0,1}[0-9.]+/g)[0])
      setLeft(value|0)
    }else{
      setLeft(0)
    }
  },[baseStyle.left])

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

  React.useEffect(()=>{
    if(transform_img.includes('translate')){
      const translate = transform_img.match(/translate\(-{0,1}[0-9.]+%, -{0,1}[0-9.]+%\)/g)[0]
      const parameter = translate.match(/-{0,1}[0-9.]+/g)
      const valueX = parseFloat(parameter[0])
      const valueY = parseFloat(parameter[1])
      setTranslateX(valueX+50)
      setTranslateY(valueY+50)
    }else{
      setTranslateX(0)
      setTranslateY(0)
    }
  },[transform_img])

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

  const onChangeTranslateX = (e)=>{
    const value = +e.target.value;
    setTranslateX(value)
    select_img.style.transform = `translate(${value-50}%, ${translateY-50}%)`
  }

  const onChangeTranslateY = (e)=>{
    const value = +e.target.value;
    setTranslateY(value)
    select_img.style.transform = `translate(${translateX-50}%, ${value-50}%)`
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
    base.style.top = `${value}px`
    circle.style.top = `${value+(select.style.height/2)-5}px`
  }

  const onChangeLeft = (e)=>{
    const value = +e.target.value;
    setLeft(value)
    base.style.left = `${value}px`
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
        <label htmlFor="translateX">{`transX :`}</label>
        <input type="range" value={translateX}
          min={-50} max={50} step={0.2} onChange={onChangeTranslateX}
          className="app_input_range" id="translateX" />
        {`: ${translateX}%`}
      </li>
      <li className="flex_row">
        <label htmlFor="translateY">{`transY :`}</label>
        <input type="range" value={translateY}
          min={-50} max={50} step={0.2} onChange={onChangeTranslateY}
          className="app_input_range" id="translateY" />
        {`: ${translateY}%`}
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