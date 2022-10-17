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
        <MovingImage imglist={this.state.imglist} style={{width:230}}/>
      </>
    );
  }
}
export default App;

const MovingImage = (props)=>{
  return(<div className="imagecanvas">{props.imglist.map((titleimg,idx)=>{
    const top = (idx*0)%window.innerHeight
    const left = (idx*0)%window.innerWidth
    return(<MovingElement key={idx} imgsrc={titleimg.imgpath} title={`${idx+1} : ${titleimg.imgpath}`}
      style={{top:top,left:left,...titleimg.style,...props.style}}
      className={props.className}/>)
  })}</div>
  )
}
MovingImage.defaultProps = {
  className: "click-and-move",
  style: {}
}

const MovingElement = (props)=>{
  const {className, imgsrc, style, title} = props
  let dragged = {target:undefined,x:0,y:0,degree:0,rotate:0,scaleX:1,scaleY:1}
  const imgRef = React.useRef(undefined)
  const divRef = React.useRef(undefined)

  const mouseup = event=>{
    event.preventDefault()
    const drag = document.getElementsByClassName('drag')[0]
    if(drag){
      drag.classList.remove('drag')
      dragged = {target:undefined,x:0,y:0,degree:0,rotate:0,scaleX:1,scaleY:1}
    }
    const rotate = document.getElementsByClassName('rotate')[0]
    if(rotate){
      rotate.classList.remove('rotate')
      dragged = {target:undefined,x:0,y:0,degree:0,rotate:0,scaleX:1,scaleY:1}
    }
  }

  React.useEffect(()=>{
    if(imgRef.current !== undefined){
      imgRef.current.ondragstart = ()=>false
      const parent = imgRef.current.parentNode
      const circle = parent.lastElementChild
      imgRef.current.addEventListener('mousedown',event=>{
        const targetclassName = event.target.className
        if(targetclassName.includes(className)){
          dragged.target = event.target
        }else{
          dragged.target = event.target.closest(`.${className}`)
        }
        dragged.x = event.pageX - dragged.target.offsetLeft
        dragged.y = event.pageY - dragged.target.offsetTop
        dragged.degree = (Math.atan2(event.pageY-(dragged.target.offsetTop+(dragged.target.clientHeight/2)),
        event.pageX-(dragged.target.offsetLeft+(dragged.target.clientWidth/2))) * 180 / Math.PI) + 180
        const transform = dragged.target.style.transform
        if(transform.includes('rotate')){
          const rotate = transform.match(/rotate\(-{0,1}[0-9.]+deg\)/g)[0]
          dragged.rotate = parseFloat(rotate.match(/-{0,1}[0-9.]+/g)[0])
        }else{
          dragged.rotate = 0
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
        const circleDiv = document.getElementsByClassName('circle')
        for(const e of circleDiv){
          e.classList.remove('circle')
        }
        circle.style.top = `${event.pageY - dragged.y + (style.width/4)}px`;
        circle.style.left = `${event.pageX - dragged.x + (style.width/2)}px`;
        circle.classList.add('circle')
      })
      imgRef.current.addEventListener('mousemove', event=>{
        event.preventDefault()
        if(dragged.target !== undefined){
          const drag = document.getElementsByClassName('drag')[0]
          if(drag){
            dragged.target.style.top = `${event.pageY - dragged.y}px`;
            dragged.target.style.left = `${event.pageX - dragged.x}px`;
          }
          const rotate = document.getElementsByClassName('rotate')[0]
          if(rotate){
            const degree = (Math.atan2(event.pageY-(dragged.target.offsetTop+(dragged.target.clientHeight/2)),
            event.pageX-(dragged.target.offsetLeft+(dragged.target.clientWidth/2))) * 180 / Math.PI) + 180
            if(dragged.degree !== degree){
              const rotate = (dragged.rotate - (dragged.degree - degree)) % 360
              dragged.target.style.transform = `rotate(${rotate}deg) scaleX(${dragged.scaleX})  scaleY(${dragged.scaleY})`;
            }
          }
          if(drag && circle.className === 'circle'){
            circle.style.top = `${event.pageY - dragged.y + (style.width/4)}px`;
            circle.style.left = `${event.pageX - dragged.x + (style.width/2)}px`;
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

  return(
    <div>
      <img draggable={false} ref={imgRef} className={className} src={imgsrc} style={style} title={title} imgsrc={imgsrc}/>
      <div ref={divRef} style={{top:(style.top+(style.width/4)),left:(style.left+(style.width/2))}}></div>
    </div>
  )
}
MovingElement.defaultProps = {
  className: "click-and-move",
  style: {}
}