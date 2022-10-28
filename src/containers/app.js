import React, { Component, useState } from 'react';
import Controller from '../components';

const defaultimglist = [
  {imgpath:'data/cameraA1_10_0000.png',style:{top:300,left:1360}},
  {imgpath:'data/cameraA2_10_0000.png',style:{top:300,left:1210}},
  {imgpath:'data/cameraA3_10_0000.png',style:{top:300,left: 1060}},
  {imgpath:'data/cameraA4_10_0000.png',style:{top:400,left:1360}},
  {imgpath:'data/cameraA5_10_0000.png',style:{top:400,left:1210}},
  {imgpath:'data/cameraA6_10_0000.png',style:{top:400,left:1060}},
  {imgpath:'data/cameraA7_10_0000.png',style:{top:500,left:1410}},
  {imgpath:'data/cameraA8_10_0000.png',style:{top:500,left:1310}},
  {imgpath:'data/cameraA9_10_0000.png',style:{top:500,left:1210}},
  {imgpath:'data/cameraA10_10_0000.png',style:{top:500,left:1110}},
  {imgpath:'data/cameraA11_10_0000.png',style:{top:500,left:1010}},
  {imgpath:'data/cameraB1_10_0000.png',style:{top:600,left:1360}},
  {imgpath:'data/cameraB2_10_0000.png',style:{top:600,left:1260}},
  {imgpath:'data/cameraB3_10_0000.png',style:{top:600,left:1160}},
  {imgpath:'data/cameraB4_10_0000.png',style:{top:600,left:1060}},
  {imgpath:'data/cameraB5_10_0000.png',style:{top:600,left:960}},
  {imgpath:'data/cameraB6_10_0000.png',style:{top:700,left:1360}},
  {imgpath:'data/cameraB7_10_0000.png',style:{top:700,left:1210}},
  {imgpath:'data/cameraB8_10_0000.png',style:{top:700,left:1060}},
  {imgpath:'data/cameraB9_10_0000.png',style:{top:800,left:1360}},
  {imgpath:'data/cameraB10_10_0000.png',style:{top:800,left:1210}},
  {imgpath:'data/cameraB11_10_0000.png',style:{top:800,left:1060}},
  {imgpath:'data/cameraC1_10_0000.png',style:{top:300,left:910}},
  {imgpath:'data/cameraC2_10_0000.png',style:{top:300,left:690}},
  {imgpath:'data/cameraC3_10_0000.png',style:{top:400,left:910}},
  {imgpath:'data/cameraC4_10_0000.png',style:{top:400,left:690}},
  {imgpath:'data/cameraC5_10_0000.png',style:{top:500,left:910}},
  {imgpath:'data/cameraC6_10_0000.png',style:{top:500,left:690}},
  {imgpath:'data/cameraC7_10_0000.png',style:{top:500,left:570}},
  {imgpath:'data/cameraC8_10_0000.png',style:{top:300,left:630}},
  {imgpath:'data/cameraD1_10_0000.png',style:{top:600,left:760}},
  {imgpath:'data/cameraD2_10_0000.png',style:{top:600,left:660}},
  {imgpath:'data/cameraD3_10_0000.png',style:{top:600,left:560}},
  {imgpath:'data/cameraD4_10_0000.png',style:{top:600,left:460}},
  {imgpath:'data/cameraD5_10_0000.png',style:{top:700,left:660}},
  {imgpath:'data/cameraD6_10_0000.png',style:{top:700,left:560}},
  {imgpath:'data/cameraD7_10_0000.png',style:{top:800,left:660}},
  {imgpath:'data/cameraD8_10_0000.png',style:{top:800,left:560}},
  {imgpath:'data/cameraE1_10_0000.png',style:{top:300,left:460}},
  {imgpath:'data/cameraE2_10_0000.png',style:{top:300,left:230}},
  {imgpath:'data/cameraE3_10_0000.png',style:{top:400,left:460}},
  {imgpath:'data/cameraE4_10_0000.png',style:{top:400,left:230}},
  {imgpath:'data/cameraE5_10_0000.png',style:{top:500,left:460}},
  {imgpath:'data/cameraE6_10_0000.png',style:{top:500,left:230}},
  {imgpath:'data/cameraE7_10_0000.png',style:{top:500,left:0}},
  {imgpath:'data/cameraE10_10_0000.png',style:{top:400,left:0}},
  {imgpath:'data/cameraF1_10_0000.png',style:{top:100,left:230}},
  {imgpath:'data/cameraF2_10_0000.png',style:{top:100,left:0}},
  {imgpath:'data/cameraF3_10_0000.png',style:{top:200,left:230}},
  {imgpath:'data/cameraF4_10_0000.png',style:{top:200,left:0}},
  {imgpath:'data/cameraF5_10_0000.png',style:{top:0,left:230}},
  {imgpath:'data/cameraG1_10_0000.png',style:{top:150,left:1370}},
  {imgpath:'data/cameraG2_10_0000.png',style:{top:150,left:1140}},
  {imgpath:'data/cameraG3_10_0000.png',style:{top:150,left:910}},
  {imgpath:'data/cameraG4_10_0000.png',style:{top:150,left:690}},
  {imgpath:'data/cameraG5_10_0000.png',style:{top:150,left:460}},
]

class App extends Component {
  constructor(){
    super()
    this.state = {
      imglist:defaultimglist
    }
  }

  setImgList(imglist){
    if(imglist === null){
      this.setState({imglist:defaultimglist})
    }else{
      this.setState({imglist})
    }
    const circleDiv = document.getElementsByClassName('circle')
    for(const e of circleDiv){
      e.classList.remove('circle')
    }
  }

  render() {
    return (
      <>
        <Controller setImgList={this.setImgList.bind(this)}/>
        <div className='perspectivebase'>
          <MovingImage imglist={this.state.imglist}/>
        </div>
      </>
    );
  }
}
export default App;

const MovingImage = (props)=>{
  return(<div className="imagecanvas" style={{transform:''}}>{props.imglist.map((titleimg,idx)=>{
    const top = (idx*0)%window.innerHeight
    const left = (idx*0)%window.innerWidth
    return(<MovingElement key={idx} imgsrc={titleimg.imgpath} title={`${idx+1} : ${titleimg.imgpath}`}
      imgStyle={{...props.imgStyle,...titleimg.imgStyle}}  
      style={{top:top,left:left,...props.style,...titleimg.style}}
      className="click-and-move"/>)
  })}</div>
  )
}
MovingImage.defaultProps = {
  imgStyle: {width:'230px',transform:'translate(-50%, -50%)'},
  style: {baseWidth:'230px',baseHeight:'129px',width:'230px',height:'129px'}
}

const MovingElement = (props)=>{
  const {className, imgsrc, imgStyle, style, title} = props
  let dragged = {target:undefined,x:0,y:0,degree:0,rotate:0,rotateX:0,rotateY:0,scaleX:1,scaleY:1}
  const frameRef = React.useRef(undefined)
  const imgRef = React.useRef(undefined)
  const circleRef = React.useRef(undefined)
  const baseeRef = React.useRef(undefined)

  const mouseup = event=>{
    event.preventDefault()
    const drag = document.getElementsByClassName('drag')[0]
    if(drag){
      drag.classList.remove('drag')
      dragged = {target:undefined,x:0,y:0,degree:0,rotate:0,rotateX:0,rotateY:0,scaleX:1,scaleY:1}
    }
    const rotate = document.getElementsByClassName('rotate')[0]
    if(rotate){
      rotate.classList.remove('rotate')
      dragged = {target:undefined,x:0,y:0,degree:0,rotate:0,rotateX:0,rotateY:0,scaleX:1,scaleY:1}
    }
  }

  React.useEffect(()=>{
    if(imgRef.current !== undefined){
      imgRef.current.ondragstart = ()=>false
      const perspectivebase = imgRef.current.closest('.perspectivebase')
      const base = baseeRef.current
      const circle = circleRef.current
      imgRef.current.addEventListener('mousedown',event=>{
        dragged.target = frameRef.current
        const width = parseFloat(dragged.target.style.width.match(/-{0,1}[0-9.]+/g)[0])|0
        const height = parseFloat(dragged.target.style.height.match(/-{0,1}[0-9.]+/g)[0])|0
        dragged.x = event.pageX - base.offsetLeft
        dragged.y = event.pageY - base.offsetTop
        dragged.degree = (Math.atan2(
          (event.pageY-100+perspectivebase.scrollTop)-(base.offsetTop+(base.clientHeight/2)),
          (event.pageX-100+perspectivebase.scrollLeft)-(base.offsetLeft+(base.clientWidth/2))) * 180 / Math.PI) + 180
        const transform = dragged.target.style.transform
        if(transform.includes('rotate')){
          const rotate = transform.match(/rotate\(-{0,1}[0-9.]+deg\)/g)[0]
          dragged.rotate = parseFloat(rotate.match(/-{0,1}[0-9.]+/g)[0])
        }else{
          dragged.rotate = 0
        }
        if(transform.includes('rotateX')){
          const rotateX = transform.match(/rotateX\(-{0,1}[0-9.]+deg\)/g)[0]
          dragged.rotateX = parseFloat(rotateX.match(/-{0,1}[0-9.]+/g)[0])
        }else{
          dragged.rotateX = 0
        }
        if(transform.includes('rotateY')){
          const rotateY = transform.match(/rotateY\(-{0,1}[0-9.]+deg\)/g)[0]
          dragged.rotateY = parseFloat(rotateY.match(/-{0,1}[0-9.]+/g)[0])
        }else{
          dragged.rotateY = 0
        }

        if(transform.includes('scaleX')){
          const scaleX = transform.match(/scaleX\(-{0,1}[0-9.]+\)/g)[0]
          dragged.scaleX = parseFloat(scaleX.match(/-{0,1}[0-9.]+/g)[0])
        }else{
          dragged.scaleX = 1
        }
        if(transform.includes('scaleY')){
          const scaleY = transform.match(/scaleY\(-{0,1}[0-9.]+\)/g)[0]
          dragged.scaleY = parseFloat(scaleY.match(/-{0,1}[0-9.]+/g)[0])
        }else{
          dragged.scaleY = 1
        }

        if(event.ctrlKey){
          dragged.target.classList.add('rotate')
        }else{
          dragged.target.classList.add('drag')
        }
        const select = document.getElementsByClassName('select')
        for(const e of select){
          e.classList.remove('select')
        }
        dragged.target.classList.add('select')
        const select_img = document.getElementsByClassName('select_img')
        for(const e of select_img){
          e.classList.remove('select_img')
        }
        imgRef.current.classList.add('select_img')
        const circleDiv = document.getElementsByClassName('circle')
        for(const e of circleDiv){
          e.classList.remove('circle')
        }
        circle.style.top = `${(height/2)-5}px`;
        circle.style.left = `${(width/2)-5}px`;
        circle.classList.add('circle')
      })
      imgRef.current.addEventListener('mousemove', event=>{
        event.preventDefault()
        if(dragged.target !== undefined){
          const drag = document.getElementsByClassName('drag')[0]
          if(drag){
            base.style.top = `${event.pageY - dragged.y}px`;
            base.style.left = `${event.pageX - dragged.x}px`;
          }
          const rotate = document.getElementsByClassName('rotate')[0]
          if(rotate){
            const degree = (Math.atan2(
              (event.pageY-100+perspectivebase.scrollTop)-(base.offsetTop+(base.clientHeight/2)),
              (event.pageX-100+perspectivebase.scrollLeft)-(base.offsetLeft+(base.clientWidth/2))) * 180 / Math.PI) + 180
            if(dragged.degree !== degree){
              const rotate = (dragged.rotate - (dragged.degree - degree)) % 360
              dragged.target.style.transform =
              `rotate(${rotate}deg) rotateX(${dragged.rotateX}deg) rotateY(${dragged.rotateY}deg) scaleX(${dragged.scaleX}) scaleY(${dragged.scaleY})`;
            }
          }
          if(drag && circle.className === 'circle'){
            const width = parseFloat(dragged.target.style.width.match(/-{0,1}[0-9.]+/g)[0])|0
            const height = parseFloat(dragged.target.style.height.match(/-{0,1}[0-9.]+/g)[0])|0
            circle.style.top = `${(height/2)-5}px`;
            circle.style.left = `${(width/2)-5}px`;
          }
        }
      })
      imgRef.current.addEventListener('mouseup', event=>mouseup(event))
      imgRef.current.addEventListener('mouseleave', event=>mouseup(event))
      imgRef.current.addEventListener('mouseout', event=>mouseup(event))
      imgRef.current.addEventListener('wheel', event=>{
        console.log(`wheelDelta:${event.wheelDelta}`)
      })
    }
  },[imgRef])

  const {top:baseTop, left:baseLeft, baseWidth, baseHeight, ...otherStyle} = style
  return(
    <div ref={baseeRef} className='base_data' style={{top:style.top,left:style.left,width:style.baseWidth,height:style.baseHeight}}>
      <div draggable={true} ref={frameRef} className="img_frame" style={{maxWidth:style.width,maxHeight:style.height,...otherStyle}} title={title}>
        <img draggable={false} ref={imgRef} className={className} src={imgsrc} style={imgStyle}/>
        <div ref={circleRef} style={{top:(style.height/2),left:(style.width/2)}}></div>
      </div>
    </div>
  )
}
MovingElement.defaultProps = {
  style: {}
}